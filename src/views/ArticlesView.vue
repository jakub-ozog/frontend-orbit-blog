<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import articlesData from "../articles.json";

const router = useRouter();
const articles = ref(articlesData);
</script>

<template>
  <div
    class="articleWrapper"
    @click="router.push(`/articles/${article.id}`)"
    v-for="article in articles"
    :key="article.id"
  >
    <h2>{{ article.title }}</h2>
    <p>{{ article.content }}</p>
  </div>
</template>

<style lang="scss">
@import "../assets/style.scss";

.articleWrapper {
  display: flex;
  flex-direction: column;
  margin-bottom: 3rem;
  cursor: pointer;
  border: 2px solid #575757;
  border-radius: 15px;
  padding: 1rem;
  transition: 0.1s all;
  &:hover {
    border: 2px solid #4b925d;
    border-radius: 25px;
  }
}
</style>
