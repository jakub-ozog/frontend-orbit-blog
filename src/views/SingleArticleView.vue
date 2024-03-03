<script setup>
import { useRoute } from "vue-router";
import { ref, onBeforeMount } from "vue";
import articlesData from "../articles.json";

const article = ref(null);
const route = useRoute();
const { id } = route.params;

console.log(id);

onBeforeMount(() => {
  article.value = articlesData.find((item) => item.id === parseInt(id));
});
</script>

<template>
  <div class="singleArticle" v-if="article">
    <div class="singleArticle__title">
      <h1>{{ article.title }}</h1>
    </div>
    <p class="singleArticle__author">{{ article.author }}</p>
    <p class="singleArticle__date">{{ article.date }}</p>
    <div class="singleArticle__subtitle">
      <h2>{{ article.subtitle }}</h2>
    </div>
    <div class="singleArticle__content">
      <h3>{{ article.content }}</h3>
    </div>
    <div class="singleArticle__content">
      <h3>{{ article.content2 }}</h3>
    </div>
  </div>

  <div v-else>Article not found</div>
</template>

<style lang="scss">
@import "../assets/style.scss";

h1 {
  font-size: 3.5rem;
}

h2 {
  font-size: 2rem;
}

p {
  font-size: 1.25rem;
}
</style>
