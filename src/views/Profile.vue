<template>
    <section class="profile-home full details-layout">
        <span class="text-align-center pd-bl-10">Hi from profile!</span>
        <section class="user-intro">

            <section class="picture-container">
                <section class="picture clr-gold-0">
                    <IconHandler :name="ICON_DEFAULT_USER" />
                </section>
            </section>

        </section>
    </section>
</template>


<script>
import { ICON_DEFAULT_USER } from '@/services/icon-handler.service'
import Loader from '@/cmps/app-reusable/loader.vue'
import IconHandler from '@/cmps/app-reusable/IconHandler.vue'

export default {
    created() {
    },
    computed: {
        ICON_DEFAULT_USER() { return ICON_DEFAULT_USER }
    },
    methods: {
    },
    components: { IconHandler, Loader }
}
</script>


<!-- TODO:
I. "get" user into this cmp
II. include balance (USD or Bitcoin currency?)
III. include recent activity/transactions
-->


<style lang="scss" scoped>
.profile-home {
    color: #cccccc;
    padding-block: 20px;

    & .picture {
        margin-inline: auto;
        width: 128px;
        height: 128px;
        border-radius: 50%;
        overflow: hidden;
        max-width: none;
    }
}
</style>