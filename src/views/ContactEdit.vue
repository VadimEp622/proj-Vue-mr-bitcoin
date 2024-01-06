<template>
    <section v-if="initialValues" class="contact-edit full main-layout grid align-content-start">
        <section class="return-btn-container flex justify-center">
            <button class="return-btn" @click="onReturn(contactId)">Return</button>
        </section>
        <FormContact :initial-values="initialValues" />
    </section>
    <section v-else class="flex justify-center align-center">
        <span>loading...</span>
    </section>
</template>


<script>
import { mapGetters } from 'vuex'
import FormContact from '../cmps/app-reusable/forms/FormContact.vue'

export default {
    data() {
        return {
            initialValues: null
        }
    },
    created() {
        this.loadContact(this.contactId)
    },
    computed: {
        ...mapGetters([
            'contact',
            'isLoadingContact'
        ]),
        contactId() { return this.$route.params.id; },
        contact() { return this.$store.getters.contact; },
        contactName() { return this.contact.name },
        contactPicture() { return this.contact.picture.large },
        contactPhone() { return this.contact.phone },
        contactEmail() { return this.contact.email },
        ICON_DEFAULT_USER() { return ICON_DEFAULT_USER },
        isContactLoaded() { return !this.isLoadingContact && this.contact },
    },
    watch: {
        isContactLoaded(isContactLoaded) {
            if (isContactLoaded && Object.keys(this.contact).length > 0) {
                this.initialValues = this.contact
            }
        }
    },
    methods: {
        loadContact(contactId) {
            this.$store.dispatch({ type: 'loadContact', contactId })
        },
        redirectTo(pathName) {
            this.$router.push(pathName)
        },
        onReturn(contactId) {
            this.redirectTo(`/contact/${contactId}`)
        },
        onSave(contactId) {
            console.log('Hi from onSave - contactId', contactId)
        },
    },
    components: { FormContact }
}
</script>


<style lang="scss">
.return-btn-container {
    margin-block-start: 20px;
}
</style>