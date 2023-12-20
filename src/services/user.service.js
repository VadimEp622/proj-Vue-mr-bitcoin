import { storageService } from "./async-storage.service"
import { utilService } from "./util.service"


const USER_KEY = 'user'


export const userService = {
    getUser
}

function getUser() {
    return storageService.query(USER_KEY)
        .then(userItem => {
            const user = userItem.length < 1 ? _createDemoUser() : userItem
            return user
        })
}


// =========== private functions ===========
function _createDemoUser() {
    const user = _createUser("Puki Ben David", 100, [])
    utilService.saveToStorage(USER_KEY, user)
    return user
}

function _createUser(name, balance, transaction) {
    return {
        name,
        balance,
        transaction
    }
}