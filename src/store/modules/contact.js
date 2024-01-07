import { contactService } from '@/services/contact.service.js'
import { showErrorMsg, showSuccessMsg } from '../../services/event-bus.service'


export default {
    state() {
        return {
            contacts: [],
            contact: null,
            isLoadingContacts: false,
            isLoadingContact: false,
            isUpdatingContacts: false,
            hasLoadedContacts: false
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
        updateContact(state, { contact }) {
            const idx = state.contacts.findIndex(contactItem => contactItem._id === contact._id)
            state.contacts.splice(idx, 1, contact)
        },
        setIsLoadingContacts(state, { isLoadingContacts }) {
            state.isLoadingContact = isLoadingContacts
        },
        setIsLoadingContact(state, { isLoadingContact }) {
            state.isLoadingContact = isLoadingContact
        },
        setIsUpdatingContact(state, { isUpdatingContacts }) {
            state.isUpdatingContacts = isUpdatingContacts
        },
        setHasLoadedContacts(state, { hasLoadedContacts }) {
            state.hasLoadedContacts = hasLoadedContacts
        }
    },
    actions: {
        async loadContacts({ commit }) {
            try {
                commit({ type: 'setHasLoadedContacts', hasLoadedContacts: false })
                commit({ type: 'setIsLoadingContacts', isLoadingContacts: true })
                const contacts = await contactService.query()
                commit({ type: 'setContacts', contacts })
                commit({ type: 'setHasLoadedContacts', hasLoadedContacts: true })
            } catch (err) {
                console.log('Failed loading contacts', err)
                showErrorMsg('Failed loading contacts')
            } finally {
                commit({ type: 'setIsLoadingContacts', isLoadingContacts: false })
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
        isLoadingContact(state) {
            return state.isLoadingContact
        },
        isUpdatingContacts(state) {
            return state.isUpdatingContacts
        },
        isContactsLoaded(state) {
            return !state.isLoadingContacts && state.hasLoadedContacts
        }
    },
}
