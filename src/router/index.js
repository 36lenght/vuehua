import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import My from '../views/my.vue'
import Cart from '../views/cart.vue'
import Caidan from '../views/caidan.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/my',
    name: 'my',
    component: My
  },
  {
    path: '/cart',
    name: 'cart',
    component: Cart
  },
  {
    path: '/caidan',
    name: 'caidan',
    component: Caidan
  },
  
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
