<template>
  <section class="home-page full main-layout clr-gray-3">
    <p v-if="!isLoadingExchangeRate && exchangeRate" class="exchange-rate text-align-center fs18 mg-bl-20">Exchange Rate:
      <span class="fw600 fs25">{{
        exchangeRate }}</span></p>
    <p v-if="user" class="greeting text-align-center fs20">Welcome, <span class="fw600 fs25 clr-gold-0 capitalize">{{
      user.name }}</span></p>
    <p v-if="user" class="text-align-center fs20">Your balance: <span class="fw600 fs25 clr-gold-0">{{ user.balance
    }}</span>
    </p>
  </section>
</template>


<!-- TODO: add current bitcoin rate -->
<!-- TODO: add balance -->
<!-- TODO: add 3 latest transactions -->


<script>
import { mapGetters } from 'vuex'
import { bitcoinService } from '@/services/bitcoin.service.js'
import { showErrorMsg } from '@/services/event-bus.service.js'

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
      'user'
    ])
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
    }
  },
}
</script>


<style lang="scss" scoped>
.home-page {
  // color: #cccccc;

  &::before {
    content: '';
    position: absolute;
    height: 400px;
    width: 400px;
    background-image: url('@/assets/imgs/bg-pic/bg-bitcoin2.png');
    background-size: cover;
    z-index: -1;
    justify-self: flex-end;
    opacity: .4;
    margin-inline-end: 10vw;
  }
}
</style>