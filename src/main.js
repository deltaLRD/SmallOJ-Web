import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './components/router/router.js'
import axios from 'axios';
// main.ts
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import VueCookies from 'vue3-cookies'
// import vue_markdown from 'vue-markdown';
const api = axios.create({
  baseURL: 'http://127.0.0.1:4523/m1/3227171-0-default',
});



const app = createApp(App)
app.use(VueCookies)
// app.config.globalProperties.$cookies = VueCookies
app.config.globalProperties.$api = api;
app.use(ElementPlus)
app.use(router)
app.use(VueCookies)
// app.use(vue_markdown)
app.mount('#app')

// createApp(App).mount('#app')