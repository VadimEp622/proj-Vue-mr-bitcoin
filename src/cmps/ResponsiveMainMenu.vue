<template>
    <div class="responsive-main-menu-container" :class="mainMenuClass">
        <div class="responsive-page-content-overlay" @click="onSetMainMenu(false)"></div>
        <section class="main-menu-container">
            <section class="main-menu">

                <section v-if="loggedinUser" class="logged-in-user-preview">
                    <section class="icon-and-name flex align-center">
                        <section class="user-icon">
                            <IconHandler :name="ICON_DEFAULT_USER" />
                        </section>
                        <section class="user-name">
                            <p class="capitalize">{{ loggedinUser.name }}</p>
                        </section>
                    </section>
                    <section class="balance">
                        <p>Balance: 50$</p>
                    </section>
                </section>

                <nav>
                    <ul>
                        <li>
                            <RouterLink to="/" class="flex align-center pos-rel">
                                <span>Home</span>
                            </RouterLink>
                        </li>
                        <li>
                            <RouterLink to="/trading-data" class="flex align-center pos-rel">
                                <span>Trading</span>
                            </RouterLink>
                        </li>
                        <li>
                            <RouterLink to="/my-profile" class="flex align-center pos-rel">
                                <span>Profile</span>
                            </RouterLink>
                        </li>
                    </ul>
                </nav>

                <section>
                    <section class="logout flex justify-center">
                        <button @click="onLogout">logout</button>
                    </section>
                </section>

            </section>
        </section>
    </div>
</template>


<script>
import { ICON_DEFAULT_USER } from "@/services/icon-handler.service.js"
import IconHandler from "@/cmps/app-reusable/IconHandler.vue"
import { RouterLink } from "vue-router"

export default {
    props: { isMainMenuActive: Boolean, required: true },
    computed: {
        mainMenuClass() {
            return {
                'main-menu-active': this.isMainMenuActive
            }
        },
        loggedinUser() { return this.$store.getters.user },
        ICON_DEFAULT_USER() { return ICON_DEFAULT_USER }
    },
    methods: {
        onLogout() {
            this.$store.dispatch({ type: 'logout' })
            this.onSetMainMenu(false)
        },
        onSetMainMenu(booleanState) {
            this.$emit('setMainMenu', booleanState)
        }
    },
    components: {
        IconHandler,
        RouterLink
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

                & .icon-and-name {
                    gap: 12px;
                    margin-block-end: 16px;

                    & .user-icon {
                        width: 61px;
                        height: 61px;
                    }
                }
            }

            & nav {
                & ul>* {
                    padding-inline: 12px;
                    border-top: 1px solid #2f3138;
                    border-bottom: 1px solid #000000;

                    & span {
                        line-height: 2.5em;
                    }
                }
            }

            & .logout {
                padding-block: 48px;
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