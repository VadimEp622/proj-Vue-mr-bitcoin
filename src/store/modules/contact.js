import { contactService } from '@/services/contact.service.js'
import { showErrorMsg, showSuccessMsg } from '../../services/event-bus.service'


export default {
    state() {
        return {
            contacts: [],
            contact: {},
            totalContactPageCount: 1,
            isLoadingContacts: false,
            isLoadingContact: false,
            isUpdatingContacts: false,
            hasLoadedContacts: false,
            hasLoadedContact: false
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
        addContact(state, { contact }) {
            state.contacts.push(contact)
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
        },
        setHasLoadedContact(state, { hasLoadedContact }) {
            state.hasLoadedContact = hasLoadedContact
        },
        setTotalContactPageCount(state, { totalContactPageCount }) {
            state.totalContactPageCount = totalContactPageCount
        }
    },
    actions: {
        async loadContacts({ commit }, filterBy) {
            try {
                // console.log('store-contacts-loadContacts-> filterBy', filterBy)
                commit({ type: 'setHasLoadedContacts', hasLoadedContacts: false })
                commit({ type: 'setIsLoadingContacts', isLoadingContacts: true })
                const totalContactPageCount = await contactService.getContactTotalPageCount()
                commit({ type: 'setTotalContactPageCount', totalContactPageCount })
                const contacts = await contactService.query(filterBy)
                commit({ type: 'setContacts', contacts })
                commit({ type: 'setHasLoadedContacts', hasLoadedContacts: true })
            } catch (err) {
                console.log('Failed loading contacts', err)
                showErrorMsg('Failed loading contacts')
            } finally {
                commit({ type: 'setIsLoadingContacts', isLoadingContacts: false })
            }
        },
        async loadContact({ commit }, contactId) {
            try {
                commit({ type: 'setHasLoadedContact', hasLoadedContact: false })
                commit({ type: 'setIsLoadingContact', isLoadingContact: true })
                const contact = await contactService.getContactById(contactId)
                commit({ type: 'setContact', contact })
                commit({ type: 'setHasLoadedContact', hasLoadedContact: true })
            } catch (err) {
                console.log('could not fetch contact', err)
            } finally {
                commit({ type: 'setIsLoadingContact', isLoadingContact: false })
            }
        },
        async removeContact({ commit }, contactId) {
            try {
                await contactService.removeContact(contactId)
                commit({ type: 'removeContact', contactId })
                showSuccessMsg('Contact removed')
            } catch (err) {
                console.log('Failed removing contact', err)
                showErrorMsg('Failed removing contact')
            }
        },
        async updateContact({ commit }, contact) {
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
        },
        async createContact({ commit }, contact) {
            try {
                commit({ type: 'setIsUpdatingContact', isUpdatingContacts: true })
                const createdContact = await contactService.createContact(contact)
                commit({ type: 'addContact', contact: createdContact })
                showSuccessMsg('Contact created')
            } catch (err) {
                console.log('Failed creating contact', err)
                showErrorMsg('Failed creating contact')
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
        isUpdatingContacts(state) {
            return state.isUpdatingContacts
        },
        isContactsLoaded(state) {
            return !state.isLoadingContacts && state.hasLoadedContacts
        },
        isContactLoaded(state) {
            return !state.isLoadingContact && state.hasLoadedContact && Object.keys(state.contact).length !== 0
        },
        totalContactPageCount(state) {
            return state.totalContactPageCount
        }
    },
}
