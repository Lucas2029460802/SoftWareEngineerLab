import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import ProductList from '../views/ProductList.vue'
import Order from '../views/Order.vue'
import Profile from '../views/Profile.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'

const routes = [
  {
    path: '/',
    redirect: '/Login'
  },
  {
    path: '/Home',
    name: 'home',
    component: Home
  },
  {
    path: '/productList',
    name: 'productList',
    component: ProductList
  },
  {
    path: '/Order',
    name: 'order',
    component: Order
  },
  {
    path: '/Profile',
    name: 'profile',
    component: Profile
  },
  {
    path: '/Login',
    name: 'login',
    component: Login,
    meta: {
      hideNav: true
    }
  },
  {
    path: '/Register',
    name: 'register',
    component: Register,
    meta: {
      hideNav: true
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router