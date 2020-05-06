<template>
  <v-layout>
    <v-app-bar>
      <v-app-bar-nav-icon
        class="hidden-md-and-up"
        @click.stop="drawer = !drawer"
      />

      <v-btn class="hidden-sm-and-down mr-4" large rounded light to="/play"
        >{{ $t('main.play') }}</v-btn
      >
      <v-btn class="hidden-sm-and-down ma-2" outlined to="/about"
        >{{ $t('main.how-to-play') }}</v-btn
      >
      <v-btn class="hidden-sm-and-down ma-2" outlined to="/contact"
        >{{ $t('main.about') }}</v-btn
      >
      <v-spacer></v-spacer>
      <LocaleChanger class="hidden-sm-and-down"/>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" temporary absolute>
      <v-list>
        <v-list-item>
          <v-list-item-content>
             <LocaleChanger/>
          </v-list-item-content>
        </v-list-item>
        <v-list-item to="/play">
          <v-list-item-content>
            <v-list-item-title>{{ $t('main.play') }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item to="/about">
          <v-list-item-content>
            <v-list-item-title>{{ $t('main.how-to-play') }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item to="/contact">
          <v-list-item-content>
            <v-list-item-title>{{ $t('main.about') }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </v-layout>
</template>

<script>

import LocaleChanger from "@/components/LocaleChanger.vue";

export default {
  name: "AppNavigation",
  components: {
      LocaleChanger
  },
  data: () => {
    return {
      drawer: null
    };
  }
};
</script>

<style scoped></style>
