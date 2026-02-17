import { createRouter, createWebHistory } from 'vue-router'
import Login from '../components/LoginFormCypress.vue'
import MessageCard from '../components/MessageCard.vue'
import Dashboard from '../components/Dashboard.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: MessageCard
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard
  }
  
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
