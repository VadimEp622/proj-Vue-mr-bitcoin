<template>
    <header class="app-header flex space-between align-center bg-clr-blue-0 white-space-nowrap">
        <section class="logo fs34 fw800 clr-gold-0 flex height-100-percent">
            <RouterLink to="/" class="flex align-center pd-10"><span>Mr. Bitcoin</span></RouterLink>
        </section>
        <section v-if="loggedinUser" class="greeting flex align-center gap-10">
            <p>Greetings, <span class="clr-gold-0 fw600">{{ loggedinUser.name }}</span></p>
            <button @click="logout">Logout</button>
        </section>
        <nav class="fs25 fw600 clr-gray-0 height-100-percent">
            <ul class="flex height-100-percent">
                <li class="flex">
                    <RouterLink to="/" class="flex align-center pos-rel pd-in-10 pd-bl-15">
                        <span>Home</span>
                    </RouterLink>
                </li>
                <li class="flex">
                    <RouterLink to="/trading-data" class="flex align-center pos-rel pd-in-10 pd-bl-15">
                        <span>Trading</span>
                    </RouterLink>
                </li>
                <li class="flex">
                    <RouterLink to="/my-profile" class="flex align-center pos-rel pd-in-10 pd-bl-15">
                        <span>Profile</span>
                    </RouterLink>
                </li>
                <!-- <li class="flex"><RouterLink to="/about" class="flex align-center pos-rel pd-in-10 pd-bl-15"><span>About</span></RouterLink></li> -->
            </ul>
        </nav>
    </header>
</template>


<script>
export default {
    watch: {
        loggedinUser(user) {
            if (!user) this.redirectTo('/login')
        }
    },
    computed: {
        loggedinUser() { return this.$store.getters.user }
    },
    methods: {
        logout() {
            this.$store.dispatch({ type: 'logout' })
        },
        redirectTo(pathName) {
            this.$router.push(pathName)
        }
    },
}
</script>


<style lang="scss" scoped>
header {
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
