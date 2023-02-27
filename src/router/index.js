import { createRouter, createWebHistory } from 'vue-router'
import About from './../components/About.vue';
import Portfolio from './../components/Portfolio.vue';
import Contact from './../components/Contact.vue';
import NotFound from './../components/NotFound.vue';


const routes = [
  { path: '/', component: About },
  { path: '/portfolio', component: Portfolio },
  { path: '/contact', component: Contact },
  { path: '/:pathMatch(.*)*', component: NotFound }
];

const router = new createRouter({
  history: createWebHistory('/'),

  routes,
});

export default router;