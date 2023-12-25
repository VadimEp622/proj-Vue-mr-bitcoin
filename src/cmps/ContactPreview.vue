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


<template>
    <section class="contact-preview">
        <section class="avatar">
            <IconHandler :name="ICON_DEFAULT_USER" />
        </section>
        <section class="content">
            <!-- <p>Name: <span> {{ contact.name }}</span></p>
            <p>Mail: <span> {{ contact.email }}</span></p>
            <p>Phone: <span> {{ contact.phone }}</span></p> -->
            <p> {{ contact.name }}</p>
            <p> {{ contact.email }}</p>
            <p> {{ contact.phone }}</p>
        </section>
    </section>
</template>

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
                padding-block-end: 4px;
            }

            &:not(:first-child) {
                opacity: .7;
            }
        }
    }
}
</style>