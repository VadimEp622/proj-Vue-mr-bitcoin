<template>
    <section v-if="isContactLoaded" class="contact-edit full main-layout grid align-content-start">
        <section class="return-btn-container flex">
            <button class="return-btn" @click="onReturn(contactId)">Return</button>
        </section>
        <section class="picture-container flex justify-center">
            <section class="picture">
                <IconHandler :name="ICON_DEFAULT_USER" />
                <!-- <img :src="contactPicture" alt="contact"> -->
            </section>
        </section>
        <section class="details text-align-center">
            <!-- <section class="name clr-gold-0">
                <p>{{ contactName }}</p>
            </section>
            <section class="email">
                <p>{{ contactEmail }}</p>
            </section>
            <section class="phone">
                <p>{{ contactPhone }}</p>
            </section> -->
        </section>
        <section class="btn-container flex justify-center">
            <button class="btn-save" @click="onSave(contactId)">Save</button>
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
    data() {
        return {}
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
    components: { IconHandler }
}
</script>


<style lang="scss"></style>