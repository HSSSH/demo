import Vue from 'vue';
import App from './App.vue';
import store from './store';
import iView from 'iview';
import 'iview/dist/styles/iview.css';
import axios from 'axios';

Vue.prototype.$http = axios;
Vue.use(iView);

Vue.config.productionTip = false;

new Vue({
  el: '#app',
  store,
  render: h => h(App)
})
