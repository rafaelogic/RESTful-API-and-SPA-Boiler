import Vue from "vue"
import Vuex from "vuex"

import customer from "./modules/customer"
import login from "./modules/login"

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        login, customer
    }
})
