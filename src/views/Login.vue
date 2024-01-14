<template>
    <section class="login-page full">
        <section class="greeting flex column justify-center height-100-percent">
            <h2 class="text-align-center clr-white">Welcome to Mr. Bitcoin!</h2>
            <FormLogin :initial-values="initialValues" @onSubmit="onSubmit" />
        </section>
    </section>
</template>


<!-- TODO: (Low Priority) 
    make is so regardless of caps in user name,
    only lowercase letters update the database (aka local-storage - tentative),
    but greetings always happen with first letter capitalized 
-->


<script>
import FormLogin from '@/cmps/app-reusable/forms/FormLogin.vue'
import { mapActions, mapGetters } from 'vuex'

export default {
    data() {
        return {
            initialValues: {
                name: 'Sam Sung'
            }
        }
    },
    computed: {
        ...mapGetters([
            'user'
        ])
    },
    methods: {
        ...mapActions([
            'login'
        ]),
        onSubmit(params) {
            this.login(params.name)
        },
        redirectTo(pathName) {
            this.$router.push(pathName)
        }
    },
    watch: {
        user(user) {
            if (user && Object.keys(user).length > 0)
                this.redirectTo('/')
        }
    },
    components: { FormLogin }
}
</script>


<style lang="scss" scoped>
.login-page {
    // height: 100%;
    overflow: hidden;

    &::before {
        content: '';
        position: absolute;
        height: 100%;
        height: 100lvh;
        width: 100%;
        background-image: url('@/assets/imgs/bg-pic/bg-bitcoin.jpg');
        background-size: cover;
        background-position-x: right;
        background-position-y: center;
        // min-height: 100lvh;
        // top: 0;
        // left: 0;
        z-index: -1;
    }
}
</style>