<template>
    <a-row>
      <!--
           <h2>
          {{ eleccion.eleccion==4? 'Alcaldías': 'Distritos'}} -
         <label style="font-weight: bold; color:#d1308a"> Votos por casilla</label> - 
         <label style="color:#d1308a">Detalle por {{ eleccion.eleccion==4? 'Alcaldía': 'Distrito'}}</label>
          
        </h2>     
      -->

        <h2 :style="{ color: eleccion.tema ? '': 'white' }">
          {{ eleccion.eleccion==1? 'Jefatura de Gobierno': ''}}
          <b>{{ eleccion.eleccion==1? '- Detalle del Distrito': ''}}</b>
          {{ eleccion.eleccion==2? 'Diputaciones': ''}}
          <b>{{ eleccion.eleccion==2? '- Detalle del Distrito': ''}}</b>
          {{ eleccion.eleccion==4? 'Alcaldías': ''}}
          <b>{{ eleccion.eleccion==4? '- Detalle de la Alcaldía': ''}}</b>
          <label style="color:#d1308a"> - Detalle por Casilla</label>
        </h2>
    </a-row>

    <MigasDePan></MigasDePan>

    <a-row :gutter="{ xs: 8, sm: 16, md: 24, lg: 32 }">
          <div :style="{'text-align': justify, margin: '15px', 'color': eleccion.tema ? 'black' : 'white'}">
            El total de votos calculado y porcentaje que se muestran, se refieren a los votos asentados en las Actas PREP hasta el momento.
            Por presentación, los decimales de los porcentajes muestran sólo cuatro dígitos. No obstante, al considerar todos los decimales, suman 100%.
            
            <br><br><h2>Votos en Actas contabilizadas</h2>
            </div>

            
    </a-row>

    <div>
        
       
          <!--
        <h1>
            Menu VOTOS X CASILLA
        </h1>
        <h2>
              Lei: {{ id  }}

            lei: {{ key }}

            ESTOY EN: {{ eleccion.eleccion }}
            <br> <br>   
            COMBOS:<br>

            cmb1: {{ eleccion.cmb1 }} <br>
            cmb2: {{ eleccion.cmb2 }} <br>
            cmb3: {{ eleccion.cmb3 }} <br>
          
            </h2>
          -->
      
    </div>
    <!--
      Apartado de Datos de Casillas 
      GridCasillas.vue
          
    -->
    <GridCasillas :titulo="Casilla"></GridCasillas>

    <GridCasillasParticipa :titulo="Casilla"></GridCasillasParticipa>

    <ObservacionesActa></ObservacionesActa>
</template>

<script setup>
    import { ref, onMounted} from "vue";
    import { priceProperty } from "../helpers";
    import { useRoute, useRouter  } from 'vue-router';
    import {useEleccionStore} from "../stores/eleccion_actual"

    import ObservacionesActa from "../components/ObservacionesActa.vue";
    import GridCasillas from "../components/GridCasillas.vue";
    import GridCasillasParticipa from "../components/GridCasillasParticipa.vue";

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
        //http://localhost/prep2024/
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
