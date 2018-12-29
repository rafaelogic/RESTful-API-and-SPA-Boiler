<template>
    <div>
        <div class="float-right mb-2">
            <router-link to="/customers/new" class="btn btn-primary btn-sm">New</router-link>
        </div>
        <table class="table">
            <thead>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Actions</th>
            </thead>
            <tbody>
                <template v-if="!customers.length">
                    <tr>
                        <td colspan="4" class="text-center">No Customers Available</td>
                    </tr>
                </template>
                <template v-else>
                    <tr v-for="customer in customers" :key="customer.id">
                        <td>{{ customer.name }}</td>
                        <td>{{ customer.email }}</td>
                        <td>{{ customer.phone }}</td>
                        <td>
                            <router-link :to="`/customers/${customer.id}`">View</router-link>
                            <a href="#" @click.prevent="destroy(customer)" class="text-danger ml-2">Delete</a>
                        </td>
                    </tr>
                </template>
            </tbody>
        </table>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex'

    export default {
        name: 'list',
        created() {
            if (!this.customers.length) {
                this.$store.dispatch('FETCH_ALL');
            }
        },

        computed: {
            ...mapGetters({
                customers:'customers'
            }),
        },

        methods: {
             destroy(customer) {
                if (confirm("Are you sure you want to delete " + customer.name + " ?")) {
                    this.$store.dispatch('DELETE', customer.id)
                }
            }
        },
    }
</script>
