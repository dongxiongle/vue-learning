import Vue from 'vue';
import router from './router/index.ts'

import App from './app.vue';

const app = new Vue({
  router,
  el: '#app',
  render: (h) => h(App)
});