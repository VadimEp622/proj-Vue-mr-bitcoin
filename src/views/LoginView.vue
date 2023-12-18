<script>
export default {
    computed: {
        loggedinUser() { return this.$store.getters.user }
    },
    methods: {
        getUser() {
            this.$store.dispatch({ type: 'loadUser' })
        },
        onLogin() {
            this.getUser()
        },
        redirectToHome() {
            this.$router.push('/')
        }
    },
    watch: {
        loggedinUser(user) {
            if (user && Object.keys(user).length > 0) this.redirectToHome()
        }
    }
}
</script>

<template>
    <section class="login-page">
        <p class="text-align-center">Hi from login page</p>
        <section class="flex justify-center">
            <button @click="onLogin">login</button>
        </section>
    </section>
</template>

<style lang="scss"></style>