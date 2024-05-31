<!--
  ActasContavilizadias.vue:

  Despliega la gráfica a base de progressbar con la votación de cada partido. 
  
  Hijo de MapView.vue
  
   {{ categories }}

--> 
<template>
    <div>

        <a-row v-for="category in regReal" 
        :key="category.id" justify="space-around" align="middle" :style="{marginTop:'20px'}"
        :gutter="{ xs: 8, sm: 16, md: 24, lg: 32 }"
        >

                <a-col :span="20" class="gutter-row">
                      <div v-bind:style="{borderRadius: '5px', border: category.id==maxReal? '3px solid #B283B9':''}" style="display: flex; flex-wrap: wrap; justify-content: left; padding: 5px; ">
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
  import {useEleccionStore} from "../stores/eleccion_actual"
  import { ref, onBeforeMount, nextTick } from "vue";

  const regDip = ref([
        {
          "id": 1, 
          "name": "PAN", 
          "color": "gray", 
          "valor": 0, 
          "porcentaje": 0, 
          "icono": 1, "ganadas": 0 
          },
          {
          "id": 2, 
          "name": "PRI", 
          "color": "gray", 
          "valor": 0, 
          "porcentaje": 0, 
          "icono": 2, "ganadas": 0 
          },
          {
          "id": 3, 
          "name": "PRD", 
          "color": "gray", 
          "valor": 0, 
          "porcentaje": 0, 
          "icono": 3, "ganadas": 0 
          },
          {
          "id": 4, 
          "name": "PVEM", 
          "color": "gray", 
          "valor": 0, 
          "porcentaje": 0, 
          "icono": 4, "ganadas": 0 
          },
          {
          "id": 5, 
          "name": "PT", 
          "color": "gray", 
          "valor": 0, 
          "porcentaje": 0, 
          "icono": 5, "ganadas": 0 
          },
          {
          "id": 6, 
          "name": "MC", 
          "color": "gray", 
          "valor": 0, 
          "porcentaje": 0, 
          "icono": 6, "ganadas": 0 
          },
          {
          "id": 7, 
          "name": "MORENA", 
          "color": "gray", 
          "valor": 0, 
          "porcentaje": 0, 
          "icono": 7, "ganadas": 0 
          },
          {
          "id": 8, 
          "name": "EBM", 
          "color": "gray", 
          "valor": 0, 
          "porcentaje": 0, 
          "icono": 9, "ganadas": 0 
          },
          {
          "id": 10, 
          "name": "PAN-PRI-PRD", 
          "color": "gray", 
          "valor": 0, 
          "porcentaje": 0, 
          "icono": 10, "ganadas": 0 
          },
          {
          "id": 14, 
          "name": "PVEM-PT-MORENA", 
          "color": "gray", 
          "valor": 0, 
          "porcentaje": 0, 
          "icono": 14, "ganadas": 0 
          },
      ]);
  const regAlc  = ref([
        {
          "id": 4, 
          "name": "PVEM", 
          "color": "gray",  
          "valor": 0, 
          "porcentaje": 0, 
          "icono": 4, "ganadas": 0 
          },
          {
          "id": 5, 
          "name": "PT", 
          "color": "gray",  
          "valor": 0, 
          "porcentaje": 0, 
          "icono": 5, "ganadas": 0 
          },
          {
          "id": 6, 
          "name": "MC", 
          "color": "gray",  
          "valor": 0, 
          "porcentaje": 0, 
          "icono": 6, "ganadas": 0 
          },
          {
          "id": 7, 
          "name": "MORENA", 
          "color": "gray", 
          "valor": 0, 
          "porcentaje": 0, 
          "icono": 7, "ganadas": 0 
          },
          {
          "id": 9, 
          "name": "JRAA", 
          "color": "gray",  
          "valor": 0, 
          "porcentaje": 0, 
          "icono": 9, "ganadas": 0 
          },
          {
          "id": 10, 
          "name": "PAN-PRI-PRD", 
          "color": "gray", 
          "valor": 0, 
          "porcentaje": 0, 
          "icono": 10, "ganadas": 0 
          },
          {
          "id": 14, 
          "name": "PVEM-PT-MORENA", 
          "color": "gray", 
          "valor": 0, 
          "porcentaje": 0, 
          "icono": 14, "ganadas": 0 
          },
      ]);
  
  const regReal = ref([]);
  const maxReal = ref(-1);    

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

  function llenaArrays(){
      maxReal.value=-1;

      if(eleccion.eleccion==2){
         // Actualización de regDip con los valores de categories
            regDip.value = regDip.value.map(item => {
                const category = prop.categories.find(cat => cat.id === item.id);
                if (category) {
                    return { ...item, ...category };
                }
                return item;
            });

            regReal.value = regDip.value;

            maxReal.value = findMaxValueItem(regDip.value);
      }
      if(eleccion.eleccion==4){
        regAlc.value = regAlc.value.map(item => {
                const category = prop.categories.find(cat => cat.id === item.id);
                if (category) {
                    return { ...item, ...category };
                }
                return item;
            });
         regReal.value = regAlc.value;
         maxReal.value = findMaxValueItem(regAlc.value);
      }    

  };

  
function findMaxValueItem(items) {
    let maxId = -1;
    let maxValue = -1;
    let countMaxValue = 0;

    items.forEach(item => {
        if (item.valor > maxValue) {
            maxValue = item.valor;
            maxId = item.id;
            countMaxValue = 1;
        } else if (item.valor === maxValue) {
            countMaxValue++;
        }
    });

    if (maxValue === 0 || countMaxValue > 1) {
        return -1;
    }

    return maxId;
}

  onBeforeMount(async () => {
      try {
        
        llenaArrays();

      } catch (error) {
        console.error('Error al cargar los datos:', error);
      }
    });  
  </script>

<style setup>

</style>