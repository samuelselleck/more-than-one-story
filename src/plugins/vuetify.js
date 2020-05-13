import Vue from "vue";
import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css";

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: "#222222",
        secondary: "#111111",
        accent: "#111111",
        error: "#b71c1c"
      }
    }
  }
});
