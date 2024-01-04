import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import ProfileView from '@/views/ProfileView.vue'
import TradingIndex from '@/views/TradingIndex.vue'
import LoginView from '@/views/LoginView.vue'
import ContactIndex from '@/views/ContactIndex.vue'
import ContactDetails from '@/views/ContactDetails.vue'
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
      beforeEnter: (to, from, next) => {
        if (store.state.user.user) next({ name: 'home' })
        else next()
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
      path: '/profile',
      name: 'profile',
      component: ProfileView,
    },
    {
      path: '/contact',
      name: 'contact-index',
      component: ContactIndex
    },
    {
      path: '/contact/:id',
      name: 'contact-details',
      component: ContactDetails,
    },
    // {
    //   path: '/contact/edit/:id',
    //   name: 'contact-edit',
    //   component: ContactEdit,
    // },
    {
      path: '/trading',
      name: 'trading',
      component: TradingIndex
    },
  ]
})

router.beforeEach((to, from, next) => {
  if (to.name !== 'login' && !store.state.user.user) next({ name: 'login' })
  else next()
})

export default router
