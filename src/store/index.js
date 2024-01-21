import { createStore } from 'vuex'
import contact from './modules/contact.js'
import user from './modules/user.js'
import system from './modules/system.js'

const storeOptions = {
    strict: true,
    modules: {
        contact,
        user,
        system
    }
}
const store = createStore(storeOptions)
export default store