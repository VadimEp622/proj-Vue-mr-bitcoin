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


<!-- TODO:
1. make a user store.
    * in actions, there will be:
        a) loadUser -> will get a user from userService. [High priority]
        b) updateUser -> will update user name/balance/transactions/contacts [Mid priority]

    * user object will have id key
    * user object will have array of contact id's 

2. upon entering site, no matter which route, check store user, and if no user object there,
    redirect to "log-in page" (to be implemented).
    at first, "log-in page", will simply have a "log-in" button which gets user obj to store from service,
    and after, will add the user object to cookies/local-storage.

3. log-in page, will not have header/footer, but a cool introduction

4. homepage will be fancy, with a "welcome <user.name>" greeting, with user transactions history (and maybe more)
-->


<!-- TODO: 
1. responsive header
2. animated contact-list movement on delete
3. create/edit contact
  -->


<!-- TODO:
1. change trading page graph to lines
2. make graph responsive (possible to enlarge/shrink without needing to refresh page)
-->


<template>
  <AppHeader />
  <main>
    <RouterView />
  </main>
  <AppFooter />
  <UserMsg />
</template>