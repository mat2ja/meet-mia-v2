import { createRouter, createWebHistory } from 'vue-router';
import Index from '@/pages/Index.vue';
import ProductPage from '@/pages/ProductPage.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: Index,
  },
  // {
  //   path: '/products',
  //   name: 'product',
  //   component: ProductPage,
  // },
  {
    path: '/products/:id',
    name: 'product',
    component: ProductPage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return { left: 0, top: 0 };
  },
});

export default router;
