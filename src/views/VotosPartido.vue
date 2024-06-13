<template>
  <a-row>
<!--
 <h2>
          {{ eleccion.eleccion==4? 'Alcaldías': 'Distritos'}} -
          <label style="font-weight: bold; color:#d1308a"> Votos por partido</label> - 
          <label style="color:#d1308a">Detalle por {{ eleccion.eleccion==4? 'Alcaldía': 'Distrito'}}</label>
          
      </h2>
-->
    <h2 :style="{ color: eleccion.tema ? '': 'white' }">
      {{ eleccion.eleccion==1? 'Jefatura de Gobierno': ''}}
      {{ eleccion.eleccion==2? 'Diputaciones': ''}}
      {{ eleccion.eleccion==4? 'Alcaldías': ''}}
      <label style="color:#d1308a"> <b>Detalle del Distrito</b> - Votos por Partido Político y Candidatura Independiente</label>
    </h2>
      
  </a-row>

  <MigasDePan></MigasDePan>
  
  <a-row :gutter="{ xs: 8, sm: 16, md: 24, lg: 32 }">
    <div :style="{'text-align': justify, margin: '15px', 'color': eleccion.tema ? 'black' : 'white'}">
      <!-- TODO: aqui -->
      El total de votos calculado y porcentaje que se muestra, se refieren a los votos asentados en las Actas de casillas básicas, contiguas y extraordinarias{{ eleccion.eleccion == 2 || eleccion.eleccion == 3 ? ', más las actas de representación proporcional de las casillas especiales' : '' }}.
          Por presentación, los decimales de los porcentajes muestran sólo cuatro dígitos. No obstante, al considerar todos los decimales, suman 100%.
      </div>
  </a-row>
  <div>

<!--
        <h1>
          Menu VOTOS X PARTIDO
      </h1>
      <a-card hoverable style="width: 150px">
          <template  #actions>
            <setting-outlined key="setting" />
            <edit-outlined key="edit" />
            <ellipsis-outlined key="ellipsis" />
          </template>
          <a-card-meta title="PRI" description="Partido Revolucionario Institucional">

              <template #avatar>
              <a-avatar src="/partidos/1.jpg" />
              </template> 


          </a-card-meta>
        </a-card>

      <h2>
          Lei: {{ id  }}

          lei: {{ key }}

          ESTOY EN: {{ eleccion.eleccion }}
          <br> <br>   
          COMBOS:<br>

          cmb1: {{ eleccion.cmb1 }} <br>
          cmb2: {{ eleccion.cmb2 }} <br>

      </h2>
-->

  </div>
<!--       TARJETAS (CARDS)
  **********************************
      Datos en modo TARJETA
  **********************************
  -->
  <div :style="{'text-align': 'justify', 'margin': '15px', 'background-color': eleccion.tema ? '#ffffff': '#1d1d1d'}">
    <!--
      Apartado de Tarjetas de Candidatos    
      <CardsPartidos :categories = "categories"></CardsPartidos>
    -->
       <!--
      PARA MOSTRAR TITULO CON CUADRO DE COLOR
  --> 
  <DivColor :color="'#582D73'" text="Votos en Actas Computadas"/>
  <!--

        <h3> <br>
    Votos en Actas Contabilizadas

  -->
  <ChartPPJG></ChartPPJG>
  <!-- Quitado por partido político es un higcharts -->
  <!-- <Vue3Carousel> </Vue3Carousel> -->

     <!--
      Apartado de RESUMEN DE VOTACIÓN     
    -->
    <ResumenVotacion :datosResumen="data" :key="data?data.votos_acumulados:0"></ResumenVotacion>

     <!--
      Apartado de Distribución de votos
    -->
    <DistribucionCategoriaPartido v-if="eleccion.eleccion == 1" :tipo="eleccion.eleccion" :categories = "categories"></DistribucionCategoriaPartido>
    <DistribucionCategoriaPartidoDipAlc v-else :tipo="eleccion.eleccion" :categories = "categories"></DistribucionCategoriaPartidoDipAlc>

    <!--
    Apartado de Datos de Casillas 
    GridCasillas.vue
     <GridCasillas></GridCasillas>   
    -->
    <br>
    <VotoExtra :extranjero="true" :titulo_migrante="'Voto en el Extranjero'" :prision="true" :anticipado="true"></VotoExtra>
      
    <!--
      Apartado de ESTADISTICAS Categoria
    -->

    <EstadisticaCategoria> :datosEstadistica="datos"></EstadisticaCategoria>
  </div>


</template>

<script setup>
import { ref, onMounted, onBeforeMount} from "vue";
import CardsPartidos from "../components/CardsPartidos.vue";
import ResumenVotacion from "../components/ResumenVotacion.vue";
import EstadisticaCategoria from "../components/EstadisticaCategoria.vue";
import DistribucionCategoriaPartido from "../components/DistribucionCategoriaPartido.vue";
import DistribucionCategoriaPartidoDipAlc from "../components/DistribucionCategoriaPartido_dip_alc.vue";
import ChartPPJG from '../components/CharPPJG.vue'
import { priceProperty } from "../helpers";
import { useRoute, useRouter  } from 'vue-router';
import { useEleccionStore} from "../stores/eleccion_actual"

import VotoExtra from "../components/voto_extra.vue";
// DATOS DE PRUEBA
//--------------------------------------------
const votosAlcaldia = ref([
      ['002', '728', 'red', 'https://upload.wikimedia.org/wikipedia/commons/5/5c/Flag_of_Alabama.svg'],
      ['003', '710', 'blue', 'https://upload.wikimedia.org/wikipedia/commons/5/5c/Flag_of_Alabama.svg'],
      ['004', 963, 'green', 'https://upload.wikimedia.org/wikipedia/commons/5/5c/Flag_of_Alabama.svg'],
      ['005', 541, 'silver', 'https://upload.wikimedia.org/wikipedia/commons/5/5c/Flag_of_Alabama.svg'],
      ['006', 622, 'yellow', 'https://upload.wikimedia.org/wikipedia/commons/5/5c/Flag_of_Alabama.svg'],
      ['007', 361, 'orange', 'https://upload.wikimedia.org/wikipedia/commons/5/5c/Flag_of_Alabama.svg']
]);

const votosDto = ref([
    ['2', '728', 'red', '1.jpg'],
    ['3', '710', 'blue', '2.jpg'],
    ['4', 963, 'green', '3.jpg'],
    ['5', 541, 'silver', '4.jpg'],
    ['6', 622, 'yellow', '5.jpg'],
    ['7', 361, 'orange', '6.jpg']

  ]);
        
// PARA ACTAS CONTABILIZADAS:
const categories = ref([]);
const eleccion = useEleccionStore();
const data = ref([]);

const datos = ref(eleccion.eleccion!="4"? votosDto:votosAlcaldia);

const route = useRoute();  
const router = useRouter();
const id = route.params.id;
const key = route.query.key;

const props = defineProps({
    key: String, // Propiedad para forzar la actualización
});

    // Función para obtener la ruta completa de una imagen
onBeforeMount(async () => {
  try {
    //const response = await fetch('../../src/assets/data/actas_contabilizadas.json'); // Cambia la ruta al archivo JSON o API
    const urlServer = eleccion.urlPrep;
    const response = await fetch(urlServer+'actas_contabilizadas.php');
    let jsonData = await response.json();
    categories.value = jsonData.categories;

    // PARA LIMPIAR COMBOS CUANDO CAMBIA EN MENU PRINCIPAL 11/SEP/2023
    ///------------------------------------------------
    //////////OJOOOOO!!!!!  ESTABA COMENTADO
    ////eleccion.combosActualesValidos("","","",paramID.value);
    
    const item = eleccion.cmb1;
    const item_2 = eleccion.cmb2;
    const item_3 = eleccion.cmb3;
    const type = eleccion.eleccion;
    const  url = urlServer+"actas_grid_data.php?type="+type+"&item="+item+"&item_2="+item_2+"&item_3="+item_3;
    const responseURL = await fetch(url);
    jsonData = await responseURL.json();
    data.value = jsonData.resumen;

    // Pongo a falso la votacion_ext  //25/Nov/2023
    //eleccion.cambia_votacion_ext(false);
    
  } catch (error) {
    console.error('Error al cargar los datos:', error);
  }
});

</script>
