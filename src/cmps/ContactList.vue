<template>
    <section class="contact-list">
        <TransitionGroup name="list" tag="ul">
            <li class="contact-preview-container bg-clr-gold-1" v-for="contact in contacts" :key="contact._id">
                <ContactPreview :contact="contact" />
                <section class="buttons">
                    <button @click="onDetails(contact._id)"><span>Details</span></button>
                    <button @click="onRemove(contact._id)"><span>Remove</span></button>
                </section>
            </li>
        </TransitionGroup>
    </section>
</template>


<script>
import ContactPreview from '@/cmps/ContactPreview.vue'

export default {
    props: ["contacts"],
    methods: {
        onDetails(contactId) {
            this.$router.push(`/contact/${contactId}`);
        },
        onRemove(contactId) {
            this.$emit('remove', contactId)
        }
    },
    components: { ContactPreview }
}
</script>


<style lang="scss">
.contact-list {
    & .title {
        margin-block-end: 10px;
    }

    & ul {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(auto, 400px));
        justify-content: center;
        gap: 14px;

        & li.contact-preview-container {
            min-width: 0;
            display: flex;
            justify-content: space-between;
            gap: 10px;
            padding: 10px;
            // background-color: #64CCC5;
            border-radius: 8px;
            transition: box-shadow 0.2s ease-in-out;

            & .avatar {
                transition: transform 0.2s ease-in-out;
            }

            & .buttons {
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                opacity: 0;
                transition: opacity 0.1s;

                & button {
                    padding: 0;
                    margin: 0;
                    border: 0;

                    border: 1px solid black;
                    border-radius: 4px;
                    padding-block: 1px;
                    padding-inline: 2px;

                    & span {
                        display: block;
                        font-size: rem(14px);
                    }

                    &:hover {
                        cursor: pointer;
                    }
                }
            }

            &.list-move,
            /* apply transition to moving elements */
            &.list-enter-active,
            &.list-leave-active {
                transition:
                    opacity 0.5s ease,
                    position 0.5s ease,
                    transform 0.5s ease;
            }

            &.list-enter-from,
            &.list-leave-to {
                opacity: 0;
                transform: translateX(30px);
            }

            /* ensure leaving items are taken out of layout flow so that moving
               animations can be calculated correctly. */
            &.list-leave-active {
                position: absolute;
            }

            &:hover {
                // box-shadow: 0px 0px 17px 4px rgba(0, 0, 0, 0.5);
                box-shadow: 0px 0px 6px 2px rgba(255, 255, 255, 0.5);

                & .avatar {
                    transform: scale(1.15);
                }

                & .buttons {
                    opacity: 1;
                }
            }
        }

    }
}
</style>