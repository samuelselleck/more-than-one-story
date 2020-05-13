<template>
  <v-select
    class="locale-changer"
    backgroundColor="transparent"
    :items="langs"
    v-model="$i18n.locale"
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
  data: () => ({
    langs: [
      {
        text: "English",
        value: "en"
      },
      {
        text: "Svenska",
        value: "se"
      }
    ]
  })
};
</script>

<style scoped>
.v-select {
  min-width: 0px;
  max-width: 150px;
}
</style>
