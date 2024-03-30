<script setup>
  
  function year()
  {
    let date_ = new Date().getFullYear();
    return date_;
  }
</script>

<template>

  <footer class="pt-4">
    <div class="w-full px-6 mx-auto">
      <div class="flex flex-wrap items-center -mx-3 lg:justify-between">
        <div class="w-full max-w-full px-3 mt-0 mb-6 shrink-0 lg:mb-0 lg:w-1/2 lg:flex-none">
          <div class="text-sm leading-normal text-center text-slate-500 lg:text-left">
            ©
            {{ year() }}
            made with <i class="fa fa-heart"></i> by
            <a href="https://www.creative-tim.com" class="font-semibold text-slate-700" target="_blank">Creative Tim</a>
            for a better web.
          </div>
        </div>
        <div class="w-full max-w-full px-3 mt-0 shrink-0 lg:w-1/2 lg:flex-none">
          <ul class="flex flex-wrap justify-center pl-0 mb-0 list-none lg:justify-end">
            <li class="nav-item">
              <a href="https://www.creative-tim.com" class="block px-4 pt-0 pb-1 text-sm font-normal transition-colors ease-soft-in-out text-slate-500" target="_blank">Creative Tim</a>
            </li>
            <li class="nav-item">
              <a href="https://www.creative-tim.com/presentation" class="block px-4 pt-0 pb-1 text-sm font-normal transition-colors ease-soft-in-out text-slate-500" target="_blank">About Us</a>
            </li>
            <li class="nav-item">
              <a href="https://creative-tim.com/blog" class="block px-4 pt-0 pb-1 text-sm font-normal transition-colors ease-soft-in-out text-slate-500" target="_blank">Blog</a>
            </li>
            <li class="nav-item">
              <a href="https://www.creative-tim.com/license" class="block px-4 pt-0 pb-1 pr-0 text-sm font-normal transition-colors ease-soft-in-out text-slate-500" target="_blank">License</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>

  <!-- <footer class="w-full pt-4 z-[999] bg-white " >
    <div class="w-full px-6 mx-auto">
      <div class="flex flex-wrap items-center -mx-3 lg:justify-between">
        
        <div class="w-full max-w-full px-3 mt-0 mb-2 shrink-0 lg:mb-0 lg:w-1/2 lg:flex-none">
          
          <div class="text-sm leading-normal text-center text-slate-500 lg:text-left">
            © Copyright 2024 
            <a href="https://fastmoda.dataprotected.co" class="font-semibold" target="_blank">
              <span class="text-blue-700  font-bold">
                Fast Moda
              </span>
            </a> 
            - Todos los derechos reservados. 
          </div>

        </div>

        <div class="w-full max-w-full px-3 mt-0 shrink-0 lg:w-1/2 lg:flex-none">
          <ul class="flex flex-wrap justify-center pl-0 mb-0 list-none lg:justify-end">
            <li class="nav-item">
              <a target="_blank" href="https://www.lilipink.com/terminos-y-condiciones#selected=credipink" class="block px-4 pt-0 pb-1 text-sm font-normal transition-colors ease-soft-in-out text-slate-500" >
                Credipink
              </a>
            </li>
            <li class="nav-item">
              <a target="_blank" href="https://lilipink.com.co/politicas-de-envio/" class="block px-4 pt-0 pb-1 text-sm font-normal transition-colors ease-soft-in-out text-slate-500" >
                Política de envíos
              </a>
            </li>
            <li class="nav-item">
              <a target="_blank" href="https://fastmoda.dataprotected.co/#privacynotice" class="block px-4 pt-0 pb-1 text-sm font-normal transition-colors ease-soft-in-out text-slate-500" >
                Políticas de privacidad
              </a>
            </li>
          </ul>

        </div>
        
      </div>
    </div>
  </footer> -->

</template>