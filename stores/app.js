import { defineStore } from 'pinia'

export const useAppStore = defineStore( 'app' , {

  state: () => ({
    
    user: useLocalStorage( 'pinia/auth/login' , '{"name":"User"}' ),
    isAuth: useLocalStorage( 'pinia/auth/login' , false ),
    urlApi: useLocalStorage( 'pinia/auth/login' , '' ),

    last_url: useLocalStorage( 'pinia/auth/login' , '' ),

  }),

  persist: true,
  
})