<!-- TODO: make CRUDL -->

<template>
    <section v-if="loggedinUser" class="my-profile">
        <p class="greeting">Hello, <span>{{ loggedinUser.name }}</span></p>
        <ContactList v-if="contacts" @remove="removeContact" :contacts="contacts" />
    </section>
    <section v-else>
        <p class="text-align-center">No logged-in user</p>
    </section>
</template>


<script>
import ContactList from '../cmps/ContactList.vue'
import { contactService } from '../services/contact.service'

export default {
    created() {
        this.getContacts()
        this.getRealContacts()
    },
    computed: {
        contacts() { return this.$store.getters.contacts },
        realContacts() { return this.$store.getters.realContacts },
        loggedinUser() { return this.$store.getters.user }
    },
    methods: {
        getContacts() {
            this.$store.dispatch({ type: 'loadContacts' })
        },
        getRealContacts() {
            this.$store.dispatch({ type: 'loadRealContacts' })
        },
        removeContact(contactId) {
            this.$store.dispatch({ type: 'removeContact', contactId })
        }
    },
    components: { ContactList }
}
</script>


<style lang="scss">
.my-profile {
    padding-inline: 10px;
    padding-block: 20px;

    & .greeting {
        margin-block-end: 20px;
        white-space: nowrap;

        span {
            font-size: 1.5em;
            font-weight: 600;
            color: #baaa51;
        }
    }
}
</style>