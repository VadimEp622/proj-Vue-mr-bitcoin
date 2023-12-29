<script>
export default {
    data() {
        return {
            loginName: ''
        }
    },
    computed: {
        loggedinUser() { return this.$store.getters.user }
    },
    methods: {
        onLogin() {
            this.$store.dispatch({ type: 'login', name: this.loginName })
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
            <input type="text" v-model="loginName">
            <button @click="onLogin">login</button>
        </section>
    </section>
</template>

<style lang="scss"></style>