import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'
import store from '../store'
import { closeMainMenu } from '../services/event-bus.service'

const router = createRouter({
  // history: createWebHistory(import.meta.env.BASE_URL),
  history: createWebHashHistory(import.meta.env.BASE_URL),// <----- for github pages
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/Home.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/Login.vue'),
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
      component: () => import('@/views/Profile.vue')
    },
    {
      path: '/trading',
      name: 'trading',
      component: () => import('@/views/Trading.vue')
    },
    {
      path: '/contact',
      name: 'Contact',
      redirect: '/contact/index',
      children: [
        {
          path: 'index',
          name: 'ContactIndex',
          component: () => import('@/views/ContactIndex.vue')
        },
        {
          path: 'create',
          name: 'ContactCreate',
          component: () => import('@/views/ContactCreate.vue')
        },
        {
          path: ':id/edit',
          name: 'ContactEdit',
          component: () => import('@/views/ContactEdit.vue')
        },
        {
          path: ':id',
          name: 'ContactDetails',
          component: () => import('@/views/ContactDetails.vue')
        },
      ]
    }
  ]
})

router.beforeEach((to, from, next) => {
  closeMainMenu()
  store.dispatch('updateIsLoadingRoute', true)
  if (to.name !== 'login' && !store.state.user.user) next({ name: 'login' })
  else next()
})

router.afterEach((to, from) => {
  closeMainMenu()
  store.dispatch('updateIsLoadingRoute', false)
})

export default router
