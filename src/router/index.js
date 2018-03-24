import Vue from 'vue'
import Router from 'vue-router'
import DriverMain from '@/components/Driver/DriverMain'
import CustomerMain from '@/components/Customer/CustomerMain'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'DriverMain',
      component: DriverMain
    },
    {
      path: '/customer',
      name: 'CustomerMain',
      component: CustomerMain
    }
  ]
})
