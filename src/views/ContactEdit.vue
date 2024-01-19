<template>
    <section v-if="initialValues" class="contact-edit-container full main-layout">
        <section class="contact-edit">
            <section class="return-btn-container flex justify-start">
                <button class="return-btn clr-gray-2" @click="onReturn(contactId)">
                    <IconHandler :name="ICON_ARROW_LEFT" />
                </button>
            </section>
            <FormContact :initial-values="initialValues" @onSubmit="onSave" />
            <section v-if="isFormSubmitted" class="submit-modal flex justify-center align-center clr-gray-0">
                <span>Submitting...</span>
            </section>
        </section>
    </section>
    <section v-else class="loader">
        <Loader />
    </section>
</template>


<!-- TODO: see if there's a better way to do: this.redirectTo(`/contact/${contactId}`), maybe with something like push-history() -->


<script>
import { mapGetters, mapActions } from 'vuex'
import FormContact from '@/cmps/app-reusable/forms/FormContact.vue'
import Loader from '@/cmps/app-reusable/loader.vue'
import Mixin from '@/mixin'
import { ICON_ARROW_LEFT } from '../services/icon-handler.service'
import IconHandler from '../cmps/app-reusable/IconHandler.vue'

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
        contactId() { return this.$route.params.id },
        ICON_ARROW_LEFT() { return ICON_ARROW_LEFT }
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
        ...mapActions([
            'loadContact',
            'updateContact'
        ]),
        onReturn(contactId) {
            this.redirectTo(`/contact/${contactId}`)
        },
        onSave(contact) {
            this.isFormSubmitted = true
            this.updateContact(contact)
        },
    },
    mixins: [Mixin],
    components: { FormContact, Loader, IconHandler }
}
</script>


<style lang="scss" scoped>
.contact-edit-container {
    justify-items: center;

    & .contact-edit {
        min-width: 0;
        max-width: 100%;
    }

    & .return-btn-container {
        margin-block-start: 20px;

        & .return-btn {
            @include btn-reset();
            transition: transform .2s ease-in-out;

            & svg {
                width: 30px !important;
                height: 30px !important;
            }

            &:hover {
                transform: scale(1.25);
            }
        }
    }

    & .submit-modal {
        margin-block-start: 20px;
    }
}


.loader {
    margin-block-start: 20px;
}
</style>