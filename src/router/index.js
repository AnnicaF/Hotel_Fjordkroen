import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/dinner",
      name: "dinner",
      component: () => import("../views/DinnerMenu.vue"),
    },
    {
      path: "/stay",
      name: "stay",
      component: () => import("../views/Stay.vue"),
    },
  ],
});

export default router;
