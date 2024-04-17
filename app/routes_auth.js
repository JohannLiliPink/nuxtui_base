
export const auth_routes = [
  

  {
    name: 'login',
    path: '/login',
    component: () => import('~/pages/auth/login.vue').then(r => r.default || r)
  },
  

  {
    name: 'forgot_password',
    path: '/auth/forgot_password',
    component: () => import('~/pages/auth/forgot_password.vue').then(r => r.default || r)
  },
  {
    name: 'recover_password',
    path: '/auth/recover-password',
    component: () => import('~/pages/auth/recover_password.vue').then(r => r.default || r)
  },
  {
    name: 'authenticating',
    path: '/auth/authenticating',
    component: () => import('~/pages/auth/authenticating.vue').then(r => r.default || r)
  },




];