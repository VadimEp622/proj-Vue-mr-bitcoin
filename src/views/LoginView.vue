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
        <section class="greeting flex column justify-center height-100-percent">
            <h2 class="text-align-center clr-white">Welcome to Mr. Bitcoin!</h2>
            <section class="flex justify-center">
                <input type="text" v-model="loginName">
                <button @click="onLogin">login</button>
            </section>
        </section>
        <!-- <section class="pos-abs top-0 left-0 bottom-0 right-0">
            <img src="@/assets/imgs/bg-pic/bg-bitcoin.jpg" alt="">
        </section> -->
    </section>
</template>

<style lang="scss">
.login-page {
    height: 100%;

    &:before {
        content: '';
        background-image: url('@/assets/imgs/bg-pic/bg-bitcoin.jpg');
        background-size: cover;
        background-position-x: right;
        background-position-y: center;
        min-height: 100vh;
        width: 100%;
        position: absolute;
        top: 0;
        left: 0;
        z-index: -1;
    }
}
</style>