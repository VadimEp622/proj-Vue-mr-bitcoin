<template>
    <header class="full bg-clr-blue-2" :class="layoutClass">
        <HeaderDesktop :user="user" @logout="logout" />
        <HeaderMobile :user="user" @setMainMenu="setMainMenu" />
    </header>
</template>


<script>
import HeaderDesktop from '@/cmps/app-header/HeaderDesktop.vue'
import HeaderMobile from '@/cmps/app-header/HeaderMobile.vue'
import { mapActions, mapGetters } from 'vuex'

export default {
    props: { layoutClass: Object, required: true },
    watch: {
        user(user) {
            if (!user) this.redirectTo('/login')
        }
    },
    computed: {
        ...mapGetters([
            'user'
        ])
    },
    methods: {
        ...mapActions([
            'logout'
        ]),
        redirectTo(pathName) {
            this.$router.push(pathName)
        },
        setMainMenu(booleanState) {
            this.$emit('setMainMenu', booleanState)
        }
    },
    components: {
        HeaderDesktop,
        HeaderMobile
    }
}
</script>


<style lang="scss" scoped>
header {
    min-width: 240px;
}
</style>
