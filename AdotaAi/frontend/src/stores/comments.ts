import api from "@/services/api";
import { defineStore } from "pinia";

interface Attributes {
  comentar: string;
  autor: {
    data: any;
  };
  doacao: {
    data: any[];
  };
}

export interface Comment {
  id: number;
  attributes: Attributes;
}

interface State {
  comments: Comment[];
  commentsByDonation: Comment[];
}

/* cria um módulo chamado "comments" para gerenciar o estado de comentários
   O estado inicial possui duas propriedades: comments e commentsByDonation, ambos são arrays vazios.
   Dois getters são definidos para acessar essas propriedades de estado de outros componentes */
export const commentsStore = defineStore("comments", {
  state: (): State => ({ comments: [], commentsByDonation: [] }),

  getters: {
    currentComments(state) {
      return state.comments;
    },
    currentCommentsByDonation(state) {
      return state.commentsByDonation;
    },
  },

  actions: {
    /* getComments chama a API para obter todos os comentários. Os comentários são populados com informações 
     adicionais (por meio do parâmetro populate). */
    async getComments() {
      try {
        const comments = await api.get("/comentarios?populate=*");
        this.comments = comments.data.data;
      } catch (error) {
        console.error(error);
      }
    },
    /*getCommentsByDonation chama a API para obter comentários específicos associados a uma doação (identificada pelo parâmetro id) */
    async getCommentsByDonation(id: number) {
      try {
        const comments = await api.get(
          `/comentarios?populate=*&filters[$and][0][doacao][id][$eq]=${id}`
        );

        this.commentsByDonation = comments.data.data;
        return comments.data.data;
      } catch (error) {
        console.error(error);
      }
    },
    /* createComment cria um novo comentário chamando a API com um objeto de comentário fornecido como parâmetro. Além disso, envia um token de 
      autorização no cabeçalho da requisição, que é recuperado do armazenamento local (localStorage). */
    async createComment(comment: FormData) {
      try {
        const commentResponse = await api.post("/comentarios", comment, {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${localStorage.getItem("zFJqsz757BscGHsg")}`,
          },
        });

        return commentResponse.data.data;
      } catch (error) {
        console.log(error);
      }
    },
  },
});
