import { userService } from "./user.service"

export const authService = {
    login,
    logout
}

async function login(name) {
    try {
        const user = await userService.getUserByName(name)
        if (!user) {
            const newUser = await userService.postNewUser(_createUser(name))
            userService.saveLocalUser(newUser)
            return newUser
        }

        userService.saveLocalUser(user)
        return user
    } catch (err) {
        console.log('Login failed', err)
        throw err
    }
}


function logout() {
    userService.clearLocalUser()
}



// ====================== private functions ======================

function _createUser(name) {
    return {
        name,
        balance: 100,
        transaction: []
    }
}