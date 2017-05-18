import Vue from 'vue'
import Router from 'vue-router'

const Home = resolve => require(['@/components/Home'], resolve)
const Demo = resolve => require(['@/components/Demo'], resolve)
// const Sge = resolve => require(['@/components/Sge'], resolve)

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/:id',
      name: 'Dome',
      component: Demo
    }
    // {
    //   path: '/sge/',
    //   name: 'Sge',
    //   component: Sge
    // }
  ]
})
