import Vue from 'vue'
import Router from 'vue-router'
import me from '../components/me'
import myBooks from '../components/myBooks'
import search from '../components/search'


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
    },
    {
      path: '/myBooks',
      name: 'myBooks',
      component: resolve => require(['@/components/myBooks'], resolve),
      meta: {
        keepAlive: false
      }
    },
    {
      path: '/search',
      name: 'search',
      component: resolve => require(['@/components/search'], resolve),
      meta: {
        keepAlive: false
      }
    }
  ]
})
