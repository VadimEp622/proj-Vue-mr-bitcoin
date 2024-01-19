<template>
    <section class="profile-home full details-layout">
        <section class="user-intro">

            <section class="picture-container">
                <section class="picture clr-gold-0">
                    <IconHandler :name="ICON_DEFAULT_USER" />
                </section>
            </section>

            <section class="name text-align-center clr-gold-0">
                <p>{{ user.name }}</p>
            </section>

            <section class="balance flex gap-10 justify-center">
                <p>Balance:</p>
                <p>{{ user.balance }}</p>
            </section>

            <TransactionList :transactions="transactions" />

            <!-- <pre>{{ JSON.stringify(user, null, 2) }}</pre> -->
        </section>
    </section>
</template>


<script>
import { ICON_DEFAULT_USER } from '@/services/icon-handler.service'
import Loader from '@/cmps/app-reusable/loader.vue'
import IconHandler from '@/cmps/app-reusable/IconHandler.vue'
import { mapGetters } from 'vuex'
import TransactionList from '../cmps/TransactionList.vue'

export default {
    created() {
    },
    computed: {
        ...mapGetters([
            'user',
            'transactions'
        ]),
        ICON_DEFAULT_USER() { return ICON_DEFAULT_USER }
    },
    methods: {
    },
    components: { IconHandler, Loader, TransactionList }
}
</script>


<!-- TODO:
I. add option to refill balance
II. ✔ add ability to see recent transactions with specific contact in contact-details
III. add ability to see last 3 items in transaction-list (make new cmp) in home-page
-->


<style lang="scss" scoped>
.profile-home {
    justify-items: center;
    color: #cccccc;
    padding-block: 20px;
    justify-items: center;

    & .user-intro {
        min-width: 0;
        max-width: 100%;

        & .picture {
            margin-inline: auto;
            width: 128px;
            height: 128px;
            border-radius: 50%;
            overflow: hidden;
            max-width: none;
        }

        & .name {
            font-size: rem(30px);
            font-weight: 600;
        }

        & .balance>*:first-child {
            align-self: center;
        }

        & .balance>*:last-child {
            font-size: rem(25px);
            font-weight: 600;
        }

        & p {
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
        }
    }

}
</style>