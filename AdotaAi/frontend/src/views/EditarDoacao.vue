<template>
  <v-container mt-3 mb-3>
    <v-col class="d-flex align-end mb-6 flex-column">
      <router-link to="/animaisList"><v-icon>mdi-close</v-icon></router-link>
      <v-row style="width: 100%" class="d-flex justify-center align-center">
        <v-col cols="4">
          <img
            :src="src || 'http://localhost:1337' + image"
            alt=""
            style="width: 400px; height: 600px"
          />
        </v-col>
        <v-col>
          <v-card-text>
            <h1 class="text-center mb-5">Doe um animalzinho!</h1>
            <v-row align="center" justify="center">
              <v-col cols="12" sm="8">
                <v-text-field
                  v-model="name"
                  :error-messages="nameErrors"
                  label="Nome"
                  required
                  @input="$v.name.$touch()"
                  outlined
                  dense
                />
                <v-textarea
                  v-model="description"
                  :error-messages="descriptionErrors"
                  label="Descrição"
                  required
                  @input="$v.description.$touch()"
                  outlined
                  dense
                />
                <v-file-input
                  accept="image/*"
                  label="Imagem"
                  @change="handleFileUpload"
                  outlined
                  dense
                />
                <v-btn color="green" @click="submit" dark block tile
                  >Editar doação</v-btn
                >
              </v-col>
            </v-row>
          </v-card-text>
        </v-col>
      </v-row>
    </v-col>
  </v-container>
</template>

<script>
import { validationMixin } from "vuelidate";
import { required } from "vuelidate/lib/validators";
import { donationStore } from "@/stores/donation";
import { onBeforeMount, ref } from "@vue/composition-api";

export default {
  name: "EditarDoacao",
  mixins: [validationMixin],

  data: () => ({
    picture: "",
    checkbox: true,
    store: donationStore(),
    src: "",
  }),

  props: {
    id: String,
  },
  /* setup(props): Esta é a função setup do componente Vue 3, onde você configura o componente. O parâmetro props é usado para acessar 
     as propriedades passadas para o componente. Neste caso, parece que o componente espera receber uma propriedade chamada id*/
  setup(props) {
    const store = donationStore();
    const donation = ref({});
    const name = ref("");
    const description = ref("");
    const image = ref("");

    /*onBeforeMount: Um gancho de ciclo de vida que é executado antes do componente ser montado. Dentro dele, o código busca informações 
    sobre uma doação usando o ID fornecido nas props e preenche as variáveis reativas donation, name, description, e image com os dados da doação. */
    onBeforeMount(async () => {
      donation.value = await store.getDonation(props.id);
      name.value = donation.value.attributes.title;
      description.value = donation.value.attributes.description;
      image.value = donation.value.attributes.image.data.attributes.url;
    });

    return {
      name,
      description,
      image,
      donation,
    };
  },

  validations: {
    name: { required },
    description: { required },
  },

  computed: {
    nameErrors() {
      const errors = [];
      if (this.name) return errors;
      !this.name.required && errors.push("Nome é obrigatório");
      return errors;
    },

    descriptionErrors() {
      const errors = [];
      if (this.description) return errors;
      !this.description.required && errors.push("Descrição é obrigatório");
      return errors;
    },
  },

  methods: {
    /*handleFileUpload(event): Um método que é chamado quando um arquivo é carregado. 
      Ele atualiza as propriedades picture e src com o arquivo carregado. */
    handleFileUpload(event) {
      this.picture = event;
      this.src = URL.createObjectURL(event);
    },

    async submit() {
      this.$v.$touch();

      if (!this.$v.$error) {
        const editarDoacao = this.donation;
        editarDoacao.attributes.title = this.name;
        editarDoacao.attributes.description = this.description;

        const result = await this.store.update(editarDoacao, this.picture);
        if (result) {
          this.$router.push({ name: "userDoacoes" });
          this.$toast.success("Doação editada com sucesso!");
        } else {
          this.$toast.error("Não foi possível editar doação!");
        }
      }
    },
  },
};
</script>
