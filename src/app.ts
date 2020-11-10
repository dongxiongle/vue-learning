import Vue from 'vue';
import router from './router/index.ts'

import Element from 'element-ui';
import App from './app.vue';

Vue.use(Element);

const app = new Vue({
  router,
  el: '#app',
  render: (h) => h(App)
});