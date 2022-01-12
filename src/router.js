import { createRouter, createWebHistory } from 'vue-router';

import routes from '~pages';

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return { left: 0, top: 0 };
  },
});

export default router;
