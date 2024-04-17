<script setup>

  // import Swal from 'sweetalert2/dist/sweetalert2.js';
  // import 'sweetalert2/dist/sweetalert2.min.css';

  import AuthLayout from '~/layout/AuthLayout.vue';
  import { useAppStore } from '@/stores/app'

  const store_app = useAppStore();
  const route = useRoute();

  const loading = ref(false);
  const errors = ref([]);


  const element = ref({
    token:'',
  }); 

  onMounted( () => {

    if ( process.client )
    {
      validateToken();
    }

  });

  const handleRecover = async () => {

    loading.value = true;

    await $fetch( store_app.urlApi +'google/validate' , {
      method: 'POST',
      body:element.value
    })
    .then( ( response ) => {
 
      if ( response.status == 'success' )
      {
        Swal.fire({
          title: "Ok!",
          text: response.msg,
          icon: "success"
        });

        store_app.user = response.user ;
        store_app.user.token = response.access_token;
        store_app.isAuth = true;
        setTimeout(() => {
          navigateTo('/dashboard');
        }, 333);

        setTimeout(() => {
          navigateTo('/dashboard');
        }, 1111);
      }
      
      if ( response.status == 'error' )
      {

        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: response.msg,
        });

        errors.value = response.data
      }

      loading.value = false;
    })
    .catch((error) => {

      setTimeout(() => {
        
        loading.value = false;
        return error;

      }, 555);
    
    });

  };

  const validateToken = () => {
    
    if ( route.query.status != undefined && route.query.token != undefined  )
    {
      if ( route.query.status == 'success')
      {
        element.value.token = route.query.token;
        handleRecover();
      }
    }else{
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: 'Error al intentar autenticarse, vuelve a intentarlo mas tarde.',
      });
    }

  };

</script>

<template>

  <AuthLayout title="Autenticándose..." >

    <div class="relative flex text-center flex-col min-w-0 mt-20 break-words bg-transparent border-0 shadow-none rounded-2xl bg-clip-border">

      <div class="p-6 pb-0 mb-0 bg-transparent border-b-0 rounded-t-2xl">
        <h3 class="relative z-10 font-bold text-transparent bg-gradient-to-tl from-blue-600 to-cyan-400 bg-clip-text">
          Validando autenticación...
        </h3>
      </div>

      <div class="p-6 px-1 pt-0 text-center bg-transparent border-t-0 border-t-solid rounded-b-2xl lg:px-2">

        <p class="mx-auto mb-6 leading-normal text-sm">
          <NuxtLink to="/auth/login" class="relative z-10 font-semibold text-transparent bg-gradient-to-tl from-blue-600 to-cyan-400 bg-clip-text">
            Ingresar
          </NuxtLink>
        </p>

      </div>

    </div>

  </AuthLayout>

</template>

<style scoped>

  .input-wrapper {
    position: relative;
    /* width: 271px; */
  }

  .input-icon {
    color: #191919;
    position: absolute;
    width: 20px;
    height: 20px;
    right: 12px;
    top: 50%;
    transform: translateY(-50%);
  }

</style>