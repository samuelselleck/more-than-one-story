<template>
  <v-content>
    <v-container class="home" full-height fluid>
      <v-row align="center" justify="center" fill-height>
        <h1
          :class="[
            $vuetify.breakpoint.smAndUp ? 'display-4' : 'display-2',
            'font-weight-medium text-center ma-12'
          ]"
        >
          {{ $t('home.title') }}
        </h1>
      </v-row>
    </v-container>
  </v-content>
</template>

<style scoped>
.home {
  font-size: em;
}
</style>
