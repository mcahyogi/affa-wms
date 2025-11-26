import { createRouter, createWebHistory } from "vue-router";
import Login from "./pages/login.vue"

let routes = [
  {
    path: "/login",
    component: Login,
    name: "Login",
    meta: {
      breadcrumb: [{ title: "Login", disabled: false, href: "" }],
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
