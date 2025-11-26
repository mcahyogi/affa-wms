export default [
  {
    path: "/dashboard",
    component: () => import("./layout/DashboardLayout.vue"),
    children: [
    //   {
    //     path: "",
    //     component: () => import("./pages/DashboardHome.vue"),
    //   },
    //   {
    //     path: "setting",
    //     component: () => import("./pages/DashboardSetting.vue"),
    //   },
    ],
  },
];
