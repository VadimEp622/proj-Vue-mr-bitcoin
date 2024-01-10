<template>
    <section class="app-header-mobile flex space-between align-center white-space-nowrap">
        <section class="logo fs34 fw800 clr-gold-0 flex height-100-percent">
            <RouterLink to="/" class="flex align-center pd-10"><span>Mr. Bitcoin</span></RouterLink>
        </section>
        <section class="hamburger-icon" @click="onSetMainMenu(true)">
            <IconHandler :name="ICON_HAMBURGER" />
        </section>
    </section>
</template>


<script>
import { ICON_HAMBURGER } from '../../services/icon-handler.service'
import IconHandler from '../app-reusable/IconHandler.vue'

export default {
    props: { user: Object, required: true },
    computed: {
        ICON_HAMBURGER() { return ICON_HAMBURGER }
    },
    methods: {
        onSetMainMenu(booleanState) {
            this.$emit('setMainMenu', booleanState)
        }
    },
    components: { IconHandler }
}
</script>


<style lang="scss" scoped>
.app-header-mobile {
    & .hamburger-icon {
        // width: 20px;
        // height: 20px;
        padding-inline: 10px;

        &:hover {
            cursor: pointer;
        }
    }
}
</style>