//import api from "./services/api";
import { defineStore } from "pinia";

export const commentsStore = defineStore("comments", {
  state: () => ({ comments: [], commentsByDonation: [] }),

  getters: {
    currentComments(state) {
      return state.comments;
    },
    currentCommentsByDonation(state) {
      return state.commentsByDonation;
    },
  },

  actions: {
    async getComments() {
      try {
        const comments = await api.get("/comentarios?populate=*");
        this.comments = comments.data.data;
      } catch (error) {
        console.error(error);
      }
    },

    async getCommentsByDonation(id) {
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

    async createComment(comment) {
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