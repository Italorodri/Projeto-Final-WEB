<template>
  <div>
    <v-app-bar color="#74c69d">
      <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>
      <router-link to="/">
        <v-toolbar-title class="black--text" v-if="store.username">
          Bem vindo(a), {{ store.username }}!
        </v-toolbar-title>
      </router-link>
      <v-spacer></v-spacer>
      <!--<v-img src="frontend/public/img/logo.png" width="50%" height="300px" />-->
      <router-link to="/registrarDoacao">
        <v-btn icon class="mx-1">
          <v-icon>mdi-hand-coin-outline</v-icon>
        </v-btn>
      </router-link>
      <router-link to="/userDoacoes">
        <v-btn icon class="mx-1">
          <v-badge color="#40916c" :content="userDoacoes.length">
            <v-icon>mdi-heart-outline</v-icon>
          </v-badge>
        </v-btn>
      </router-link>
      <router-link to="/userAdocoes">
        <v-btn icon class="mx-1">
          <v-badge color="#40916c" :content="userAdocoes.length">
            <v-icon>mdi-cart-outline</v-icon>
          </v-badge>
        </v-btn>
      </router-link>
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" absolute temporary>
      <v-list nav dense>
        <v-list-item-group
          v-model="group"
          active-class="green--text text--accent-4"
        >
          <router-link to="/animaisList">
            <v-list-item>
              <v-list-item-icon>
                <v-icon>mdi-home</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Início</v-list-item-title>
            </v-list-item>
          </router-link>
          <router-link to="/perguntas">
            <v-list-item>
              <v-list-item-icon>
                <v-icon>mdi-account-question</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Perguntas</v-list-item-title>
            </v-list-item>
          </router-link>
          <router-link to="/ajuda">
            <v-list-item>
              <v-list-item-icon>
                <v-icon>mdi-help </v-icon>
              </v-list-item-icon>
              <v-list-item-title>Ajuda</v-list-item-title>
            </v-list-item>
          </router-link>
          <router-link to="/sobrenos">
            <v-list-item>
              <v-list-item-icon>
                <v-icon>mdi-information </v-icon>
              </v-list-item-icon>
              <v-list-item-title>Sobre Nós</v-list-item-title>
            </v-list-item>
          </router-link>
          <router-link to="/login">
            <v-list-item @click="store.logout">
              <v-list-item-icon>
                <v-icon>mdi-logout</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Login ou Cadastro</v-list-item-title>
            </v-list-item>
          </router-link>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script lang="ts">
import { userStore } from "@/stores/user";
import { computed, onBeforeMount } from "@vue/composition-api";
import { donationStore } from "@/stores/donation";

export default {
  name: "Header",

  /*drawer: Uma variável booleana que controla se o drawer (menu lateral) 
    está aberto ou fechado. Inicialmente, está definido como false. */
  data: () => ({
    drawer: false,
    group: null,
    store: userStore(),
  }),

  setup() {
    const store = donationStore();
    const userAdocoes = computed(() => store.currentUserLiked);
    const userDoacoes = computed(() => store.currentUserDonations);

    onBeforeMount(async () => store.getDonations());
    return {
      userAdocoes,
      userDoacoes,
    };
  },
};
</script>

<style>
a {
  text-decoration: none;
}
</style>
