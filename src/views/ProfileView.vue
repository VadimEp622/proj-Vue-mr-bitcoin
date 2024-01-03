<!-- TODO: make CRUDL -->

<!-- TODO: check how to have multiple v-ifs on 1 cmp -->

<!-- TODO:
I. on entering /profile route:
    1) get current logged in user object from store ✔
    2) on loading, will display logged in user pic + name + balance + various statistics & info about me, which will be the /profile/my-details route

II. make side navbar on the left, for routing between nested children (/profile/contacts, /profile/my-details) inside profile (/profile) route 
    1) left sidebar will navigate between routes
    2) right will have main content, aka contact-list or my-details
-->

<template>
    <section class="profile-home full details-layout">
        <section v-if="loggedinUser">
            <ContactList v-if="contacts" @remove="removeContact" :contacts="contacts" />
        </section>
        <section v-else>
            <p class="text-align-center">No logged-in user</p>
        </section>
    </section>
</template>


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
        },
    },
    components: { ContactList }
}
</script>


<style lang="scss">
.profile-home {
    // padding-inline: 10px;
    padding-block: 20px;
}
</style>