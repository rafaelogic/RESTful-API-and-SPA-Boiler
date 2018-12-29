export default {
    state: {
        customer: {},
        customers: [],
        errors: []
    },

    getters: {
        customer(state) {
            return state.customer
        },
        customers(state) {
            return state.customers
        },
        errors(state) {
            return state.errors
        }
    },

    mutations: {
        CUSTOMER(state, payload) {
            state.customer = payload
        },
        CUSTOMERS(state, payload) {
            state.customers = payload
        },
        ERRORS(state, payload) {
            state.errors = payload
        },
        UPDATE_CUSTOMER(state, payload) {
            state.customer = payload
        },
        REMOVE_CUSTOMER(state, payload){
            let i = state.customers.findIndex(customer => customer.id === payload)
            state.customers.splice(i, 1)
        },
        UPDATE_CUSTOMER_LISTS(state, payload) {
            state.customers.unshift(payload)
        }
    },

    actions: {
        FETCH(context, id) {
            axios.get("/api/customers/"+id, {
                    headers: {
                        Authorization: `Bearer ${
                            context.getters.currentUser.token
                        }`
                    }
                })
                .then(response => {
                    context.commit("CUSTOMER", response.data.customer)
                })
        },

        FETCH_ALL(context) {
            axios.get("/api/customers", {
                headers: {
                    Authorization: `Bearer ${
                        context.getters.currentUser.token
                    }`
                }
            })
            .then(response => {
                context.commit("CUSTOMERS", response.data.customers)
            })
        },

        CREATE(context, customer) {
            return axios.post('/api/customers/new', customer, {
                headers: {
                    "Authorization": `Bearer ${context.getters.currentUser.token}`
                }
            })
            .then(() => {
                context.commit('UPDATE_CUSTOMER_LISTS', customer)
            })
        },

        DELETE(context, id) {
            return axios.delete('/api/customers/destroy/'+id, {
                headers: {
                    "Authorization": `Bearer ${context.getters.currentUser.token}`
                }
            })
            .then(() => {
                context.commit('REMOVE_CUSTOMER', id)
            })
        },
    }
}
