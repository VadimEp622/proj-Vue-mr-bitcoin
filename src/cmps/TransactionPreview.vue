<template>
    <section class="transaction-preview flex space-between gap-10">
        <section class="flex align-center">
            <p>{{ transactionReceiverName }}</p>
        </section>
        <section class="flex gap-10 align-center">
            <p>{{ transactionAmount }}</p>
            <span v-if="isUserSent" class="clr-red-1 fs25">-</span>
            <span v-else class="clr-green-0">+</span>
        </section>
    </section>
</template>


<script>
import { mapGetters } from 'vuex'

export default {
    props: ['transaction'],
    computed: {
        ...mapGetters([
            'user'
        ]),
        ICON_DEFAULT_USER() { return ICON_DEFAULT_USER },
        transactionReceiverName() { return this.transaction.content.receiver.receiverName },
        transactionAmount() { return this.transaction.content.amount },
        isUserSent() { return this.user._id === this.transaction.content.sender.senderId }
    },
    methods: {}
}
</script>


<style lang="scss">
.transaction-preview {
    margin-inline: 20px;

    & p {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
}
</style>