import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  { path: '/', component: () => import('/src/pages/Welcome.vue') },
  { path: '/welcome', component: () => import('/src/pages/Home.vue') }
]
const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
