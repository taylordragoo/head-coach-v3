import { createRouter, createWebHistory } from 'vue-router'
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
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
