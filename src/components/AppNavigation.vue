<template>
  <div>
    <v-app-bar app flat>
      <v-app-bar-nav-icon
        class="hidden-md-and-up"
        @click.stop="drawer = !drawer"
      />

      <v-btn class="white hidden-sm-and-down mr-4" large rounded to="/play"
        >{{ $t("main.play") }}
      </v-btn>
      <v-btn class="hidden-sm-and-down ma-2" outlined to="/how-to-play"
        >{{ $t("main.how-to-play") }}
      </v-btn>
      <v-btn class="hidden-sm-and-down ma-2" outlined to="/contact"
        >{{ $t("main.contact") }}
      </v-btn>
      <v-spacer></v-spacer>
      <LocaleChanger class="hidden-sm-and-down" />
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" temporary app>
      <v-list>
        <v-list-item>
          <v-list-item-content>
            <LocaleChanger />
          </v-list-item-content>
        </v-list-item>
        <v-divider />
        <v-list-item to="/play">
          <v-list-item-content>
            <v-list-item-title>{{ $t("main.play") }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item to="/how-to-play">
          <v-list-item-content>
            <v-list-item-title>{{ $t("main.how-to-play") }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item to="/contact">
          <v-list-item-content>
            <v-list-item-title>{{ $t("main.contact") }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </div>
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
