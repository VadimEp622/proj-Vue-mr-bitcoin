import { authService } from "../../services/auth.service"
import { contactService } from "../../services/contact.service"
import { showErrorMsg, showSuccessMsg } from "../../services/event-bus.service"
import { userService } from "../../services/user.service"


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
        async createTransaction({ commit }, { userId, contactId, amount }) {
            try {
                const contact = await contactService.getContactById(contactId)
                const loggedInUser = await userService.getUserById(userId)
                if (!loggedInUser?.balance) throw new Error('Faulty user object - no balance key')
                if (loggedInUser.balance - amount < 0) throw new Error('not enough currency')

                const transaction = userService.getNewTransaction(loggedInUser, contact, amount)
                loggedInUser.transactions.push(transaction)
                loggedInUser.transactions.sort((a, b) => b.content.at - a.content.at)
                loggedInUser.balance -= amount

                await userService.updateUser(loggedInUser)
                userService.saveLocalUser(loggedInUser)

                commit({ type: 'setUser', user: loggedInUser })
                showSuccessMsg('Transfer success')
            } catch (err) {
                console.log('Could not perform transaction', err)
                showErrorMsg('Transfer failed')
            }
        }
    },
    getters: {
        user(state) {
            return state.user
        },
        transactions(state) {
            return state.user.transactions
        }
    },
}