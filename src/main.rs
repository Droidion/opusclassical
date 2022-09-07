mod configuration;
mod domain;
mod handlers;
mod helpers;
mod repositories;
mod startup;

use crate::configuration::get_configuration;
use crate::startup::Application;

#[tokio::main]
async fn main() -> anyhow::Result<()> {
    // Output info level logs
    env_logger::init_from_env(env_logger::Env::new().default_filter_or("warning"));
    let configuration = get_configuration().expect("Failed to read configuration.");
    let application = Application::build(configuration.clone()).await?;
    application.run_until_stopped().await?;
    Ok(())
}
