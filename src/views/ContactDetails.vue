<template>
    <section>
        <span>
            hi from contact details
        </span>
    </section>
</template>


<script>
export default {
    data() {
        return {}
    },
    created() {
        this.loadContact(this.contactId)
    },
    computed: {
        contactId() {
            return this.$route.params.id
        }
    },
    methods: {
        loadContact(contactId) {
            this.$store.dispatch({ type: 'loadContact', contactId })
        }
    }
}
</script>


<style lang="scss"></style>