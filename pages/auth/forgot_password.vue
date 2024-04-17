<script setup>

  // import Swal from 'sweetalert2/dist/sweetalert2.js';
  // import 'sweetalert2/dist/sweetalert2.min.css';

  import AuthLayout from '~/layout/AuthLayout.vue';
  import { useAppStore } from '@/stores/app'

  const store_app = useAppStore();

  const loading = ref(false);
  const errors = ref([]);

  const pass_show = ref(false);
  const type_pass = ref('password');

  const element = ref({
    user:'',
    password:'',
  });


  onMounted( () => {

    if ( process.client )
    {
    }

  });


  const handleRecover = async () => {

    loading.value = true;

    await $fetch( store_app.urlApi +'send-recover-password' , {
      method: 'POST',
      body:{
        username: element.value.user,
      }
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
        }, 3333);
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
        return error;
      }, 555);
    
    });

  }

</script>

<template>

  <AuthLayout title="Has olvidado tu contraseña" >

    <div class="relative flex text-center flex-col min-w-0 mt-20 break-words bg-transparent border-0 shadow-none rounded-2xl bg-clip-border">

      <div class="p-6 pb-0 mb-0 bg-transparent border-b-0 rounded-t-2xl">
        <h3 class="relative z-10 font-bold text-dark bg-gradient-to-tl from-blue-600 to-cyan-400 bg-clip-text">
          Olvidaste tu contraseña
        </h3>
        <p class="mb-0 text-slate-600">
          Ingresa tu Nombre de usuario o correo electrónico para recuperar contraseña
        </p>
        <p class="mb-0">
          <Error v-if="errors.credentials"> {{errors.credentials[0]}} </Error>
        </p>
      </div>

      <div class="flex-auto p-6">

        <form role="form" class="text-left" @submit.prevent="handleRecover()" >

          <label class="mb-2 ml-1 font-bold text-xs text-slate-700">Nombre de Usuario o email</label>
          <div class="mb-4">
            <input type="text" v-model="element.user" id="email" class="focus:shadow-soft-primary-outline text-sm leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 transition-all focus:border-fuchsia-300 focus:outline-none focus:transition-shadow" placeholder="Nombre de usuario" aria-label="Email" aria-describedby="email-addon" />
            <Error v-if="errors.username"> {{errors.username[0]}} </Error>
          </div>

          <div class="text-center">
            <button type="submit" :disabled="loading" class=" disabled inline-block w-full px-6 py-3 mt-6 mb-0 font-bold text-white uppercase align-middle transition-all bg-transparent border-0 rounded-lg cursor-pointer shadow-soft-md bg-x-25 bg-150 leading-pro text-xs ease-soft-in tracking-tight-soft bg-gradient-to-tl from-blue-600 to-cyan-400 hover:scale-102 hover:shadow-soft-xs active:opacity-85">
              <span class="flex flex-row text-center justify-center items-center">
                <Spinner v-if="loading"/>
                recuperar contraseña
              </span>
            </button>
          </div>

        

        </form>

      </div>

      <div class="p-6 px-1 pt-0 text-center bg-transparent border-t-0 border-t-solid rounded-b-2xl lg:px-2">

        <p class="mx-auto mb-6 leading-normal text-sm">
          <a href="/auth/login" class="relative z-10 font-semibold text-transparent bg-gradient-to-tl from-blue-600 to-cyan-400 bg-clip-text">
            Ingresar
          </a>
        </p>

      </div>

    </div>

  </AuthLayout>

</template>

<style scoped>

  .input-wrapper {
    position: relative;
  }

  .input {
    box-sizing: border-box;
    color: #191919;
    width: 100%;
  }

  /* Media query para dispositivos móviles (ancho menor a 768px) */
  @media screen and (max-width: 767px) {

.input-icon {
  color: #191919;
  position: absolute;
  width: 20px;
  height: 3px;
  left: 12px;
  top: 50%;
  transform: translateY(-50%);
}
.input-icon.password {
  left: unset;
  right: 32px;
}

}

/* Media query para tablets (ancho entre 768px y 1023px) */
@media screen and (min-width: 768px) and (max-width: 1023px) {
  .input-icon {
    color: #191919;
    position: absolute;
    width: 20px;
    height: 20px;
    left: 32px;
    top: 50%;
    transform: translateY(-50%);
  }

  .input-icon.password {
    left: unset;
    right: 32px;
  }
}

/* Media query para escritorios (ancho igual o mayor a 1024px) */
@media screen and (min-width: 1024px) {

.input-icon {
  color: #191919;
  position: absolute;
  width: 20px;
  height: 40px;
  left: 12px;
  top: 50%;
  transform: translateY(-50%);
}
.input-icon.password {
  left: unset;
  right: 32px;
}
}
</style>