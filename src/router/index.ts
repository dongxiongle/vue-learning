import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import Layout from '../layout/index.vue';
import Main from '../views/main.vue';

Vue.use(VueRouter)

export const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'home',
    meta: {
      title: '起步'
    },
    component: Main
  },
  {
    path: '/reactive',
    name: 'reactive',
    meta: {
      title: '变化侦测'
    },
    component: Layout,
    children: [
      {
        path: 'object',
        name: 'object',
        meta: {
          title: 'Object的变化侦测'
        },
        component: () => import('../views/reactive/object.vue')
      },
      {
        path: 'array',
        meta: { title: 'Array的变化侦测' },
        component: () => import('../views/reactive/array.vue')
      }
    ]
  },
  {
    path: '/algorithm',
    name: 'algorithm',
    meta: {
      title: '算法初解'
    },
    component: Layout,
    children: [
      {
        path: 'queue',
        name: 'queue',
        meta: { title: '队列' },
        component: () => import('../views/algorithm/queue.vue')
      },
      {
        path: 'linkLIst',
        name: 'linkLIst',
        meta: { title: '链表' },
        component: () => import('../views/algorithm/linkLIst.vue')
      }
    ]
  },
  {
    path: '/ecma',
    name: 'ecma',
    meta: { title: 'ECMA' },
    component: Layout,
    children: [
      {
        path: 'proxyAndReflect',
        name: 'proxyAndReflect',
        meta: { title: 'Proxy And Reflect' },
        component: () => import('../views/ecma/proxyAndReflect.vue')
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
});

router.beforeEach((to, from, next) => {
  // console.log(to);
  next();
});

export default router;
