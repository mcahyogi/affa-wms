import { createRouter, createWebHistory } from "vue-router";
import Main from "./pages/main.vue"

let routes = [
  {
    path: "/my-task",
    component: Main,
    name: "My Task",
    meta: {
      breadcrumb: [{ title: "My Task", disabled: false, href: "" }],
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
