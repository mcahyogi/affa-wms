import { createRouter, createWebHistory } from "vue-router";
import Dashboard from "./pages/dashboard.vue"

let routes = [
  {
    path: "/dashboard",
    component: Dashboard,
    name: "Dashboard",
    meta: {
      breadcrumb: [{ title: "Dashboard", disabled: false, href: "" }],
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
