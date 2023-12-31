<template>
    <footer class="full bg-clr-blue-0" :class="layoutClass">
        <section class="app-footer">
            <h2>Hello From Footer</h2>
        </section>
    </footer>
</template>


<script>
export default {
    props: { layoutClass: String, required: true },
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
    color: rgb(220, 220, 220);

    & h2 {
        margin-block: 0.3em;
        text-align: center;
    }
}
</style>