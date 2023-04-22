import Vue from 'vue'
import Router from 'vue-router'
import TopPage from './components/TopPage.vue'
import Works from './components/Works.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'top',
      component: TopPage
    },
    {
      path: '/works',
      name: 'works',
      component: Works
    }
  ]
})
