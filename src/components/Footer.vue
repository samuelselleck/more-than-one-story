<template>
  <v-footer padless class="transparent mb-3">
    <v-row justify="center" align="center" no-gutters>
      <v-col cols="auto">
        <v-img
          class="mr-3"
          min-width="13"
          max-width="13"
          aspect-ratio="0.5"
          :src="`${publicPath}mtos_icon.svg`"
          contain
        />
      </v-col>
      <v-col cols="auto" class=" overline text-center">
        {{ $t("home.title") }} -
        <strong> {{ new Date().getFullYear() }} </strong>
      </v-col>
    </v-row>
  </v-footer>
</template>

<script>
export default {
  name: "Footer",
  data() {
    return {
      publicPath: process.env.BASE_URL
    };
  }
};
</script>
