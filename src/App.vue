<script setup>
import Header from "./components/Header.vue";
import HomeView from "./views/HomeView.vue";
</script>

<template>
  <div class="app">
    <div class="container">
      <Header />
      <HomeView />
    </div>
  </div>
</template>

<style lang="scss">
@import './assets/layout';
</style>
