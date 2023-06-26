import { createStore } from 'vuex'
import contact from './modules/contact.js'

const storeOptions = {
    strict: true,
    state() {
        return {
            // count: 10,
        }
    },
    mutations: {
        // increment(state) {
        //     state.count++
        // },
        // setCount(state, { val }) {
        //     state.count = val
        // }
    },
    getters: {
        // count(state) { return state.count }
    },
    modules: {
        contact,
    }
}
const store = createStore(storeOptions)
export default store