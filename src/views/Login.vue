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
import Mixin from '@/mixin'

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
    },
    watch: {
        user(user) {
            if (user && Object.keys(user).length > 0)
                this.redirectTo('/')
        }
    },
    mixins: [Mixin],
    components: { FormLogin }
}
</script>


<style lang="scss" scoped>
.login-page {
    overflow: hidden;

    &::before {
        content: '';
        position: fixed;
        height: 100vh;
        width: 100vw;
        background-image: url('@/assets/imgs/bg-pic/bg-bitcoin.jpg');
        background-size: cover;
        background-position-x: right;
        background-position-y: center;
        z-index: -1;
    }
}
</style>