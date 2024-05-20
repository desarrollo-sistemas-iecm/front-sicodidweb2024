<!--
  BannerEleccon.vue:

  Despliega el banner principal de la App 
  
  Hijo de App.vue
-->
<template>
  <!-- <div :style="{display: 'flex', 'flex-wrap': wrap, 'justify-content': 'space-between', backgroundColor: eleccion.tema? '#f5f5f5': 'black', padding: '0 0', 'margin-top': '-28px'}"> -->
    <a-row v-if="!isMobile()" :style="{display: 'flex', 'flex-wrap': wrap, 'justify-content': 'space-between', backgroundColor: eleccion.tema? '#f5f5f5': 'black', padding: '0 0', 'margin-top': '-28px'}">
      <a-col :xs="0" :sm="0" :md="0" :lg="3" :xl="3">
        <img v-if="!isMobile() && eleccion.tema" :style="{float: 'left'}" class="imagen" src="@/assets/iecm.png"/>
        <img v-else-if="!isMobile() && !eleccion.tema" :style="{float: 'left'}" class="imagen" src="@/assets/iecm_blanco.png"/>
        <img v-else-if="isMobile() && eleccion.tema" :style="{float: 'left'}" class="imagen" src="@/assets/logo.png"/>
        <img v-else-if="isMobile() && !eleccion.tema" :style="{float: 'left'}" class="imagen" src="@/assets/logo_blanco.png"/>
      </a-col>
      <a-col :xs="24" :sm="24" :md="24" :lg="18" :xl="18" style="text-align: center;">
        <p :style="{fontSize:'30px',fontWeight:'bold', color: eleccion.tema? 'black':'white', 'margin-bottom': '-10px', 'margin-top': '9px' }">
            <p style="margin-bottom: -20px;">Programa de Resultados Electorales Preliminares 2024</p>
            <label :style="{fontSize:'18px', fontWeight: 'normal', color: eleccion.tema? 'black':'white', 'margin-bottom': '-10px' }">
              Elecciones Estatales de la <label style="color:#B283B9">Ciudad de México</label> 
            </label> 
        
          </p>  
      </a-col>
      <a-col :xs="0" :sm="0" :md="0" :lg="0" :xl="3">
        <img v-if="!isMobile() &&  eleccion.tema" class="imagen2" src = "@/assets/logo.png" />
        <img v-if="!isMobile() &&  !eleccion.tema" class="imagen2" src = "@/assets/logo_blanco.png" />
      </a-col>
    </a-row>
    <!-- Icono de la Institución-->
    <!-- <div>
      <img v-if="!isMobile() && eleccion.tema" :style="{float: 'left'}" class="imagen" src="@/assets/iecm.png"/>
      <img v-if="!isMobile() && !eleccion.tema" :style="{float: 'left'}" class="imagen" src="@/assets/iecm_blanco.png"/>
      <img v-if="isMobile() && eleccion.tema" :style="{float: 'left'}" class="imagen" src="@/assets/logo.png"/>
      <img v-if="isMobile() && !eleccion.tema" :style="{float: 'left'}" class="imagen" src="@/assets/logo_blanco.png"/>
    </div> -->
    <!-- Texto cabecera general-->
    <!-- <div style="text-align: center;">    
        <p :style="{fontSize:'30px',fontWeight:'bold', color: eleccion.tema? 'black':'white', 'margin-bottom': '-10px' }">
            <p style="margin-bottom: -20px;">Programa de Resultados Electorales Preliminares 2024</p>
            <label :style="{fontSize:'18px', fontWeight: 'normal', color: eleccion.tema? 'black':'white', 'margin-bottom': '-10px' }">
              Elecciones Estatales de la <label style="color:#B283B9">Ciudad de México</label> 
            </label> 
        </p>
    </div> -->
    <!-- Icono de la elección-->
    <!-- <div v-if="!isMobile() &&  eleccion.tema">
        <img  class="imagen2" src = "@/assets/logo.png" />
    </div>
    <div v-if="!isMobile() &&  !eleccion.tema">
        <img  class="imagen2" src = "@/assets/logo_blanco.png" />
    </div> -->
  <!-- </div> -->

</template>

<style scoped>
  
  .imagen{
      width: 140px;
      height: 70px;
      margin: 12px 2px 2px 45px;
      background-size: cover;
  }

  .imagen2{
      width: 130px;
      height: 50px;
      margin: 22px 45px 2px 2px;
      background-size: cover;
  }

  .black{
    text-decoration-color: white;
  }
  .white{
    text-decoration-color: black;
  }

  p, div, body {
    font-family: 'Roboto', sans-serif;
  }

</style>

<script setup>
//eleccion.tema
  import {useEleccionStore} from "../stores/eleccion_actual"
  const eleccion = useEleccionStore();
     // HELPERS
  import { isMobile } from "../helpers";
</script>