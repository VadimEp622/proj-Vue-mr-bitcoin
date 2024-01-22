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
            // TODO: rethink who sends user money, and who cannot send user money, and restructure transaction action if needed
            try {
                const contact = contactId
                    ? await contactService.getContactById(contactId)
                    : {
                        _id: '000001',
                        name: 'Mr. Bitcoin'
                    }


                const loggedInUser = await userService.getUserById(userId)
                if (loggedInUser?.balance === undefined) throw new Error('Faulty user object - no balance key')
                if (loggedInUser.balance - amount < 0) throw new Error('Not enough currency')

                const transaction = contactId
                    ? userService.getNewTransaction(loggedInUser, contact, amount)
                    : userService.getNewTransaction(contact, loggedInUser, amount)

                loggedInUser.transactions.push(transaction)
                loggedInUser.transactions.sort((a, b) => b.content.at - a.content.at)
                loggedInUser.balance -= contactId ? amount : -amount

                await userService.updateUser(loggedInUser)
                userService.saveLocalUser(loggedInUser)

                commit({ type: 'setUser', user: loggedInUser })
                showSuccessMsg('Transfer success')
            } catch (err) {
                console.log('Could not perform transaction', err)
                if (err?.message) showErrorMsg(`Transfer failed - ${err.message}`)
                else showErrorMsg('Transfer failed')
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