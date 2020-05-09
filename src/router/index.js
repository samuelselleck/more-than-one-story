import Vue from "vue";
import VueRouter from "vue-router";
import Main from "../views/Main.vue";
import Home from "../views/Home.vue";
import Contact from "../views/Contact.vue";
import HowToPlay from "../views/HowToPlay.vue";
import Play from "../views/Play.vue";

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
        path: "/how-to-play",
        name: "How To Play",
        component: HowToPlay
      },
      {
        path: "/contact",
        name: "Contact",
        component: Contact
      }
    ]
  },
  {
    path: "/play",
    name: "Play",
    component: Play
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
