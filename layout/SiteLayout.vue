<script setup>

  import Footer from './Components/Footer.vue';
  import Loader from './Components/Loader.vue';

  const props = defineProps( [ 'title' ]);

  useHead({
    
    title: props.title+' | Fast Moda ',

    link:[
      {
        href: 'https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700',
        rel:'stylesheet'
      }
      ,
      {
        href: '/assets/css/nucleo-icons.css',
        rel:'stylesheet'
      }
      ,
      {
        href: '/assets/css/nucleo-svg.css',
        rel:'stylesheet'
      },
      {
        href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css',
        rel:'stylesheet'
      },
      {
        href: '/assets/css/soft-ui-dashboard-tailwind.css',
        rel:'stylesheet'
      },
      {
        href: '/assets/css/styles-auth.css',
        rel:'stylesheet'
      }],
    script :[

      {
        src: 'https://cdn.tailwindcss.com',
        body: false,
      },
      {
        src: 'https://unpkg.com/@popperjs/core@2',
        body: false,
      },
      {
        src: '/assets/js/plugins/chartjs.min.js',
        body: true,
        async: true,
      },
      {
        src: '/assets/js/plugins/perfect-scrollbar.min.js',
        body: true,
        async: true,
      }
      
    ]
    
  });

  const loading = ref(true);
  const config = ref(false);

  onMounted( () => {

    if (process.client)
    {

      setTimeout(() => {
          
        // const paragraph = document.querySelector('body');
        // paragraph.classList.add('m-0');
        // paragraph.classList.add('font-sans');
        
        // paragraph.classList.add('text-base');
        // paragraph.classList.add('antialiased');
        // paragraph.classList.add('font-normal');
        // paragraph.classList.add('leading-default');
        // paragraph.classList.add('bg-gray-50');
        // paragraph.classList.add('dark:!bg-slate-800');

      }, 333 );
      
      setTimeout(() => {
        loading.value = false;
        initializeFunctions();
      }, 666);
  

    }

  });

  const openConfig = ( val ) => {
    config.value = val; 
  };

  const initializeFunctions = () =>{
    
    
  };

</script>

<template >

  <Loader v-show="loading" />

  <div v-show="!loading"  class="container sticky top-0 z-sticky">
    <div class="flex flex-wrap -mx-3">
      <div class="w-full max-w-full px-3 flex-0">
        
        <nav class="absolute top-0 left-0 right-0 z-30 flex flex-wrap items-center px-4 py-2 mx-6 my-4 shadow-soft-2xl rounded-blur bg-white/80 backdrop-blur-2xl backdrop-saturate-200 lg:flex-nowrap lg:justify-start">
          <div class="flex items-center justify-between w-full p-0 pl-6 mx-auto flex-wrap-inherit">
            <a class="py-2.375 text-sm mr-4 ml-4 whitespace-nowrap font-bold text-slate-700 lg:ml-0" href="../pages/dashboard.html"> 
              <img src="/assets/img/lilipink_yoi.png" style="width: 163px;" class="inline h-full max-w-full transition-all duration-200 ease-nav-brand max-h-8" alt="main_logo" /> 
            </a>
            <button navbar-trigger class="px-3 py-1 ml-2 leading-none transition-all bg-transparent border border-transparent border-solid rounded-lg shadow-none cursor-pointer text-lg ease-soft-in-out lg:hidden" type="button" aria-controls="navigation" aria-expanded="false" aria-label="Toggle navigation">
              <span class="inline-block mt-2 align-middle bg-center bg-no-repeat bg-cover w-6 h-6 bg-none">
                <span bar1 class="w-5.5 rounded-xs relative my-0 mx-auto block h-px bg-gray-600 transition-all duration-300"></span>
                <span bar2 class="w-5.5 rounded-xs mt-1.75 relative my-0 mx-auto block h-px bg-gray-600 transition-all duration-300"></span>
                <span bar3 class="w-5.5 rounded-xs mt-1.75 relative my-0 mx-auto block h-px bg-gray-600 transition-all duration-300"></span>
              </span>
            </button>
            <div navbar-menu class="items-center flex-grow overflow-hidden transition-all duration-500 ease-soft lg-max:max-h-0 basis-full lg:flex lg:basis-auto">
              <ul class="flex flex-col pl-0 mx-auto mb-0 list-none lg:flex-row xl:ml-auto">
                <li>
                  <a class="flex items-center px-4 py-2 mr-2 font-normal transition-all lg-max:opacity-0 duration-250 ease-soft-in-out text-sm text-slate-700 lg:px-2" aria-current="page" href="../pages/dashboard.html">
                    <i class="mr-1 fa fa-chart-pie opacity-60"></i>
                    Dashboard
                  </a>
                </li>
                <li>
                  <a class="block px-4 py-2 mr-2 font-normal transition-all lg-max:opacity-0 duration-250 ease-soft-in-out text-sm text-slate-700 lg:px-2" href="../pages/profile.html">
                    <i class="mr-1 fa fa-user opacity-60"></i>
                    Profile
                  </a>
                </li>
                <li>
                  <a class="block px-4 py-2 mr-2 font-normal transition-all lg-max:opacity-0 duration-250 ease-soft-in-out text-sm text-slate-700 lg:px-2" href="../pages/sign-up.html">
                    <i class="mr-1 fas fa-user-circle opacity-60"></i>
                    Sign Up
                  </a>
                </li>
                <li>
                  <a class="block px-4 py-2 mr-2 font-normal transition-all lg-max:opacity-0 duration-250 ease-soft-in-out text-sm text-slate-700 lg:px-2" href="/login">
                    <i class="mr-1 fas fa-key opacity-60"></i>
                    Ingresar
                  </a>
                </li>
              </ul>
              <!-- online builder btn  -->
              <!-- <li class="flex items-center">
                <a
                  class="leading-pro ease-soft-in text-fuchsia-500 border-fuchsia-500 text-xs tracking-tight-soft bg-150 bg-x-25 rounded-3.5xl hover:border-fuchsia-500 hover:scale-102 hover:text-fuchsia-500 active:hover:border-fuchsia-500 active:hover:scale-102 active:hover:text-fuchsia-500 active:opacity-85 active:shadow-soft-xs active:bg-fuchsia-500 active:border-fuchsia-500 mr-2 mb-0 inline-block cursor-pointer border border-solid bg-transparent py-2 px-8 text-center align-middle font-bold uppercase shadow-none transition-all hover:bg-transparent hover:opacity-75 hover:shadow-none active:scale-100 active:text-white active:hover:bg-transparent active:hover:opacity-75 active:hover:shadow-none"
                  target="_blank"
                  href="https://www.creative-tim.com/builder/soft-ui?ref=navbar-dashboard&amp;_ga=2.76518741.1192788655.1647724933-1242940210.1644448053"
                  >Online Builder</a
                >
              </li> -->
              <ul class="hidden pl-0 mb-0 list-none lg:block lg:flex-row">
                <li>
                  <a href="https://www.creative-tim.com/product/soft-ui-dashboard-tailwind" target="_blank" class="leading-pro hover:scale-102 hover:shadow-soft-xs active:opacity-85 ease-soft-in text-xs tracking-tight-soft shadow-soft-md bg-150 bg-x-25 bg-gradient-to-tl from-gray-900 to-slate-800 rounded-3.5xl mb-0 mr-1 inline-block cursor-pointer border-0 bg-transparent px-8 py-2 text-center align-middle font-bold uppercase text-white transition-all">Free download</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>

      </div>
    </div>
  </div>

  <main v-show="!loading"  class="mt-0 transition-all duration-200 ease-soft-in-out">

    <slot />

  </main>

  <footer v-show="!loading"  class="py-6">
    <div class="container">

      <div class="flex flex-wrap -mx-1">
        
        <div class="flex-shrink-0 w-full max-w-full mx-auto mb-6 text-center lg:flex-0 lg:w-8/12">
          <a href="javascript:;" target="_blank" class="mb-2 mr-4 text-slate-400 sm:mb-0 xl:mr-12"> Company </a>
          <a href="javascript:;" target="_blank" class="mb-2 mr-4 text-slate-400 sm:mb-0 xl:mr-12"> About Us </a>
          <a href="javascript:;" target="_blank" class="mb-2 mr-4 text-slate-400 sm:mb-0 xl:mr-12"> Team </a>
          <a href="javascript:;" target="_blank" class="mb-2 mr-4 text-slate-400 sm:mb-0 xl:mr-12"> Products </a>
          <a href="javascript:;" target="_blank" class="mb-2 mr-4 text-slate-400 sm:mb-0 xl:mr-12"> Blog </a>
          <a href="javascript:;" target="_blank" class="mb-2 mr-4 text-slate-400 sm:mb-0 xl:mr-12"> Pricing </a>
        </div>

        <div class="flex-shrink-0 w-full max-w-full mx-auto mt-2 mb-6 text-center lg:flex-0 lg:w-8/12">
          <a href="javascript:;" target="_blank" class="mr-6 text-slate-400">
            <span class="text-lg fab fa-dribbble"></span>
          </a>
          <a href="javascript:;" target="_blank" class="mr-6 text-slate-400">
            <span class="text-lg fab fa-twitter"></span>
          </a>
          <a href="javascript:;" target="_blank" class="mr-6 text-slate-400">
            <span class="text-lg fab fa-instagram"></span>
          </a>
          <a href="javascript:;" target="_blank" class="mr-6 text-slate-400">
            <span class="text-lg fab fa-pinterest"></span>
          </a>
          <a href="javascript:;" target="_blank" class="mr-6 text-slate-400">
            <span class="text-lg fab fa-github"></span>
          </a>
        </div>

      </div>

      <div class="flex flex-wrap -mx-1">
        <div class="w-8/12 max-w-full px-3 mx-auto mt-1 text-center flex-0">
          <p class="mb-0 text-slate-400">
            Copyright ©
            <!-- {{ year() }} -->
            Soft by Creative Tim.
          </p>
        </div>
      </div>

    </div>
  </footer>

</template>

