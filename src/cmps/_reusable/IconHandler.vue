<template>
    <component :is="iconCmp" alt="no-icon" />
</template>
  

<script>
import { defineAsyncComponent, markRaw } from 'vue'
import { ICON_DEFAULT_USER } from '../../services/icon-handler.service'


export default {
    props: { name: String, required: true },
    data() {
        return {
            iconCmp: null
        }
    },
    created() {
        this.svgIdentifier();
    },
    watch: {
        name: {
            handler() {
                this.svgIdentifier();
            },
            immediate: true
        }
    },
    methods: {
        svgIdentifier() {
            let component
            switch (this.name) {
                case ICON_DEFAULT_USER:
                    component = defineAsyncComponent(() => import(/* @vite-ignore */ `../../assets/imgs/icon/user-nav-profile.svg`))
                    break

                default:
                    component = "img"
                    this.iconCmp = component
                    return
            }
            this.iconCmp = markRaw(component)
        }
    }
}
</script>