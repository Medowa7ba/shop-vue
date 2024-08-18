import './assets/main.css'
import { createPinia } from 'pinia'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap";
import AnimatedCounter from "vue-animated-counter";
// import Swiper from 'swiper';
const app = createApp(App)
app.component("AnimatedCounter", AnimatedCounter);

app.use(router)
app.use(createPinia())

app.mount('#app')
