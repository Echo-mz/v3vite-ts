import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router"

const routes: Array<RouteRecordRaw> = [
  {
    path: "/home",
    name: "HomePage",
    component: () => import(/* webpackChunkName: "Home" */ "@/views/home-page.vue")
  },
  { path: "/", redirect: { name: "HomePage" } }
]

const router = createRouter({
  // history 模式,hash模式:createWebHashHistory()
  history: createWebHashHistory(),
  routes
})

export default router
