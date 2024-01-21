<template>
    <section class="contact-index full details-layout">

        <section class="create-filter-container flex justify-center">
            <button class="btn-create" @click="onCreate">New contact</button>
            <!-- Here will soon be filter -->
        </section>

        <section class="pagination-buttons-container flex justify-center">
            <button v-for="page in pagesArray" :key="page" @click="onChangePage(page)">{{ page }}</button>
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


<script>
import { mapGetters, mapActions } from 'vuex'
import Loader from '@/cmps/app-reusable/loader.vue'
import Mixin from '@/mixin'
import { defineAsyncComponent } from 'vue'

export default {
    data() {
        return {
            activePage: 1,
        }
    },
    created() {
        this.loadContacts({
            activePage: this.activePage
        })
    },
    computed: {
        ...mapGetters([
            'contacts',
            'isContactsLoaded',
            'totalContactPageCount',
            'user'
        ]),
        pagesArray() {
            return Array.from({ length: this.totalContactPageCount }, (_, i) => i + 1);
        }
    },
    methods: {
        ...mapActions([
            'loadContacts',
            'removeContact'
        ]),
        onChangePage(newPage) {
            this.activePage = newPage
        },
        onCreate() {
            this.redirectTo('/contact/create')
        },
    },
    watch: {
        activePage(activePage) {
            // console.log('watcher - activePage', activePage)
            this.loadContacts({
                activePage
            })
        }
    },
    mixins: [Mixin],
    components: {
        ContactList: defineAsyncComponent({
            loader: () => import('@/cmps/ContactList.vue'),
            loadingComponent: Loader
        }),
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