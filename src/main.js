import { createApp } from "vue";
import { registerSW } from "virtual:pwa-register";
import { createApplicationServices } from "./services/applicationServices.js";
import { loadBuiltInRuleSets } from "./services/ruleLoader.js";
import App from "./App.vue";
import router from "./router";
import "./styles/index.css";

async function bootstrap() {
  const [services, builtInRuleSets] = await Promise.all([createApplicationServices(), loadBuiltInRuleSets()]);
  createApp(App).provide("services", services).provide("builtInRuleSets", builtInRuleSets).use(router).mount("#app");
  registerSW({ immediate: true });
}

bootstrap().catch((error) => { document.querySelector("#app").innerHTML = `<main class="fatal-error"><h1>Não foi possível abrir o aplicativo</h1><p>${error.message}</p></main>`; });
