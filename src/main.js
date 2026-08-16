import { createApplicationServices } from "./services/applicationServices.js";
import { loadBuiltInRuleSets } from "./services/ruleLoader.js";
import { startApp } from "./ui/app.js";
import "./ui/styles/index.css";

async function main() {
  const [services, builtInRuleSets] = await Promise.all([
    createApplicationServices(),
    loadBuiltInRuleSets()
  ]);

  startApp(document.querySelector("#app"), { services, builtInRuleSets });

  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("/service-worker.js").catch(() => {});
  }
}

main().catch((error) => {
  document.querySelector("#app").innerHTML = `<main class="fatal-error"><h1>Não foi possível abrir o aplicativo</h1><p>${error.message}</p></main>`;
});
