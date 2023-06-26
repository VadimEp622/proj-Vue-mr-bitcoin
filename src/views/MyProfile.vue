<script>
import { userService } from '../services/user.service.js'
import { contactService } from '../services/contact.service.js'
import { showSuccessMsg, showErrorMsg } from '@/services/event-bus.service.js'

import ContactList from '../cmps/ContactList.vue'


export default {
    data() {
        return {
            loggedinUser: null,
        }
    },
    created() {
        this.loggedinUser = userService.getUser()
        this.getContacts()
    },
    computed: {
        contacts() { return this.$store.getters.contacts }
    },
    methods: {
        getContacts() {
            this.$store.dispatch({ type: 'loadContacts' })
        },
        async removeContact(contactId) {
            console.log('hi from remove contact', contactId)
            try {
                this.$store.dispatch({ type: 'removeContact', contactId })
                showSuccessMsg('Contact removed')
            } catch (err) {
                showErrorMsg('Cannot remove contact')
            }
        }
    },
    components: { ContactList }
}
</script>


<!-- TODO: make CRUDL -->
<template>
    <section class="my-profile">
        <p class="greeting">Hello, <span>{{ loggedinUser.name }}</span></p>
        <ContactList v-if="loggedinUser" @remove="removeContact" :contacts="contacts" />
    </section>
</template>


<style lang="scss">
.my-profile {
    padding-inline: 10px;

    & .greeting {
        padding-block: 20px;
        white-space: nowrap;

        span {
            font-size: 1.5em;
            font-weight: 600;
            // color: $main-clr0;//<--change to this upon moving to styles
            color: rgb(186, 170, 81);
        }
    }

    & .exchange-rate {
        span {
            font-size: 1.5em;
            font-weight: 600;
        }
    }

    & .contacts ul {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(auto, 350px));
        justify-content: center;
        gap: 10px;
        min-width: fit-content;

        & li {
            display: flex;
            justify-content: space-between;
            gap: 10px;
            // background-color: rgb(177, 255, 255);
            background-color: #DAFFFB;
            background-color: #64CCC5;
            padding: 10px;


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
}
</style>