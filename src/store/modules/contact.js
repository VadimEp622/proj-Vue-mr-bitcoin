import { contactService } from '@/services/contact.service.js'

// Issues: 
//  1. currently removing both contact.service contacts & store contacts, which is redundant
//  2. contacts can be null or array, so possible error is to run array operations on a null

export default {
    state() {
        return {
            contacts: null,
        }
    },
    mutations: {
        setContacts(state, { contacts }) {
            state.contacts = contacts
        },
        removeContact(state, { contactId }) {
            const idx = state.contacts.findIndex(contact => contact._id === contactId)
            state.contacts.splice(idx, 1)
        }
    },
    actions: {
        async loadContacts({ commit }) {
            const contacts = await contactService.query()
            commit({ type: 'setContacts', contacts })
        },
        async removeContact({ commit }, { contactId }) {
            await contactService.remove(contactId)
            commit({ type: 'removeContact', contactId })
        }
    },
    getters: {
        contacts(state) {
            return state.contacts
        },
        getContact: (state) => (contactId) => state.contacts.find(contact => contact._id === contactId)
    },
}
