<template>
    <Line id="my-chart-id" :options="chartOptions" :data="chartData" :plugins="chartPlugins" />
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
    Filler
} from 'chart.js'
import 'chartjs-adapter-date-fns' // Import the date adapter you want to use, such as 'chartjs-adapter-date-fns'

ChartJS.register(LinearScale, PointElement, Tooltip, Legend, TimeScale, LineElement, Filler)

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
                maintainAspectRatio: false,
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
                },
                interaction: {
                    intersect: false,
                    mode: 'index',
                },
            },
            chartPlugins: [{
                id: 'hoverLine',
                afterDraw(chart) {
                    if (chart.tooltip?._active?.length) {
                        let x = chart.tooltip._active[0].element.x
                        let yAxis = chart.scales.y
                        let ctx = chart.ctx
                        ctx.save()
                        ctx.beginPath()
                        ctx.moveTo(x, yAxis.top)
                        ctx.lineTo(x, yAxis.bottom)
                        ctx.lineWidth = 2
                        ctx.strokeStyle = 'rgba(22, 143, 255, 0.4)'
                        ctx.stroke()
                        ctx.restore()
                    }
                }
            }]
        }
    },
    created() {
        this.chartData.datasets = this.datasets
    }
}
</script>