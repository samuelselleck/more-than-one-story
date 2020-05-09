<template>
  <v-app>
    <v-app-bar class="transparent" app flat>
      <v-btn class="grey--text lighten-1" :ripple="false" text to="/">
        <v-icon dark left>mdi-arrow-left</v-icon>{{ $t("play.back") }}
      </v-btn>
      <v-spacer />
      <LocaleChanger />
    </v-app-bar>
    <v-container class="play" fill-height fluid>
      <v-col align="center" justify="center">
        <transition name="fade" mode="out-in">
          <h1
            :key="index"
            :class="[
              $vuetify.breakpoint.smAndUp ? 'display-2' : 'display-1',
              'ma-12'
            ]"
          >
            {{ question + "." }}
          </h1>
        </transition>
        <v-btn @click.stop="randomizeIndex()" x-large>
          {{ $t("play.new-question") }}
        </v-btn>
      </v-col>
    </v-container>
    <Footer />
  </v-app>
</template>

<script>
import LocaleChanger from "@/components/LocaleChanger.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "Play",
  components: {
    LocaleChanger,
    Footer
  },
  data: () => {
    return {
      index: -1
    };
  },
  computed: {
    question: function() {
      let question =
        this.index > 0
          ? this.$t("questions." + this.index)
          : this.$t("play.begin");
      console.log(question);
      return question;
    }
  },
  methods: {
    randomizeIndex: function() {
      let numQuestions = Object.entries(this.$t("questions")).length;
      let rand = Math.floor(Math.random() * numQuestions) + 1;
      this.index = rand;
    }
  }
};
</script>

<style scoped></style>
