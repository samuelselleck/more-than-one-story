<template>
  <v-row>
    <v-col>
      <v-row no-gutters justify="center" align="center">
        <v-col class="mr-1" cols="auto">
          <p></p>
        </v-col>
      </v-row>
      <v-row justify="center" no-gutters>
        <v-col class="ma-8" lg="5">
          <h1 class="display-1">{{ $t("how-to-play.in-person-header") }}</h1>
          <br />
          <p class="body-1">{{ $t("how-to-play.in-person") }}</p>
          <br />

          <h1 class="display-1">{{ $t("how-to-play.online-header") }}</h1>
          <br />
          <p class="body-1">{{ $t("how-to-play.online") }}</p>
          <br />

          <h1 class="display-1">{{ $t("how-to-play.tips-header") }}</h1>
          <br />
          <ul>
            <li class="body-1">{{ $t("how-to-play.tip1") }}</li>
            <br />
            <li class="body-1">{{ $t("how-to-play.tip2") }}</li>
          </ul>
          <br />
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "howtoplay",
  components: {}
};
</script>
