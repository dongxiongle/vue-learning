import Vue from 'vue';
import router from './router/index.ts'

import Element from 'element-ui';
import App from './app.vue';

import 'element-ui/lib/theme-chalk/index.css';

Vue.use(Element);

const app = new Vue({
  router,
  el: '#app',
  render: (h) => h(App)
});