// import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router/index.js'
import "vuetify/styles";
import vuetify from "./plugins/vuetify";
import "@/assets/css/custom.css";

// import Vuex from "vuex";

// import store from "@/store/index"

const app = createApp(App)

app.use(router)
app.use(vuetify);
// app.use(store);
// app.use(Vuex);

app.mount('#app')
