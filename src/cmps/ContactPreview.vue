<template>
    <section class="contact-preview">
        <section class="avatar-container">
            <section class="avatar">
                <!-- <IconHandler :name="ICON_DEFAULT_USER" /> -->
                <img :src="contact.picture.medium" alt="contact">
            </section>
        </section>
        <section class="content">
            <p> {{ contactName }}</p>
            <p> {{ contact.email }}</p>
            <p> {{ contact.phone }}</p>
        </section>
    </section>
</template>


<script>
import { ICON_DEFAULT_USER } from '@/services/icon-handler.service'
import IconHandler from '@/cmps/app-reusable/IconHandler.vue'

export default {
    props: ['contact'],
    computed: {
        ICON_DEFAULT_USER() { return ICON_DEFAULT_USER },
        contactName() {
            return `${this.contact.name.first} ${this.contact.name.last}`
        },
    },
    components: {
        IconHandler
    }
}
</script>


<style lang="scss" scoped>
.contact-preview {
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
        white-space: nowrap;

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