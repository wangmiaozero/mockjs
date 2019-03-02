import Vue from 'vue'
import Router from 'vue-router'
import mockComponent from './views/mock.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {path: "/",redirect:'/mock'},
    {path: '/mock',component:mockComponent}
  ]
})
