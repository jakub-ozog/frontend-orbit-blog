<script setup>
import { RouterView, RouterLink } from "vue-router";
import logo from "../assets/images/logo.svg";
</script>

<template>
  <header>
    <div class="logo">
      <a href="/">
        <img :src="logo" alt="" />
      </a>
    </div>

      <nav>
        <ul>
        <li>
          <RouterLink to="/">Home</RouterLink> 
          <!-- <a href="">Home</a> -->
        </li>
        <li>
          <RouterLink to="/articles">Artykuły</RouterLink> 
          <!-- <a href="">Artykuły</a> -->
        </li>
        <li>
          <RouterLink to="/contact">Kontakt</RouterLink> 
          <!-- <a href="">Kontakt</a> -->
        </li>
      </ul>
    </nav>
  </header>
</template>

<style lang="scss">
@import "../assets/variables.scss";

header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 3rem;
  min-height: 75px;
  .logo {
    img {
      width: 210px;
    }
  }
  nav {
    ul {
      list-style-type: none;
      display: flex;
      justify-content: space-between;
      gap: 2rem;
    }
    a {
      color: $White;
      padding: .5rem;
    }
  }
}
</style>
