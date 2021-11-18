<template>
  <div class="home">
    <h4>{{ message }}</h4>
  </div>
</template>

<script>
// @ is an alias to /src
import axios from 'axios'
export default {
  name: 'Home',
  data() {
    return {
      message: 'You are not logged in!'
    }
  },
  methods: {
    async getAuth() {
      try {
       axios.get('http://localhost:5000/api/user').then( res => {
         console.log(res)
       })
        await this.$store.dispatch('setAuth', true);
      } catch (e) {
        await this.$store.dispatch('setAuth', false);
      }
    }
  },
  mounted() {
    this.getAuth()
  }
}
</script>
