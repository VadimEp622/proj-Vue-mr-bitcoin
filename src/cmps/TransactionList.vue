<template>
    <section class="transaction-list clr-gray-2">
        <h3 class="title text-align-start fw400">Transactions</h3>
        <TransitionGroup v-if="transactions.length !== 0" name="list" tag="ul">
            <li class="transaction-preview-container" v-for="transaction in transactions" :key="transaction._id">
                <TransactionPreview :transaction="transaction" />
            </li>
        </TransitionGroup>
        <p v-else class="no-transactions text-align-center">No Transactions</p>
    </section>
</template>


<script>
import TransactionPreview from '@/cmps/TransactionPreview.vue'

export default {
    props: ["transactions"],
    created() { },
    unmounted() { },
    methods: {},
    components: { TransactionPreview }
}
</script>


<style lang="scss" scoped>
.transaction-list {
    width: 300px;
    min-width: 0;
    max-width: 100%;
    margin-block: 20px;

    & .title {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        padding-block-end: 4px;
        font-size: rem(16px);
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        border-bottom: 1px solid gray;
    }

    & ul {
        display: grid;
        position: relative;
        overflow: hidden;

        & .transaction-preview-container {
            border-bottom: 1px solid gray;
            min-width: 0;
            padding-block: 10px;
        }
    }

    & .no-transactions {
        padding-block: 10px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
}
</style>