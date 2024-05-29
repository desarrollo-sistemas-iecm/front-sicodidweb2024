
<!--
  MapView.vue:

  Vista que muestra la información en formato de MAPA / CARDS 
  
  Hijo de App.vue
-->
<template>

  <!-- 
  **********************************
    TEXTO DESCRIPTIVO Y BOTONES DE
    CAMBIO DE MAPA A TARJETA
  **********************************
 -->
 <!--
    {{ eleccion.resumen_dmr }}
    {{ eleccion.resumen_alc }}
    <br><br>
    eleccion: 
    {{ eleccion.eleccion }} 
{{ eleccion.win_alc_alc }}
<br><br>
ELECCION!!!!
{{ eleccion.rank_dto_dmr }}
 -->

  <a-row>
      <a-col>
        <h2 :style="{color : eleccion.tema ? '#000000': '#ffffff'}">
          {{ paramID==4? 'Alcaldías': 'Diputaciones'}} -
         <label style="font-weight: bold; color:#582D73"> Entidad</label> - 
         <!--
          <label style="color:#582D73">Votos por {{ paramID==4? 'Alcaldía': 'Distrito'}}</label>
         -->
         <label style="color:#582D73">Votos por {{ eleccion.eleccion == 4? 'Candidaturas' : 'Distritos' }}</label>
          
        </h2>
        <h3 style="color:#23233e; font-weight: bolder; margin-bottom: 20px;">
          Ciudad de México
        </h3>
      </a-col>
  </a-row>
  <a-row :gutter="{ xs: 8, sm: 16, md: 24, lg: 32 }">
    <a-col :style="{width:'95%'}">
      <div :style="{'text-align': justify, 'margin-bottom': '25px', 'color': eleccion.tema ? 'black' : 'white'}">
        El total de votos calculado y porcentaje que se muestran, se refieren a los votos asentados en las Actas hasta el momento.
        Por presentación, los decimales de los porcentajes muestran sólo cuatro dígitos. No obstante, al considerar todos los decimales, suman 100%.
        En la tabla se muestra el número de Alcaldías que cada Partido Político, Coalición o Candidatura Independiente ha obtenido hasta el momento.
      </div>
   </a-col>
    <a-col :style="{width:'10%'}" v-show="false">
        <div style="text-align: end">
          <a-radio-group style="margin-bottom: 25px;" v-model:value="value2" 
          option-type="button" :options="plainOptions"  button-style="solid" />
        </div>
    </a-col>
  </a-row>
  
  <!--       TARJETAS (CARDS)
  **********************************
    Datos en modo TARJETA
  **********************************
  -->
  <div v-if="value2=='Card'">
      <Cards :categories = "categories"></Cards>
  </div>

  <!--       MAPA (geoJSON)
  **********************************
    Datos en modo MAPA con Higthcharts
  **********************************
  -->
  <div v-if="value2=='Mapa'" >
        <a-row :gutter="{ xs: 8, sm: 16, md: 24, lg: 32 }">
            <a-col class="gutter-row" :span="8">
                <!-- Gráfica vertical -->
                <label :style="{'font-size': '20px', 'font-weight': bolder, 'margin-bottom': '25px', color : eleccion.tema ? '#000000': '#ffffff'}">
                  {{ paramID==4? 'Alcaldías obtenidas': 'Distritos obtenidos'}} 
                </label> 

                <ActasContabilizadas :tipo="eleccion.eleccion" :categories = "categories"></ActasContabilizadas>
            </a-col>
            <a-col class="gutter-row" >
              <label :style="{'font-size': '16px', 'font-weight': bolder, 'margin-bottom': '25px', color : eleccion.tema ? '#000000': '#ffffff'}">Mapa de {{titulo}}</label> 
              
              <div :style="{'margin-top': '10px', color : eleccion.tema ? '#000000': '#ffffff'}">
               El mapa resalta {{ paramID==4? 'en las Alcaldías': 'en los Distritos'}} el Partido Político, Coalición o Candidatura <br>
              Independiente que lleva ventaja hasta el momento. <br>
              Para conocer el detalle de la {{ paramID==4? 'Alcaldía': 'Distrito'}}, pasa el cursor o da clic sobre éste. 
              </div>
              

              <!-- 
                  Mapa de Highcharts:
                  1=JG, 2=DMR, 3=DRP, 4=ALC
              -->
              <div style="margin-top: 15px;">
                    <Map :key="componentKey" :datos="data" :id="paramID" :mapaJSON="paramID==4? mapas.mapaFileAlcaldias:mapas.mapaFileDistritos"></Map>
              </div>


              <!--
               ESTOY EN {{ eleccion.eleccion }} 
              -->
              
            </a-col>
        </a-row> 
  </div>
  
  <GridCasillasVotos></GridCasillasVotos>
  <!--

    Apartado de RESUMEN DE VOTACIÓN
    
    <ResumenVotacion :datosResumen="data" :key="data?data.votos_acumulados:0"></ResumenVotacion>
  <ResumenVotacion :datosResumen="datos" ></ResumenVotacion>
  -->
  <ResumenVotacion :datosResumen="datos" :key="datos?datos.votos_acumulados:0"></ResumenVotacion>

  <VotoExtra :extranjero="paramID==2?true:false" :titulo_migrante="'Voto Diputado Migrante'" :prision="false" :anticipado="false"></VotoExtra>
         

  <!--

    Apartado de ESTADISTICAS ENTIDAD
  
  -->

  <EstadisticaEntidad :datosEstadistica="eleccion" :urbana="eleccion.urbanas_nourbanas.urbanas" :nourbana="eleccion.urbanas_nourbanas.nourbanas"></EstadisticaEntidad>
          

</template>

<script setup>
    import { ref, onMounted, onBeforeMount, nextTick } from "vue";
    
    import Map from "../components/Map.vue"; 
    import ActasContabilizadas from "../components/ActasContabilizadas.vue";
    
    import Cards from "../components/Cards.vue";
    import ResumenVotacion from "../components/ResumenVotacion.vue";
    import EstadisticaEntidad from "../components/EstadisticaEntidad.vue";
    import GridCasillasVotos from "../components/GridCasillasVotos.vue";
    import VotoExtra from "../components/voto_extra.vue";
/*
    const props = defineProps({
        id: {
          type: String,
          required: 'true'
        }
    })
*/
// Función para generar una cadena hexadecimal aleatoria
const generateRandomKey = () => {
  const array = new Uint32Array(1);
  window.crypto.getRandomValues(array);
  return array[0].toString(16);
};

const componentKey = ref(generateRandomKey());

const forceRender = () => {
  componentKey.value += 1;
};
    /*--------------------------------
    Parámetro para tipo de elección 
    ----------------------------------*/
    import { useRoute} from 'vue-router'
    const route = useRoute();
    const paramID = ref(route.params.id);


    //const redibuja = ref(0);
    /*
    ------------------------------------
    STORE DE MAPAS
    ------------------------------------
    */ 
    import {useMapStore} from "../stores/mapas"
    const mapas = useMapStore();
    const titulo = ref(mapas.titulos[paramID.value]);
    
    /*
      STORE para compartir estado de elección
    */
    import {useEleccionStore} from "../stores/eleccion_actual"
    const eleccion = useEleccionStore();
    eleccion.eleccionActual(paramID.value);
    
    //console.log("Titulo: ", mapas.titulos[2])
    // PARA ACTAS CONTABILIZADAS:
    const categories = ref([]);
    
    const votosDto = ref(eleccion.rank_dto_dmr);  // MAPA SOLO PARA 2
    const votosAlcaldia = ref(eleccion.rank_del_alc); // MAPA SOLO PARA 1

    // const data = ref(paramID.value!="4"? votosDto:votosAlcaldia);
    const data = ref(paramID.value!="4"? votosDto:votosAlcaldia);
    //eleccion
    const datos = ref([]);

    //redibuja.value = 3;
    //Opciones
    const plainOptions = ['Mapa', 'Card'];
    const value2 = ref('Mapa');

    // Función para obtener la ruta completa de una imagen
    onBeforeMount(async () => {
      try {
        // ESTA LECTURA YA NO ES NECESARIA
         //const response = await fetch('https://aplicaciones.iecm.mx/prep2024/actas_contabilizadas.php');
        //http://localhost/prep2024/
        //const jsonData = await response.json();
        //////////////////////////////////////////
        /////categories.value = jsonData.categories;

        // PARA LIMPIAR COMBOS CUANDO CAMBIA EN MENU PRINCIPAL 11/SEP/2023
        eleccion.combosActualesValidos("","","",eleccion.eleccion);
        if(eleccion.eleccion==1) datos.value = eleccion.resumen_jg[0];
        if(eleccion.eleccion==2) { 
            datos.value = eleccion.resumen_dmr[0];
            categories.value = eleccion.win_dto_dmr;
        }
        if(eleccion.eleccion==3) datos.value = eleccion.resumen_rp[0];
        if(eleccion.eleccion==4) {
            datos.value = eleccion.resumen_alc[0];
            categories.value = eleccion.win_alc_alc;
        }
        //datos.value = eleccion.resumen_dmr[0];
        
        // 25/Nov/2023
        // Cambio estado de acceso de voto extranjero/en postración o sin libertad
        eleccion.es_voto_extra = false;
        
      } catch (error) {
        console.error('Error al cargar los datos:', error);
      }
    });   
    
    //--------------------------------------------
     /*
    const votosAlcaldia = ref([
          ['002', '728', 'red', 'p1_36.png'],
          ['003', '710', 'blue', 'https://upload.wikimedia.org/wikipedia/commons/5/5c/Flag_of_Alabama.svg'],
          ['004', 963, 'green', 'https://upload.wikimedia.org/wikipedia/commons/5/5c/Flag_of_Alabama.svg'],
          ['005', 541, 'silver', 'https://upload.wikimedia.org/wikipedia/commons/5/5c/Flag_of_Alabama.svg'],
          ['006', 622, 'yellow', 'https://upload.wikimedia.org/wikipedia/commons/5/5c/Flag_of_Alabama.svg'],
          ['007', 361, 'orange', 'https://upload.wikimedia.org/wikipedia/commons/5/5c/Flag_of_Alabama.svg']
    ]);

    //const votosDto = ref(null);
   
    const votosDto = ref([
				['1', eleccion.rank_dto_dmr[0][1], 'red', 'p1.png'],
        ['2', 444, 'red', 'p1.png'],
				['3', '710', 'blue', 'p2.png'],
				['4', 963, 'green', 'p3.png'],
				['5', 541, 'silver', 'p5.png'],
				['6', 622, 'yellow', 'p4.png'],
				['7', 361, 'orange', 'p6.png']
    ]);
    
    console.log("QUE DATOS: ", eleccion.rank_dto_dmr)
     */
    
</script>

