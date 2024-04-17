import { defineStore } from 'pinia'

export const useThemeAdminStore = defineStore( 'theme' , {

  state: () => ({
    
    mode_dark:true,
    navbar_fixed:true,
    
    sidenav_type:'bg-white',
    
    btn_menu_active:{
      from:'purple-700',
      to:'pink-500',
      text:'dashboard',
    },
    


    count: 0,
    test:'Hola mundo',
    
  }),

  persist: true,
  
})