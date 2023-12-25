<script>
import ContactPreview from './ContactPreview.vue'

export default {
    props: ["contacts"],
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
    <section class="contact-list">
        <p>Contacts:</p>
        <TransitionGroup name="list" tag="ul">
            <li v-for="contact in contacts" :key="contact._id">
                <ContactPreview :contact="contact" />
                <section class="buttons">
                    <button @click="onDetails(contact._id)">Details</button>
                    <button @click="onRemove(contact._id)">Remove</button>
                </section>
            </li>
        </TransitionGroup>
    </section>
</template>

<style lang="scss">
.contact-list ul {
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

.list-move,
/* apply transition to moving elements */
.list-enter-active,
.list-leave-active {
    transition: all 0.5s ease;
}

.list-enter-from,
.list-leave-to {
    opacity: 0;
    transform: translateX(30px);
}

/* ensure leaving items are taken out of layout flow so that moving
   animations can be calculated correctly. */
.list-leave-active {
    position: absolute;
}
</style>