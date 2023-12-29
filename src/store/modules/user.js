import { authService } from "../../services/auth.service"
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
        async login({ commit }, { name }) {
            try {
                const user = await authService.login(name)
                commit({ type: 'setUser', user })
                showSuccessMsg('Login Successful')
            } catch (err) {
                console.log('Login failed', err)
                showErrorMsg('Login failed')
            }
        }
    },
    getters: {
        user(state) {
            return state.user
        }
    },
}