import Vue from 'vue'
import Router from 'vue-router'
import Overview from '@/components/Overview'
import AddItem from '@/components/AddItem'
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
    }
  ]
})
