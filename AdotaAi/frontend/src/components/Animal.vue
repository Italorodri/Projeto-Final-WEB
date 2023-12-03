<template>
  <v-card class="card-1 card-div">
    <div class="like-icon-div">
      <label for="card-1-like" class="like-icon-div-child"> </label>
    </div>
    <!-- Informações do animal clicado-->
    <router-link
      :to="{
        path: '/animalDetalhes/' + animal.id,
        params: { id: animal.id },
      }"
    >
      <img
        :src="
          'http://localhost:1337' + animal.attributes.image.data.attributes.url
        "
        style="width: 100%; height: 100px; cursor: pointer"
        class="img"
        alt=""
      />
    </router-link>
    <v-spacer></v-spacer>
    <v-row style="width: 100%">
      <v-card-title style="width: 100%" class="d-flex justify-space-between">
        {{ animal.attributes.title }}
        <!-- Deletar doacao realizada -->
        <v-col class="d-flex justify-end">
          <v-icon
            large
            @click="deleteDoacao"
            :class="possoEditar ? '' : 'd-none'"
            >mdi-delete</v-icon
          >
          <!-- Editar doacao realizada -->
          <router-link
            :to="{
              path: '/editarDoacao/' + animal.id,
              params: { id: animal.id },
            }"
          >
            <v-icon large :class="possoEditar ? '' : 'd-none'"
              >mdi-pencil</v-icon
            >
          </router-link>

          <!-- Botão relacionado a adoção de um animal e exclusão de um animmal adotado -->
          <v-btn
            large
            :color="selecao ? 'red' : 'green'"
            @click="gerenciarUser"
            :class="!possoEditar ? '' : 'd-none'"
            >{{ selecao ? "Excluir" : "Adote" }}</v-btn
          >
        </v-col>
      </v-card-title>
    </v-row>
  </v-card>
</template>

<script>
import { computed } from "@vue/composition-api";
import { donationStore } from "@/stores/donation";
import { useRoute } from "vue2-helpers/vue-router";
import { userStore } from "@/stores/user";
import Vue from "vue";

export default Vue.extend({
  name: "Animal",

  data: () => ({
    loading: false,
    store: donationStore(),
    userStore: userStore(),
  }),

  props: {
    animal: Object,
    filted: Boolean,
  },

  setup(props) {
    let selecao = false;
    let possoEditar = false;
    const route = useRoute();
    const store = donationStore();
    const userSelecaoDoacao = computed(() => store.currentUserLiked);
    const userDoacoes = computed(() => store.currentUserDonations);

    /*Se o animal fornecido nas propriedades está na lista de doações que o usuário doou, atualiza selecao para true. */
    if (userSelecaoDoacao.value.includes(props.animal)) selecao = true;
    if (
      userDoacoes.value.includes(props.animal) &&
      route?.fullPath == "/userDoacoes"
    )
      possoEditar = true;
    return {
      selecao,
      possoEditar,
    };
  },
  methods: {
    /* deleção de uma doação */
    async deleteDoacao() {
      const result = await this.store.delete(this.animal.id);

      if (result) {
        this.store.getDonations();
        this.$toast.success("Doação deletada com sucesso!");
      } else {
        this.$toast.error("Não foi possível deletar doação!");
      }
    },
    /* O método gerenciarUser trata da interação do usuário com uma doação. Se o usuário não estiver logado, 
       exibe um erro; caso contrário, atualiza a lista adoções do usuário e exibe uma mensagem de sucesso; 
       caso contrário, exibe uma mensagem de erro. */
    async gerenciarUser() {
      const store = userStore();
      const novaDoacao = this.animal;

      if (!store.username) {
        this.$toast.error("Faça login para adotar");
        return;
      }

      if (this.selecao) {
        novaDoacao.attributes.users_liked.data.splice(
          novaDoacao.attributes.users_liked.data.indexOf(store.user.id)
        );
      } else {
        novaDoacao.attributes.users_liked.data.push(store.user.id);
      }

      const result = await this.store.update(this.animal);
      if (result) {
        this.store.getDonations();
        this.$toast.success("Sucesso!");
      } else {
        this.$toast.error("Não foi possível");
      }
    },
  },
});
</script>

<style scoped>
* {
  padding: 0;
  margin: 0;
}

/* Estilo do card */
.card-div {
  width: 18em;
  min-height: 18em;
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: center;
  margin: 0.6em;
  box-sizing: border-box;
  border-radius: 10px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: transform 0.2s ease-in-out;
}

/* Estilo geral */
.img-div {
  width: 100%;
  height: 8em;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding-top: 1rem;
  z-index: 1;
  border-radius: 0 0 10px 10px;
}
.img {
  transform-origin: bottom;
  transform: translateY(7.5%);
  transition: transform 0.3s ease-in-out;
}

/* Estilo do ícone */
.like-icon-div {
  padding: 1em 1em 0 1em;
  width: 100%;
  box-sizing: border-box;
  text-align: right;
  font-size: 1.5em;
  color: var(--heart-icon-color);
  border-radius: 10px 10px 0 0;
  display: flex;
  justify-content: flex-end;
}

.like-icon-div-child {
  width: 1em;
  height: 1em;
  position: relative;
  z-index: 3;
  cursor: pointer;
}

.card-1 .like-icon-div {
  background-color: var(--card-1-secondary-color);
}

.card-2 .like-icon-div {
  background-color: var(--card-2-secondary-color);
}

.card-3 .like-icon-div {
  background-color: var(--card-3-secondary-color);
}

.card-div:hover .img-div img {
  transform: translateY(7.5%) scale(1.2);
}

.card-div:hover {
  transform: translate(0, -10px);
}

.like-icon-div-child:hover .heart-fill {
  opacity: 1;
  transform: scale(1);
}

.like-icon-div-child:hover .heart-empty {
  transition-delay: 0.25s;
  opacity: 0;
}

@keyframes like-animation {
  0% {
    opacity: 1;
    transform: scale(1);
  }

  50% {
    opacity: 1;
    color: var(--liked-heart-icon-color);
    transform: scale(0.5);
  }

  100% {
    opacity: 1;
    color: var(--liked-heart-icon-color);
    transform: scale(1);
  }
}

@keyframes unlike-animation {
  0% {
    opacity: 1;
    transform: scale(1);
  }

  50% {
    opacity: 1;
    transform: scale(0.5);
  }

  100% {
    opacity: 1;
    color: var(--heart-icon-color);
    transform: scale(1);
  }
}
</style>
