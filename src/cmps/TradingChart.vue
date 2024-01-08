<template>
    <Line id="my-chart-id" :options="chartOptions" :data="chartData" />
</template>


<script>
import { Line } from 'vue-chartjs'
import {
    Chart as ChartJS,
    Tooltip,
    Legend,
    PointElement,
    LinearScale,
    TimeScale,
    LineElement,
} from 'chart.js'
import 'chartjs-adapter-date-fns' // Import the date adapter you want to use, such as 'chartjs-adapter-date-fns'

ChartJS.register(LinearScale, PointElement, Tooltip, Legend, TimeScale, LineElement)

export default {
    props: ['datasets'],
    name: 'LineChart',
    components: { Line },
    data() {
        return {
            chartData: {
                datasets: []
            },
            chartOptions: {
                responsive: true,
                maintainAspectRatio: true,
                plugins: {
                    legend: {
                        labels: {
                            color: 'rgb(220, 220, 220)',
                        }
                    }
                },
                scales: {
                    x: {
                        type: 'time',
                        time: {
                            unit: 'day',
                        },
                        ticks: {
                            color: 'rgb(220, 220, 220)',
                        },
                    },
                    y: {
                        ticks: {
                            color: 'rgb(220, 220, 220)',
                        },
                    }
                }
            }
        }
    },
    created() {
        this.chartData.datasets = this.datasets
    }
}
</script>