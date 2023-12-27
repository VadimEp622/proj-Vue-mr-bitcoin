import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import MyProfile from '../views/MyProfile.vue'
import TradingData from '../views/TradingData.vue'
import LoginView from '../views/LoginView.vue'
import store from '../store'

const router = createRouter({
  // history: createWebHistory(import.meta.env.BASE_URL),
  history: createWebHashHistory(import.meta.env.BASE_URL),// <----- for github pages
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView,
      beforeEnter: (to, from) => {
        if (store.state.user.user) next({ name: 'home' })
      },
    },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue')
    // },
    {
      path: '/my-profile',
      name: 'my-profile',
      component: MyProfile
    },
    {
      path: '/trading-data',
      name: 'trading-data',
      component: TradingData
    },
  ]
})

router.beforeEach((to, from, next) => {
  if (to.name !== 'login' && !store.state.user.user) next({ name: 'login' })
  else next()
})

export default router
