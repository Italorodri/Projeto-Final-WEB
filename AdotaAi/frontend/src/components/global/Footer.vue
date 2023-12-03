<template>
  <v-footer color="#74c69d">
    <v-card flat tile class="white--text text-center" color="#74c69d">
      <v-card-text>
        <v-btn v-for="icon in icons" :key="icon" class="mx-4 black--text" icon>
          <v-icon size="24px">
            {{ icon }}
          </v-icon>
        </v-btn>
      </v-card-text>

      <v-card-text class="black--text">
        Lembre-se, cada adoção é uma história única de resgate e renovação. Seja
        parte dessa jornada significativa e descubra a beleza de dar uma segunda
        chance. Juntos, podemos fazer a diferença na vida desses seres incríveis
        que merecem um lar amoroso.
      </v-card-text>

      <v-divider></v-divider>
    </v-card>
  </v-footer>
</template>

<script lang="ts">
export default {
  name: "Footer",

  data: () => ({
    icons: ["mdi-instagram ", "mdi-facebook", "mdi-twitter", "mdi-linkedin"],
  }),
};
</script>
