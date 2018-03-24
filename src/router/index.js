import Vue from 'vue'
import Router from 'vue-router'
import DriverMain from '@/components/Driver/DriverMain'
import CustomerMain from '@/components/Customer/CustomerMain'
import CustomerDriver from '@/components/Customer/CustomerDriver'
import CustomerSelect from '@/components/Customer/CustomerSelect'

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
    },
    {
      path: '/customer/drivers',
      name: 'CustomerDriver',
      component: CustomerDriver
    },
    {
      path: '/customer/drivers/:id',
      name: 'CustomerSelect',
      component: CustomerSelect
    }
  ]
})
