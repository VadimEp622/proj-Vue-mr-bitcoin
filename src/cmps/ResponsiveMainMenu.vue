<template>
    <div class="responsive-main-menu-container" :class="mainMenuClass">
        <div class="responsive-page-content-overlay" @click="onSetMainMenu(false)"></div>
        <section class="main-menu-container">
            <section class="main-menu">
                <section class="logged-in-user-preview">
                    <p>hi from logged-in-user-preview</p>
                </section>

                <nav>
                    <ul>
                        <li>
                            <p>route 1</p>
                        </li>
                        <li>
                            <p>route 2</p>
                        </li>
                        <li>
                            <p>route 3</p>
                        </li>
                    </ul>
                </nav>

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
    transition: visibility .2s ease-in-out;


    & .responsive-page-content-overlay {
        opacity: 0;
        position: fixed;
        background-color: black;
        inset: 0;
        transition: opacity .2s ease-in-out;
        // z-index: 25;
        // pointer-events: none;
    }

    & .main-menu-container {
        color: #9b9b9b;
        position: absolute;
        right: -280px;
        top: 0;
        bottom: 0;
        width: 280px;
        background: linear-gradient(225deg, #122f44 0%, #021522 33%);
        transition: right .2s ease-in-out;

        & .main-menu {
            & .logged-in-user-preview {
                padding-block: 24px;
                padding-inline: 12px;
            }

            & nav {
                & ul>* {
                    padding-inline: 12px;
                    border-top: 1px solid #2f3138;
                    border-bottom: 1px solid #000000;
                }
            }
        }
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