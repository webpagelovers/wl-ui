import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/Home'
import Checkbox from '@/pages/checkbox'
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
      path: '/webpagelovers-checkbox',
      name: 'webpagelovers-checkbox 多选框',
      component: Checkbox
    },
    {
      path: '/webpagelovers-tree',
      name: 'webpagelovers-tree 树形组件',
      component: Tree
    }
  ]
})
