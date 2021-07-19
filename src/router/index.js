import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/Index.vue'
import Home from '../views/Home.vue'
import Echart1 from '../views/echart/echart1.vue'
import Echart2 from '../views/echart/echart2.vue'
import Echart3 from '../views/echart/echart3.vue'
import Echart4 from '../views/echart/echart4.vue'
import Echart5 from '../views/echart/echart5.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Index',
    component: Index,
    redirect: '/home/echart1'
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
    redirect: '/home/echart1',
    children: [
      {
        path: '/home/echart1',
        name: 'Echart1',
        component: Echart1
      },
      {
        path: '/home/echart2',
        name: 'Echart2',
        component: Echart2
      },
      {
        path: '/home/echart3',
        name: 'Echart3',
        component: Echart3
      },
      {
        path: '/home/echart4',
        name: 'Echart4',
        component: Echart4
      },
      {
        path: '/home/echart5',
        name: 'Echart5',
        component: Echart5
      },
    ]
  },
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
