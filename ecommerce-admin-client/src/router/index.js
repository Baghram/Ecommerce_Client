import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import AdminProduct from '../views/AdminProduct.vue'
import AddProduct from '../views/AddProduct.vue'
import AdminTable from '../views/AdminTable'
import UpdateProduct from '../views/UpdateProduct.vue'
import Preview from '../components/PreviewCard.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/admin',
    component: AdminProduct,
    beforeEnter: (to, from, next) => {
      const accessToken = localStorage.getItem('access_token')
      const Role = localStorage.getItem('Role')
      if (accessToken) {
        if (Role === 'Admin') {
          next()
        } else {
          next({ path: '/' })
        }
      } else {
        next({ path: '/' })
      }
    },
    children: [
      {
        path: '',
        name: 'AdminTable',
        component: AdminTable
      },
      {
        path: 'add',
        name: 'AddProduct',
        component: AddProduct
      },
      {
        path: ':id',
        name: 'UpdateProduct',
        component: UpdateProduct
      },
      {
        path: 'preview/:id',
        name: 'Preview',
        component: Preview
      }]
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
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
