// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router/index'
import axios from 'axios';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import { ShareSheet } from 'vant';
import Vant from 'vant';
import 'vant/lib/index.css';
import store from './store/DetailsCon'


import { Icon } from 'vant';
Vue.use(Icon);
import { Rate } from 'vant';
Vue.use(Rate);



Vue.use(ShareSheet);
Vue.use(Vant);
Vue.use(ElementUI);
Vue.config.productionTip = false

// axios.defaults.baseURL = "http://10.35.162.115:8000/main/";

// axios.defaults.baseURL = "api/";

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
