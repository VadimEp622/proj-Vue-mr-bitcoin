<template>
    <footer class="full bg-clr-black clr-gray-2" :class="layoutClass">
        <section class="app-footer">
            <h2 class="fw400">© Mr. Bitcoin. No Rights Reserved</h2>
        </section>
    </footer>
</template>


<script>
export default {
    props: { layoutClass: Object, required: true },
    data() {
        return {}
    },
    created() { },
    unmounted() { },
    methods: {}
}
</script>


<style lang="scss" scoped>
footer {
    & h2 {
        // margin-block: 0.3em;
        text-align: center;
        font-size: rem(16px);
    }
}
</style>