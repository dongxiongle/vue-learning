import Vue from 'vue';
import router from './router/index'

import Element from 'element-ui';
import App from './app.vue';

import 'element-ui/lib/theme-chalk/index.css';
import './less/reset.less';
import './less/layout.less'
import 'highlight.js/styles/github.css';

Vue.use(Element);

const app = new Vue({
  router,
  el: '#app',
  render: (h) => h(App)
});