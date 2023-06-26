<script>
import { bitcoinService } from '../services/bitcoin.service'

import LineChart from '../cmps/LineChart.vue'


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

<template>
    <section class="trading-data">
        <p v-if="exchangeRate" class="exchange-rate">Exchange Rate: <span>{{ exchangeRate }}</span></p>
        <section v-if="marketPriceHistory" class="market-price-history">
            <h4>Market Price History:</h4>
            <!-- <p>Unit: <span>{{ marketPriceHistory.unit }}</span></p> -->
            <!-- <p>Period: <span>{{ marketPriceHistory.period }}</span></p> -->
            <!-- <p>Description: <span>{{ marketPriceHistory.description }}</span></p> -->

            <!-- <LineChart :datasets="[{ label: 'USD, Day', data: marketPriceHistory.values }]" /> -->
            <section class="chart-container">
                <LineChart :datasets="makeDataset" />
            </section>
        </section>
    </section>
</template>

<style lang="scss">
.trading-data {
    & .exchange-rate {
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
            width: 800px;
            margin-inline: auto;
        }
    }
}
</style>