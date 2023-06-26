<script>

export default {
    props: ['contact'],
    data() {
        return {}
    },
    created() { },
    unmounted() { },
    methods: {}
}
</script>

<template>
    <section class="content">
        <p>Name: <span> {{ contact.name }}</span></p>
        <p>Mail: <span> {{ contact.email }}</span></p>
        <p>Phone: <span> {{ contact.phone }}</span></p>
    </section>
    <section class="buttons">
        <button>Details</button>
        <button>Remove</button>
    </section>
</template>

<style lang="scss">

</style>