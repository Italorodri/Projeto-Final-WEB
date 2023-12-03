<template>
  <v-container mt-3 mb-3>
    <v-col class="d-flex align-end mb-6 flex-column">
      <router-link to="/animaisList"><v-icon>mdi-close</v-icon></router-link>
      <!-- Detalhes de um animal em colunas separadas, imagem, tituto e descrição-->
      <v-col class="d-flex align-center justify-center">
        <img
          :src="`http://localhost:1337${donationObect.imageURL}`"
          class="img"
          alt=""
          style="width: 70%; height: 500px"
        />
      </v-col>
      <v-col>
        <div class="pl-6">
          <v-row class="d-flex justify-space-between">
            <p class="display-1 mb-0">{{ donationObect.title }}</p>
          </v-row>
          <div class="row">
            <div>
              <p class="pt-3 subtitle-1 font-weight-thin">
                {{ donationObect.description }}
              </p>
            </div>
          </div>
        </div>
      </v-col>
    </v-col>
    <!-- Campo comentário-->
    <v-col v-if="!!userStoreRef.username">
      <v-form>
        <v-textarea
          v-model="comentar"
          label="Comentário"
          outlined
          dense
          class="custom-textarea"
        />
        <v-btn @click="onSubmit" color="green">Adicionar comentário</v-btn>
      </v-form>
    </v-col>
    <!-- Nome do usuário e seu respectivo comentário-->
    <v-col v-for="(comment, i) in comentarios" :key="i">
      <h1>{{ getCommentAuthor(comment) }}</h1>
      <p>{{ getComment(comment) }}</p>
    </v-col>
  </v-container>
</template>

<script lang="ts">
import { commentsStore, Comment } from "@/stores/comments";
import { Donation, donationStore } from "@/stores/donation";
import { userStore } from "@/stores/user";
import {
  computed,
  defineComponent,
  onBeforeMount,
  ref,
} from "@vue/composition-api";

export default defineComponent({
  name: "AnimalDetalhes",

  data: () => ({
    userStoreRef: userStore(),
    comentar: "",
    storeRef: donationStore(),
    commentsStoreRef: commentsStore(),
  }),

  props: {
    id: String,
  },

  setup(props: { id?: number }) {
    const store = donationStore();
    const commentsStoreRef = commentsStore();
    const doacao = ref<Donation>({} as Donation);
    const comentarios = ref<Comment[]>([]);
    /* Informações da página de detalhes do animal*/
    const donationObect = computed(() => {
      if (doacao.value && doacao.value.attributes) {
        return {
          imageURL: doacao.value.attributes.image.data.attributes.url,
          title: doacao.value.attributes.title,
          description: doacao.value.attributes.description,
        };
      } else {
        return {};
      }
    });
    /* comentários por usuário (username)*/
    const getCommentAuthor = (comment: any) => {
      if ((comment && comment.attributes) || comment.autor) {
        return comment.attributes
          ? comment.attributes.autor.data.attributes.username
          : comment.autor.username;
      } else {
        return "Autor Desconhecido";
      }
    };
    /* comentários por usuário (comentario realizado)*/
    const getComment = (comment: any) => {
      if (comment || comment.attributes) {
        return comment.attributes
          ? comment.attributes.comentar
          : comment.comentar;
      } else {
        return "Autor Desconhecido";
      }
    };

    /*onBeforeMount: Durante esse estágio, ela utiliza store e commentsStoreRef para obter informações sobre uma doação e os comentários 
      relacionados a essa doação, armazenando esses dados em variáveis reativas (doacao e comentarios) para uso posterior no componente. */
    onBeforeMount(async () => {
      doacao.value = await store.getDonation(Number(props.id));
      comentarios.value = await commentsStoreRef.getCommentsByDonation(
        Number(props.id)
      );
    });

    return {
      store,
      doacao,
      comentarios,
      donationObect,
      getCommentAuthor,
      getComment,
    };
  },

  methods: {
    /* formData.append: Adiciona um campo chamado "data" ao FormData contendo um JSON convertido em string. 
       Esse JSON inclui informações como o texto do comentário (this.comentar), o ID do autor (this.userStoreRef.userId), 
       e o número da doação (Number(this.id)).

       const result: Envia uma requisição para criar um comentário utilizando o método createComment da loja (commentsStoreRef) 
       e passa o FormData como argumento. O resultado é armazenado na variável result.

      this.comentarios: Adiciona o comentário recém-criado (result) ao array this.comentarios. Parece que this.comentarios é 
      uma variável do componente que armazena os comentários relacionados à doação.

      this.comentar: Limpa o campo de comentário (this.comentar) no componente após a submissão. */
    async onSubmit() {
      const formData = new FormData();

      formData.append(
        "data",
        JSON.stringify({
          comentar: this.comentar as any,
          autor: this.userStoreRef.userId as any,
          doacao: Number(this.id),
        })
      );

      const result = await this.commentsStoreRef.createComment(formData);

      this.comentarios.push(result);

      this.comentar = "";
    },
  },
});
</script>

<style>
.custom-textarea .v-input__control {
  max-height: 70px;
}

.custom-textarea .v-input__slot {
  max-height: 70px;
}

.custom-textarea .v-textarea {
  border-bottom: none;
}
</style>
