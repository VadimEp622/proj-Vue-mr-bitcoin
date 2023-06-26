<script>

import ContactPreview from './ContactPreview.vue'

export default {
    props: ["contacts"],
    data() {
        return {}
    },
    created() {
    },
    unmounted() { },
    methods: {
        onDetails(contactId) {
            console.log('hello from contactId', contactId)
        },
        onRemove(contactId) {
            this.$emit('remove', contactId)
        }
    },
    components: { ContactPreview }
}
</script>

<template>
    <section v-if="contacts" class="contacts">
        <p>Contacts:</p>
        <ul>
            <li v-for="contact in contacts">
                <ContactPreview :contact="contact" :key="contact._id" />
                <section class="buttons">
                    <button @click="onDetails(contact._id)">Details</button>
                    <button @click="onRemove(contact._id)">Remove</button>
                </section>
            </li>
        </ul>
    </section>
</template>

<style lang="scss"></style>