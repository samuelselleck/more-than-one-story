<template>
  <v-container class="play" fill-height fluid>
    <v-col align="center" justify="center">
        <transition name="fade" mode="out-in">
            <h1 :key="question" class="display-2 ma-12">{{ question ? question : $t('play.begin')}}</h1>
        </transition>
      <v-btn @click.stop="question = getQuestion()" x-large>{{ $t('play.new-question') }}</v-btn>
    </v-col>
  </v-container>
</template>

<script>
export default {
    name: "Play",
    data: () => {
        return {
            question: null
        }
    },
    methods: {
        getQuestion() {
            if(this.questions == undefined) {
                this.questions = Object.entries(this.$t('questions')).map(v => v[1]);
                this.counter = 0;
            }

            return this.questions[this.counter++ % this.questions.length];
        }
    },
}
</script>
