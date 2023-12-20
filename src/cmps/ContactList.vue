<script>
import ContactPreview from './ContactPreview.vue'

export default {
    props: ["contacts"],
    data() {
        return {}
    },
    created() {
    },
    unmounted() { },
    methods: {
        onDetails(contactId) {
            console.log('hello from contactId', contactId)
        },
        onRemove(contactId) {
            this.$emit('remove', contactId)
        }
    },
    components: { ContactPreview }
}
</script>

<template>
    <section v-if="contacts" class="contacts">
        <p>Contacts:</p>
        <ul>
            <li v-for="contact in contacts" :key="contact._id">
                <ContactPreview :contact="contact" />
                <section class="buttons">
                    <button @click="onDetails(contact._id)">Details</button>
                    <button @click="onRemove(contact._id)">Remove</button>
                </section>
            </li>
        </ul>
    </section>
</template>

<style lang="scss">
.contacts ul {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(auto, 400px));
    justify-content: center;
    gap: 10px;
    min-width: fit-content;
    // transition: all .5s ease-in-out;

    & li {
        display: flex;
        justify-content: space-between;
        gap: 10px;
        background-color: #64CCC5;
        padding: 10px;

        & .avatar {
            display: flex;
            justify-content: center;
        }

        & .content {
            white-space: nowrap;
            // overflow-x: scroll;
        }

        & .buttons {
            display: flex;
            flex-direction: column;
            width: max-content;
            justify-content: space-between;
        }

        & span {
            font-weight: 600;
        }
    }
}
</style>