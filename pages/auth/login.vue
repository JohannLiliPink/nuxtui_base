<script setup>

  import Swal from "sweetalert2/dist/sweetalert2.js";
  import "sweetalert2/dist/sweetalert2.min.css";

  import AuthLayout from '~/layout/AuthLayout.vue';
  import { useAppStore } from '@/stores/app'
  const { urlApi } = await useAuth();

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
      // urlApi = ''
      autoLogin();
    }

  });

  const togglePassShow = () => {
    pass_show.value = !pass_show.value;
    type_pass.value = !pass_show.value ? 'password' : 'text';
  };

  const handleLogin = async () => {

    loading.value = true;

    await $fetch( urlApi +'login' , {
      method: 'POST',
      body:{
        username: element.value.user,
        password: element.value.password,
      }
    })
    .then( ( response ) => {

      if ( response.access_token )
      {

        let fullname = response.user.fullname ? 'Bienvenido, '+response.user.fullname+'. Tu sesión ha iniciado correctamente':'Tu sesión ha iniciado correctamente'
        
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: fullname,
          showConfirmButton: false,
          timer: 1500
        });

        store_app.user = response.user ;
        store_app.user.token = response.access_token;
        store_app.isAuth = true;

        loading.value = false;
        setTimeout(() => {

          // if ( store_app.last_url !== '' )
          // {
          //   return navigateTo( store_app.last_url );
          // }
          // navigateTo('/dashboard');
        }, 333);
      }
      
      if ( response.status == 'error' )
      {
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "Ha ocurrido un erro al intentar autenticar usuario 😭, por favor revisa las credenciales.",
        });
        errors.value = response.errors
      }

      loading.value = false;
    })
    .catch((error) => {

      Swal.fire({
        icon: "error",
        title: "Error Servidor",
        text: "Ha ocurrido un erro al intentar autenticar usuario 😭, por favor revisa las credenciales.",
      });

      setTimeout(() => {
        
        loading.value = false;
        return error;

      }, 555);
    
    });

  }

  const autoLogin =  ( ) => {

    let url;
    let objetoJson = store_app.user.google_auth ? JSON.parse( store_app.user.google_auth ) : false ;

    if ( objetoJson.token )
    {
      var boton = document.getElementById('auth_google');
      setTimeout(() => {
        // boton.click();
      }, 333);
    }

    return url;
};

</script>

<template>

  <AuthLayout title="Ingresar" >

    <!-- <div class="relative flex sm:left-0 md:left-20 text-center flex-col min-w-0 mt-20 break-words bg-transparent border-0 shadow-none rounded-2xl bg-clip-border">

      <div class="p-6 pb-0 mb-0 bg-transparent border-b-0 rounded-t-2xl">
        <h3 class="relative z-10 font-bold text-transparent bg-gradient-to-tl from-blue-600 to-cyan-400 bg-clip-text">
          Bienvenido de nuevo
        </h3>
        <p class="mb-0">
          Ingresa tu Nombre de usuario y contraseña para iniciar sesión
        </p>
        <p class="mb-0">
          <Error v-if="errors.credentials"> {{errors.credentials[0]}} </Error>
        </p>
      </div>

      <div class="flex-auto pt-2 ">

        <form role="form" class="px-6 mx-4 sm:mx-32 md:mx-6 pt-6 pb-2 text-left bg-gray-50 opacity-75 shadow-lg rounded-lg border-sh" @submit.prevent="handleLogin()" >

          <div class="mb-1">
            <label class="block text-slate-600 py-2 font-bold mb-1" for="emailaddress" >
              Usuario 
            </label>
            <input 
              id="emailaddress"
              type="text"
              v-model="element.user"
              placeholder="Usuario"
              class="focus:shadow-soft-primary-outline peer h-10 w-full rounded-md bg-gray-50 px-4 font-thin outline-none transform transition hover:scale-105 duration-300 ease-in-out text-gray-700 focus:border-fuchsia-300 focus:outline-none focus:transition-shadow" 
            />
            <Error v-if="errors.username"> {{errors.username[0]}} </Error>
          </div>

          <div class="group mb-1">
            <label class="block text-slate-600 py-2 font-bold mb-1" for="emailaddress" >
              Contraseña
            </label>
            <div class="relative flex items-center">
              <input 
                id="pass"
                class="focus:shadow-soft-primary-outline peer relative h-10 w-full rounded-md bg-gray-50 pl-4 pr-10 font-thin outline-none  transform transition hover:scale-105 duration-300 ease-in-out text-gray-700 focus:border-fuchsia-300 focus:outline-none focus:transition-shadow" 
                :type="type_pass"
                v-model="element.password"
                placeholder="Contraseña"
              />
              <span class=" absolute right-2 duration-200 ease-in-out cursor-pointer" @click="togglePassShow()">
                <i class="fas fa-eye-slash" v-if=" pass_show "></i>
                <i class="fas fa-eye" v-else></i>
              </span>
            </div>
            <Error v-if="errors.password"> {{errors.password[0]}} </Error>
          </div>

          <div class="min-h-6 mb-0.5 block pl-12 mt-2">
            <input v-model="element.password"  id="rememberMe" class="mt-0.54 rounded-10 duration-250 ease-soft-in-out after:rounded-circle after:shadow-soft-2xl after:duration-250 checked:after:translate-x-5.25 h-5 relative float-left -ml-12 w-10 cursor-pointer appearance-none border border-solid border-gray-200 bg-slate-800/10 bg-none bg-contain bg-left bg-no-repeat align-top transition-all after:absolute after:top-px after:h-4 after:w-4 after:translate-x-px after:bg-white after:content-[''] checked:border-slate-800/95 checked:bg-slate-800/95 checked:bg-none checked:bg-right" type="checkbox" checked="" />
            <label class="mb-0 ml-1 font-normal cursor-pointer select-none text-sm text-slate-700" for="rememberMe">Remember me</label>
          </div>

          <div class="flex justify-around ">

            <div>
              <div class="text-center">
                <button type="submit" :disabled="loading" class=" disabled inline-block w-full px-6 py-3 mt-3 mb-0 font-bold text-white uppercase align-middle transition-all bg-transparent border-0 rounded-lg cursor-pointer shadow-soft-md bg-x-25 bg-150 leading-pro text-xs ease-soft-in tracking-tight-soft bg-gradient-to-tl from-blue-600 to-cyan-400 hover:scale-102 hover:shadow-soft-xs active:opacity-85">
                  <span class="flex flex-row text-center justify-center items-center">
                    <Spinner v-if="loading"/>
                    Ingresar
                  </span>
                </button>
              </div>
            </div>
            
            <div>
              <a id="auth_google" :href="urlApi.replace( 'api/' , '' )+'google/redirect' " class=" disabled inline-block w-full px-6 py-3 mt-3 mb-0 font-bold text-white uppercase align-middle transition-all bg-transparent border-0 rounded-lg cursor-pointer shadow-soft-md items-center justify-center rounded-md !bg-[#D64937] transition hover:bg-opacity-90 leading-pro text-xs ease-soft-in tracking-tight-soft hover:scale-102 hover:shadow-soft-xs active:opacity-85">
                <span class="flex flex-row text-center justify-center items-center">
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M17.8477 8.17132H9.29628V10.643H15.4342C15.1065 14.0743 12.2461 15.5574 9.47506 15.5574C5.95916 15.5574 2.8306 12.8821 2.8306 9.01461C2.8306 5.29251 5.81018 2.47185 9.47506 2.47185C12.2759 2.47185 13.9742 4.24567 13.9742 4.24567L15.7024 2.47185C15.7024 2.47185 13.3783 0.000145544 9.35587 0.000145544C4.05223 -0.0289334 0 4.30383 0 8.98553C0 13.5218 3.81386 18 9.44526 18C14.4212 18 17.9967 14.7141 17.9967 9.79974C18.0264 8.78198 17.8477 8.17132 17.8477 8.17132Z"
                      fill="white" />
                  </svg>
                </span>
              </a>
            </div>

          </div>

          <ul class="flex justify-between -mx-2 my-2 ">
            <li class="w-full px-2">
            </li>
          </ul>

          <div class="p-2 px-1 pt-0 text-center bg-transparent border-t-0 border-t-solid rounded-b-2xl lg:px-2">
    
            <p class="mx-auto leading-normal text-sm">
              <NuxtLink to="/auth/forgot_password" class="relative z-10 font-semibold text-transparent bg-gradient-to-tl from-blue-600 to-cyan-400 bg-clip-text">
                Olvidé mi contraseña
              </NuxtLink>
            </p>
    
          </div>

        </form>

      </div>

    </div> -->


    <div class="p-6 pb-0 mb-0 bg-transparent border-b-0 rounded-t-2xl">
      <h3 class="relative z-10 font-bold text-transparent bg-gradient-to-tl from-blue-600 to-cyan-400 bg-clip-text">Bienvenido de nuevo</h3>
      <p class="mb-0">Ingresa tu correo electrónico y contraseña para iniciar sesión</p>
    </div>

    <div class="flex-auto p-6 ">
      
      <form role="form bg-sky-300" @submit.prevent="handleLogin()">

        <label class="mb-2 ml-1 font-bold text-xs text-slate-700">Email</label>
        <div class="mb-4">
          <input type="text" v-model="element.user" class="focus:shadow-soft-primary-outline text-sm leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 transition-all focus:border-fuchsia-300 focus:outline-none focus:transition-shadow" placeholder="Email" aria-label="Email" aria-describedby="email-addon" />
        </div>

        <label class="mb-2 ml-1 font-bold text-xs text-slate-700">Password</label>
        <div class="mb-10">
          <input :type="type_pass" v-model="element.password" class="focus:shadow-soft-primary-outline text-sm leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 transition-all focus:border-fuchsia-300 focus:outline-none focus:transition-shadow" placeholder="Password" aria-label="Password" aria-describedby="password-addon" />
          <span class=" absolute left-6 mt-1 duration-200 ease-in-out cursor-pointer dark:text-white" @click="togglePassShow()">
            <i class="fas fa-eye-slash" v-if=" pass_show "></i>
            <i class="fas fa-eye" v-else></i>
          </span>
        </div>


        <div class="min-h-6 mb-0.5 block pl-12">
          <input id="rememberMe" class="mt-0.54 rounded-10 duration-250 ease-soft-in-out after:rounded-circle after:shadow-soft-2xl after:duration-250 checked:after:translate-x-5.25 h-5 relative float-left -ml-12 w-10 cursor-pointer appearance-none border border-solid border-gray-200 bg-slate-800/10 bg-none bg-contain bg-left bg-no-repeat align-top transition-all after:absolute after:top-px after:h-4 after:w-4 after:translate-x-px after:bg-white after:content-[''] checked:border-slate-800/95 checked:bg-slate-800/95 checked:bg-none checked:bg-right" type="checkbox" checked="" />
          <label class="mb-2 ml-1 font-normal cursor-pointer select-none text-sm text-slate-700" for="rememberMe">Recuerdame</label>
        </div>
        <div class="text-center flex gap-4">

          <button type="submit" class="inline-block w-full px-6 py-3 mt-6 mb-0 font-bold text-center text-white uppercase align-middle transition-all bg-transparent border-0 rounded-lg cursor-pointer shadow-soft-md bg-x-25 bg-150 leading-pro text-xs ease-soft-in tracking-tight-soft bg-gradient-to-tl from-blue-600 to-cyan-400 hover:scale-102 hover:shadow-soft-xs active:opacity-85">
            Ingresar
          </button>

          <button type="button" class="inline-block w-full px-6 py-3 mt-6 mb-0 font-bold text-center border border-blue-600 rounded-lg hover:bg-slate-200 hover:text-white active:bg-indigo-500 focus:outline-none focus:ring">
            <img src="/assets/img/google.png" style="width: 163px;" class="inline h-full max-w-full transition-all duration-200 ease-nav-brand max-h-8" alt="main_logo" /> 
          </button>

        </div>
      </form>

    </div>

    <!-- <div class="p-6 px-1 pt-0 text-center bg-transparent border-t-0 border-t-solid rounded-b-2xl lg:px-2">
      <p class="mx-auto mb-6 leading-normal text-sm">
        Don't have an account?
        <a href="../pages/sign-up.html" class="relative z-10 font-semibold text-transparent bg-gradient-to-tl from-blue-600 to-cyan-400 bg-clip-text">Sign up</a>
      </p>
    </div> -->

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
    top: 53.5%;
    transform: translateY(-50%);
  }
  .input-icon.password {
    left: unset;
    right: 12px;
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
    top: 53.5%;
    transform: translateY(-50%);
  }

  .input-icon.password {
    left: unset;
    right: 12px;
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
    top: 53%;
    transform: translateY(-50%);
  }
  .input-icon.password {
    left: unset;
    right: 9px;
  }
}

</style>