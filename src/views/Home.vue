<template>
  <section class="home-page full main-layout">
    <p v-if="loggedinUser" class="greeting text-align-center">Welcome to Home Page, <span>{{ loggedinUser.name }}</span>
    </p>
  </section>
</template>


<script>
export default {
  computed: {
    loggedinUser() { return this.$store.getters.user }
  }
}
</script>


<style lang="scss" scoped>
.home-page {
  & .greeting {
    padding-block: 20px;
    white-space: nowrap;

    span {
      text-transform: capitalize;
      font-size: 1.5em;
      font-weight: 600;
      color: #baaa51;
    }
  }
}
</style>