import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  { path: '*', redirect: '/' },
  { path: '/', component: () => import('/src/pages/Welcome.vue') },
  { path: '/welcome', component: () => import('/src/pages/Home.vue') }
]
const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
