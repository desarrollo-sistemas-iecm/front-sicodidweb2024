<!--
  ActasContavilizadias.vue:

  Despliega la gráfica a base de progressbar con la votación de cada partido. 
  
  Hijo de MapView.vue
  
   {{ categories }}

--> 
<template>
    <div>

        <a-row v-for="category in categories" 
        :key="category.id" justify="space-around" align="middle" :style="{marginTop:'20px'}"
        :gutter="{ xs: 8, sm: 16, md: 24, lg: 32 }"
        >

                <a-col :span="20" class="gutter-row">
                      <div v-bind:style="{borderRadius: '5px', border: category.id==7? '3px solid #B283B9':''}" style="display: flex; flex-wrap: wrap; justify-content: left; padding: 5px; ">
                            <div style="
                                left: 389px;
                                width: 8px;
                                height: 29px;
                                text-align: left;
                                justify-content: center;
                                opacity: 1;
                                margin-right: 3px;"
                                :style="{backgroundColor: category.color}"
                                >
                                
                                
                              </div>
                  
                              <img :src="getImagePath(category.id)" alt="" style="margin-right: 40px;"> 

                              
                      </div>  
         
                  </a-col>
                  <a-col :span="4" class="gutter-row">
                        <label style="font-size: 16px; font-weight: bolder;"> {{category.ganadas}}</label>
                  </a-col>
   
                          
        </a-row>
        

    </div>
  </template>
  
  <script setup>
/*
  import { ref, onMounted } from 'vue';
  
  const categories = ref([]);
  
  // Función para obtener la ruta completa de una imagen

  onMounted(async () => {
    try {
      //const response = await fetch('../../src/assets/data/actas_contabilizadas.json'); // Cambia la ruta al archivo JSON o API
      const response = await fetch('https://aplicaciones.iecm.mx/prep2024/actas_contabilizadas.php');
      //http://localhost/prep2024/
      const jsonData = await response.json();
      categories.value = jsonData.categories;
    } catch (error) {
      console.error('Error al cargar los datos:', error);
    }
  });

*/
  import {useEleccionStore} from "../stores/eleccion_actual"
  const eleccion = useEleccionStore();
  const prop = defineProps({
    categories: {
            type: Array,
            required: "true"
    },
    tipo: {
        type: Number
    }
  });

  const getImagePath = (imageName) => {
    let ruta='';
    if(eleccion.eleccion==1){
      ruta=`${eleccion.urlPrep}partidos/${imageName}.jpg`;
    }
    else{
      ruta=`${eleccion.urlPrep}partidos_dtto/${imageName}.jpg`;
    }
    return ruta;
  };

  </script>

<style setup>

</style>