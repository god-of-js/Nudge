import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import dashboard from '../views/dashboard.vue';
import login from '../views/login.vue';
import preregister from '../views/preregister.vue';
import register from '../views/register.vue';
import HomeLayout from '../layouts/homelayout.vue';
import student from '../layouts/student.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '*',
    redirect: '/'
  },
  {
    path: '/register',
    component: register
  },
  {
    path: '/login',
    component: login
  },

  {
    path: '/',
    name: 'home',
    component: HomeLayout,
    children: [
      {
        path: '/',
        name: 'home',
        component: Home,
      },
      {
        path: '/preregister',
        name: 'preregister',
        component: preregister,
      },
      {
        path: '/about',
        name: 'about',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
      },
    ]
  },
  {
    path: '/',
    component: student,
    children: [
      {
        path: '/dashboard',
        component: dashboard
      }
    ]
  }

];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
