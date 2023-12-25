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
    <section class="avatar">
        <IconHandler :name="ICON_DEFAULT_USER" />
    </section>
    <section class="content">
        <p>Name: <span> {{ contact.name }}</span></p>
        <p>Mail: <span> {{ contact.email }}</span></p>
        <p>Phone: <span> {{ contact.phone }}</span></p>
    </section>
</template>