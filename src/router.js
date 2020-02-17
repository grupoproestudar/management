import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from '@/views/Dashboard'
import Feedback from '@/views/Feedback'
import Mentoring from '@/views/Mentoring'
import Login from '@/views/Login'
import { firebase } from '@firebase/app'

Vue.use(Router);

const router = new Router({
  mode: 'history',
  routes: [{
      path: '*',
      redirect: '/login'
    },
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/home',
      name: 'Home',
      component: Dashboard,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/feedback',
      name: 'Feedback',
      component: Feedback,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/mentoring',
      name: 'Mentoring',
      component: Mentoring,
      meta: {
        requiresAuth: true
      }
    }
  ]
});

router.beforeEach((to, from, next) => {
  const currentUser = firebase.auth().currentUser;
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);

  if (requiresAuth && !currentUser) next('login');
  else if (!requiresAuth && currentUser) next('home');
  else next();
});

export default router;