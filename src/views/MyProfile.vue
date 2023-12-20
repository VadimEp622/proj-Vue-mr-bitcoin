<script>
import ContactList from '../cmps/ContactList.vue'

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
        }
    },
    components: { ContactList }
}
</script>

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


<style lang="scss">
.my-profile {
    padding-inline: 10px;

    & .greeting {
        padding-block: 20px;
        white-space: nowrap;

        span {
            font-size: 1.5em;
            font-weight: 600;
            color: #baaa51;
        }
    }
}
</style>