<template>
    <a-row>

        <h2>
         Diputaciones -
        <label style="font-weight: bold; color:#582D73"> Casillas Especiales</label> 
        </h2>
        
    </a-row>
    <HeaderAnticipadoYPrision></HeaderAnticipadoYPrision>

    <Vue3Carousel tipo="2"> </Vue3Carousel>
    
    <!--
      Apartado de Datos de Casillas 
      GridCasillas.vue
          
    -->
    <GridCasillasRPE titulo="Anticipado"></GridCasillasRPE>

    <!-- <ObservacionesActa></ObservacionesActa> -->
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
        const response = await fetch(urlServer + 'actas_contabilizadas.php');
        const jsonData = await response.json();
        categories.value = jsonData.categories;

        // PARA LIMPIAR COMBOS CUANDO CAMBIA EN MENU PRINCIPAL 11/SEP/2023
        eleccion.combosActualesValidos("","","",paramID.value);

        // Pongo a falso la votacion_ext  //25/Nov/2023
        //eleccion.cambia_votacion_ext(false);

      } catch (error) {
        console.error('Error al cargar los datos:', error);
      }
    });
</script>
