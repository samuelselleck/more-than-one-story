<template>
  <v-row>
    <v-col>
      <v-row no-gutters justify="center" align="center">
        <v-col class="mr-1" cols="auto">
          <v-img
            min-height="15em"
            src="@/assets/more_than_one_story_notext.svg"
            contain
          ></v-img>
        </v-col>

        <v-col :cols="$vuetify.breakpoint.lgAndUp ? 4 : 6">
          <h1
            :class="[
              $vuetify.breakpoint.smAndUp ? 'display-4' : 'display-1',
              'font-weight-medium text-center'
            ]"
          >
            {{ $t("home.title") }}
          </h1>
        </v-col>
      </v-row>
      <v-row justify="center" no-gutters>
        <v-col class="ma-8" lg="5">
          <h1 class="body-1 font-weight-medium">
            {{ $t("home.description") }}
          </h1>
        </v-col>
      </v-row>
      <v-row align="center" justify="center">
        <v-col class="simris" cols="auto">
          <v-img src="@/assets/simrishamn.svg" contain></v-img>
        </v-col>
        <v-col class="award" cols="auto">
          <v-img src="@/assets/intercultural_inv_award.svg" contain></v-img>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<style scoped>
.simris {
  width: 25%;
  max-width: 15em;
}
.award {
  width: 50%;
  max-width: 30em;
}
</style>
