import Vue from 'vue';
import VueRouter from 'vue-router';
import Analyzer from '../views/Analyzer.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/analyzer',
    name: 'Analyzer',
    component: Analyzer,
  },
  {
    path: '/encryptor',
    name: 'Encryptor',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Encryptor.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
