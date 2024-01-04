import { contactService } from '@/services/contact.service.js'
import { showErrorMsg, showSuccessMsg } from '../../services/event-bus.service'


export default {
    state() {
        return {
            contacts: null,
            contact: null,
            loadingContacts: false,
            loadingContact: false
        }
    },
    mutations: {
        setContacts(state, { contacts }) {
            state.contacts = contacts
        },
        setContact(state, { contact }) {
            state.contact = contact
        },
        removeContact(state, { contactId }) {
            const idx = state.contacts.findIndex(contact => contact._id === contactId)
            state.contacts.splice(idx, 1)
        }
    },
    actions: {
        async loadContacts({ commit }) {
            try {
                const contacts = await contactService.query()
                commit({ type: 'setContacts', contacts })
            } catch (err) {
                console.log('Failed loading contacts', err)
                showErrorMsg('Failed loading contacts')
            }
        },
        async loadContact({ commit }, { contactId }) {
            try {
                const contact = await contactService.getContactById(contactId)
                commit({ type: 'setContact', contact })
            } catch (err) {
                console.log('could not fetch contact', err)
            }
        },
        async removeContact({ commit }, { contactId }) {
            try {
                await contactService.removeContact(contactId)
                commit({ type: 'removeContact', contactId })
                showSuccessMsg('Contact removed')
            } catch (err) {
                console.log('Failed removing contact', err)
                showErrorMsg('Failed removing contact')
            }
        }
    },
    getters: {
        contacts(state) {
            return state.contacts
        },
        contact(state) {
            return state.contact
        }
    },
}
