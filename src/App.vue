<script >
import AppHeader from '@/cmps/AppHeader.vue'
import AppFooter from '@/cmps/AppFooter.vue'
import UserMsg from '@/cmps/UserMsg.vue'

export default {
  // computed: {
  //   loggedinUser() { return this.$store.getters.user }
  // },
  components: {
    AppHeader,
    AppFooter,
    UserMsg
  }
}
</script>


<!-- TODO:
I. make a user store:
    1) in actions, there will be:
        a) ✔ loadUser -> will get a user from userService. [High priority]
        b) updateUser -> will update user name/balance/transactions/contacts [Mid priority]

    2) user object will have id key
    3) user object will have array of contact id's 

II. redirect to login-page:
    1) ✔ first time entry - automatically redirect to login page
        a) no matter which route, automatically redirect to login page.
            * store user state is null.
            * in login-page, when clicking login, store user state is updated with NEW user object + local-storage user object is created
            * after click redirect to home-page
        b) each route will check store user state, and if falsy redirect to login page
    
    2) ✔ second time entry - automatically redirect to login page
        a) user already stored in local-storage -> upon login click, store user state gets updated with SAVED user object

III. log-in page, will not have header/footer, but a cool introduction

IV. homepage will be fancy, with a "welcome <user.name>" greeting, with user transactions history (and maybe more)
-->


<!-- TODO: 
1. responsive header
2. create/edit contact
  -->


<!-- TODO:
1. change trading page graph to lines
2. make graph responsive (possible to enlarge/shrink without needing to refresh page)
-->


<template>
  <section class="app">
    <AppHeader />
    <main>
      <RouterView />
    </main>
    <AppFooter />
  </section>
  <UserMsg />
</template>