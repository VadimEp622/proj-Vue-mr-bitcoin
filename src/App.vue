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


<!-- TODO (Contacts):
I.  consider adding to contact store - isRemovingContact/isContactRemoved, etc...,
  for protection against multiple fast contact removes

II. fix responsive styling for contact-list in mobile 

III. make create contact 

IV. add styling to back/return buttons in contact-details/contact-edit
-->

<!-- TODO: shrink desktop header's nav items, to fit more -->
<!-- TODO: investigate the working of event-bus, to use for updating isMainMenuActive, from router.js (in a before each, perhaps?) -->

<!-- DONE: ✔ refactor contact object so that name key will only store name string, instead of name object -->
<!-- DONE: ✔ add media-query for layouts for mobile/tablet/desktop -->


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

  &::before {
    content: '';
    height: 100%;
    background: url('@/assets/imgs/bg-pic/colored_body_top.png') center top no-repeat #1b2838;
    position: fixed;
    inset: 0;
    z-index: -1;
  }

  &:not(.header-footer-hidden) main {
    height: fit-content;
  }

  &.header-footer-hidden {
    grid-template-rows: 1fr;

    &>*:is(header, footer) {
      display: none;
    }
  }
}
</style>