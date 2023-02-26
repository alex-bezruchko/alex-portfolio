import { createRouter, createWebHistory } from 'vue-router'
import About from './../components/About.vue';
import Portfolio from './../components/Portfolio.vue';
import Contact from './../components/Contact.vue';

const routes = [
  { path: '/', component: About },
  { path: '/portfolio', component: Portfolio },
  { path: '/contact', component: Contact },
];

const router = new createRouter({
  history: createWebHistory('/'),

  routes,
});

export default router;