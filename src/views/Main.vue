<template>
    <v-content>
        <AppNavigation/>
        <transition name="fade" mode="out-in">
            <router-view/>
        </transition>
    </v-content>
</template>

<script>
import AppNavigation from "@/components/AppNavigation.vue";

export default {
    name: 'App',
    components: {
      AppNavigation
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
    opacity: 0
  }
</style>