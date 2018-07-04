import Vue from 'vue'
import Router from 'vue-router'
import me from '../components/me'

Vue.use(Router);

export default new Router({
  mode: 'history',// 去掉路由地址的#
  routes: [
    {
      path: '/',
      name: 'me',
      component: resolve => require(['@/components/me'], resolve),
      meta: {
        keepAlive: false
      }
    }
  ]
})
