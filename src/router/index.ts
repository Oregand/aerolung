import { createRouter, createWebHistory } from 'vue-router';
import { auth } from '../firebase';

const routes = [
  {
    path: '/',
    component: () => import('/@/pages/Index.vue'),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: '/register',
    component: () => import('/@/pages/Register.vue'),
  },
  {
    path: '/login',
    component: () => import('/@/pages/Login.vue'),
  },
  {
    path: '/profile',
    component: () => import('/@/pages/Profile.vue'),
  },
  {
    path: '/quiz',
    component: () => import('/@/pages/Quiz.vue'),
  },
  {
    path: '/about',
    component: () => import('/@/pages/About.vue'),
  },
  {
    path: '/admin',
    component: () => import('/@/pages/Admin.vue'),
  },
];

export const Router = createRouter({
  scrollBehavior: () => ({ left: 0, top: 0 }),
  history: createWebHistory(),
  routes,
});
