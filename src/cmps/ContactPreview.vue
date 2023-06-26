<script>
export default {
    props: ['contact']
}
</script>

<template>
    <section class="content">
        <p>Name: <span> {{ contact.name }}</span></p>
        <p>Mail: <span> {{ contact.email }}</span></p>
        <p>Phone: <span> {{ contact.phone }}</span></p>
    </section>
</template>