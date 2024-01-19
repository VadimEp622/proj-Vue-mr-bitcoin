<template>
  <section class="app-wrapper">
    <div class="drawer-bg"></div>

    <section class="main-container" :class="[appClass, layoutClass]">
      <AppHeader :layoutClass="layoutClass" @setMainMenu="setMainMenu" />
      <main class="full" :class="layoutClass">
        <RouterView />
      </main>
      <AppFooter :layoutClass="layoutClass" />
    </section>

    <ResponsiveMainMenu :isMainMenuActive="isMainMenuActive" @setMainMenu="setMainMenu" />
    <UserMsg />
  </section>
</template>


<script >
import AppHeader from '@/cmps/AppHeader.vue'
import AppFooter from '@/cmps/AppFooter.vue'
import UserMsg from '@/cmps/AppUserMsg.vue'
import ResponsiveMainMenu from '@/cmps/AppResponsiveMainMenu.vue'
import { eventBus } from '@/services/event-bus.service.js'

export default {
  data() {
    return {
      isMainMenuActive: false
    }
  },
  created() {
    this.unListen = eventBus.on('closeMainMenu', () => this.setMainMenu(false))
  },
  unmounted() {
    this.unListen()
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


<!-- TODO (mini): in addition to default contact icon, add logged-in user icon, for differentiation -->
<!-- TODO: implement transfer of funds -->
<!-- TODO: Add handling for invalid contact Id in contact details/edit -->
<!-- TODO: consider making contact phone numbers have unified format, and consider contact names language for filtering  -->
<!-- TODO: Add contacts filtering -->
<!-- TODO: add more contacts, consider either pagination of endless scrolling -->

<!-- TODO: ✔ make user profile -->
<!-- TODO: ✔ consider adding globally accessible methods for DON'T-REPEAT-YOURSELF structure (if possible) -->


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

III. homepage will be fancy, with a "welcome <user.name>" greeting, with user transactions history (and maybe more)

IV. add testing
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

<!-- TODO (Contacts):
I. consider adding to contact store - isRemovingContact/isContactRemoved, etc...,
  for protection against multiple fast contact removes

II. add styling to back/return buttons in contact-details/contact-edit
-->

<!-- TODO (Header/Footer): 
I. shrink desktop header's nav items, EVEN MORE, to fit more routes

II. when footer/header are disabled (display:none),
  additionally send boolean isFooterRendered/isHeaderRendered as prop to footer/header each respectively,
  as safeguard to prevent them from making redundant server calls (tentatively Local-storage)
 -->



<style lang="scss" scoped>
// .app-wrapper {}

.drawer-bg {
  position: fixed;
  height: 100vh;
  width: 100vw;
  background: url('@/assets/imgs/bg-pic/colored_body_top.png') center top no-repeat #1b2838;
  z-index: -1;
}

.main-container {
  position: absolute;
  min-height: 100%;
  min-width: 0;
  top: 0;
  left: 0;
  right: 0;
  grid-template-rows: auto 1fr auto;

  &:not(.header-footer-hidden) main {
    height: fit-content;
    align-content: start;
  }

  &.header-footer-hidden {
    grid-template-rows: 1fr;

    &>*:is(header, footer) {
      display: none;
    }
  }

  & main {
    min-width: 0;
  }
}
</style>