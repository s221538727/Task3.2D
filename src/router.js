import { createRouter, createWebHistory } from 'vue-router';
import Home from './components/Home.vue';
import Projects from './components/Projects.vue';
import About from './components/About.vue';
import Contact from './components/Contact.vue';
import Admin from './components/Admin.vue';
import Resume from './components/Resume.vue';
import Blog from './components/Blog.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/projects', component: Projects },
  { path: '/about', component: About },
  { path: '/contact', component: Contact },
  { path: '/admin', component: Admin },
  { path: '/resume', component: Resume },
  { path: '/blog', component: Blog },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
