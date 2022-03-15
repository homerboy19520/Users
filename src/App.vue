<template>
  <div class="app">
    <search-page></search-page>
  </div>
</template>

<script>
import SearchPage from "@/views/search-page";

export default {
  name: "App",

  components: { SearchPage },
};
</script>

<style lang="scss">
@import "assets/styles/styles.css";
</style>
