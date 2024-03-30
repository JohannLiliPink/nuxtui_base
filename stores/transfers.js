import { defineStore } from 'pinia';

export const useTransfersStore = defineStore( 'transfers' , {
  
  state: () => ({
    
    type:0,

    request_transfer:{
      type: '',
      status: '',
      date: '',
      origin_id : '',
      destiny_id: '',
    },
    request_transfer_products:[],
    selected_origin:[],
    selected_destination:[],

    selected_product : {
      name:'',
      data_product:{
        imageUrl:''
      }
    },

    newness:[],
    shipping:[],
    
  }),
  actions: {
    resetCreate() {
      // Asignar el valor inicial
      this.request_transfer={
        type: '',
        status: '',
        date: '',
        origin_id : '',
        destiny_id: '',
      };

      this.request_transfer_products = [];
      this.selected_origin = [];
      this.selected_destination = [];

    },
  },

});