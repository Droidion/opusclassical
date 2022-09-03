use crate::domain::label::Label;
use maud::html;

pub fn labels_template(name: String, labels: Vec<Label>) -> String {
    let markup = html! {
        p {
            "Hello, "
            (name)
        }
        @for label in labels {
            ul {
                li {
                    span { (label.id) }
                    span { (label.name) }
                }
            }

        }
    };

    markup.into_string()
}
