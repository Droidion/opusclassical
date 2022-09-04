use crate::repositories::database::Database;
use actix_web::http::header::ContentType;
use actix_web::{get, web, HttpResponse};
use crate::domain::label::Label;
use serde::{Serialize, Deserialize};
use tera::Context;

#[derive(Serialize)]
struct LabelsTemplate {
    name: String,
    labels: Vec<Label>
}

#[get("/hello/{name}")]
pub async fn greet(name: web::Path<String>, database: web::Data<Database>, tmpl: web::Data<tera::Tera>,) -> HttpResponse {
    let labels = database.get_labels().await;

    let data = LabelsTemplate {
        name: name.into_inner(),
        labels,
    };

    let context = Context::from_serialize(&data).unwrap();
    let res = tmpl.render("labels.html", &context).unwrap();

    HttpResponse::Ok()
        .content_type(ContentType::html())
        .body(res)
}
