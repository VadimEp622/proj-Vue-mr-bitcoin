<template>
    <section class="trading-home full details-layout">
        <p v-if="exchangeRate" class="exchange-rate">Exchange Rate: <span>{{ exchangeRate }}</span></p>
        <section v-if="marketPriceHistory" class="market-price-history">
            <h4 class="fw400">{{ marketPriceHistory.description }}</h4>
            <section class="chart-container">
                <LineChart :datasets="makeDataset" />
            </section>
        </section>
    </section>
</template>


<script>
import { bitcoinService } from '@/services/bitcoin.service'
import LineChart from '@/cmps/TradingChart.vue'

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
            const label = 'Average'
            const styling = {
                backgroundColor: (ctx) => {
                    const canvas = ctx.chart.ctx
                    const gradient = canvas.createLinearGradient(0, 0, 0, ctx.chart.height / 1.5)

                    gradient.addColorStop(0, 'rgba(75, 192, 19, .4)')
                    gradient.addColorStop(.5, 'rgba(75, 192, 19, .2)')
                    gradient.addColorStop(1, 'transparent')

                    return gradient
                },
                radius: 0,
                pointHoverRadius: 5,
                borderColor: 'rgba(75, 192, 19, .8)',
                pointBackgroundColor: 'rgba(75, 192, 19, .8)',
                fill: true,
            }
            const data = this.marketPriceHistory.values.map(value => {
                return {
                    x: new Date(value.x * 1000),
                    y: value.y,
                }
            })
            // console.log('data', data)
            return [{ label, data, ...styling }]
        }
    },
    components: {
        LineChart
    }
}
</script>


<style lang="scss">
.trading-home {
    color: rgb(220, 220, 220);

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
            font-size: rem(22px);
            font-family: "Google Sans", Roboto, Arial, sans-serif;
            padding-block-end: 12px;
            margin-block: 20px;
            border-bottom: 1px solid rgba(232, 234, 237, .5);
        }

        & span {
            font-size: 1.5em;
            font-weight: 600;
        }

        & .chart-container {
            position: relative;
            min-height: 150px;
            height: 60vw;
            max-height: 600px;
            width: 90vw;
            max-width: 1000px;
            margin-inline: auto;
        }
    }
}
</style>