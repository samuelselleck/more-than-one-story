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
          <Paragraphs paragraphsPath="how-to-play.paragraphs"/>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
import Paragraphs from "@/components/Paragraphs.vue";

export default {
  name: "howtoplay",
  components: {
    Paragraphs
  }
};
</script>