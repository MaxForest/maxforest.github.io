import { createApp } from "vue";
import App from './App.vue'
import i18n from './i18n';

// views
import Home from './views/Home.vue'
import { createWebHistory, createRouter } from "vue-router";

// styles

import "@fortawesome/fontawesome-free/css/all.min.css";

const routes = [
  {
    path: "/",
    component: Home,
  },
  { path: "/:pathMatch(.*)*", redirect: "/" },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

const app = createApp(App);
app.use(router);
app.use(i18n);
app.mount('#app');

