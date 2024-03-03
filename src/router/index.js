import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import ArticlesView from "../views/ArticlesView.vue";
import ContactView from "../views/ContactView.vue";
import SingleArticleView from "../views/SingleArticleView.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "home",
            component: HomeView,
        },

        {
            path: "/articles",
            name: "articles",
            component: ArticlesView,
        },

        {
            path: "/contact",
            name: "contact",
            component: ContactView,
        },

        {
            path: '/articles/:id',
            name: 'article',
            component: SingleArticleView
        }
    ],
});

export default router;
