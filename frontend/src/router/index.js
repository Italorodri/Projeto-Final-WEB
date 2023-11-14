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
    }
  },
  {
    path: '/cadastro',
    name: 'cadastro',
    component: function () {
      return import(/* webpackChunkName: "cadastro" */ '../views/Cadastro.vue')
    }
  },
  {
    path: '/home',
    name: 'home',
    component: function () {
      return import(/* webpackChunkName: "home" */ '../views/Home.vue')
    }
  },
  {
    path: '/perfil',
    name: 'perfil',
    component: function () {
      return import(/* webpackChunkName: "perfil" */ '../views/Perfil.vue')
    }
  },
  {
    path: '/perguntas',
    name: 'perguntas',
    component: function () {
      return import(/* webpackChunkName: "perguntas" */ '../views/Perguntas.vue')
    }
  },
  {
    path: '/ajuda',
    name: 'ajuda',
    component: function () {
      return import(/* webpackChunkName: "ajuda" */ '../views/Ajuda.vue')
    }
  },
  {
    path: '/sobrenos',
    name: 'sobrenos',
    component: function () {
      return import(/* webpackChunkName: "sobrenos" */ '../views/SobreNos.vue')
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
