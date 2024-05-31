import { createApp } from 'vue'
import App from './App.vue'
import './assets/css/index.scss'
import pinia from './plugins/pinia'
import router from './router'
// import axios from 'axios'

// 基础样式
// import './assets/css/tailwind.scss'
// import './assets/css/public.scss'

const app = createApp(App)

app.use(pinia)
app.use(router)
// app.use(axios)

app.mount('#app')
