import { createRouter, createWebHistory } from "vue-router";

import AccountPage from "../pages/AccountPage.vue";
import ElementPage from "../pages/ElementPage.vue";
import EnvironmentPage from "../pages/EnvironmentPage.vue";
import EvaluationPage from "../pages/EvaluationPage.vue";
import ProjectPage from "../pages/ProjectPage.vue";
import ProjectStatusPage from "../pages/ProjectStatusPage.vue";
import ProjectsPage from "../pages/ProjectsPage.vue";
import RulesDocumentationPage from "../pages/RulesDocumentationPage.vue";
import RulesGroupPage from "../pages/RulesGroupPage.vue";
import RulesLibraryPage from "../pages/RulesLibraryPage.vue";

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
    path: "/projects/:projectId/status",
    name: "project-status",
    component: ProjectStatusPage,
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
    component: RulesLibraryPage,
  },
  {
    path: "/rules/documentation",
    name: "rules-documentation",
    component: RulesDocumentationPage,
  },
  {
    path: "/rules/:source/:groupId",
    name: "rules-group",
    component: RulesGroupPage,
    props: true,
  },

  // Conta e sincronização
  {
    path: "/account",
    name: "account",
    component: AccountPage,
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
