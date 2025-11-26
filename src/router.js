import dashboardRoutes from "@/modules/homepage/router";

const router = createRouter({
  history: createWebHistory(),
  routes: [...dashboardRoutes],
});
