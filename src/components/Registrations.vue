<template>
  <div id="registrations" class="col-6 col-sm-12 col-xs-12">
    <div class="summary">
      <h3>Registrations</h3>
      <h5>Total: {{ total }}</h5>
    </div>
    <hr />
    <div
      class="row"
      v-for="registration in registrations"
      v-bind:key="registration.userId"
    >
      <h4>{{ registration.name }}</h4>
      <span @click="unregister(registration)">(Unregister)</span>
      <div class="date">{{ registration.date }}</div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters({
      registrations: "registrations",
      total: "totalRegistered",
    }),
  },
  methods: {
    unregister(registration) {
      this.$store.commit({
        type: 'unregisterUser',
        userId: registration.userId
      });
    },
  },
};
</script>

<style lang="scss" scoped>

</style>