<template>
  <v-app>
    <AppNavigation />
    <v-content>
      <v-container fill-height fluid>
        <router-view />
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import AppNavigation from "@/components/AppNavigation.vue";

export default {
  name: "App",
  components: {
    AppNavigation
  }
};
</script>
