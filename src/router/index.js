import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/Home'
import Tree from '@/pages/tree'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/webpagelovers-tree',
      name: 'webpagelovers-tree',
      component: Tree
    }
  ]
})
