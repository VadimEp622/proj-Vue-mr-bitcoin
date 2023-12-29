<template>
    <section class="login-page">
        <section class="greeting flex column justify-center height-100-percent">
            <h2 class="text-align-center clr-white">Welcome to Mr. Bitcoin!</h2>
            <section class="flex justify-center">
                <input type="text" v-model="loginName">
                <button @click="onLogin">login</button>
            </section>
        </section>
    </section>
</template>


<!-- TODO: (High Priority) 
    add input protection, so only English letters can be used to login, with a minimum of 1 letter, maximum 25(?) 
 -->

<!-- TODO: (Low Priority) 
    make is so regardless of caps in user name,
    only lowercase letters update the database (aka local-storage - tentative),
    but greetings always happen with first letter capitalized 
-->


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
        redirectTo(pathName) {
            this.$router.push(pathName)
        }
    },
    watch: {
        loggedinUser(user) {
            if (user && Object.keys(user).length > 0) this.redirectTo('/')
        }
    }
}
</script>


<style lang="scss" scoped>
.login-page {
    height: 100%;

    &::before {
        content: '';
        // background-image: url('@/assets/imgs/bg-pic/bg-bitcoin.jpg');
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