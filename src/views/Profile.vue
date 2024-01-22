<template>
    <section class="profile-home full details-layout clr-gray-3 align-baseline">
        <section class="user-intro mg-bl-20">

            <section class="picture-container">
                <section class="picture clr-gold-0">
                    <IconHandler :name="ICON_DEFAULT_USER" />
                </section>
            </section>

            <section class="name mg-bl-st-10 text-align-center fw600 fs25 clr-gold-0">
                <p>{{ user.name }}</p>
            </section>

            <section class="balance flex gap-5 fs18 justify-center align-baseline">
                <p class="capitalize">balance:</p>
                <p class="fs25 fw600 clr-gold-0">{{ user.balance }}</p>
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
import TransactionList from '@/cmps/TransactionList.vue'

export default {
    computed: {
        ...mapGetters([
            'user',
            'transactions'
        ]),
        ICON_DEFAULT_USER() { return ICON_DEFAULT_USER }
    },
    components: { IconHandler, Loader, TransactionList }
}
</script>


<!-- TODO: add option to refill balance -->


<style lang="scss" scoped>
.profile-home {
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

        & .name,
        & .balance {
            font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
        }

        & p {
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
        }
    }

}
</style>