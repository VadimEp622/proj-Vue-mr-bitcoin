<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header class="app-header">

    <!-- <section class="logo">Mr. Bitcoin</section> -->
    <!-- <section class="logo" @click="this.router.push({ path: '/' })">Mr. Bitcoin</section> -->
    <RouterLink class="logo" to="/">Mr. Bitcoin</RouterLink>

    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/trading-data">Trading & Data</RouterLink>
      <!-- <RouterLink to="/about">About</RouterLink> -->
      <RouterLink to="/my-profile">My Profile</RouterLink>
    </nav>

  </header>

  <RouterView />
</template>