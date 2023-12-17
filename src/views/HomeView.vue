<script>

export default {
  computed: {
    loggedinUser() { return this.$store.getters.user }
  }
}

</script>

<template>
  <section class="home-page">
    <p class="greeting text-align-center">Welcome to Home Page, <span>{{ loggedinUser.name }}</span></p>
  </section>
</template>

<style lang="scss">
.home-page {
  & .greeting {
    padding-block: 20px;
    white-space: nowrap;

    span {
      font-size: 1.5em;
      font-weight: 600;
      color: #baaa51;
    }
  }
}
</style>