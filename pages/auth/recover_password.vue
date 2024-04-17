<script setup>

  // import Swal from 'sweetalert2/dist/sweetalert2.js';
  // import 'sweetalert2/dist/sweetalert2.min.css';

  import AuthLayout from '~/layout/AuthLayout.vue';
  import { useAppStore } from '@/stores/app'

  const store_app = useAppStore();
  const route = useRoute();

  const loading = ref(false);
  const errors = ref([]);

  const pass_show = ref(false);
  const type_pass = ref('password');
  const pass_show_two = ref(false);
  const type_pass_two = ref('password');

  const element = ref({
    password:'',
    password_confirmation:'',
    token:'',
    username:''
  });

  onMounted( () => {

    if ( process.client )
    {
      validateToken();
    }

  });

  const togglePassShow = ( input ) => {

    if (input == 1)
    {
      pass_show.value = !pass_show.value;
      type_pass.value = !pass_show.value ? 'password' : 'text';
    } else {
      pass_show_two.value = !pass_show_two.value;
      type_pass_two.value = !pass_show_two.value ? 'password' : 'text';
    }
  };

  const handleRecover = async () => {

    loading.value = true;

    await $fetch( store_app.urlApi +'update-password' , {
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

        setTimeout(() => {
          navigateTo('/dashboard');
        }, 2222);
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
    
    if ( route.query.token !== undefined && route.query.token !== undefined  )
    {
      element.value.token = route.query.token;
      element.value.username = route.query.username;
    }

  };

</script>

<template>

  <AuthLayout title="Recuperar contraseña" >

    <div class="relative flex text-center flex-col min-w-0 mt-20 break-words bg-transparent border-0 shadow-none rounded-2xl bg-clip-border">

      <div class="p-6 pb-0 mb-0 bg-transparent border-b-0 rounded-t-2xl">
        <h3 class="relative z-10 font-bold text-transparent bg-gradient-to-tl from-blue-600 to-cyan-400 bg-clip-text">
          Estás a sólo un paso de tu nueva contraseña
        </h3>
        <p class="mb-0 text-slate-600">
          Recupera tu contraseña ahora
        </p>
        <p class="mb-0">
          <Error v-if="errors.credentials"> {{errors.credentials[0]}} </Error>
        </p>
      </div>

      <div class="flex-auto p-6">

        <form role="form" class="text-left" @submit.prevent="handleRecover()" >

          <div class="mt-4 grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-6" >

            <div class="sm:col-span-6">
              <label for="password" class="block text-sm font-medium leading-6 text-gray-900">Contraseña </label>
              <div class="mt-2 input-wrapper">
                <input v-model="element.password" :type="type_pass" name="password" id="password" autocomplete="given-name" class="focus:shadow-soft-primary-outline text-sm leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 transition-all focus:border-fuchsia-300 focus:outline-none focus:transition-shadow">
                <span class="input-icon color-llp" style="cursor: pointer;" @click="togglePassShow(1)">
                  <i class="fas fa-eye-slash" v-if=" !pass_show "></i>
                  <i class="fas fa-eye" v-else></i>
                </span>
              </div>
              <Error v-if="errors.password"> {{errors.password[0]}} </Error>
            </div>

            <div class="sm:col-span-6">
              <label for="password_confirmation" class="block text-sm font-medium leading-6 text-gray-900">Confirmar contraseña</label>
              <div class="mt-2 input-wrapper">
                <input v-model="element.password_confirmation" :type="type_pass_two" name="password_confirmation" id="password_confirmation" autocomplete="family-name" class="focus:shadow-soft-primary-outline text-sm leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 transition-all focus:border-fuchsia-300 focus:outline-none focus:transition-shadow">
                <span class="input-icon color-llp" style="cursor: pointer;" @click="togglePassShow(2)">
                  <i class="fas fa-eye-slash" v-if=" !pass_show_two "></i>
                  <i class="fas fa-eye" v-else></i>
                </span>
              </div>
              <Error v-if="errors.password_confirmation"> {{errors.password_confirmation[0]}} </Error>
            </div>

          </div>

          <div class="text-center">
            <button type="submit" :disabled="loading" class=" disabled inline-block w-full px-6 py-3 mt-6 mb-0 font-bold text-white uppercase align-middle transition-all bg-transparent border-0 rounded-lg cursor-pointer shadow-soft-md bg-x-25 bg-150 leading-pro text-xs ease-soft-in tracking-tight-soft bg-gradient-to-tl from-blue-600 to-cyan-400 hover:scale-102 hover:shadow-soft-xs active:opacity-85">
              <span class="flex flex-row text-center justify-center items-center">
                <Spinner v-if="loading"/>
                Cambiar la contraseña
              </span>
            </button>
          </div>

        </form>

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