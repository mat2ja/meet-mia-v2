import { createRouter, createWebHistory } from 'vue-router';

import Homepage from '@/pages/Homepage.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: Homepage,
  },
  {
    path: '/proizvod/:productId',
    name: 'productPage',
    component: () => import('@/pages/product/ProductPage.vue'),
  },
  {
    path: '/kategorija/:categoryId',
    name: 'categoryPage',
    component: () => import('@/pages/category/CategoryPage.vue'),
  },
  {
    path: '/kategorija/:categoryId',
    name: 'categoryPage',
    component: () => import('@/pages/category/CategoryPage.vue'),
  },
  {
    path: '/blog',
    name: 'blogPage',
    component: () => import('@/pages/blog/BlogPage.vue'),
  },
  {
    path: '/blog/post/:postId',
    name: 'blogPostPage',
    component: () => import('@/pages/blog/BlogPostPage.vue'),
  },
  {
    path: '/kosarica',
    name: 'cartPage',
    component: () => import('@/pages/Cart.vue'),
  },
  {
    path: '/kosarica',
    name: 'cartPage',
    component: () => import('@/pages/Contact.vue'),
  },
  {
    path: '/profil',
    name: 'profilePage',
    component: () => import('@/pages/Profile.vue'),
  },
  {
    path: '/o-nama',
    name: 'aboutPage',
    component: () => import('@/pages/About.vue'),
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/',
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return { left: 0, top: 0, behavior: 'smooth' };
  },
});

export default router;
