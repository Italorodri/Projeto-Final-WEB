import { createPinia } from 'pinia'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import bootstrap from 'bootstrap/dist/js/bootstrap.bundle.js'
import axios from 'axios'

const app = createApp(App).use(createPinia()).use(router).use(bootstrap)

app.config.globalProperties.$http = axios.create({
    baseURL: 'http://localhost:1337',
  });

app.mount('#app')
