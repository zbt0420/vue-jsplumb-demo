import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/index'
    },
    {
      path: '*',
      redirect: '/none/404'
    },
    {
      path: '/index',
      component: () => import('./modules/index'),
      children: [
        {
          path: '',
          redirect: '/index/demo1'
        },
        {
          path: 'demo1',
          component: () => import('./modules/demo1/componnets/index.vue')
        },
        {
          path: 'demo2',
          component: () => import('./modules/demo2/components/index.vue')
        },
        {
          path: 'demo3',
          component: () => import('./modules/demo3/components/index.vue')
        }
      ]
    }
  ]
})