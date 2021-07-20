<template>
  <div id="registration" class="col-6 col-sm-12 col-xs-12">
    <h3>Register here</h3>
    <hr />
    <div class="m-1" v-for="user in users" v-bind:key="user.id">
      <h4>{{ user.name }}</h4>
      <button @click="registerUser(user)">Register</button>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    users() {
      return this.$store.getters.unregisteredUsers;
    },
  },
  methods: {
    registerUser(user) {
     this.$store.dispatch('doUserRegistration', user.id);
    },
  },
};
</script>

<style scoped>

</style>