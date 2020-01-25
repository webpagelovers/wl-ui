// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

router.beforeEach((to, form, next) => {
  document.title = to.name
  next()
})

import WlCheckbox from 'webpagelovers-checkbox'
import WlTree from 'webpagelovers-tree'

Vue.use(WlCheckbox)
Vue.use(WlTree)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {App},
  template: '<App/>'
})
