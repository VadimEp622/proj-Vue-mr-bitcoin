<template>
    <div class="responsive-main-menu-container" :class="mainMenuClass">
        <div class="responsive-page-content-overlay" @click="onSetMainMenu(false)"></div>
        <section class="main-menu-container">
            <section class="main-menu">

                <section v-if="user" class="logged-in-user-preview">
                    <section class="icon-and-name flex align-center">
                        <section class="user-icon clr-gold-0">
                            <IconHandler :name="ICON_DEFAULT_USER" />
                        </section>
                        <section class="user-name">
                            <p class="capitalize clr-gold-0 fw600">{{ user.name }}</p>
                        </section>
                    </section>
                    <section class="balance">
                        <p>Balance: {{ user.balance }}</p>
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
                            <RouterLink to="/trading" class="flex align-center pos-rel">
                                <span>Trading</span>
                            </RouterLink>
                        </li>
                        <li>
                            <RouterLink to="/contact" class="flex align-center pos-rel">
                                <span>Contacts</span>
                            </RouterLink>
                        </li>
                        <li>
                            <RouterLink to="/profile" class="flex align-center pos-rel">
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
import { mapActions, mapGetters } from "vuex"

export default {
    props: { isMainMenuActive: Boolean, required: true },
    computed: {
        ...mapGetters([
            'user'
        ]),
        mainMenuClass() {
            return {
                'main-menu-active': this.isMainMenuActive
            }
        },
        ICON_DEFAULT_USER() { return ICON_DEFAULT_USER }
    },
    methods: {
        ...mapActions([
            'logout'
        ]),
        onLogout() {
            this.logout()
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
    position: fixed;
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    transition: visibility .2s ease-in-out;

    & .responsive-page-content-overlay {
        width: 100%;
        height: 100%;
        opacity: 0;
        background-color: black;
        transition: opacity .2s ease-in-out;
    }

    & .main-menu-container {
        color: #9b9b9b;
        position: absolute;
        right: -280px;
        top: 0;
        height: 100%;
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

                    & .user-name{
                        font-size: rem(20px);
                    }
                }
            }

            & nav {
                & ul>* a {
                    padding-inline: 12px;
                    border-top: 1px solid #2f3138;
                    border-bottom: 1px solid #000000;
                    position: relative;

                    & span {
                        line-height: 2.5em;
                    }

                    &:hover {
                        box-shadow: 0px 0px 8px rgba(255, 255, 255, 0.1);
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