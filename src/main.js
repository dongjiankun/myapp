// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui';
import '@/assets/css/reset.css';
import 'element-ui/lib/theme-chalk/index.css';
import store from '@/store/index.js';
import '@babel/polyfill';

Vue.use(ElementUI);


Vue.config.productionTip = false
// Vue.prototype.$router = Router
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
