<template>
  <div>

      <a-row :gutter="{ xs: 8, sm: 16, md: 24, lg: 32 }">
              <div style='text-align: justify; margin: 15px;'>
                <!-- TODO: AQUI -->
              El total de votos calculado y porcentaje que se muestra, se refieren a los votos asentados en las Actas.
              Por presentación, los decimales de los porcentajes muestran sólo cuatro dígitos. No obstante, al considerar todos los decimales, suman 100%.
              </div>
  
              
      </a-row>
      <div  style="display: flex; flex-wrap: wrap; justify-content: left; padding: 5px; ">
        <div style="
          left: 389px;
          width: 8px;
          height: 25px;
          text-align: left;
          justify-content: center;
          opacity: 1; 
          background-color: #582D73; margin-right: 10px; "
          
          >
        </div>
        <label  style="font-size: 1.4em;"> 
          Votos en Acta Computada
        </label><br> 
      </div>
  </div>
</template>

<script setup>

</script>
