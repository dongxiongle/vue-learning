import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import Layout from '../layout/index.vue';
import CommonRouterView from '../components/commonRouterView/index.ts';

Vue.use(VueRouter)

export const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'home',
    meta: {
      title: '起步'
    },
    component: Layout
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
  }
]

const router = new VueRouter({
  mode: 'hash',
  routes
});

export default router;
