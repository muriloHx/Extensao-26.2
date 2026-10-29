import { createRouter, createWebHistory } from "vue-router";

import ElementPage from "../pages/ElementPage.vue";
import EnvironmentPage from "../pages/EnvironmentPage.vue";
import EvaluationPage from "../pages/EvaluationPage.vue";
import ProjectPage from "../pages/ProjectPage.vue";
import ProjectsPage from "../pages/ProjectsPage.vue";
import RulesPage from "../pages/RulesPage.vue";

const routes = [
  // Redirecionamento Inicial
  {
    path: "/",
    redirect: "/projects",
  },

  // Projetos
  {
    path: "/projects",
    name: "projects",
    component: ProjectsPage,
  },
  {
    path: "/projects/:projectId",
    name: "project-detail",
    component: ProjectPage,
    props: true,
  },
  {
    path: "/projects/:projectId/environments/:environmentId",
    name: "project-environment",
    component: EnvironmentPage,
    props: true,
  },

  // Elementos
  {
    path: "/elements/new",
    name: "element-new",
    component: ElementPage,
    meta: {hideBottomNav: true}
  },
  {
    path: "/elements/:elementId",
    name: "element-detail",
    component: ElementPage,
    props: true,
  },
  {
    path: "/elements/:elementId/evaluation",
    name: "element-evaluation",
    component: EvaluationPage,
    props: true,
  },

  // Avaliação Rápida
  {
    path: "/quick-evaluation",
    name: "quick-evaluation",
    component: ElementPage,
    props: { quick: true },
  },
  {
    path: "/quick-evaluation/result",
    name: "quick-evaluation-result",
    component: EvaluationPage,
    props: { quick: true },
  },

  // Regras
  {
    path: "/rules",
    name: "rules",
    component: RulesPage,
  },
  {
    path: "/rules/documentation",
    name: "rules-documentation",
    component: RulesPage,
    props: { documentation: true },
  },
  {
    path: "/rules/:source/:groupId",
    name: "rules-group",
    component: RulesPage,
    props: true,
  },

  // Fallback (Página não encontrada)
  {
    path: "/:pathMatch(.*)*",
    redirect: "/projects",
  },
];

export default createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});
