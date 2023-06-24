<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header class="app-header">

    <section class="logo">Mr. Bitcoin</section>

    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/about">About</RouterLink>
      <RouterLink to="/my-profile">My Profile</RouterLink>
    </nav>

  </header>

  <RouterView />
</template>