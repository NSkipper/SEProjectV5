import Vue from 'vue'
import Router from 'vue-router'
import Overview from '@/components/Overview'
import AddMachine from '@/components/AddMachine'
import AddTool from '@/components/AddTool'
import AddComponent from '@/components/AddComponent'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Overview',
      component: Overview
    },
    {
      path: '/AddMachine',
      name: 'AddMachine',
      component: AddMachine,
      
    },
    {
      path: '/AddTool',
      name: 'AddTool',
      component: AddTool
    },
    {
      path: '/AddComponent',
      name: 'AddComponent',
      component: AddComponent
    },
    { path: '*', redirect: {name:'Overview'} }
  ]
})
