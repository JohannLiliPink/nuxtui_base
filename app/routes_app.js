
export const app_routes = [

  {
    name: 'dashboard',
    path: '/dashboard',
    component: () => import('~/pages/dashboard.vue').then(r => r.default || r)
  },


  {
    name: 'test',
    path: '/prueba',
    component: () => import('~/pages/test.vue').then(r => r.default || r)
  },

  {
    name: 'archivo',
    path: '/archivo',
    component: () => import('~/pages/upload.vue').then(r => r.default || r)
  },

 
];