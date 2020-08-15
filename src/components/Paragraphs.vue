<template>
    <div>
        <p v-for="text in texts" :key="text" class="body-1">{{ text }}</p>
    </div>
</template>

<script>
export default {
  name: "paragraphs",
  props: ['paragraphsPath'],
  computed: {
      texts: function () {
          return this.$t(this.paragraphsPath);
      }
  }
};
</script>
