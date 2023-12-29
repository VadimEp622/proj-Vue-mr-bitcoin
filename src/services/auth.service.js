import { userService } from "./user.service"

export const authService = {
    login
}


// async function login(name) {
//     try {
//         const user = await userService.getUserByName(name)
//         if (user) return user

//         const newUser = await userService.postNewUser(_createUser(name))
//         return newUser
//     } catch (err) {
//         console.log('Login failed', err)
//         throw err
//     }
// }

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



// ====================== private functions ======================

function _createUser(name) {
    return {
        name,
        balance: 100,
        transaction: []
    }
}