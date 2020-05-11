<template>
  <v-footer padless class="transparent mb-3">
    <v-row justify="center" align="center" no-gutters>
      <v-col cols="auto">
        <v-row justify="center">
          <v-col cols="auto">
            <v-img
              max-width="3em"
              src="@/assets/more_than_one_story_notext.svg"
              contain
            />
          </v-col>
        </v-row>
        <v-row class="text-uppercase font-weight-light headline text-center">
          <v-col cols="auto">
            {{ $t("home.title") }}
          </v-col>
        </v-row>
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
