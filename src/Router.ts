import { createRouter, createWebHistory } from "vue-router";
import NotFound from "./pages/NotFound";
import AuthenticationProvider from "./providers/AuthenticationProvider";
import AppLayout from "./layouts/AppLayout";
import DomainDetailProvider from "./providers/DomainDetailProvider";
import Domains from "./pages/Domains";
import DomainDetails from "./pages/Domains/DomainDetails";

const routes = [
  {
    path: "/",
    component: AuthenticationProvider,
    children: [
      {
        path: "",
        component: AppLayout,
        redirect: "/domains",
        children: [
          {
            path: "domains",
            component: Domains,
          },
          {
            path: "domains/:domainId",
            component: DomainDetailProvider,
            children: [
              {
                path: "details",
                component: DomainDetails,
              },
            ],
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
