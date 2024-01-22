<template>
  <section class="home-page full main-layout clr-gray-3">
    <p v-if="!isLoadingExchangeRate && exchangeRate" class="exchange-rate text-align-center fs18 mg-bl-20">Exchange Rate:
      <span class="fw600 fs25">{{
        exchangeRate }}</span>
    </p>
    <p v-if="user" class="greeting text-align-center fs20 mg-bl-st-20">Welcome, <span
        class="fw600 fs25 clr-gold-0 capitalize">{{
          user.name }}</span></p>
    <p v-if="user" class="balance text-align-center fs18">Your balance: <span class="fw600 fs25 clr-gold-0">{{
      user.balance
    }}</span>
    </p>
    <section class="recent-transactions mg-bl-40 flex column align-center">
      <p class="fs20 underline">Recent transactions:</p>
      <TransactionList :transactions="getRecentTransactions" />
    </section>
  </section>
</template>


<script>
import { mapGetters } from 'vuex'
import { bitcoinService } from '@/services/bitcoin.service.js'
import { showErrorMsg } from '@/services/event-bus.service.js'
import Loader from '@/cmps/app-reusable/Loader.vue'
import { defineAsyncComponent } from 'vue'

export default {
  data() {
    return {
      exchangeRate: null,
      isLoadingExchangeRate: true
    }
  },
  created() {
    this.setExchangeRate()
  },
  computed: {
    ...mapGetters([
      'user',
      'transactions'
    ]),
    getRecentTransactions() {
      return this.transactions.slice(0, 3)
    }
  },
  methods: {
    setExchangeRate() {
      this.isLoadingExchangeRate = true
      bitcoinService.getRate()
        .then(item => {
          this.exchangeRate = item
        })
        .catch(err => {
          console.log('Failed fetching exchange rate', err)
          showErrorMsg('Failed fetching exchange rate')
        })
        .finally(() => {
          this.isLoadingExchangeRate = false
        })
    },
  },
  components: {
    TransactionList: defineAsyncComponent({
      loader: () => import('@/cmps/TransactionList.vue'),
      loadingComponent: Loader
    }),
  }
}
</script>


<style lang="scss" scoped>
.home-page {
  &::before {
    content: '';
    position: absolute;
    height: 400px;
    width: 400px;
    background-image: url('@/assets/imgs/bg-pic/bg-bitcoin2.png');
    background-size: cover;
    z-index: -1;
    justify-self: flex-end;
    // todo: change opacity to .2 on mobile
    opacity: .4;
    margin-inline-end: 10vw;
  }

  & .greeting,
  & .balance {
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
  }

  & .recent-transactions {
    min-width: 0;
    max-width: 100%;

    & p {
      min-width: 0;
      max-width: 100%;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }
}
</style>