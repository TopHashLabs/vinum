import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  { path: '/:catchAll(.*)', redirect: '/' },
  { path: '/', component: () => import('/src/pages/Welcome.vue') },
  { path: '/sale', component: () => import('/src/pages/Home.vue') }
]
const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
