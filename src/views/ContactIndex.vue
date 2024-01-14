<template>
    <section class="contact-index full details-layout">
        <section class="create-filter-container flex justify-center">
            <button class="btn-create" @click="onCreate">New contact</button>
            <!-- Here will soon be filter -->
        </section>
        <section v-if="user" class="contact-list-container">
            <ContactList v-if="isContactsLoaded" @remove="removeContact" :contacts="contacts" />
            <Loader v-else />
        </section>
    </section>
</template>


<!-- Note: 
    cannot add multiple v-ifs conditions on one element,
    must make a computed showList() func, which will perform the && operation
 -->

<!-- TODO: add CRUD -->


<script>
import { mapGetters, mapActions } from 'vuex'
import ContactList from '@/cmps/ContactList.vue'
import Loader from '@/cmps/app-reusable/loader.vue'

export default {
    created() {
        this.loadContacts()
    },
    computed: {
        ...mapGetters([
            'contacts',
            'isContactsLoaded',
            'user'
        ]),
        // loggedinUser() { return this.$store.getters.user }
    },
    methods: {
        ...mapActions([
            'loadContacts',
            'removeContact'
        ]),
        onCreate() {
            this.redirectTo('/contact/create')
        },
        redirectTo(pathName) {
            this.$router.push(pathName)
        },
    },
    components: {
        ContactList,
        Loader
    }
}
</script>


<style lang="scss" scoped>
.contact-index {
    // align-content: start;

    & .create-filter-container {
        margin-block: 20px;
    }

    & .contact-list-container {
        overflow: hidden;
        margin-block: 20px;
    }
}
</style>