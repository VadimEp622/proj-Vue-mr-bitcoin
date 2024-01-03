<template>
    <section class="contact-index full main-layout">
        <section>
            <span>Hi from Contact Index</span>
        </section>
        <section v-if="loggedinUser" class="contact-list-container">
            <ContactList v-if="contacts" @remove="removeContact" :contacts="contacts" />
        </section>
    </section>
</template>

<!-- TODO: see how to add multiple v-ifs in one element -->


<script>

import ContactList from '../cmps/ContactIndex/ContactList.vue'

export default {
    created() {
        this.getContacts()
    },
    computed: {
        contacts() { return this.$store.getters.contacts },
        loggedinUser() { return this.$store.getters.user }
    },
    methods: {
        getContacts() {
            this.$store.dispatch({ type: 'loadContacts' })
        },
        removeContact(contactId) {
            this.$store.dispatch({ type: 'removeContact', contactId })
        },
    },
    components: {
        ContactList
    }
}
</script>


<style lang="scss">
.contact-index {
    align-content: start;

    & .contact-list-container{
        margin-block: 20px;
    }
}
</style>