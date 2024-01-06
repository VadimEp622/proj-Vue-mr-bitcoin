<template>
    <section class="contact-index full details-layout">
        <!-- <section>
            <p>Hi from Contact Index</p>
            <p>Here will soon be: add-contact (button) & filter</p>
            <section>
                <button class="btn-create" @click="onCreate">Create</button>
            </section>
        </section> -->
        <section v-if="loggedinUser" class="contact-list-container">
            <ContactList v-if="contacts" @remove="removeContact" :contacts="contacts" />
        </section>
    </section>
</template>

<!-- TODO: 
    see how to add multiple v-ifs in one element 
    |
    V
    cannot add multiple v-ifs conditions on one element, must make a computed showList() func, which will perform the && operation
 -->

<!-- TODO: add CRUD -->


<script>
import ContactList from '@/cmps/ContactList.vue'

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
        onCreate() {
            this.redirectTo('/contact/create')
        },
        redirectTo(pathName) {
            this.$router.push(pathName)
        },
    },
    components: {
        ContactList
    }
}
</script>


<style lang="scss" scoped>
.contact-index {
    align-content: start;

    & .contact-list-container {
        margin-block: 20px;
    }
}
</style>