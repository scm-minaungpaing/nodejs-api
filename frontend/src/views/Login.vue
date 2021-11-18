<template>
  <form @submit.prevent="submit()">
    <h1 class="h3 mb-3 fw-normal">Please sign in</h1>

    <input
      v-model="data.email"
      type="email"
      class="form-control"
      placeholder="Email"
      required
    />

    <input
      v-model="data.password"
      type="password"
      class="form-control"
      placeholder="Password"
      required
    />

    <button class="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
  </form>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      data: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    async submit() {
      axios.post("http://localhost:5000/api/login", this.data).then(res => {
        console.log(res)
        
        this.$router.push("/");
      }).catch (error => {
        console.log(error)
      })
    },
  },
};
</script>

<style>
</style>