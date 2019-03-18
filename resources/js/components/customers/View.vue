<template>
    <div class="customer-view" v-if="customer">
        <div class="user-img">
            <img src="https://avatars0.githubusercontent.com/u/5935096?s=600&v=4" alt="">
        </div>
        <div class="user-info">
            <table class="table">
                <tr>
                    <th>ID</th>
                    <td>{{ customer.id }}</td>
                </tr>
                <tr>
                    <th>Name</th>
                    <td>{{ customer.name }}</td>
                </tr>
                <tr>
                    <th>Email</th>
                    <td>{{ customer.email }}</td>
                </tr>
                <tr>
                    <th>Phone</th>
                    <td>{{ customer.phone }}</td>
                </tr>
                <tr>
                    <th>Website</th>
                    <td>{{ customer.website }}</td>
                </tr>
            </table>
            <router-link to="/customers">Back to all customers</router-link>
        </div>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex'

    export default {
        name: 'view',
        created() {
            var customer_id = this.$route.params.id

            if (this.customers.length) {
                var customer = this.customers.find((customer) => customer.id ==  customer_id)
                this.$store.commit('UPDATE_CUSTOMER', customer)
            } else {
                this.$store.dispatch('FETCH', customer_id)
            }
        },
        computed: {
            ...mapGetters({
                currentUser: 'currentUser',
                customer: 'customer',
                customers: 'customers'
            })
        }
    }
</script>

<style scoped>
.customer-view {
    display: flex;
    align-items: center;
}
.user-img {
    flex: 1;
}
.user-img img {
    max-width: 160px;
}
.user-info {
    flex: 3;
    overflow-x: scroll;
}
</style>
