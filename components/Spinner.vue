<script setup>
  
</script>

<template>
  <div class="box mr-2"></div>
</template>

<style scoped>
  .box {
    height: 23px;
    width: 23px;
    border-radius: 50%;
    border: 2px solid;
    /* border-color: orange transparent; */
    border-top-color: #5860a8;
    border-bottom-color: #e20e7d ; 
    border-left-color: transparent ;
    border-right-color: transparent ;
    animation: spin 1s infinite ease-out;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
</style>