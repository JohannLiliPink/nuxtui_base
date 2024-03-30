<script setup>

  useHead({
    link:[{
      href: '//fonts.googleapis.com/css2?family=Montserrat:ital,wght@1,800&display=swap',
      rel:'stylesheet'
    }
  ]});
    
</script>

<!-- Loader.vue -->
<template>
  <div class="loader">
    <div class="container">
      <div class="cargando">
        <div class="pelotas"></div>
        <div class="pelotas"></div>
        <div class="pelotas"></div>
        <span class="texto-cargando">
          Cargando...
        </span>
      </div>
    </div>
  </div>
</template>

<style scoped>

  /* Estilos para el indicador de carga */
  .loader {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }

  body{
    font-family: 'Montserrat', sans-serif;
    font-weight: 800;
    background-color: #131313;
    color: #00b8de;
    background-image: url(/assets/landing_page/header.png) !important;
  }
  /* ======================== */
  .container{   
    display: grid;
    place-content: center;
    height: 100vh;
  }
  .cargando{
    width: 120px;
    height: 30px;
    display: flex;
    flex-wrap: wrap;
    align-items: flex-end;
    justify-content: space-between;
    margin: 0 auto; 
  }
  .texto-cargando{ 
    padding-top:20px;
    font-size: 26px !important;
    color: blueviolet;
  }
  .cargando span{
      font-size: 20px;
      text-transform: uppercase;
  }
  .pelotas {
      width: 30px;
      height: 30px;
      background:  linear-gradient( to right , #5860a8 , #e20e7d ) ;
      animation: salto .5s alternate
      infinite;
      border-radius: 50%  
  }
  .pelotas:nth-child(2) {
      animation-delay: .18s;
  }
  .pelotas:nth-child(3) {
    animation-delay: .37s;
  }
  @keyframes salto {
      from {
          transform: scaleX(1.25);
      }
      to{
          transform: 
          translateY(-50px) scaleX(1);
      }
  }

</style>
