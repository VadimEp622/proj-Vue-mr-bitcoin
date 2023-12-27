import { storageService } from "./async-storage.service"
import { utilService } from "./util.service"


const USER_KEY = 'user'


export const userService = {
    query,
    getUserByName,
    postNewUser,
    getLoggedinUser,
    saveLocalUser,
    clearLocalUser
}


function query() {
    return storageService.query(USER_KEY)
        .then(users => users.length < 1 ? _createDemoUsers() : users)
}

function getUserByName(name) {
    return query()
        .then(users => users.find(user => user.name.toLocaleLowerCase() === name.toLocaleLowerCase()))
}

function postNewUser(user) {
    return storageService.post(USER_KEY, user)
}

function getLoggedinUser() {
    return JSON.parse(sessionStorage.getItem(USER_KEY))
}

function saveLocalUser(user) {
    const userToStore = { _id: user._id, name: user.name, balance: user.balance, transaction: user.transaction }
    sessionStorage.setItem(USER_KEY, JSON.stringify(userToStore))
    return user
}

function clearLocalUser() {
    sessionStorage.removeItem(USER_KEY)
}



// ====================== private functions ======================
function _createDemoUsers() {
    const users = [
        _createUser("Puki Ben David", 100, [])
    ]
    utilService.saveToStorage(USER_KEY, users)
    return users
}


function _createDemoUser() {
    const user = _createUser("Puki Ben David", 100, [])
    utilService.saveToStorage(USER_KEY, user)
    return user
}

function _createUser(name, balance, transaction) {
    return {
        _id: utilService.makeId(),
        name,
        balance,
        transaction
    }
}

