<template>
  <a-row>
    <!--
 {{ eleccion.eleccion }}     
    -->

      <h2>
        <label v-if="eleccion.eleccion==1">Jefatura de Gobierno</label>
        <label v-if="eleccion.eleccion==2">Diputaciones</label>
        <label v-if="eleccion.eleccion==4">Alcaldías</label>
        -
      <label style="font-weight: bold; color:#d1308a"> Voto en Prisión Preventiva</label> 
      </h2>
      
  </a-row>
  <HeaderAnticipadoYPrision></HeaderAnticipadoYPrision>

  <Vue3CarouselAnticipado tipo="P"> </Vue3CarouselAnticipado>
  
  <!--
    Apartado de Datos de Casillas 
    GridCasillas.vue
        
  -->
  <GridCasillasPrision titulo="en Prisión Preventiva" tipo="P" ></GridCasillasPrision>

  <GridCasillasParticipaPrision titulo="en Prisión Preventiva" tipo="P" v-if="eleccion.cmb1 != ''"></GridCasillasParticipaPrision>

  <!-- <ObservacionesActa v-if="eleccion.cmb1 != ''"></ObservacionesActa> -->
</template>

<script setup>
  import { ref, onMounted} from "vue";
  import { priceProperty } from "../helpers";
  import { useRoute, useRouter  } from 'vue-router';
  import {useEleccionStore} from "../stores/eleccion_actual"
  import HeaderAnticipadoYPrision from "../components/HeaderAnticipadoYPrision.vue";
  
  import ObservacionesActa from "../components/ObservacionesActa.vue";
  import GridCasillasPrision from "../components/GridCasillasPrision.vue";
  import GridCasillasParticipaPrision from "../components/GridCasillasParticipaPrision.vue";
import Vue3CarouselAnticipado from "../components/Vue3CarouselAnticipado.vue";
  
  // PARA ACTAS CONTABILIZADAS:
  const categories = ref([]);

  const eleccion = useEleccionStore();

  const route = useRoute();  
  const router = useRouter();
  const id = route.params.id;
  const key = route.query.key;

  const props = defineProps({
      key: String, // Propiedad para forzar la actualización
  });

  // Función para obtener la ruta completa de una imagen
  onMounted(async () => {
    try {
      //const response = await fetch('../../src/assets/data/actas_contabilizadas.json'); // Cambia la ruta al archivo JSON o API
      const urlServer = eleccion.urlPrep;
      const response = await fetch(urlServer+'actas_contabilizadas.php');
      const jsonData = await response.json();
      categories.value = jsonData.categories;

      // PARA LIMPIAR COMBOS CUANDO CAMBIA EN MENU PRINCIPAL 11/SEP/2023
     ////// eleccion.combosActualesValidos("","","",paramID.value);

      // Pongo a falso la votacion_ext  //25/Nov/2023
      //eleccion.cambia_votacion_ext(false);

    } catch (error) {
      console.error('Error al cargar los datos:', error);
    }
  });
</script>
