import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AnimalList from "../components/AnimalList.vue";
import AnimalDetalhes from "../components/AnimalDetalhes.vue";
import RegistrarDoacao from "../views/RegistrarDoacao.vue";
import EditarDoacao from "../views/EditarDoacao.vue";
import NotFound from "../views/NotFound.vue";
import Cadastro from "../views/Cadastro.vue";
import Perguntas from "../views/Perguntas.vue";
import SobreNos from "../views/SobreNos.vue";
import Ajuda from "../views/Ajuda.vue";
import Login from "../views/Login.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "*",
    name: "notFound",
    component: NotFound,
    meta: { requiresAdmin: false },
  },
  {
    path: "/login",
    name: "login",
    component: Login,
    meta: { requiresAuth: false },
  },
  {
    path: "/cadastro",
    name: "cadastro",
    component: Cadastro,
    meta: { requiresAuth: false },
  },
  {
    path: "/",
    name: "home",
    component: HomeView,
    meta: { requiresAuth: false },
    children: [
      {
        alias: "/",
        path: "/animaisList",
        name: "animaisList",
        component: AnimalList,
        meta: { requiresAuth: false },
      },
      {
        path: "/animalDetalhes/:id",
        name: "animalDetalhes",
        props: true,
        component: AnimalDetalhes,
        meta: { requiresAuth: false },
      },
    ],
  },
  {
    path: "/registrarDoacao",
    name: "registrarDoacao",
    component: RegistrarDoacao,
    meta: { requiresAuth: true },
  },
  {
    path: "/editarDoacao/:id",
    name: "editarDoacao",
    props: true,
    component: EditarDoacao,
    meta: { requiresAuth: true },
  },
  {
    path: "/userDoacoes",
    name: "userDoacoes",
    component: AnimalList,
    meta: { requiresAuth: true },
  },
  {
    path: "/userAdocoes",
    name: "userAdocoes",
    component: AnimalList,
    meta: { requiresAuth: true },
  },
  {
    path: "/perguntas",
    name: "perguntas",
    component: Perguntas,
    meta: { requiresAuth: true },
  },
  {
    path: "/ajuda",
    name: "ajuda",
    component: Ajuda,
    meta: { requiresAuth: true },
  },
  {
    path: "/sobrenos",
    name: "sobrenos",
    component: SobreNos,
    meta: { requiresAuth: true },
  },
];

const router = new VueRouter({
  routes,
});

export default router;
