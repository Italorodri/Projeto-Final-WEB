import { defineStore } from "pinia";
import api from "../services/api";
import { User, userStore } from "./user";

interface Attributes {
  title: string;
  description: string;
  image: any;
  status: boolean;

  users_permissions_user: {
    data: User;
  };
  users_liked: {
    data: any[];
  };
  comentarios: {
    data: any[];
  };
}

export interface Donation {
  id: number;
  attributes: Attributes;
}

interface State {
  userDoacoes: Donation[];
  donations: Donation[];
  userAdocoes: Donation[];
}

export const donationStore = defineStore("donation", {
  state: (): State => ({
    userDoacoes: [],
    donations: [],
    userAdocoes: [],
  }),

  /*  currentDonations(state): Retorna a propriedade donations do estado. 
      Este getter serve para acessar a lista de doações armazenada no estado.

      currentUserDonations(state): Retorna a propriedade userDoacoes do estado. 
      Este getter serve para acessar a lista de doações associadas ao usuário atual.

    currentUserLiked(state): Retorna a propriedade userAdocoes do estado. 
    Este getter serve para acessar a lista de itens que o usuário atual adotou. 
  */
  getters: {
    currentDonations(state) {
      return state.donations;
    },
    currentUserDonations(state) {
      return state.userDoacoes;
    },
    currentUserLiked(state) {
      return state.userAdocoes;
    },
  },

  actions: {
    async getDonations() {
      const store = userStore();

      try {
        const donations = await api.get("/donations?populate=*");
        this.donations = donations.data.data;

        const userDoacoes = await api.get(
          "/donations?populate=*&filters[users_permissions_user][id][$eq]=" +
            store.user.id
        );
        this.userDoacoes = userDoacoes.data.data;

        const userAdocoes = await api.get(
          "/donations?populate=*&filters[users_liked][id][$in]=" + store.user.id
        );
        this.userAdocoes = userAdocoes.data.data;

        return true;
      } catch (error) {
        return false;
      }
    },
    /*getDonation: Obtém uma doação específica da API com base no ID fornecido. */
    async getDonation(id: number) {
      try {
        const { data } = await api.get(`/donations/${id}?populate=*`);
        return data.data;
      } catch (error) {
        return false;
      }
    },
    /*create: Cria uma nova doação chamando a API com os dados fornecidos. 
      Usa um token de autorização recuperado do armazenamento local. */
    async create(donation: FormData) {
      try {
        const { data } = await api.post(`/donations/`, donation, {
          headers: {
            "Content-Type": "multipart/form-data",
            // eslint-disable-next-line prettier/prettier
            Authorization: `Bearer ${localStorage.getItem("zFJqsz757BscGHsg")}`,
          },
        });
        return data.data;
      } catch (error) {
        return false;
      }
    },
    /*delete: Exclui uma doação com base no ID fornecido chamando a API. 
      Usa um token de autorização recuperado do armazenamento local. */
    async delete(id: number) {
      try {
        await api.delete(`/donations/${id}`, {
          headers: {
            // eslint-disable-next-line prettier/prettier
            Authorization: `Bearer ${localStorage.getItem("zFJqsz757BscGHsg")}`,
          },
        });
        return true;
      } catch (error) {
        return false;
      }
    },
    /*update: Atualiza uma doação existente, enviando uma requisição PUT para a API. */
    async update(donation: any, newPicture?: File) {
      const formData = new FormData();
      const { attributes, id } = donation;

      if (newPicture) {
        formData.append("files.image", newPicture, newPicture.name);
      }

      formData.append(
        "data",
        JSON.stringify({
          id: id,
          title: attributes.title,
          description: attributes.description,
          status: attributes.status,
          users_liked: attributes.users_liked.data,
          users_permissions_user: attributes.users_permissions_user.data,
          // image: newPicture && [],
        })
      );

      try {
        await api.put(`/donations/${donation.id}`, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
            // eslint-disable-next-line prettier/prettier
            Authorization: `Bearer ${localStorage.getItem("zFJqsz757BscGHsg")}`,
          },
        });

        return true;
      } catch (error) {
        console.log(error);

        return false;
      }
    },
    /*addComment: Adiciona um novo comentário chamando a API. */
    async addComment(comment: FormData) {
      try {
        const { data } = await api.post(`/comentarios`, comment, {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${localStorage.getItem("zFJqsz757BscGHsg")}`,
          },
        });
        return data.data;
      } catch (error) {
        return false;
      }
    },
  },
});
