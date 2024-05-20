<template>
    <a-row>
        <a-col>
          <h2>
            {{ paramID==4? 'Alcaldías': 'Distritos'}} -
           <label style="font-weight: bold; color:#582D73"> Ciudad de México</label> - 
           <label style="color:#582D73">Votos por {{ paramID==4? 'Alcaldía': 'Distrito'}}</label>
            
          </h2>
          
        </a-col>
    </a-row>
    <div>
        <Gauge></Gauge>
    </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import Gauge from "../components/Gauge.vue";

/*--------------------------------
Parámetro para tipo de elección 
----------------------------------*/
import { useRoute} from 'vue-router'
const route = useRoute();
const paramID = ref(route.params.id);

/*
    STORE para compartir estado de elección
*/
import {useEleccionStore} from "../stores/eleccion_actual"
const eleccion = useEleccionStore();
eleccion.eleccionActual(paramID.value);


    //console.log("Titulo: ", mapas.titulos[2])
    // PARA ACTAS CONTABILIZADAS:
    const categories = ref([]);
    
    // Función para obtener la ruta completa de una imagen
    onMounted(async () => {
      try {
        //const response = await fetch('../../src/assets/data/actas_contabilizadas.json'); // Cambia la ruta al archivo JSON o API
        const urlServer = eleccion.urlPrep;
        const response = await fetch(urlServer + 'actas_contabilizadas.php');
        //http://localhost/prep2024/
        const jsonData = await response.json();
        categories.value = jsonData.categories;

        // PARA LIMPIAR COMBOS CUANDO CAMBIA EN MENU PRINCIPAL 11/SEP/2023
        eleccion.combosActualesValidos("","","",paramID.value);

      } catch (error) {
        console.error('Error al cargar los datos:', error);
      }
    });
</script>