<template>
    <section class="loader full flex justify-center align-center mg-bl-st-20">
        <svg viewBox="0 0 120 30" xmlns="http://www.w3.org/2000/svg" :fill="color" :width="width" :height="height">
            <circle cx="15" cy="15" r="15">
                <animate attributeName="r" from="15" to="15" begin="0s" dur="0.8s" values="15;9;15" calcMode="linear"
                    repeatCount="indefinite" />
                <animate attributeName="fill-opacity" from="1" to="1" begin="0s" dur="0.8s" values="1;.5;1"
                    calcMode="linear" repeatCount="indefinite" />
            </circle>
            <circle cx="60" cy="15" r="9" fill-opacity="0.3">
                <animate attributeName="r" from="9" to="9" begin="0s" dur="0.8s" values="9;15;9" calcMode="linear"
                    repeatCount="indefinite" />
                <animate attributeName="fill-opacity" from="0.5" to="0.5" begin="0s" dur="0.8s" values=".5;1;.5"
                    calcMode="linear" repeatCount="indefinite" />
            </circle>
            <circle cx="105" cy="15" r="15">
                <animate attributeName="r" from="15" to="15" begin="0s" dur="0.8s" values="15;9;15" calcMode="linear"
                    repeatCount="indefinite" />
                <animate attributeName="fill-opacity" from="1" to="1" begin="0s" dur="0.8s" values="1;.5;1"
                    calcMode="linear" repeatCount="indefinite" />
            </circle>
        </svg>
    </section>
</template>
  
<script>
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'dots',
    props: {
        color: {
            type: String,
            default: '#8f98a0'
        },
        height: {
            type: Number,
            default: 30
        },
        width: {
            type: Number,
            default: 60
        }
    }
})
</script>