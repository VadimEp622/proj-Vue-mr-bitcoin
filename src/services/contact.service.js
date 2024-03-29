import axios from "axios"
import { storageService } from "./async-storage.service"
import { utilService } from "./util.service"


const CONTACT_KEY = 'contact'


const contactsPerPage = 24


export const contactService = {
    query,
    getContactTotalPageCount,
    getContactById,
    removeContact,
    updateContact,
    createContact,
    getEmptyContact,
}


// ************************* Backend API Calls *************************
function query(filterBy = {}) {
    return _getContacts(CONTACT_KEY)
        .then(contacts => {
            const filteredContacts = contacts
            return _sort(filteredContacts)
        }).then(contacts => {
            console.log('contact.service-query-> filterBy', filterBy)
            if (filterBy.activePage) {
                const offset = contactsPerPage * (filterBy.activePage - 1)
                return contacts.slice(0 + offset, contactsPerPage + offset)
            }
            return contacts
        })
}

function getContactTotalPageCount() {
    return query()
        .then(contacts => Math.ceil(contacts.length / contactsPerPage))
}

function getContactById(contactId) {
    return storageService.get(CONTACT_KEY, contactId)
}

function removeContact(contactId) {
    return storageService.remove(CONTACT_KEY, contactId)
}

function updateContact(contact) {
    return storageService.put(CONTACT_KEY, contact)
}

function createContact(contact) {
    return storageService.post(CONTACT_KEY, contact)
}
// *********************************************************************

function getEmptyContact() {
    return {
        name: '',
        email: '',
        phone: ''
    }
}



// ===============================================================
// ====================== Private Functions ======================
// ===============================================================
async function _getContacts(entityType) {
    const LocalStorageContacts = utilService.loadFromStorage(entityType)
    if (!LocalStorageContacts || LocalStorageContacts.length < 1) {
        console.log('Axios get - Contacts')
        try {
            const FetchedContacts = await _fetchContacts()
            utilService.saveToStorage(entityType, FetchedContacts)
            return FetchedContacts
        } catch (err) {
            console.log('Failed fetching contacts', err)
            throw err
        }
    }
    console.log('Local Storage - Contacts')
    return LocalStorageContacts
}

function _fetchContacts() {
    return axios.get(_getUrlRandomContacts())
        .then(res => res.data.results)
        .then(fetchedContacts => fetchedContacts.map(contact => _makeAppContact(contact)))
}

function _getUrlRandomContacts() {
    return `https://randomuser.me/api/?results=75&nat=us&inc=name,picture,email,phone`
}

function _sort(arr) {
    return arr.sort((a, b) => {
        if (a.name.toLocaleLowerCase() < b.name.toLocaleLowerCase()) {
            return -1
        }
        if (a.name.toLocaleLowerCase() > b.name.toLocaleLowerCase()) {
            return 1
        }

        return 0
    })
}

function _makeAppContact(fetchedContact) {
    const name = `${fetchedContact.name.first} ${fetchedContact.name.last}`
    const { email, phone, picture } = fetchedContact
    const newContact = {
        name,
        email,
        phone,
        picture
    }
    return _createContact(newContact)
}

function _createContact({ name, email, phone, picture }) {
    return {
        _id: utilService.makeId(),
        name,
        email,
        phone,
        picture
    }
}


// function _setDemoContacts() {
//     const contacts = _getDemoContacts()
//     utilService.saveToStorage(CONTACT_KEY, contacts)
//     return contacts
// }

// function _getDemoContacts() {
//     return [
//         {
//             "_id": "5a56640269f443a5d64b32ca",
//             "name": "Ochoa Hyde",
//             "email": "ochoahyde@renovize.com",
//             "phone": "+1 (968) 593-3824"
//         },
//         {
//             "_id": "5a5664025f6ae9aa24a99fde",
//             "name": "Hallie Mclean",
//             "email": "halliemclean@renovize.com",
//             "phone": "+1 (948) 464-2888"
//         },
//         {
//             "_id": "5a56640252d6acddd183d319",
//             "name": "Parsons Norris",
//             "email": "parsonsnorris@renovize.com",
//             "phone": "+1 (958) 502-3495"
//         },
//         {
//             "_id": "5a566402ed1cf349f0b47b4d",
//             "name": "Rachel Lowe",
//             "email": "rachellowe@renovize.com",
//             "phone": "+1 (911) 475-2312"
//         },
//         {
//             "_id": "5a566402abce24c6bfe4699d",
//             "name": "Dominique Soto",
//             "email": "dominiquesoto@renovize.com",
//             "phone": "+1 (807) 551-3258"
//         },
//         {
//             "_id": "5a566402a6499c1d4da9220a",
//             "name": "Shana Pope",
//             "email": "shanapope@renovize.com",
//             "phone": "+1 (970) 527-3082"
//         },
//         {
//             "_id": "5a566402f90ae30e97f990db",
//             "name": "Faulkner Flores",
//             "email": "faulknerflores@renovize.com",
//             "phone": "+1 (952) 501-2678"
//         },
//         {
//             "_id": "5a5664027bae84ef280ffbdf",
//             "name": "Holder Bean",
//             "email": "holderbean@renovize.com",
//             "phone": "+1 (989) 503-2663"
//         },
//         {
//             "_id": "5a566402e3b846c5f6aec652",
//             "name": "Rosanne Shelton",
//             "email": "rosanneshelton@renovize.com",
//             "phone": "+1 (968) 454-3851"
//         },
//         {
//             "_id": "5a56640272c7dcdf59c3d411",
//             "name": "Pamela Nolan",
//             "email": "pamelanolan@renovize.com",
//             "phone": "+1 (986) 545-2166"
//         },
//         {
//             "_id": "5a5664029a8dd82a6178b15f",
//             "name": "Roy Cantu",
//             "email": "roycantu@renovize.com",
//             "phone": "+1 (929) 571-2295"
//         },
//         {
//             "_id": "5a5664028c096d08eeb13a8a",
//             "name": "Ollie Christian",
//             "email": "olliechristian@renovize.com",
//             "phone": "+1 (977) 419-3550"
//         },
//         {
//             "_id": "5a5664026c53582bb9ebe9d1",
//             "name": "Nguyen Walls",
//             "email": "nguyenwalls@renovize.com",
//             "phone": "+1 (963) 471-3181"
//         },
//         {
//             "_id": "5a56640298ab77236845b82b",
//             "name": "Glenna Santana",
//             "email": "glennasantana@renovize.com",
//             "phone": "+1 (860) 467-2376"
//         },
//         {
//             "_id": "5a56640208fba3e8ecb97305",
//             "name": "Malone Clark",
//             "email": "maloneclark@renovize.com",
//             "phone": "+1 (818) 565-2557"
//         },
//         {
//             "_id": "5a566402abb3146207bc4ec5",
//             "name": "Floyd Rutledge",
//             "email": "floydrutledge@renovize.com",
//             "phone": "+1 (807) 597-3629"
//         },
//         {
//             "_id": "5a56640298500fead8cb1ee5",
//             "name": "Grace James",
//             "email": "gracejames@renovize.com",
//             "phone": "+1 (959) 525-2529"
//         },
//         {
//             "_id": "5a56640243427b8f8445231e",
//             "name": "Tanner Gates",
//             "email": "tannergates@renovize.com",
//             "phone": "+1 (978) 591-2291"
//         },
//         {
//             "_id": "5a5664025c3abdad6f5e098c",
//             "name": "Lilly Conner",
//             "email": "lillyconner@renovize.com",
//             "phone": "+1 (842) 587-3812"
//         }
//     ]
// }


// function _createContact(name, email, phone) {
//     return {
//         _id: utilService.makeId(),
//         name,
//         email,
//         phone
//     }
// }

// function _updateContact(contact) {
//     return new Promise((resolve, reject) => {
//         const index = contacts.findIndex(c => contact._id === c._id)
//         if (index !== -1) {
//             contacts[index] = contact
//         }
//         resolve(contact)
//     })
// }

// function _addContact(contact) {
//     return new Promise((resolve, reject) => {
//         contact._id = utilService.makeId()
//         contacts.push(contact)
//         resolve(contact)
//     })
// }

// function _filter(term) {
//     term = term.toLocaleLowerCase()
//     return contacts.filter(contact => {
//         return contact.name.toLocaleLowerCase().includes(term) ||
//             contact.phone.toLocaleLowerCase().includes(term) ||
//             contact.email.toLocaleLowerCase().includes(term)
//     })
// }