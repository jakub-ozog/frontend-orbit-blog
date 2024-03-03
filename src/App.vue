<script setup>
import { RouterView, RouterLink } from "vue-router";
import Header from "./components/Header.vue";
import HomeView from "./views/HomeView.vue";
</script>

<template>
  <div id="app">
    <div class="container">
      <Header />
      <RouterView />
    </div>
  </div>
</template>

<style lang="scss">
@import "./assets/style.scss";
@import "./assets/style.scss";
</style>
