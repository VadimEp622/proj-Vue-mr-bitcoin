<template>
    <section class="trading-home full details-layout">
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
            marketPriceHistory: null,
        }
    },
    created() {
        this.setMarketPriceHistory()
    },
    unmounted() { },
    methods: {
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

                // pointRadius: 1,// Radius of small point
                pointBorderWidth: 0,// Width of small point's border
                // pointHoverRadius: 1,// Radius of small point when hovered
                // pointHoverBorderWidth: 200,// Width of small point's border when hovered
                // pointHitRadius: 200,
                // pointStyle: 'line',
                // borderColor: 'rgba(75, 192, 19, .8)',
                // pointBorderColor: 'transparent',
                // pointHoverBorderColor: 'white',
                

                borderColor: 'rgba(75, 192, 19, .8)',
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