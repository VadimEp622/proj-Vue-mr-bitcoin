export default {
    state() {
        return {
            isLoadingRoute: true,
        }
    },
    mutations: {
        setIsLoadingRoute(state, { isLoadingRoute }) {
            state.isLoadingRoute = isLoadingRoute
        }
    },
    actions: {
        updateIsLoadingRoute({ commit }, isLoadingRoute) {
            commit({ type: 'setIsLoadingRoute', isLoadingRoute })
        },
    },
    getters: {
        isLoadingRoute(state) {
            return state.isLoadingRoute
        },
    },
}