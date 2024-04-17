export const website_routes = [


  {
    name: 'home',
    path: '/',
    component: () => import('~/pages/index.vue').then(r => r.default || r)
  },


 
];