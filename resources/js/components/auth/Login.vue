<template>
  <div class="login row justify-content-center">
    <div class="col-md-4">
      <div class="card">
        <div class="card-header">Login</div>
          <div class="card-body">
            <form @submit.prevent="authenticate">
              <div class="form-group row">
                <label for="email">Email:</label>
                <input type="email" class="form-control" placeholder="Email Address" v-model="form.email">
              </div>

              <div class="form-group row">
                <label for="password">Password:</label>
                <input type="password" class="form-control" placeholder="Password" v-model="form.password">
              </div>

              <div class="form-group row">
                <input type="submit" class="btn btn-primary" value="Login">
              </div>

              <template v-if="authError">
                <div class="form-group row">
                  <p class="error">{{ authError }}</p>
                </div>
              </template>
            </form>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {login} from '../../helpers/auth';

  export default {
    name: "login",
    data() {
      return {
        form: {
          email: '',
          password: ''
        },
        error: null
      };
    },

    methods: {
      authenticate() {
        this.$store.dispatch('DO_LOGIN');

        login(this.$data.form)
          .then((res) => {
            this.$store.commit("LOGIN_SUCCESS", res);
            this.$router.push({path: '/'});
          })
          .catch((error) => {
            this.$store.commit('LOGIN_FAILED', {error});
          })
      }
    },

    computed: {
      authError() {
        return this.$store.getters.authError;
      }
    }

  }
</script>

<style scoped>
.error {
  text-align: center;
  color: red;
}
</style>
