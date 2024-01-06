import { contactService } from '@/services/contact.service.js'
import { showErrorMsg, showSuccessMsg } from '../../services/event-bus.service'


export default {
    state() {
        return {
            contacts: null,
            contact: null,
            isLoadingContacts: false,
            isLoadingContact: false,
            isUpdatingContacts: false
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
        },
        setIsLoadingContact(state, { isLoadingContact }) {
            state.isLoadingContact = isLoadingContact
        },
        updateContact(state, { contact }) {
            const idx = state.contacts.findIndex(contactItem => contactItem._id === contact._id)
            state.contacts.splice(idx, 1, contact)
        },
        setIsUpdatingContact(state, { isUpdatingContacts }) {
            state.isUpdatingContacts = isUpdatingContacts
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
                commit({ type: 'setIsLoadingContact', isLoadingContact: true })
                const contact = await contactService.getContactById(contactId)
                commit({ type: 'setContact', contact })
            } catch (err) {
                console.log('could not fetch contact', err)
            } finally {
                commit({ type: 'setIsLoadingContact', isLoadingContact: false })
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
        },
        async updateContact({ commit }, { contact }) {
            try {
                commit({ type: 'setIsUpdatingContact', isUpdatingContacts: true })
                const updatedContact = await contactService.updateContact(contact)
                commit({ type: 'updateContact', contact: updatedContact })
                showSuccessMsg('Contact updated')
            } catch (err) {
                console.log('Failed updating contact', err)
                showErrorMsg('Failed updating contact')
            } finally {
                commit({ type: 'setIsUpdatingContact', isUpdatingContacts: false })
            }
        }
    },
    getters: {
        contacts(state) {
            return state.contacts
        },
        contact(state) {
            return state.contact
        },
        isLoadingContacts(state) {
            return state.isLoadingContacts
        },
        isLoadingContact(state) {
            return state.isLoadingContact
        },
        isUpdatingContacts(state) {
            return state.isUpdatingContacts
        }
    },
}
