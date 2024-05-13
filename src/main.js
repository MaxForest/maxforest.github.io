import { createApp } from "vue";
import App from './App.vue'

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

createApp(App).use(router).mount("#app");
