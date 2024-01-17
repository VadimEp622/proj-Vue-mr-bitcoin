<template>
    <section class="profile-home full details-layout">
        <section class="user-intro">

            <section class="picture-container">
                <section class="picture clr-gold-0">
                    <IconHandler :name="ICON_DEFAULT_USER" />
                </section>
            </section>

            <section class="name text-align-center">
                <span>{{ user.name }}</span>
            </section>

            <section class="balance flex gap-10 justify-center">
                <p>Balance:</p>
                <span>{{ user.balance }}</span>
            </section>

            <pre>{{ JSON.stringify(user, null, 2) }}</pre>
        </section>
    </section>
</template>


<script>
import { ICON_DEFAULT_USER } from '@/services/icon-handler.service'
import Loader from '@/cmps/app-reusable/loader.vue'
import IconHandler from '@/cmps/app-reusable/IconHandler.vue'
import { mapGetters } from 'vuex'

export default {
    created() {
    },
    computed: {
        ...mapGetters([
            'user'
        ]),
        ICON_DEFAULT_USER() { return ICON_DEFAULT_USER }
    },
    methods: {
    },
    components: { IconHandler, Loader }
}
</script>


<!-- TODO:
I. include recent activity/transactions
II. add option to refill balance
III. add ability to see recent transactions with specific contact in contact-details
IV. add ability to see last 3 items in transaction-list (make new cmp) in home-page
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