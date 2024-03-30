import { defineStore } from 'pinia'

export const useThemeAdminStore = defineStore( 'theme' , {

  state: () => ({
    
    count: 0,
    mode_dark:true,
    navbar_fixed:true,

    test:'Hola mundo',


    btn_menu_active:{
      from:'purple-700',
      to:'pink-500',
      text:'dashboard',
    },

  }),

  persist: true,
  
})