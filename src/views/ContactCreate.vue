<template>
    <section v-if="initialValues" class="contact-create-container full main-layout">
        <section class="contact-create">
            <section class="return-btn-container flex justify-start">
                <button class="return-btn" @click="onReturn">Return</button>
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
import FormContact from '@/cmps/app-reusable/forms/FormContact.vue'
import Loader from '@/cmps/app-reusable/loader.vue'
import { contactService } from '@/services/contact.service.js'
import { mapGetters, mapActions } from 'vuex'

export default {
    data() {
        return {
            initialValues: contactService.getEmptyContact(),
            isFormSubmitted: false
        }
    },
    created() { },
    unmounted() { },
    computed: {
        ...mapGetters([
            'isUpdatingContacts'
        ]),
    },
    methods: {
        ...mapActions([
            'createContact'
        ]),
        redirectTo(pathName) {
            this.$router.push(pathName)
        },
        onReturn() {
            this.redirectTo(`/contact`)
        },
        onSave(contact) {
            this.isFormSubmitted = true
            this.createContact(contact)
        },
    },
    watch: {
        isUpdatingContacts(isUpdatingContacts) {
            if (this.isFormSubmitted && !isUpdatingContacts) {
                this.onReturn(this.contactId)
            }
        }
    },
    components: { FormContact, Loader }
}
</script>


<style lang="scss" scoped>
.contact-create-container {
    justify-items: center;

    & .contact-create {
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