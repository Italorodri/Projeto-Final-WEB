<!-- <template v-slot:extension>
  <v-col>
    <v-tabs v-model="tab" align-with-title>
      <v-tabs-slider color="yellow"></v-tabs-slider>

      <v-tab v-for="item in items" :key="item">
        {{ item }}
      </v-tab>

      <v-tab-item>
        <v-col cols="10" rounded="0">
          <v-row>
            <v-col sm="4" md="3" v-for="(donation, i) in doacoes" :key="i">
              <Animal :animal="donation" :possoEditar="possoEditar" />
            </v-col>
          </v-row>
        </v-col>
      </v-tab-item>
      <v-tab-item>
           Características
      </v-tab-item>
    </v-tabs>
  </v-col>
  -->
<template>
  <v-col cols="10" rounded="0">
    <v-row>
      <v-col sm="4" md="3" v-for="(donation, i) in doacoes" :key="i">
        <Animal :animal="donation" :possoEditar="possoEditar" />
      </v-col>
    </v-row>
  </v-col>
</template>

<script>
import { computed, onBeforeMount } from "@vue/composition-api";
import Vue from "vue";
import { donationStore } from "../stores/donation";
import Animal from "./Animal.vue";
import { useRoute } from "vue2-helpers/vue-router";

export default Vue.extend({
  name: "AnimalList",

  components: {
    Animal,
  },

  /*data: () => ({
    tab: null,
    items: ["Animais", "características", "ajude-nos"],
  }),*/

  computed: {
    currentRouteName() {
      return this.$route.name;
    },
  },

  setup() {
    const route = useRoute();
    const store = donationStore();
    let doacoes;
    let possoEditar = false;

    /* Verificando rotas para definir as funcionalidades */
    switch (route?.fullPath) {
      case "/userAdocoes":
        doacoes = computed(() => store.currentUserLiked);
        break;
      case "/userDoacoes":
        possoEditar = true;
        doacoes = computed(() => store.currentUserDonations);
        break;
      default:
        doacoes = computed(() => store.currentDonations);
        break;
    }

    onBeforeMount(async () => store.getDonations());
    return {
      store,
      possoEditar,
      doacoes,
    };
  },
});
</script>

<style>
.container {
  padding: 0px !important;
}
.v-btn.withoutupercase {
  text-decoration: none;
}
.v-chip.v-size--default {
  border-radius: 50px !important;
  font-size: 14px !important;
  height: 40px !important;
  width: 40px !important;
}
.v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  opacity: 0.5;
  position: absolute;
  width: 100%;
}
.card1 {
  z-index: 10;
}
.card2 {
  z-index: 1;
}
</style>
