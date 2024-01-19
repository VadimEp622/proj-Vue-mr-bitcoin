<template>
    <section v-if="isContactLoaded" class="contact-details-container full main-layout">
        <section class="contact-details">

            <section class="return-btn-container flex space-between gap-10">
                <button class="return-btn" @click="onReturn">Return</button>
                <button class="btn-edit" @click="onEdit(contactId)">Edit</button>
            </section>

            <section class="picture-container">
                <section class="picture">
                    <img v-if="contactPicture" :src="contactPicture" alt="contact">
                    <IconHandler v-else :name="ICON_DEFAULT_USER" />
                </section>
            </section>

            <section class="details clr-gray-2 text-align-center">
                <section class="name clr-gold-0">
                    <p>{{ contactName }}</p>
                </section>
                <section class="email">
                    <p>{{ contactEmail }}</p>
                </section>
                <section class="phone">
                    <p>{{ contactPhone }}</p>
                </section>
            </section>

            <section class="transfer-coins clr-gray-1">
                <h3 class="title text-align-start">Transfer coins:</h3>
                <section class="btn-container flex justify-center">
                    <button class="btn-transfer" @click="onTransfer(userId, contactId, 5)">5 coins</button>
                    <button class="btn-transfer" @click="onTransfer(userId, contactId, 10)">10 coins</button>
                    <button class="btn-transfer" @click="onTransfer(userId, contactId, 25)">25 coins</button>
                    <button class="btn-transfer" @click="onTransfer(userId, contactId, 50)">50 coins</button>
                </section>
            </section>

            <TransactionList :transactions="contactTransactions" />

            <!-- <pre>{{ JSON.stringify(contact, null, 2) }}</pre> -->
        </section>
    </section>
    <section v-else class="loader">
        <Loader />
    </section>
</template>


<!-- TODO: add case for no user found (empty store object) -->
<!-- TODO: add settings/config button on top right, which upon click, opens modal with edit/delete buttons  -->


<script>
import { mapGetters, mapActions } from 'vuex'
import IconHandler from '@/cmps/app-reusable/IconHandler.vue'
import { ICON_DEFAULT_USER } from '@/services/icon-handler.service'
import Loader from '@/cmps/app-reusable/loader.vue'
import Mixin from '@/mixin'
import TransactionList from '../cmps/TransactionList.vue'

export default {
    created() {
        this.loadContact(this.contactId)
    },
    computed: {
        ...mapGetters([
            'contact',
            'isContactLoaded',
            'user',
            'transactions'
        ]),
        contactId() { return this.$route.params.id },
        contactName() { return this.contact.name },
        contactPicture() { return this.contact.picture?.large },
        contactPhone() { return this.contact.phone },
        contactEmail() { return this.contact.email },
        userId() { return this.user._id },
        ICON_DEFAULT_USER() { return ICON_DEFAULT_USER },
        contactTransactions() {
            return this.transactions.filter(transaction =>
                transaction.content.sender.senderId === this.contactId
                || transaction.content.receiver.receiverId === this.contactId
            )
        }
    },
    methods: {
        ...mapActions([
            'loadContact',
            'createTransaction'
        ]),
        onReturn() {
            this.redirectTo('/contact')
        },
        onEdit(contactId) {
            this.redirectTo(`/contact/${contactId}/edit`)
        },
        onTransfer(userId, contactId, amount) {
            this.createTransaction({ userId, contactId, amount })
        }
    },
    mixins: [Mixin],
    components: { IconHandler, Loader, TransactionList }
}
</script>


<style lang="scss" scoped>
.contact-details-container {
    justify-items: center;

    & .contact-details {
        min-width: 0;
        max-width: 100%;

        & .return-btn-container {
            margin-block-start: 20px;
        }

        & .picture-container {
            margin-block: 20px 40px;

            & .picture {
                margin-inline: auto;
                width: 128px;
                height: 128px;
                border-radius: 50%;
                overflow: hidden;
                max-width: none;
            }
        }

        & .details {
            &>*:not(:first-child) {
                margin-block-start: 8px;
                font-size: rem(18px);
            }

            & .name {
                font-size: rem(30px);
                font-weight: 600;
            }

            & p {
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
            }
        }

        & .btn-container {
            margin-block-start: 20px;
        }

        & .transfer-coins {
            margin-block: 30px;

            & .title {
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
                margin-block-end: 4px;
                font-size: rem(16px);
                font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            }
        }
    }
}

.loader {
    margin-block-start: 20px;
}
</style>