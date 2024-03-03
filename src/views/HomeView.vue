<script setup>
import RecentArticles from "../components/RecentArticles.vue";
import articlesData from '../articles.json'

const articles = articlesData;
</script>

<template>
  <main class="hero">
    <h1>Frontend Orbit</h1>
    <h2>  
      Czyli moja droga do nauki programowania w formie zwięzych artykułów.
      Enjoy!
    </h2>
  </main>

  <section class="">
    <RecentArticles :articles="articles" />
  </section>

</template>

<style lang="scss">
@import "../assets/style.scss";

.hero {
  margin: 9rem 0 9rem 0;
  text-align: center;
  h1 {
    font-size: 5rem;
    font-weight: 700;
  }
}

section {
  margin: 3rem auto;
}
</style>
