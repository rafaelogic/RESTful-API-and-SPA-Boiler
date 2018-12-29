import { getLocalUser } from "../../helpers/auth"

const user = getLocalUser()

export default {
    state: {
        auth_error: null,
        currentUser: user,
        isLoggedIn: !!user,
        loading: false
    },
    getters: {
        authError(state) {
            return state.auth_error
        },

        currentUser(state) {
            return state.currentUser
        },

        isLoading(state) {
            return state.loading
        },

        isLoggedIn(state) {
            return state.isLoggedIn
        }
    },
    mutations: {
        LOGIN(state) {
            state.loading = true
            state.auth_error = null
        },
        LOGIN_FAILED(state, payload) {
            state.auth_error = payload.error
            state.loading = false
        },
        LOGIN_SUCCESS(state, payload) {
            state.auth_error = null
            state.isLoggedIn = true
            state.loading = false
            state.currentUser = Object.assign({}, payload.user, {
                token: payload.access_token
            })

            localStorage.setItem("user", JSON.stringify(state.currentUser))
        },
        LOGOUT(state) {
            localStorage.removeItem("user")
            state.isLoggedIn = false
            state.currentUser = null
        }
    },
    actions: {
        DO_LOGIN(context) {
            context.commit("LOGIN")
        }
    }
}
