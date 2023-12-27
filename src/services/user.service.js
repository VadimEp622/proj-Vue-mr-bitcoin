import { storageService } from "./async-storage.service"
import { utilService } from "./util.service"


const USER_KEY = 'user'


export const userService = {
    query,
    getUserByName,
    postNewUser
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

function clearLocalUser() {
    sessionStorage.removeItem(BASE_URL)
}

function saveLocalUser(user) {
    user = { name: user.name }
    sessionStorage.setItem(BASE_URL, JSON.stringify(user))
    return user
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

