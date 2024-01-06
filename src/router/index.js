import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import Profile from '@/views/Profile.vue'
import Trading from '@/views/Trading.vue'
// import Login from '@/views/Login.vue'
import ContactIndex from '@/views/ContactIndex.vue'
import ContactDetails from '@/views/ContactDetails.vue'
import ContactCreate from '@/views/ContactCreate.vue'
import ContactEdit from '@/views/ContactEdit.vue'
import store from '../store'

const router = createRouter({
  // history: createWebHistory(import.meta.env.BASE_URL),
  history: createWebHashHistory(import.meta.env.BASE_URL),// <----- for github pages
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/login',
      name: 'login',
      // component: Login,
      component: ()=> import('@/views/Login.vue'),
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
      component: Profile,
    },
    {
      path: '/contact',
      name: 'contact-index',
      component: ContactIndex
    },
    {
      path: '/contact/create',
      name: 'contact-create',
      component: ContactCreate
    },
    {
      path: '/contact/:id',
      name: 'contact-details',
      component: ContactDetails,
    },
    {
      path: '/contact/:id/edit',
      name: 'contact-edit',
      component: ContactEdit,
    },
    {
      path: '/trading',
      name: 'trading',
      component: Trading
    },
  ]
})

router.beforeEach((to, from, next) => {
  if (to.name !== 'login' && !store.state.user.user) next({ name: 'login' })
  else next()
})

export default router
