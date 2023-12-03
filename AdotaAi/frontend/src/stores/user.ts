import { defineStore } from "pinia";
import api from "../services/api";

export interface User {
  id: number;
  username: string;
  email: string;
  jwt: string;
  password: string;
}

interface State {
  user: User;
}

export const userStore = defineStore("user", {
  state: (): State => ({
    user: {
      jwt: localStorage.getItem("zFJqsz757BscGHsg"),
    } as User,
  }),

  getters: {
    username(state) {
      return state.user.username;
    },
    userId(state) {
      return state.user.id;
    },
  },
  /*authenticate: Esta action tenta autenticar um usuário fazendo uma requisição 
   para a rota "/auth/local" na API. Os parâmetros login e password são usados para 
   enviar as credenciais do usuário. Se a autenticação for bem-sucedida, o token JWT (JSON Web Token) 
   e informações do usuário são extraídos da resposta da API. As informações do usuário são então armazenadas 
  localmente no estado e o token JWT é salvo no armazenamento local (localStorage). 
  A função retorna true se a autenticação for bem-sucedida e false se ocorrer algum erro. */
  actions: {
    async authenticate(login: string, password: string) {
      try {
        const { data } = await api.post("/auth/local", {
          identifier: login,
          password: password,
        });

        const { user, jwt } = data;
        this.user = {
          id: user.id,
          username: user.username,
          email: user.email,
          password: "",
          jwt: jwt,
        };

        localStorage.setItem("zFJqsz757BscGHsg", jwt);
        return true;
      } catch (error) {
        console.log(error);
      }
      return false;
    },

    /*register: Esta action realiza o registro de um novo usuário fazendo uma requisição para 
      a rota "/auth/local/register" na API. Os parâmetros username, email e password são utilizados 
      para criar a nova conta. A função retorna true se o registro for bem-sucedido e false se ocorrer algum erro. */
    async register(username: string, email: string, password: string) {
      try {
        await api.post("/auth/local/register", {
          username: username,
          email: email,
          password: password,
        });

        return true;
      } catch (error) {
        return false;
      }
    },
    /*logout(): Esta action efetua o logout do usuário. Define o objeto user no estado como um objeto vazio e limpa 
      o armazenamento local (localStorage), removendo assim as informações do usuário autenticado. */
    logout() {
      this.user = {} as User;
      localStorage.clear();
    },
  },
});
