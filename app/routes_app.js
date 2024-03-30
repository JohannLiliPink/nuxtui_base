
export const website_routes = [


  {
    name: 'home',
    path: '/',
    component: () => import('~/pages/dashboard.vue').then(r => r.default || r)
  },


  {
    name: 'test',
    path: '/prueba',
    component: () => import('~/pages/test.vue').then(r => r.default || r)
  },

 
];