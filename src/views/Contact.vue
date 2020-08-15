<template>
  <v-row>
    <v-col>
      <v-row justify="center" no-gutters>
        <v-col class="ma-8" lg="5">
          <Paragraphs paragraphsPath="contact.paragraphs"/>
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
