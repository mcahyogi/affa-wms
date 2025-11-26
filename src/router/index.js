import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

import Dashboard from "@/modules/homepage/layout/DashboardLayout.vue";

import LoginPage from "@/modules/login/pages/login.vue";
import MyTask from "@/modules/my-task/router";
import DashboardRouter from "@/modules/dashboard/router"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    
    {
      path: "/login",
      name: "Login",
      component: LoginPage,
    },
    {
      path: "/",
      name: "home",
      component: Dashboard,
      children: [
        ...MyTask.getRoutes(),
        ...DashboardRouter.getRoutes(),
      ],
    },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue'),
    // },
  ],
});

export default router;
