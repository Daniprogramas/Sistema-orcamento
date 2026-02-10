import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/Login.vue'
import Dashboard from '../views/Dashboard.vue'
import Orcamentos from '../views/Orcamentos.vue'

const routes = [
  { path: '/', component: Login },
  { path: '/dashboard', component: Dashboard },
  { path: '/orcamentos', component: Orcamentos }
]

export default createRouter({
  history: createWebHistory(),
  routes
})
