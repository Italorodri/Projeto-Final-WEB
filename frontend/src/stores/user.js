import { defineStore } from "pinia";
//import api from "../services/api";

export const userStore = defineStore("user", {
  state: () => ({
    user: {
      jwt: localStorage.getItem("zFJqsz757BscGHsg"),
    },
  }),

  getters: {
    username(state) {
      return state.user.username;
    },
    userId(state) {
      return state.user.id;
    },
  },

  actions: {
    async authenticate(login, password) {
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

    async register(username, email, password) {
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

    logout() {
      this.user = {};
      localStorage.clear();
    },
  },
});