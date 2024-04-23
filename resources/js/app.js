import './bootstrap';
import { createApp } from 'vue';
import { createRouter, createWebHistory } from "vue-router";
import { routes } from "./routes";
import 'bootstrap/dist/css/bootstrap.min.css'
import "@fortawesome/fontawesome-free/css/all.css";
import store from "./store"

import App from './App.vue'


import PrimeVue from 'primevue/config';
import 'primevue/resources/themes/lara-light-green/theme.css'

let app = createApp(App)
const router = createRouter({
history: createWebHistory(),
routes: routes,
})
app.use(router);
app.use(PrimeVue)
app.use(store)
app.mount("#app")
