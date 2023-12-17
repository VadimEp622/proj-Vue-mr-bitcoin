import { userService } from "../../services/user.service"

export default {
    state() {
        return {
            user: null,
        }
    },
    mutations: {
        setUser(state, { user }) {
            state.user = user
        }
    },
    actions: {
        loadUser({ commit }) {
            const user = userService.getUser()
            commit({ type: 'setUser', user })
        }
    },
    getters: {
        user(state) {
            return state.user
        }
    },
}