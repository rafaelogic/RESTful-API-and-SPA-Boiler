<template>
    <div class="customer-new">
        <form @submit.prevent="add">
            <table class="table">
                <tr>
                    <th>Name</th>
                    <td>
                        <input type="text" class="form-control" v-model="customer.name" placeholder="Customer Name"/>
                    </td>
                </tr>
                <tr>
                    <th>Email</th>
                    <td>
                        <input type="email" class="form-control" v-model="customer.email" placeholder="Customer Email"/>
                    </td>
                </tr>
                <tr>
                    <th>Phone</th>
                    <td>
                        <input type="text" class="form-control" v-model="customer.phone" placeholder="Customer Phone"/>
                    </td>
                </tr>
                <tr>
                    <th>Website</th>
                    <td>
                        <input type="text" class="form-control" v-model="customer.website" placeholder="Customer Website"/>
                    </td>
                </tr>
                <tr>
                    <td>
                        <router-link to="/customers" class="btn">Cancel</router-link>
                    </td>
                    <td class="text-right">
                        <input type="submit" value="Create" class="btn btn-primary">
                    </td>
                </tr>
            </table>
        </form>
        <div class="errors pl-2 pb-2" v-if="errors">
           <strong>{{errors}}</strong>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'new',
        data() {
            return {
                customer: {
                    name: '',
                    email: '',
                    phone: '',
                    website: ''
                },
                errors: null
            };
        },
        methods: {
            add() {
                this.$store
                    .dispatch('CREATE', this.$data.customer)
                    .then(() => {
                        this.$router.push('/customers')
                    })
                    .catch(err => {
                        this.$data.errors = err.response.data.message
                    })
            }
        }
    }
</script>

<style>
.errors {
    background: lightcoral;
    border-radius:5px;
    padding: 21px 0 2px 0;
}
</style>

