<template>
    <section v-if="initialValues" class="contact-edit full main-layout grid align-content-start">
        <section class="return-btn-container flex justify-center">
            <button class="return-btn" @click="onReturn(contactId)">Return</button>
        </section>
        <FormContact :initial-values="initialValues" @onSubmit="onSave" />
        <section v-if="isFormSubmitted" class="submit-modal flex justify-center align-center">
            <span>Submitting...</span>
        </section>
    </section>
    <section v-else class="flex justify-center align-center">
        <span>Loading...</span>
    </section>
</template>


<script>
import { mapGetters } from 'vuex'
import FormContact from '@/cmps/app-reusable/forms/FormContact.vue'

export default {
    data() {
        return {
            initialValues: null,
            isFormSubmitted: false
        }
    },
    created() {
        this.loadContact(this.contactId)
    },
    computed: {
        ...mapGetters([
            'contact',
            'isLoadingContact',
            'isUpdatingContacts'
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
        },
        isUpdatingContacts(isUpdatingContacts) {
            if (this.isFormSubmitted && !isUpdatingContacts) {
                this.onReturn(this.contactId)
            }
        }
    },
    methods: {
        loadContact(contactId) {
            this.$store.dispatch({ type: 'loadContact', contactId })
        },
        updateContact(contact) {
            this.$store.dispatch({ type: 'updateContact', contact })
        },
        redirectTo(pathName) {
            this.$router.push(pathName)
        },
        onReturn(contactId) {
            this.redirectTo(`/contact/${contactId}`)
        },
        onSave(contact) {
            // console.log('Hi from onSave - contact', contact)
            this.isFormSubmitted = true
            this.updateContact(contact)
        },
    },
    components: { FormContact }
}
</script>


<style lang="scss">
.return-btn-container {
    margin-block-start: 20px;
}

.submit-modal{
    margin-block-start: 20px;
}
</style>