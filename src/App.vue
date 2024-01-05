<template>
  <section class="app" :class="[appClass, layoutClass]">
    <AppHeader :layoutClass="layoutClass" @setMainMenu="setMainMenu" />
    <main class="full" :class="layoutClass">
      <RouterView />
    </main>
    <AppFooter :layoutClass="layoutClass" />
  </section>
  <ResponsiveMainMenu :isMainMenuActive="isMainMenuActive" @setMainMenu="setMainMenu" />
  <UserMsg />
</template>


<script >
import AppHeader from '@/cmps/AppHeader.vue'
import AppFooter from '@/cmps/AppFooter.vue'
import UserMsg from '@/cmps/AppUserMsg.vue'
import ResponsiveMainMenu from '@/cmps/AppResponsiveMainMenu.vue'

export default {
  data() {
    return {
      isMainMenuActive: false
    }
  },
  computed: {
    currentRoute() {
      return this.$route.name
    },
    appClass() {
      return {
        'header-footer-hidden': this.currentRoute === 'login'
      }
    },
    layoutClass() {
      return {
        'main-layout': this.currentRoute === 'home',
        'details-layout': this.currentRoute !== 'home'
      }
    }
  },
  methods: {
    setMainMenu(booleanState) {
      this.isMainMenuActive = booleanState
    }
  },
  watch: {
    '$route'(to, from) {
      this.isMainMenuActive = false
    }
  },
  components: {
    AppHeader,
    AppFooter,
    UserMsg,
    ResponsiveMainMenu
  }
}
</script>
<!-- ================================================= -->
<!-- =================== TODO NOW: =================== -->
<!-- ================================================= -->



<!-- TODO: refactor contact object so that name key will only store name string, instead of name object -->
<!-- TODO: add loader spinner using "vue-loading-overlay" package -->
<!-- TODO: fix responsive styling for contact-list in mobile -->
<!-- TODO: make create/edit contact -->
<!-- TODO: add styling to back/return button in stay-details -->
<!-- TODO: shrink desktop header's nav items, to fit more -->
<!-- TODO: ✔ add media-query for layouts for mobile/tablet/desktop -->


<!-- ================================================= -->
<!-- =================== TODO LATER: =================== -->
<!-- ================================================= -->


<!-- TODO (Overall App Structure):
I. make a user store:
    1) in actions, there will be:
        a) ✔ loadUser -> will get a user from userService. [High priority]
        b) updateUser -> will update user name/balance/transactions/contacts [Mid priority]

    2) ✔ user object will have id key
    3) user object will have array of contact id's -> is this necessary? rethink and decide.

II. redirect to login-page:
    1) ✔ first time entry - automatically redirect to login page
        a) ✔ no matter which route, automatically redirect to login page.
            * store user state is null.
            * in login-page, when clicking login, store user state is updated with NEW user object + local-storage user object is created
            * after click redirect to home-page
        b) ✔ each route will check store user state, and if falsy redirect to login page
    
    2) ✔ second time entry - automatically redirect to login page
        a) ✔ user already stored in local-storage -> upon login click, store user state gets updated with SAVED user object
        b) ✔ checks session storage for logged-in-user, and set in store state for user
        c) find a more secure way to save user in session storage, use the secure information to fetch complete user data, and store THAT in user store

III. log-in page, will not have header/footer, but a cool introduction ✔

IV. homepage will be fancy, with a "welcome <user.name>" greeting, with user transactions history (and maybe more)
-->

<!-- TODO (Trading Index):
1. change trading page graph to lines
2. make graph responsive (possible to enlarge/shrink without needing to refresh page)
-->

<!-- TODO (styling layouts):
figure out a way to put dynamic layout class once on top of section.app,
and make each layout dependant element below it in the whole app abstracted,
for easier scaling of layouts & debugging
-->

<!-- TODO (loading images):
I. figure out how to address the issue in LoginView,
  regarding the slow loading of the background image compared to the rest of the component.

II. figure out how to add default-user-icon to always be there, before the actual picture of the user loads
-->


<style lang="scss" scoped>
.app {
  display: grid;
  grid-template-rows: auto 1fr auto;
  height: 100vh;

  &.header-footer-hidden {
    grid-template-rows: 1fr;

    &>*:is(header, footer) {
      display: none;
    }
  }
}
</style>