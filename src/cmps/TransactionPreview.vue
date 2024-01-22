<template>
    <section class="transaction-preview flex space-between gap-10">
        <section class="flex align-center">
            <p v-if="isUserSent">{{ transactionReceiverName }}</p>
            <p v-else>{{ transactionSenderName }}</p>
        </section>
        <section class="flex gap-10 align-center">
            <p>{{ transactionAmount }}</p>
            <span v-if="isUserSent" class="clr-red-1 fs20 fw800">-</span>
            <span v-else class="clr-green-0 fs20">+</span>
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
        transactionSenderName() { return this.transaction.content.sender.senderName },
        transactionAmount() { return this.transaction.content.amount },
        isUserSent() { return this.user._id === this.transaction.content.sender.senderId }
    },
    methods: {}
}
</script>


<style lang="scss">
.transaction-preview {
    margin-inline: 20px;

    &>* {
        min-width: 0;
    }

    & p {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
}
</style>