import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/login",
      name: "login",
      component: () => import("@/views/Login.vue"),
    },
    {
      path: "/register",
      name: "register",
      component: () => import("@/views/Register.vue"),
    },
    {
      path: "/profile",
      name: "profile",
      component: () => import("@/views/Profile.vue"),
    },
    {
      path: "/settings",
      name: "settings",
      component: () => import("@/views/Settings.vue"),
    },
    {
      path: "/article",
      name: "article",
      component: () => import("@/views/Article.vue"),
    },
    {
      path: "/editor",
      name: "editor",
      component: () => import("@/views/Editor.vue"),
    },
  ],
});
