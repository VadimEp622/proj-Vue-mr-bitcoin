<script >
import AppHeader from '@/cmps/AppHeader.vue'
import AppFooter from '@/cmps/AppFooter.vue'
import UserMsg from '@/cmps/UserMsg.vue'

export default {
  components: {
    AppHeader,
    AppFooter,
    UserMsg
  }
}
</script>

<!-- TODO MQ width 750px, max for current header & contact column switch from 2 to 1 -->
<template>
  <AppHeader />
  <main>
    <RouterView />
  </main>
  <AppFooter />
  <UserMsg />
</template>