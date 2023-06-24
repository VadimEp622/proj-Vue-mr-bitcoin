<script>
import { Bubble } from 'vue-chartjs'
import {
    Chart as ChartJS,
    Tooltip,
    Legend,
    PointElement,
    LinearScale
} from 'chart.js'

ChartJS.register(LinearScale, PointElement, Tooltip, Legend)

export default {
    props: ['datasets'],
    name: 'BubbleChart',
    components: { Bubble },
    data() {
        return {
            chartData: {
                datasets: []
            },
            chartOptions: {
                responsive: true
            }
        }
    },
    created() {
        this.chartData.datasets = this.datasets
    }
}
</script>

<template>
    <Bubble id="my-chart-id" :options="chartOptions" :data="chartData" />
</template>