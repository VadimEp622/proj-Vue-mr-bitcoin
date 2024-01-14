<template>
    <section class="app-header-desktop flex space-between align-center">
        <section class="logo fs34 fw800 clr-gold-0 flex height-100-percent">
            <RouterLink to="/" class="flex align-center pd-bl-10 pd-in-ed-10"><span>Mr. Bitcoin</span></RouterLink>
        </section>
        <section v-if="user" class="greeting flex align-center gap-10">
            <p>Greetings, <span class="clr-gold-0 fw600">{{ user.name }}</span></p>
            <button @click="onLogout">Logout</button>
        </section>
        <nav class="fw600 clr-gray-0 height-100-percent">
            <ul class="flex height-100-percent">
                <li class="flex align-center">
                    <RouterLink to="/" class="flex align-center pos-rel pd-in-10 pd-bl-st-15 pd-bl-ed-5">
                        <span>Home</span>
                    </RouterLink>
                </li>
                <li class="flex align-center">
                    <RouterLink to="/trading" class="flex align-center pos-rel pd-in-10 pd-bl-st-15 pd-bl-ed-5">
                        <span>Trading</span>
                    </RouterLink>
                </li>
                <li class="flex align-center">
                    <RouterLink to="/contact" class="flex align-center pos-rel pd-in-10 pd-bl-st-15 pd-bl-ed-5">
                        <span>Contacts</span>
                    </RouterLink>
                </li>
                <li class="flex align-center">
                    <RouterLink to="/profile" class="flex align-center pos-rel pd-in-10 pd-bl-st-15 pd-bl-ed-5">
                        <span>Profile</span>
                    </RouterLink>
                </li>
                <!-- <li class="flex"><RouterLink to="/about" class="flex align-center pos-rel pd-in-10 pd-bl-st-15 pd-bl-ed-5"><span>About</span></RouterLink></li> -->
            </ul>
        </nav>
    </section>
</template>


<script>

export default {
    props: { user: Object, required: true },
    methods: {
        onLogout() {
            this.$emit('logout')
        }
    },
}
</script>


<style lang="scss" scoped>
.app-header-desktop {
    height: 100px;

    & .greeting {
        font-size: 18px;
        word-spacing: 4px;
        color: #001c30;
        font-weight: 600;

        background-color: #176b87;
        border-radius: 3px;
        padding: 0 4px;
        outline: 1px solid rgba(255, 215, 0, 0.5);



        & p {
            text-transform: capitalize;

            & span {
                font-size: 26px;
            }
        }
    }

    & nav a {
        font-size: rem(20px);
        & span {
            position: relative;
        }

        &:is(.router-link-active, .router-link-exact-active) span {
            color: #1a9fff;

            &::after {
                position: absolute;
                content: "";
                height: 3px;
                width: 100%;
                background-color: #1a9fff;
                bottom: -2px;
                left: 0;
            }
        }

        &:hover {
            color: lighten(#dcdcdc, 10%);
        }
    }
}
</style>