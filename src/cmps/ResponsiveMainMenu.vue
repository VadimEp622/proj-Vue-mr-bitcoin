<template>
    <div class="responsive-main-menu-container" :class="mainMenuClass">
        <div class="responsive-page-content-overlay"></div>
    </div>
</template>


<script>

export default {
    props: { isMainMenuActive: Boolean, required: true },
    computed: {
        mainMenuClass() {
            return {
                'main-menu-active': this.isMainMenuActive
            }
        }
    }
}
</script>


<style lang="scss">
.responsive-main-menu-container {
    position: absolute;
    inset: 0;

    &:not(.active) {
        visibility: hidden;
    }

    & .responsive-page-content-overlay {
        opacity: 1;
        position: fixed;
        inset: 0;
        z-index: 25;
        // pointer-events: none;
    }
}
</style>