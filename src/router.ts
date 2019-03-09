import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    // {
    //   path: '/contact',
    //   name: 'contact',
    //   component: () => import(/* webpackChunkName: 'contact' */ './views/Contact.vue')
    // },
    {
      path: '/work',
      name: 'work',
      component: () => import(/* webpackChunkName: 'projects' */ './views/Projects.vue')
    },
    {
      path: '/work/:id',
      name: 'single',
      component: () => import(/* webpackChunkName: 'projects' */ './views/Single.vue'),
      props: true
    },
    {
      path: '*',
      redirect: '/404'
    },
    {
      path: '/404',
      name: 'NotFound',
      component: () => import(/* webpackChunkName: 'projects' */ './views/NotFound.vue')
    }
  ]
});
