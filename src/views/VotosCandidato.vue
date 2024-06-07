<template>
  
  <a-row>

<!--         <h2>
          {{ eleccion.eleccion==4? 'Alcaldías': 'Distritos'}} -
         <label style="font-weight: bold; color:#d1308a"> Votos por candidato</label> - 
         <label style="color:#d1308a">Detalle por {{ eleccion.eleccion==4? 'Alcaldía': 'Distrito'}}</label>
          
        </h2>
-->
        <h2 :style="{ color: eleccion.tema ? '': 'white' }">
          {{ eleccion.eleccion==1? 'Jefatura de Gobierno': ''}}
          <b>{{ eleccion.eleccion==1? '- Detalle del Distrito': ''}}</b>
          {{ eleccion.eleccion==2? 'Diputaciones': ''}}
          <b>{{ eleccion.eleccion==2? '- Detalle del Distrito': ''}}</b>
          {{ eleccion.eleccion==4? 'Alcaldías': ''}}
          <b> {{ eleccion.eleccion==4? '- Detalle de la Alcaldía': ''}}</b>
          <label style="color:#d1308a"> - Votos por Candidatura</label>
        </h2>
        
  </a-row>
  <MigasDePan></MigasDePan>
  <a-row :gutter="{ xs: 8, sm: 16, md: 24, lg: 32 }">
      <div :style="{'text-align': justify, margin: '15px', color: eleccion.tema ? 'black' : 'white'}">
        <!-- TODO: aqui -->
          El total de votos calculado y porcentaje que se muestra, se refieren a los votos asentados en las Actas.
          Por presentación, los decimales de los porcentajes muestran sólo cuatro dígitos. No obstante, al considerar todos los decimales, suman 100%.
          <h3 style="margin-top: 20px;"> 
            
            <!--
                PARA MOSTRAR TITULO CON CUADRO DE COLOR
            --> 
            <DivColor :fontsize="'18px'" :color="'#582D73'" text="Votos en Actas Computadas"/>

          </h3>
      </div>
         
  </a-row>
  
  <div>
      
      <!--<h1>
          Menu VOTOS X CANDIDATO
      </h1>
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
  <div style='text-align: justify; margin: 15px; '>
      <!--
        Apartado de Tarjetas de Candidatos    
      -->

      <!--
<CardsCandidatos :categories = "categories"></CardsCandidatos>
      -->
     
      <!-- Eliminado, la distribución no aplica para este caso Dai-->
      <!-- <Vue3Carousel> </Vue3Carousel> -->
      <CarouselJG v-if="eleccion.eleccion == 1"></CarouselJG>
      <CarouselDip v-if="eleccion.eleccion == 2"></CarouselDip>
      <CarouselAlc v-if="eleccion.eleccion == 4"></CarouselAlc>
       <!--
        Apartado de RESUMEN DE VOTACIÓN     
      -->
      <ResumenVotacion :datosResumen="data" :key="data?data.votos_acumulados:0"></ResumenVotacion>

      <DistribucionCategoria v-if="eleccion.eleccion == 1"  :tipo="eleccion.eleccion" :categories = "categories"></DistribucionCategoria>
      <DistribucionCategoriaDipAlc v-else  :tipo="eleccion.eleccion" :categories = "categories"></DistribucionCategoriaDipAlc>
 
   
      <!--
        Apartado de Datos de Casillas 
        GridCasillas.vue
       <GridCasillas></GridCasillas>     
      -->
      <VotoExtra :extranjero="eleccion.eleccion == 1 ? true : false" :titulo_migrante="eleccion.eleccion == 1 ? 'Voto en el Extranjero' : 'Voto Diputado Migrante'" :prision="true" :anticipado="true"></VotoExtra>

      <!--
        Apartado de ESTADISTICAS Categoria
      -->
  
      <EstadisticaCategoria :key="eleccion.type" :datosEstadistica = "eleccion.estadisticaCategoria"></EstadisticaCategoria>
       <!--
        Apartado de Distribución de votos
      -->
  </div>
  

</template>

<script setup>
  import { ref, onMounted, onBeforeMount, provide, nextTick} from "vue";
  import CardsCandidatos from "../components/CardsCandidatos.vue";
  import ResumenVotacion from "../components/ResumenVotacion.vue";
  import EstadisticaCategoria from "../components/EstadisticaCategoria.vue";
  import DistribucionCategoria from "../components/DistribucionCategoria.vue";
  import DistribucionCategoriaDipAlc from "../components/DistribucionCategoria_dip_alc.vue";
  import CarouselJG from '../components/CarouselCardJG.vue'
  import CarouselDip from '../components/CarouselCardDip.vue'
  import CarouselAlc from '../components/CarouselCardAlc.vue'
  import VotoExtra from "../components/voto_extra.vue";
  import { priceProperty } from "../helpers";
  import { useRoute, useRouter  } from 'vue-router';
  import { useEleccionStore} from "../stores/eleccion_actual"
  
  import DivColor from "../components/DivColor.vue";
  import MigasDePan from "../components/MigasDePan.vue";
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
      const urlServer = eleccion.urlPrep;
      // alert(urlServer + 'actas_contabilizadas.php');
      const response = await fetch(urlServer + 'actas_contabilizadas.php');
      let jsonData = await response.json();
      categories.value = jsonData.categories;

      // PARA LIMPIAR COMBOS CUANDO CAMBIA EN MENU PRINCIPAL 11/SEP/2023
      // eleccion.combosActualesValidos("","","",paramID.value);
      
      const item = eleccion.cmb1;
      const item_2 = eleccion.cmb2;
      const item_3 = eleccion.cmb3;
      const type = eleccion.eleccion;
      
          
      const  url = urlServer + "actas_grid_data.php?type="+type+"&item="+item+"&item_2="+item_2+"&item_3="+item_3;
    
  ///   alert(url)
      
      const responseURL = await fetch(url);
      jsonData = await responseURL.json();
      data.value = jsonData.resumen;

      
      // Datos filtrados
      /*
      avance.value = dataCate.value.avance;
      capturadas.value = dataCate.value.capturadas;
      resumen.value = dataCate.value.resumen;
      */

      await nextTick();
      
    } catch (error) {
      console.log(error);
      console.error('Error al cargar los datos:', error);
    }
  });

</script>
