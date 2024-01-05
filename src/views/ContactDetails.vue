<template>
    <section v-if="isContactLoaded" class="contact-details full main-layout grid align-content-start">
        <section class="return-btn-container flex">
            <button class="return-btn" @click="onReturn">Return</button>
        </section>
        <section class="picture-container flex justify-center">
            <section class="picture">
                <!-- <IconHandler :name="ICON_DEFAULT_USER" /> -->
                <img :src="contactPicture" alt="contact">
            </section>
        </section>
        <section class="details text-align-center">
            <section class="name clr-gold-0">
                <p>{{ contactName }}</p>
            </section>
            <section class="email">
                <p>{{ contactEmail }}</p>
            </section>
            <section class="phone">
                <p>{{ contactPhone }}</p>
            </section>
        </section>
        <section class="btn-container flex justify-center">
            <button class="btn-edit" @click="onEdit(contactId)">Edit</button>
        </section>
        <!-- <pre>{{ JSON.stringify(contact, null, 2) }}</pre> -->
    </section>
    <section v-else class="flex justify-center align-center">
        <span>loading...</span>
    </section>
</template>


<script>
import IconHandler from '@/cmps/app-reusable/IconHandler.vue'
import { ICON_DEFAULT_USER } from '@/services/icon-handler.service'
import { mapGetters } from 'vuex'

export default {
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
        contactName() { return `${this.contact.name.first} ${this.contact.name.last}` },
        contactPicture() { return this.contact.picture.large },
        contactPhone() { return this.contact.phone },
        contactEmail() { return this.contact.email },
        ICON_DEFAULT_USER() { return ICON_DEFAULT_USER },
        isContactLoaded() { return !this.isLoadingContact && this.contact },
    },
    methods: {
        loadContact(contactId) {
            this.$store.dispatch({ type: 'loadContact', contactId })
        },
        redirectTo(pathName) {
            this.$router.push(pathName)
        },
        onReturn() {
            this.redirectTo('/contact')
        },
        onEdit(contactId) {
            this.redirectTo(`/contact/${contactId}/edit`)
        }
    },
    components: { IconHandler }
}
</script>


<style lang="scss" scoped>
.contact-details {

    & .return-btn-container {
        margin-block-start: 20px;
        justify-self: center;
        justify-content: flex-start;
        width: 250px;
    }

    & .picture-container {
        margin-block: 20px 40px;

        & .picture {
            width: 128px;
            height: 128px;
            border-radius: 50%;
            overflow: hidden;
        }
    }

    & .details {
        &>*:not(:first-child) {
            margin-block-start: 8px;
            font-size: rem(18px);
        }

        & .name {
            font-size: rem(30px);
            font-weight: 600;
        }
    }

    & .btn-container {
        margin-block-start: 20px;
    }
}
</style>