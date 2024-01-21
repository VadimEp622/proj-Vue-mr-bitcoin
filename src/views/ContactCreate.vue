<template>
    <section v-if="initialValues" class="contact-create-container full main-layout">
        <section class="contact-create">
            <section class="return-btn-container flex justify-start">
                <button class="return-btn clr-gray-2" @click="onReturn">
                    <IconHandler :name="ICON_ARROW_LEFT" />
                </button>
            </section>
            <FormContact :initial-values="initialValues" @onSubmit="onSave" />
            <section v-if="isFormSubmitted" class="submit-modal flex justify-center align-center clr-gray-0">
                <span>Submitting...</span>
            </section>
        </section>
    </section>
    <Loader v-else />
</template>


<script>
import FormContact from '@/cmps/app-reusable/forms/FormContact.vue'
import Loader from '@/cmps/app-reusable/loader.vue'
import { contactService } from '@/services/contact.service.js'
import { mapGetters, mapActions } from 'vuex'
import Mixin from '@/mixin'
import { ICON_ARROW_LEFT } from '../services/icon-handler.service'
import IconHandler from '@/cmps/app-reusable/IconHandler.vue'

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
        ICON_ARROW_LEFT() { return ICON_ARROW_LEFT }
    },
    methods: {
        ...mapActions([
            'createContact'
        ]),
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
                this.onReturn()
            }
        }
    },
    mixins: [Mixin],
    components: { FormContact, Loader, IconHandler }
}
</script>


<style lang="scss" scoped>
.contact-create-container {
    justify-items: center;

    & .contact-create {
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
</style>