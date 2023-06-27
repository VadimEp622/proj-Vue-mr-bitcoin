<script>
import axios from 'axios'

export default {
    props: ['contact'],
    data() {
        return {
            avatarUrl: ''
        }
    },
    async created() {
        // try {
        //     const url = await this.contactAvatar()
        //     this.avatarUrl = url
        // } catch (err) {
        //     console.log('err', err)
        // }
    },
    methods: {
        async contactAvatar() {
            try {
                const res = await axios.get('https://randomuser.me/api/')
                const avatarUrl = res.data.results[0].picture.thumbnail
                return avatarUrl
            } catch (err) {
                console.log('err', err)
            }

        },
    }
}
</script>

<template>
    <section class="avatar">
        <!-- <img :src="avatarUrl" alt="avatar"> -->
    </section>
    <section class="content">
        <p>Name: <span> {{ contact.name }}</span></p>
        <p>Mail: <span> {{ contact.email }}</span></p>
        <p>Phone: <span> {{ contact.phone }}</span></p>
    </section>
</template>