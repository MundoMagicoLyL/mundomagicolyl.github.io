import { createRouter, createWebHistory } from 'vue-router'

import Home from './components/views/Home.vue';
import About from './components/views/About.vue';
import Contact from './components/views/Contact.vue';

const routes = [
    { path: "/", redirect: "/home" },
    { path: "/home", component: Home },
    { path: "/about", component: About },
    { path: "/contact", component: Contact },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router