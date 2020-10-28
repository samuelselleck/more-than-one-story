<template>
  <v-app>
    <v-app-bar class="transparent" app flat relative>
      <v-btn
        class="grey--text lighten-1 transparent"
        :ripple="false"
        text
        @click="$router.push({ name: 'Home' })"
      >
        <v-icon left>mdi-arrow-left</v-icon>{{ $t("play.back") }}
      </v-btn>
      <v-spacer />
      <LocaleChanger />
    </v-app-bar>
    <v-container class="play" mt-12 fill-height fluid>
      <div class="background">
        <img class="backimg" src="@/assets/more_than_one_story_notext.svg" />
      </div>

      <v-col class="questionbox" align="center">
        <transition name="fade" mode="out-in">
          <p
            class="question"
            :key="index"
            :class="[
              $vuetify.breakpoint.smAndUp ? 'display-2' : 'headline',
              'font-weight-black'
            ]"
          >
            {{ question + "." }}
          </p>
        </transition>
        <v-btn class="white" rounded @click.stop="nextIndex()" x-large>
          {{ $t("play.new-question") }}
        </v-btn>
      </v-col>
    </v-container>
  </v-app>
</template>

<script>
import LocaleChanger from "@/components/LocaleChanger.vue";

export default {
  name: "Play",
  components: {
    LocaleChanger
  },
  data: function() {
    return {
      index: 0,
      shuffledQuestions: this.shuffled()
    };
  },
  computed: {
    question: function() {
      let questionIndex = this.shuffledQuestions[this.index];
      let question = this.$t("questions." + questionIndex);
      return question;
    }
  },
  methods: {
    nextIndex: function() {
      this.index++;
      if (this.index >= this.shuffledQuestions.length) {
        this.index = 0;
      }
    },
    shuffle: function(array) {
      for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
    },
    shuffled: function() {
      let questions = Object.keys(this.$t("questions"));
      this.shuffle(questions);
      return questions;
    }
  }
};
</script>

<style scoped>
.questionbox {
  z-index: 1;
}
.question {
  background: rgb(255, 255, 255);
  background: -moz-linear-gradient(
    0deg,
    rgba(255, 255, 255, 0) 0%,
    rgba(255, 255, 255, 1) 25%,
    rgba(255, 255, 255, 1) 75%,
    rgba(255, 255, 255, 0) 100%
  );
  background: -webkit-linear-gradient(
    0deg,
    rgba(255, 255, 255, 0) 0%,
    rgba(255, 255, 255, 1) 25%,
    rgba(255, 255, 255, 1) 75%,
    rgba(255, 255, 255, 0) 100%
  );
  background: linear-gradient(
    0deg,
    rgba(255, 255, 255, 0) 0%,
    rgba(255, 255, 255, 1) 25%,
    rgba(255, 255, 255, 1) 75%,
    rgba(255, 255, 255, 0) 100%
  );
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#ffffff",endColorstr="#ffffff",GradientType=1);
  padding-bottom: 0.7em;
  padding-top: 0.7em;
}
.background {
  position: absolute;
  top: 0;
  left: 0;
  width: 99%;
  height: 99%;
}
.backimg {
  position: relative;
  display: block;
  margin-left: auto;
  margin-right: auto;
  top: 15%;
  height: 70%;
}
.fade-enter-active,
.fade-leave-active {
  transition-duration: 0.5s;
  transition-property: opacity;
  transition-timing-function: ease;
}
.fade-enter,
.fade-leave-active {
  opacity: 0;
}
</style>
