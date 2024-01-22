<template>
  <section class="home-page full main-layout">
    <p v-if="user" class="greeting text-align-center">Welcome to Home Page, <span>{{ user.name }}</span></p>
  </section>
</template>


<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters([
      'user'
    ])
  },
}
</script>


<style lang="scss" scoped>
.home-page {
  color: #cccccc;

  &::before {
    content: '';
    position: absolute;
    height: 400px;
    width: 400px;
    background-image: url('@/assets/imgs/bg-pic/bg-bitcoin2.png');
    background-size: cover;
    z-index: -1;
    justify-self: flex-end;
    opacity: .4;
    margin-inline-end: 10vw;
  }

  & .greeting {
    padding-block: 20px;
    // white-space: nowrap;

    span {
      text-transform: capitalize;
      font-size: 1.5em;
      font-weight: 600;
      color: #baaa51;
    }
  }
}
</style>