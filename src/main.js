import { createApp } from 'vue'
import { createHead } from '@vueuse/head'
import App from './App.vue'
import router from './router'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import './assets/styles/main.scss'

const app = createApp(App)
const head = createHead()

app.use(router)
app.use(head)
app.mount('#app')
