<script setup>
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
          <a href="">Home</a>
        </li>
        <li>
          <a href="">Artykuły</a>
        </li>
        <li>
          <a href="">Kontakt</a>
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
  .logo {
    img {
      width: 250px;
    }
  }
  nav {
    ul {
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
