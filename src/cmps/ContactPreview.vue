<template>
    <section class="contact-preview">
        <section class="avatar">
            <IconHandler :name="ICON_DEFAULT_USER" />
        </section>
        <section class="content">
            <p> {{ contact.name }}</p>
            <p> {{ contact.email }}</p>
            <p> {{ contact.phone }}</p>
        </section>
    </section>
</template>


<script>
import { ICON_DEFAULT_USER } from '../services/icon-handler.service'
import IconHandler from './_reusable/IconHandler.vue'

export default {
    props: ['contact'],
    computed: {
        ICON_DEFAULT_USER() {
            return ICON_DEFAULT_USER
        }
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

    & .avatar {
        display: flex;
        justify-content: center;
        width: 50px;
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