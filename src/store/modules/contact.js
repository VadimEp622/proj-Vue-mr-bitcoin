import { contactService } from '@/services/contact.service.js'
import { showErrorMsg, showSuccessMsg } from '../../services/event-bus.service'


export default {
    state() {
        return {
            contacts: null,
            realContacts: null
        }
    },
    mutations: {
        setContacts(state, { contacts }) {
            state.contacts = contacts
        },
        setRealContacts(state, { realContacts }) {
            state.realContacts = realContacts
        },
        removeContact(state, { contactId }) {
            const idx = state.contacts.findIndex(contact => contact._id === contactId)
            state.contacts.splice(idx, 1)
        }
    },
    actions: {
        async loadContacts({ commit }) {
            try {
                const contacts = await contactService.getContacts()
                commit({ type: 'setContacts', contacts })
            } catch (err) {
                console.log('Failed loading contacts', err)
                showErrorMsg('Failed loading contacts')
            }
        },
        async loadRealContacts({ commit }) {
            try {
                const realContacts = await contactService.getRealContacts()
                commit({ type: 'setRealContacts', realContacts })
            } catch (err) {
                console.log('Failed loading Real contacts', err)
                showErrorMsg('Failed loading Real contacts')
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
        realContacts(state) {
            return state.realContacts
        },
        getContact: (state) => (contactId) => state.contacts.find(contact => contact._id === contactId)
    },
}
