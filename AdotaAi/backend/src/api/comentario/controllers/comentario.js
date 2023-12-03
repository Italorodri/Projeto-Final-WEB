"use strict";

/**
 *  comentario controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController(
  "api::comentario.comentario",
  ({ strapi }) => ({
    async create(ctx) {
      try {
        const response = await super.create(ctx);
        const comentarioComAutor = await strapi.entityService.findOne(
          "api::comentario.comentario",
          response.data.id,
          {
            populate: {
              autor: {
                fields: ["email", "username"],
              },
            },
          }
        );

        ctx.body = {
          data: comentarioComAutor,
        };
      } catch (error) {
        return ctx.badRequest(error.message);
      }
    },
  })
);
