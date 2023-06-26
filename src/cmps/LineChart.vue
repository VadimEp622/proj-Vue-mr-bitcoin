<script>
import { Bubble } from 'vue-chartjs'
import {
    Chart as ChartJS,
    Tooltip,
    Legend,
    PointElement,
    LinearScale,
    TimeScale,
} from 'chart.js'
import 'chartjs-adapter-date-fns'; // Import the date adapter you want to use, such as 'chartjs-adapter-date-fns'

ChartJS.register(LinearScale, PointElement, Tooltip, Legend, TimeScale)

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
                responsive: true,
                scales: {
                    x: {
                        type: 'time',
                        time: {
                            unit: 'day',
                        },
                    },
                }
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
