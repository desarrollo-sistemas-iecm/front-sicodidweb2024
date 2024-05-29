<template>
  <!-- 
  **********************************
    TEXTO DESCRIPTIVO Y BOTONES DE
    CAMBIO DE GRAFICA A TARJETA
  **********************************
  -->
  
  <a-row>
      <a-col>
        <h2 :style="{color: eleccion.tema? '#23233e': 'white'}">
          {{ eleccion.eleccion==1? 'Jefatura de Gobierno - ':''}}
          {{ eleccion.eleccion==2? 'Diputaciones - ':''}}
          {{ eleccion.eleccion==4? 'Alcaldía - ':''}}
         <label style="font-weight: bold; color:#674080"> Entidad</label> - 
         <!--
          <label style="color:#d1308a">Votos por {{ paramID==4? 'Alcaldía': 'Distrito'}}</label>
         -->
         <label style="color:#674080">Votos por Partido Político y Candidatura sin Partido</label>
          
        </h2>
        
        <h3 style="color:#23233e; font-weight: bolder; margin-bottom: 20px;">
          Ciudad de México
        </h3>
      </a-col>
  </a-row>
  <a-row :gutter="{ xs: 8, sm: 16, md: 24, lg: 32 }">
    <a-col >
      <div :style="{'text-align': 'justify', 'margin-bottom': '15px', color: eleccion.tema ? 'black' : 'white'}">
        El total de votos calculado y porcentaje que se muestran, se refieren a los votos asentados en las Actas hasta el momento.
        Por presentación, los decimales de los porcentajes muestran sólo cuatro dígitos. No obstante, al considerar todos los decimales, suman 100%.
        En la gráfica se muestra el número de votos que cada Partido Político o Candidatura Independiente ha obtenido hasta el momento.
      </div>
   </a-col>
   <!--
    <a-col :style="{width:'30%'}">
        <div style="text-align: end">
          <a-radio-group style="margin-bottom: 25px;" v-model:value="value2" 
          option-type="button" :options="plainOptions"  button-style="solid" />
        </div>
    </a-col>
   -->
    
  </a-row>
  <DivColor :fontsize="'18px'" :color="'#582D73'" text="Votos en Actas Contabilizadas"/>

  
  <!--       TARJETAS (CARDS)
  **********************************
    Datos en modo TARJETA
  **********************************
  -->
  <div v-if="value2=='Card'">
      <Cards :categories = "categories"></Cards>
  </div>

  <!--       CHART (Grafica)
  **********************************
    Datos en modo GRAFICA con Higthcharts
  **********************************
  -->
  <div v-if="value2=='Grafica'" >

              <div style="margin-top: 15px;">
              
                    <Chart :datos="datos" :id="paramID" :mapaJSON="paramID==4? mapas.mapaFileAlcaldias:mapas.mapaFileDistritos"></Chart>
              </div>         
  </div>
             
  <!--
    ESTOY EN {{ eleccion.eleccion }}
  -->
           
  <!--

    Apartado de RESUMEN DE VOTACIÓN
  
  -->

  <ResumenVotacion :datosResumen="datos" ></ResumenVotacion>
  
  <!--

    Apartado de RPE
  
  -->
  <RPE v-if="eleccion.eleccion==2 || eleccion.eleccion==3"></RPE>

  <VotoExtra :extranjero="true" :titulo_migrante="'Voto en el Extranjero'" :prision="true" :anticipado="true"></VotoExtra>
      
  <!--

    Apartado de ESTADISTICAS ENTIDAD
  
  -->
  <EstadisticaEntidad :datosEstadistica="datos"></EstadisticaEntidad>    

</template>

<script setup>
    import { ref, onMounted, onBeforeMount } from "vue";
    
    import Chart from "../components/Chart.vue"; 
    import ActasContabilizadas from "../components/ActasContabilizadas.vue";
    
    import Cards from "../components/Cards.vue";
    import ResumenVotacion from "../components/ResumenVotacion.vue";
    import EstadisticaEntidad from "../components/EstadisticaEntidad.vue";
    import VotoExtra from "../components/voto_extra.vue";
    
    import RPE from "../components/RPE.vue"; 

    const props = defineProps({
        datos: {
            type: Array,
            required: "true"
        },
        id: {
            type: String
        }
    });

    /*--------------------------------
    Parámetro para tipo de elección 
    ----------------------------------*/
    import { useRoute} from 'vue-router'
    const route = useRoute();
    const paramID = ref(route.params.id);

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
    
    // Función para obtener la ruta completa de una imagen
    /*

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
                ['7', 361, 'orange', '5.jpg']
        
            ]);
    
            
    //const datos = ref(paramID.value!="4"? votosDto:votosAlcaldia);
    const datos = ref(eleccion.eleccion!="4"? votosDto:votosAlcaldia);
    //Opciones
    const plainOptions = ['Grafica', 'Card'];
    const value2 = ref('Grafica');


    //-----------------------

      
    onBeforeMount(async () => {
      try {
        const urlServer = eleccion.urlPrep;
        //const response = await fetch('../../src/assets/data/actas_contabilizadas.json'); // Cambia la ruta al archivo JSON o API
        const response = await fetch(urlServer + 'actas_contabilizadas.php');
        //http://localhost/prep2024/
        let jsonData = await response.json();
        categories.value = jsonData.categories;

        // PARA LIMPIAR COMBOS CUANDO CAMBIA EN MENU PRINCIPAL 11/SEP/2023
        eleccion.combosActualesValidos("","","",eleccion.eleccion);
        if(eleccion.eleccion==1) datos.value = eleccion.resumen_jg[0];
        if(eleccion.eleccion==2) datos.value = eleccion.resumen_dmr[0];
        if(eleccion.eleccion==3) datos.value = eleccion.resumen_rp[0];
        if(eleccion.eleccion==4) datos.value = eleccion.resumen_alc[0];
        //datos.value = eleccion.resumen_dmr[0];
        
        // 25/Nov/2023
        // Cambio estado de acceso de voto extranjero/en postración o sin libertad
        eleccion.es_voto_extra = false;

        const item = eleccion.cmb1;
        const item_2 = eleccion.cmb2;
        const item_3 = eleccion.cmb3;
        const type = eleccion.eleccion;
        const  url = urlServer + "actas_resumen_data.php?type="+type+"&item="+item+"&item_2="+item_2+"&item_3="+item_3;
//alert(url);
        const responseURL = await fetch(url);
        //http://localhost/prep2024/
        jsonData = await responseURL.json();

        ///////////////// 15/Abril2024
        /// ERROR!!!!!!!
        //datos.value = await jsonData.resumen;

      } catch (error) {
        console.error('Error al cargar los datos:', error);
      }
    });   


</script>

