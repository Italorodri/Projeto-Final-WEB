<template>
  <v-card class="d-flex flex-row">
    <router-view />
  </v-card>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "HomePage",

  data: () => ({
    drawer: true,
  }),
});
</script>

<style>
a {
  text-decoration: none;
}
</style>
