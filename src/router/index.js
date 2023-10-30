// Composables
import { createRouter, createWebHistory } from 'vue-router'
import AppLayout from '@/layouts/AppLayout.vue'

const routes = [
  {
    path: '/',
    name: 'Register',
    component: () => import('@/views/Register.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/Login.vue')
  },
  {
    path: '/overview',
    name: 'Overview',
    meta: {layout : AppLayout},
    component: () => import('@/views/Overview.vue')
  },
  {
    path: '/employee-stat',
    name: 'Employee Stats',
    meta: {layout : AppLayout},
    component: () => import('@/views/EmployeeStat.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
