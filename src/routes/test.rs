use crate::domain::label::Label;
use crate::repositories::database::Database;
use actix_web::http::header::ContentType;
use actix_web::{get, error, web, HttpResponse, Error};
use serde::Serialize;
use tera::Context;

#[derive(Serialize)]
struct LabelsTemplate {
    name: String,
    labels: Vec<Label>,
}

#[get("/hello/{name}")]
pub async fn greet(
    name: web::Path<String>,
    database: web::Data<Database>,
    tmpl: web::Data<tera::Tera>,
) -> Result<HttpResponse, Error> {
    let labels = database.get_labels().await.map_err(handle_error)?;
    let data = LabelsTemplate {
        name: name.into_inner(),
        labels,
    };
    let html = render_html(&tmpl, "labels.html", &data).map_err(handle_error)?;
    Ok(HttpResponse::Ok()
        .content_type(ContentType::html())
        .body(html))
}

fn handle_error(err: anyhow::Error) -> Error {
    error::ErrorInternalServerError(err)
}

fn render_html<T: Serialize>(tmpl: &web::Data<tera::Tera>, name: &str, data: &T) -> anyhow::Result<String> {
    let context = Context::from_serialize(data)?;
    let html = tmpl.render(name, &context)?;
    Ok(html)
}