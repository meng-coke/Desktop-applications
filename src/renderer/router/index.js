import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/loginModel',
      component: () => import('@/componets/loginModel/loginModel'), 
      hidden: false
    },
    {
      path: '/',
      name: 'landing-page',
      component: require('@/components/LandingPage').default,
      hidden: true

    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
