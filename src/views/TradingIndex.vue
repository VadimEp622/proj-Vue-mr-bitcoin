<template>
    <section class="trading-home full details-layout">
        <p v-if="exchangeRate" class="exchange-rate">Exchange Rate: <span>{{ exchangeRate }}</span></p>
        <section v-if="marketPriceHistory" class="market-price-history">
            <h4>Market Price History:</h4>
            <section class="chart-container">
                <LineChart :datasets="makeDataset" />
            </section>
        </section>
    </section>
</template>


<!--  TODO: 
    fix chart layout responsiveness (responsive only on refresh/route change at the moment)
-->


<script>
import { bitcoinService } from '@/services/bitcoin.service'
import LineChart from '@/cmps/TradingLineChart.vue'

export default {
    data() {
        return {
            exchangeRate: null,
            marketPriceHistory: null,
        }
    },
    created() {
        this.setExchangeRate()
        this.setMarketPriceHistory()
    },
    unmounted() { },
    methods: {
        setExchangeRate() {
            bitcoinService.getRate()
                .then(item => {
                    this.exchangeRate = item
                })
        },
        setMarketPriceHistory() {
            bitcoinService.getMarketPriceHistory()
                .then(item => {
                    this.marketPriceHistory = item
                })
        }
    },
    computed: {
        makeDataset() {
            const label = this.marketPriceHistory.description
            const styling = {
                backgroundColor: '#64CCC5',
                radius: 4,
            }
            const data = this.marketPriceHistory.values.map(value => {
                return {
                    x: new Date(value.x * 1000),
                    y: value.y,
                }
            })
            console.log('data', data)
            return [{ label, data, ...styling }]
        }
    },
    components: {
        LineChart,
    }
}
</script>


<style lang="scss">
.trading-home {
    & .exchange-rate {
        text-align: center;
        margin-block-start: 1.33em;

        & span {
            font-size: 1.5em;
            font-weight: 600;
        }
    }

    & .market-price-history {
        & h4 {
            text-align: center;
            text-decoration: underline;
        }

        & span {
            font-size: 1.5em;
            font-weight: 600;
        }

        & .chart-container {
            padding-block: 20px;
            // width: 95vw;
            width: 100%;

            max-width: 1400px;
            margin-inline: auto;
        }
    }
}
</style>