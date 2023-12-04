<template>
  <v-container>
    <v-card class="main elevation-6">
      <v-row class="main">
        <v-col
          cols="12"
          md="6"
          class="main d-flex flex-column justify-center align-end white rounded-br-xl"
        >
          <v-img src="../assets/loginAdote.jpg" width="100%" height="100px" />
          <div
            style="width: 100%"
            class="white--text d-flex justify-start align-center pa-3"
          >
            <v-card-text class="green--text" style="width: fit-content">
              <h3 class="text-center">Já tem um login?</h3>
            </v-card-text>
            <div class="main d-flex flex-column justify-center align-start">
              <router-link to="/login">
                <v-btn class="green--text" tile outlined dark>Entre</v-btn>
              </router-link>
            </div>
          </div>
        </v-col>
        <v-col cols="12" md="6" class="d-flex justify-center align-center">
          <v-card-text class="mt-12">
            <h1 class="text-center mb-16">Faça seu cadastro</h1>
            <v-row align="center" justify="center">
              <v-col cols="12" sm="8">
                <v-text-field
                  v-model="username"
                  :error-messages="usernameErrors"
                  label="Primeiro Nome"
                  required
                  @input="$v.username.$touch()"
                  @blur="$v.username.$touch()"
                  outlined
                  dense
                  class="mt-4"
                />
                <v-text-field
                  v-model="email"
                  :error-messages="emailErrors"
                  label="E-mail"
                  required
                  @input="$v.email.$touch()"
                  @blur="$v.email.$touch()"
                  outlined
                  dense
                />
                <v-text-field
                  v-model="password"
                  :error-messages="passwordErrors"
                  label="Senha"
                  required
                  @input="$v.password.$touch()"
                  @blur="$v.password.$touch()"
                  outlined
                  dense
                  type="password"
                />
                <v-text-field
                  v-model="repeatPassword"
                  :error-messages="repeatPasswordErrors"
                  label="Repetir senha"
                  required
                  @input="$v.repeatPassword.$touch()"
                  @blur="$v.repeatPassword.$touch()"
                  outlined
                  dense
                  type="password"
                />
                <v-btn color="green" @click="submit" dark block tile
                  >Cadastro</v-btn
                >
              </v-col>
            </v-row>
          </v-card-text>
        </v-col>
      </v-row>
    </v-card>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
import { validationMixin } from "vuelidate";
import { required, minLength, email } from "vuelidate/lib/validators";
import { userStore } from "@/stores/user";

export default Vue.extend({
  name: "Cadastro",
  mixins: [validationMixin],

  /* data: Define o estado inicial do componente. 
    Os dados do formulário (nome de usuário, e-mail, senha, e repetição de senha) 
    são inicializados como strings vazias. */
  data: () => ({
    username: "",
    email: "",
    password: "",
    repeatPassword: "",
    store: userStore(),
  }),

  /*validations: Define regras de validação para os campos do formulário usando 
  a biblioteca de validação Vuelidate. Por exemplo, o campo username é obrigatório (required), 
  o campo email deve ser um e-mail válido, e os campos de senha e repetição de senha devem ter 
  pelo menos 8 caracteres de comprimento */
  validations: {
    username: { required },
    email: { required, email },
    password: { required, minLength: minLength(8) },
    repeatPassword: { required, minLength: minLength(8) },
  },

  /*computed: Define propriedades computadas para calcular as mensagens de erro com base nas regras de validação. 
  Cada propriedade computada retorna um array de mensagens de erro específicas para o campo correspondente. */
  computed: {
    usernameErrors() {
      const errors: any[] = [];
      if (!this.$v.username.$dirty) return errors;
      !this.$v.username.required && errors.push("Nome é obrigatório");
      return errors;
    },

    emailErrors() {
      const errors: any[] = [];
      if (!this.$v.email.$dirty) return errors;
      !this.$v.email.email && errors.push("Deve ser um e-mail válido");
      !this.$v.email.required && errors.push("E-mail é obrigatório");
      return errors;
    },

    passwordErrors() {
      const errors: any[] = [];
      if (!this.$v.password.$dirty) return errors;
      !this.$v.password.minLength &&
        errors.push("A senha deve ter mais de 8 caracteres");
      !this.$v.password.required && errors.push("senha ié obrigatória");
      return errors;
    },

    repeatPasswordErrors() {
      const errors: any[] = [];
      if (!this.$v.repeatPassword.$dirty) return errors;
      !this.$v.repeatPassword.minLength &&
        errors.push("A senha deve ter mais de 8 caracteres");
      this.repeatPassword !== this.password &&
        errors.push("a senha não é igual!");
      !this.$v.repeatPassword.required && errors.push("senha é obrigatória");
      return errors;
    },
  },

  methods: {
    /*submit: é chamada quando o formulário é enviado. Primeiro, chama this.$v.$touch() 
      para marcar todos os campos (elegíveis para validação). Em seguida, verifica se há erros de validação 
      usando this.$v.$error. Se não houver erros, é registrado um novo usuário. */
    async submit() {
      this.$v.$touch();

      if (!this.$v.$error) {
        const result = await this.store.register(
          this.username,
          this.email,
          this.password
        );

        if (result) {
          this.$router.push({ name: "login" });
          this.$toast.success("Cadastro realizado com sucesso!");
        } else {
          this.$toast.error("Erro inesperados ao tentar cadastrar!!");
        }
      }
    },
    /* Esta função é chamada para limpar o formulário, resetando as validações e 
      limpando os campos de e-mail, senha e nome de usuário. */
    clear() {
      this.$v.$reset();
      this.email = "";
      this.password = "";
      this.username = "";
    },
  },
});
</script>

<style scoped lang="scss">
.v-application .rounded-bl-xl {
  border-bottom-left-radius: 300px !important;
}
.v-application .rounded-br-xl {
  border-bottom-right-radius: 300px !important;
}
.container {
  max-width: none !important;
  height: 100vh !important;

  .main {
    height: 100% !important;
  }
}

header {
  display: none !important;
}
</style>
