<template>
  <v-select
    class="locale-changer"
    backgroundColor="transparent"
    :items="langs"
    v-model="language"
    hide-details
    solo
    flat
    dense
  >
  </v-select>
</template>

<script>
export default {
  name: "locale-changer",
  data: function() {
    return {
      langs: Object.entries(this.$i18n.messages).map(l => {
        return { text: l[1].metadata.language, value: l[0] };
      })
    };
  },
  computed: {
    language: {
      get: function() {
        return this.$route.params.lang;
      },
      set: function(lang) {
        if (this.$route.params.lang != lang) {
          this.$router.push({ name: this.$route.name, params: { lang: lang } });
        }
      }
    }
  }
};
</script>

<style scoped>
.v-select {
  min-width: 0px;
  max-width: 150px;
}
</style>
