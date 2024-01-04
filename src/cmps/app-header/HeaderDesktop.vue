<template>
    <section class="app-header-desktop flex space-between align-center white-space-nowrap">
        <section class="logo fs34 fw800 clr-gold-0 flex height-100-percent">
            <RouterLink to="/" class="flex align-center pd-10"><span>Mr. Bitcoin</span></RouterLink>
        </section>
        <section v-if="loggedinUser" class="greeting flex align-center gap-10">
            <p>Greetings, <span class="clr-gold-0 fw600">{{ loggedinUser.name }}</span></p>
            <button @click="onLogout">Logout</button>
        </section>
        <nav class="fs25 fw600 clr-gray-0 height-100-percent">
            <ul class="flex height-100-percent">
                <li class="flex">
                    <RouterLink to="/" class="flex align-center pos-rel pd-in-10 pd-bl-15">
                        <span>Home</span>
                    </RouterLink>
                </li>
                <li class="flex">
                    <RouterLink to="/trading" class="flex align-center pos-rel pd-in-10 pd-bl-15">
                        <span>Trading</span>
                    </RouterLink>
                </li>
                <li class="flex">
                    <RouterLink to="/contact" class="flex align-center pos-rel pd-in-10 pd-bl-15">
                        <span>Contacts</span>
                    </RouterLink>
                </li>
                <li class="flex">
                    <RouterLink to="/profile" class="flex align-center pos-rel pd-in-10 pd-bl-15">
                        <span>Profile</span>
                    </RouterLink>
                </li>
                <!-- <li class="flex"><RouterLink to="/about" class="flex align-center pos-rel pd-in-10 pd-bl-15"><span>About</span></RouterLink></li> -->
            </ul>
        </nav>
    </section>
</template>


<script>

export default {
    props: { loggedinUser: Object, required: true },
    methods: {
        onLogout() {
            this.$emit('logout')
        }
    },
}
</script>


<style lang="scss" scoped>
.app-header-desktop {
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
        &:is(.router-link-active, .router-link-exact-active) {
            &::after {
                position: absolute;
                content: "";
                height: 3px;
                width: 100%;
                background-color: #dcdcdc;
                bottom: 0;
                left: 0;
            }
        }

        &:hover {
            background-color: #858f7e;
        }
    }
}
</style>