// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import { DatetimePicker, Header, PaletteButton } from 'mint-ui';
import Vue from 'vue'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import App from './App'
import router from './router'

Vue.config.productionTip = false;
Vue.use(MintUI);
Vue.component('mt-datetime-picker', DatetimePicker);
Vue.component('mt-header', Header);
Vue.component('mt-pallete-button', PaletteButton);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {App},
  template: '<App/>'
})
