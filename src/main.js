// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import { DatetimePicker, Header, Switch } from 'mint-ui';
import Vue from 'vue'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import App from './App'
import router from './router'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import VueResource from 'vue-resource';

Vue.config.productionTip = false;
Vue.use(MintUI);
Vue.use(VueResource);
Vue.use(BootstrapVue);
Vue.component('mt-datetime-picker', DatetimePicker);
Vue.component('mt-header', Header);
Vue.component('mt-switch', Switch);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {App},
  template: '<App/>'
})
