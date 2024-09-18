import { createRouter, createWebHashHistory, Router } from 'vue-router'
import MainMenu from '../pages/MainMenu.vue'

const routes = [
  {
    path: '/',
    name: 'MainMenu',
    component: MainMenu
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: () => import('../pages/Dashboard.vue')
  },
  {
    path: '/editor',
    name: 'Editor',
    component: () => import('../pages/Dashboard.vue')
  },
]

const router: Router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior() {
      return { left: 0, top: 0 };
  },
});

export default router
