<script>
import { userService } from '../services/userService.js'
import { contactService } from '../services/contactService.js'

export default {
    data() {
        return {
            loggedinUser: null,
            contacts: null,
        }
    },
    created() {
        this.loggedinUser = userService.getUser()
        contactService.getContacts()
            .then(contacts => {
                console.log('contacts', contacts)
                this.contacts = contacts
            })

    },
    unmounted() { },
    methods: {}
}
</script>

<template>
    <section class="my-profile">
        <p class="greeting">Hello, <span>{{ loggedinUser.name }}</span></p>
        <section v-if="contacts" class="contacts">
            <p>Contacts:</p>
            <ul>
                <li v-for="contact in this.contacts">
                    <p>Name: <span> {{ contact.name }}</span></p>
                    <p>Mail: <span> {{ contact.email }}</span></p>
                    <p>Phone: <span> {{ contact.phone }}</span></p>
                </li>
            </ul>
        </section>
    </section>
</template>

<style lang="scss">
.my-profile {
    padding-inline: 10px;
    // padding-block: 10px;

    & .greeting {
        padding-block: 20px;

        span {
            font-size: 1.5em;
            font-weight: 600;
            // color: $main-clr0;//<--change to this upon moving to styles
            color: rgb(186, 170, 81);
        }
    }

    & .contacts ul {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(auto, 300px));
        justify-content: center;
        gap: 10px;

        & li {
            display: block;
            background-color: rgb(177, 255, 255);
            padding: 10px;

            & span{
                font-weight: 600;
            }
        }
    }
}
</style>