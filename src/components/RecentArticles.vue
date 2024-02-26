<script setup>
import { defineProps, computed } from "vue";
import articles from "../articles.json";

const props = defineProps({
  articles: {
    type: Array,
    required: true,
  },
});


const recentThreeArticles = computed(() => {
    return props.articles.slice(-2)
})

</script>

<template>
  <p>Ostatnie artykuły:</p>
  <section class="recentArticles">
      <ul class="recentArticles__wrapper">
          <li v-for="article in articles" :key="article.id">
            <h3 class="recentArticles_title">
                {{ article.title }}
            </h3>
            {{ article.subtitle }}
            {{ article.content }}
        </li>
    </ul>
</section>
</template>


<style lang="scss">
@import "../assets/style.scss";


.recentArticles {

    &__wrapper {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        gap: 2rem;
        margin-bottom: 3rem;
    }

&__title {
    margin-bottom: 1rem;
}
}

</style>