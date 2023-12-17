<script>

export default {
    data() {
        return {}
    },
    created() { },
    unmounted() { },
    methods: {
        getUser() {
            this.$store.dispatch({ type: 'loadUser' })
        },
        onLogin() {
            this.getUser()
            this.$router.push('/')
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