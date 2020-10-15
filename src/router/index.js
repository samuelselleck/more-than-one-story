import Vue from "vue";
import VueRouter from "vue-router";
import i18n from "../i18n";
import Site from "../views/Site.vue";
import Main from "../views/Main.vue";
import Home from "../views/Home.vue";
import Contact from "../views/Contact.vue";
import HowToPlay from "../views/HowToPlay.vue";
import Play from "../views/Play.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "",
    redirect: "/" + process.env.VUE_APP_I18N_LOCALE
  },
  {
    path: "/:lang",
    component: Site,
    children: [
      {
        path: "",
        component: Main,
        children: [
          {
            path: "",
            name: "Home",
            component: Home
          },
          {
            path: "how-to-play",
            name: "How To Play",
            component: HowToPlay
          },
          {
            path: "contact",
            name: "Contact",
            component: Contact
          }
        ]
      },
      {
        path: "play",
        name: "Play",
        component: Play
      }
    ]
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to, from, next) => {
  let lastLang = from.params.lang;
  let newLang = to.params.lang;

  if (lastLang != newLang) {
    let langMetadata = i18n.messages[newLang].metadata;
    router.app.$vuetify.rtl = langMetadata.rtl;
    i18n.locale = newLang;
  }
  next();
});

export default router;
