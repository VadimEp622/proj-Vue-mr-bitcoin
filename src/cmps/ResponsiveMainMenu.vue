<template>
    <div class="responsive-main-menu-container" :class="mainMenuClass">
        <div class="responsive-page-content-overlay" @click="onSetMainMenu(false)"></div>
        <section class="main-menu-container">
            <section class="main-menu">
                <p>hi from main-menu</p>
            </section>
        </section>
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
    },
    methods: {
        onSetMainMenu(booleanState) {
            this.$emit('setMainMenu', booleanState)
        }
    }
}
</script>


<style lang="scss">
.responsive-main-menu-container {
    visibility: hidden;
    position: absolute;
    inset: 0;
    overflow: hidden;


    & .responsive-page-content-overlay {
        opacity: 0;
        position: fixed;
        background-color: black;
        inset: 0;
        // z-index: 25;
        // pointer-events: none;
    }

    & .main-menu-container {
        position: absolute;
        right: -280px;
        top: 0;
        bottom: 0;
        width: 280px;
        background-color: green;
    }

    &.main-menu-active {
        visibility: visible;

        & .responsive-page-content-overlay {
            opacity: 0.5;
        }

        & .main-menu-container {
            right: 0;
        }
    }
}
</style>