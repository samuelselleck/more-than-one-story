<template>
  <v-app>
    <AppNavigation />
    <v-content>
      <v-container fill-height fluid>
        <transition name="fade" mode="out-in">
          <router-view />
        </transition>
      </v-container>
    </v-content>
    <Footer />
  </v-app>
</template>

<script>
import AppNavigation from "@/components/AppNavigation.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "App",
  components: {
    AppNavigation,
    Footer
  }
};
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition-duration: 0.5s;
  transition-property: opacity;
  transition-timing-function: ease;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
}
</style>
