import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home/index.vue'
import Category from '../views/Home/Category'
import Ranking from '../views/Home/Ranking'
import Recomment from '../views/Home/Recommend'
import Search from '../views/Search'

Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    name: 'Home',
    component: Home,
    children: [
      {
        path: 'category',
        name: 'Category',
        component: Category
      },
      {
        path: 'ranking',
        name: 'Ranking',
        component: Ranking
      },
      {
        path: 'recomment',
        name: 'Recomment',
        component: Recomment
      },
      {
        path: '',
        redirect: '/home/recomment'
      }
    ]
  },
  {
    path: '/search',
    name: 'Search',
    component: Search
  },
  {
    path: '/',
    redirect: '/home'
  }
]

const router = new VueRouter({
  routes
})

export default router
