import TopBar from "./layouts/TopBar";
import DomainDetail from "./pages/DomainDetail";
import { createRouter, createWebHistory } from "vue-router";
import NotFound from "./pages/NotFound";

const routes = [
  {
    path: "/",
    component: TopBar,
    redirect: "/domain-detail",
    children: [
      {
        path: "domain-detail",
        component: DomainDetail,
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
