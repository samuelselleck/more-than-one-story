import Vue from "vue";
import VueRouter from "vue-router";
import Main from "../views/Main.vue";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Main",
    component: Main,
    children: [
      {
        path: "",
        name: "Home",
        component: Home
      },
      {
        path: "/about",
        name: "About",
        component: () => import("../views/About.vue")
      },
      {
        path: "/contact",
        name: "Contact",
        component: () => import("../views/Contact.vue")
      }
    ]
  },
  {
    path: "/play",
    name: "Play",
    component: () => import("../views/Play.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
