import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

import AdminRouter from './admin';
import CustRouter from './customer';



/*
 [
	{
      path: '/admin',
      name: 'Admin',
      component: Admin
   },{
      path: '/admin',
      name: 'Admin',
      component: Admin
   }
]

 * */
let router = new Router({
  routes: [
    ...AdminRouter,
    ...CustRouter
  ]
})

export default router;
