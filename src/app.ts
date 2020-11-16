import Vue from 'vue';
import router from './router/index.ts'

import Element from 'element-ui';
import App from './app.vue';

import 'element-ui/lib/theme-chalk/index.css';
import './less/reset.less';

Vue.use(Element);

const app = new Vue({
  router,
  el: '#app',
  render: (h) => h(App)
});