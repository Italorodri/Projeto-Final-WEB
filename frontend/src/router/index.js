import { createRouter, createWebHistory } from 'vue-router'
import SejaBemVindo from '../views/SejaBemVindo.vue'

const routes = [
  {
    path: '/',
    name: 'seja_bem_vindo',
    component: SejaBemVindo
  },
  {
    path: '/login',
    name: 'login',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "login" */ '../views/Login.vue')
    },
    meta: { requiresAuth: false }
  },
  {
    path: '/cadastro',
    name: 'cadastro',
    component: function () {
      return import(/* webpackChunkName: "cadastro" */ '../views/Cadastro.vue')
    },
    meta: { requiresAuth: false }
  },
  {
    path: '/home',
    name: 'home',
    component: function () {
      return import(/* webpackChunkName: "home" */ '../views/Home.vue')
    },
    meta: { requiresAuth: false }
  },
  {
    path: '/perfil',
    name: 'perfil',
    component: function () {
      return import(/* webpackChunkName: "perfil" */ '../views/Perfil.vue')
    },
    meta: { requiresAuth: true }
  },
  {
    path: '/perguntas',
    name: 'perguntas',
    component: function () {
      return import(/* webpackChunkName: "perguntas" */ '../views/Perguntas.vue')
    },
    meta: { requiresAuth: false }
  },
  {
    path: '/ajuda',
    name: 'ajuda',
    component: function () {
      return import(/* webpackChunkName: "ajuda" */ '../views/Ajuda.vue')
    },
    meta: { requiresAuth: false }
  },
  {
    path: '/sobrenos',
    name: 'sobrenos',
    component: function () {
      return import(/* webpackChunkName: "sobrenos" */ '../views/SobreNos.vue')
    },
    meta: { requiresAuth: false }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
