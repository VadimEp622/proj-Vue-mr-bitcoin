import { authService } from "../../services/auth.service"
import { showErrorMsg, showSuccessMsg } from "../../services/event-bus.service"
import { userService } from "../../services/user.service"


// Transfer of currency:
//  I. removing x amount from user
//  II. adding x amount to contact (contact object is not changed in any way, only user activity)

export default {
    state() {
        return {
            user: userService.getLoggedinUser(),
        }
    },
    mutations: {
        setUser(state, { user }) {
            state.user = user
        }
    },
    actions: {
        async login({ commit }, name) {
            try {
                const user = await authService.login(name)
                commit({ type: 'setUser', user })
                showSuccessMsg('Login Successful')
            } catch (err) {
                console.log('Login failed', err)
                showErrorMsg('Login failed')
            }
        },
        logout({ commit }) {
            authService.logout()
            showSuccessMsg('Logging out')//add a normal msg (not green success/red error, but gray notification?)
            commit({ type: 'setUser', user: null })
        },
        async createTransaction({ commit }, { contactId, amount }) {
            console.log('User Store - transaction - contactId', contactId)
            console.log('User Store - transaction - amount', amount)

            // TODO: async-ly get contact using contactId (verifying if it exists)
            // ...

            // TODO: async-ly get logged-in-user, to verify if transfer amount is possible with remaining coins
            // ...

            // TODO: async-ly update user object with a transferal, and removal of X amount of coins from total
            // ...

            // TODO: sync-ly update store user object transferal
            // ...
            
        }
    },
    getters: {
        user(state) {
            return state.user
        }
    },
}