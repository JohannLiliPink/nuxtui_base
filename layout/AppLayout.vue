<script setup>

  import AsideMain from './Components/AsideMain.vue';
  import Configurator from './Components/Configurator.vue';
  import Footer from './Components/Footer.vue';
  // import NavBar from './Components/NavBar.vue';
  import Loader from './Components/Loader.vue';

  const props = defineProps( [ 'title' ]);
  const loading = ref(true);
  
  
  // import { useAppStore } from '@/stores/app';
  // const store_app = useAppStore();

  onMounted( () => {

    if (process.client)
    {

      setTimeout(() => {

          
        const paragraph = document.querySelector('body');
        paragraph.classList.add('m-0');
        paragraph.classList.add('m-0');
        
        paragraph.classList.add('text-base');
        paragraph.classList.add('antialiased');
        paragraph.classList.add('font-normal');
        paragraph.classList.add('leading-default');
        paragraph.classList.add('text-slate-500');

      }, 11);
      
      setTimeout(() => {
        loading.value = false;
      }, 1144);

    }

  });
  
  if (process.client)
  {

    setTimeout(() => {
      
      useHead({
  
        title: props.title+' | Fast Moda ',
  
        link:[
  
          {
            href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css',
            rel:'stylesheet'
          },
          {
            href: 'https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700',
            rel:'stylesheet'
          },
  
  
          {
            href: '/assets/css/nucleo-icons.css',
            rel:'stylesheet'
          },
          {
            href: '/assets/css/nucleo-svg.css',
            rel:'stylesheet'
          },
          {
            href: '/assets/css/soft-ui-dashboard-tailwind.css?v=1.0.5',
            rel:'stylesheet'
          },
  
          {
            href: '/assets/css/styles.css',
            rel:'stylesheet'
          },
  
        ],
        script : [
  
          {
            src: 'https://kit.fontawesome.com/42d5adcbca.js',
            body:false,
          },
          {
            src: 'https://unpkg.com/@popperjs/core@2',
            body:false,
          },
          {
            src: '/assets/js/plugins/chartjs.min.js',
            body:false,
            async:true
          },
          
          {
            src: '/assets/js/plugins/perfect-scrollbar.min.js',
            body:true,
            async:true
          },
          {
            src: 'https://buttons.github.io/buttons.js',
            body:true,
            async:true,
            defer:true,
          },
          {
            src: '/assets/js/soft-ui-dashboard-tailwind.js',
            body:true,
            async:true
          }
  
        ]
  
      });

    }, 111);
  }

  onMounted( () => {

    if (process.client)
    {

      const paragraph = document.querySelector('body');
      
    }

  });

</script>

<template>

  <Loader v-show="loading" />

  <AsideMain v-show="!loading" />  

  <main v-show="!loading"  class="ease-soft-in-out xl:ml-68.5 relative h-full max-h-screen rounded-xl transition-all duration-200">
    
    <!-- <NavBar @open-config="openConfig(true)">
      <slot name="breadcrumb" />
    </NavBar> -->

    <div id="content-main" class="w-full px-6 py-6 mx-auto">
      
      <slot />

      <Footer v-if="!loading" />

    </div>

  </main>

  <!-- <Configurator v-show="config" @close-config="openConfig(false)" /> -->
  <Configurator />

</template>

<style>

  body {
    background-color: #fff;
    color: rgba(0,0,0,0.8);
  }
  /* .dark body {
    background-color: #091a28;
    color: #ebf4f1;
  } */
  .sepia body {
    background-color: #f1e7d0;
    color: #433422;
  }
  
</style>