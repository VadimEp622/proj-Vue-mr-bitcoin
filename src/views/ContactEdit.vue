<template>
    <section v-if="initialValues" class="contact-edit-container full main-layout">
        <section class="contact-edit">
            <section class="return-btn-container flex justify-start">
                <button class="return-btn" @click="onReturn(contactId)">Return</button>
            </section>
            <FormContact :initial-values="initialValues" @onSubmit="onSave" />
            <section v-if="isFormSubmitted" class="submit-modal flex justify-center align-center">
                <span>Submitting...</span>
            </section>
        </section>
    </section>
    <section v-else class="loader">
        <Loader />
    </section>
</template>


<script>
import { mapGetters } from 'vuex'
import FormContact from '@/cmps/app-reusable/forms/FormContact.vue'
import Loader from '@/cmps/app-reusable/loader.vue'

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
            'isContactLoaded',
            'isUpdatingContacts'
        ]),
        contactId() { return this.$route.params.id; },
        contactName() { return this.contact.name },
        contactPicture() { return this.contact.picture.large },
        contactPhone() { return this.contact.phone },
        contactEmail() { return this.contact.email },
        ICON_DEFAULT_USER() { return ICON_DEFAULT_USER }
    },
    watch: {
        isContactLoaded(isContactLoaded) {
            if (isContactLoaded && Object.keys(this.contact).length !== 0) {
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
            this.isFormSubmitted = true
            this.updateContact(contact)
        },
    },
    components: { FormContact, Loader }
}
</script>


<style lang="scss" scoped>
.contact-edit-container {
    justify-items: center;

    & .contact-edit {
        width: fit-content;
    }

    & .return-btn-container {
        margin-block-start: 20px;
    }
    
    & .submit-modal {
        margin-block-start: 20px;
    }
}


.loader {
    margin-block-start: 20px;
}
</style>