import DomainDetail from "./pages/DomainDetail";
import { createRouter, createWebHistory } from "vue-router";
import NotFound from "./pages/NotFound";
import AuthenticationProvider from "./providers/AuthenticationProvider.vue";
import AppLayout from "./layouts/AppLayout";

const routes = [
  {
    path: "/",
    component: AuthenticationProvider,
    redirect: "/domain-detail",
    children: [
      {
        path: "",
        component: AppLayout,
        redirect: "/domain-detail",
        children: [
          {
            path: "domain-detail",
            component: DomainDetail,
          },
          {
            path: "/:pathMatch(.*)*",
            component: NotFound,
          },
        ],
      },
    ],
  },
  {
    path: "/:pathMatch(.*)*",
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
