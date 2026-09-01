import { createRouter, createWebHistory } from "vue-router";
import ProjectsPage from "../pages/ProjectsPage.vue";
import ProjectPage from "../pages/ProjectPage.vue";
import EnvironmentPage from "../pages/EnvironmentPage.vue";
import ElementPage from "../pages/ElementPage.vue";
import EvaluationPage from "../pages/EvaluationPage.vue";
import RulesPage from "../pages/RulesPage.vue";
export default createRouter({ history: createWebHistory(), routes: [
  { path: "/", redirect: "/projects" }, { path: "/projects", component: ProjectsPage }, { path: "/projects/:projectId", component: ProjectPage, props: true }, { path: "/projects/:projectId/environments/:environmentId", component: EnvironmentPage, props: true }, { path: "/elements/new", component: ElementPage }, { path: "/elements/:elementId", component: ElementPage, props: true }, { path: "/elements/:elementId/evaluation", component: EvaluationPage, props: true }, { path: "/rules", component: RulesPage }, { path: "/rules/documentation", component: RulesPage, props: { documentation: true } }, { path: "/rules/:source/:groupId", component: RulesPage, props: true }, { path: "/:pathMatch(.*)*", redirect: "/projects" }
] });
