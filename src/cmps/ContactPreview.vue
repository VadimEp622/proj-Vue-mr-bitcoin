<template>
    <section class="contact-preview">
        <section class="avatar-container">
            <section class="avatar">
                <!-- <IconHandler :name="ICON_DEFAULT_USER" /> -->
                <img :src="contact.picture.medium" alt="contact">
            </section>
        </section>
        <section class="content">
            <p> {{ contact.name }}</p>
            <p> {{ contact.email }}</p>
            <p> {{ contact.phone }}</p>
        </section>
    </section>
</template>


<!-- TODO: 
figure out how to shrink contact-preview's .content even more, when screen width shrinks, instead of overflow/horizontal-scroll appearing
maybe media-query for contact-list ul's styling of: grid-template-columns: repeat(auto-fit, minmax(auto, 400px)); to be replace with something else?
-->


<script>
import { ICON_DEFAULT_USER } from '@/services/icon-handler.service'
import IconHandler from '@/cmps/app-reusable/IconHandler.vue'

export default {
    props: ['contact'],
    computed: {
        ICON_DEFAULT_USER() { return ICON_DEFAULT_USER }
    },
    components: {
        IconHandler
    }
}
</script>


<style lang="scss" scoped>
.contact-preview {
    min-width: 0;
    display: flex;
    gap: 10px;


    & .avatar-container {
        display: flex;
        justify-content: center;
        align-items: center;

        & .avatar {
            width: 61px;
            height: 61px;
            border-radius: 50%;
            overflow: hidden;
        }

    }

    & .content {
        min-width: 0;
        max-width: 230px;
        word-wrap: break-word;

        &>* {
            &:first-child {
                font-size: rem(18px);
                font-weight: 600;
                margin-block-end: 4px;
            }

            &:not(:first-child) {
                opacity: .6;
            }
        }
    }
}
</style>