import { defineStore } from 'pinia'

export const useAppStore = defineStore( 'app' , {

  state: () => ({
    
    user: {
      name:"User"
    },
    isAuth:false,
    // urlApi: useLocalStorage( 'pinia/auth/login' , '' ),

    last_url:'',

  }),

  persist: true,
  
})