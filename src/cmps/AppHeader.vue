<template>
    <header class="full bg-clr-blue-0" :class="layoutClass">
        <HeaderDesktop :loggedinUser="loggedinUser" @logout="logout" />
        <HeaderMobile :loggedinUser="loggedinUser" @toggleMainMenu="toggleMainMenu" />
    </header>
</template>


<script>
import HeaderDesktop from './AppHeader/HeaderDesktop.vue'
import HeaderMobile from './AppHeader/HeaderMobile.vue'

export default {
    props: { layoutClass: Object, required: true },
    watch: {
        loggedinUser(user) {
            if (!user) this.redirectTo('/login')
        }
    },
    computed: {
        loggedinUser() { return this.$store.getters.user },
    },
    methods: {
        logout() {
            this.$store.dispatch({ type: 'logout' })
        },
        redirectTo(pathName) {
            this.$router.push(pathName)
        },
        toggleMainMenu() {
            this.$emit('toggleMainMenu')
        }
    },
    components: {
        HeaderDesktop,
        HeaderMobile
    }
}
</script>


<style lang="scss" scoped>
// header {}
</style>
