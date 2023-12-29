<!-- TODO: make CRUDL -->

<template>
    <section v-if="loggedinUser" class="my-profile">
        <section class="greeting flex align-center gap-6">
            <p>Hello, <span>{{ loggedinUser.name }}</span></p>
            <button @click="logout">Logout</button>
        </section>
        <ContactList v-if="contacts" @remove="removeContact" :contacts="contacts" />
    </section>
    <section v-else>
        <p class="text-align-center">No logged-in user</p>
    </section>
</template>


<script>
import ContactList from '../cmps/ContactList.vue'

export default {
    created() {
        this.getContacts()
    },
    watch: {
        loggedinUser(user) {
            if (!user) this.redirectTo('/login')
        }
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
        logout() {
            this.$store.dispatch({ type: 'logout' })
        },
        redirectTo(pathName) {
            this.$router.push(pathName)
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