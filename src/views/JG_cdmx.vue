
<!--
  JG_cdmx.vue:

  Vista que muestra la información en formato de Gráfica de JG 
  
  Hijo de App.vue (via HeaderMenuEleccion)
-->
<template>
  <!--
 eleccion {{ eleccion.eleccion }}
  
  -->

    <a-row >
        <a-col :span="24">
          <h2>
          <label :style="{color: eleccion.tema? '#23233e': 'white'}">Jefatura de Gobierno -</label>
           <label style="font-weight: bold; color:#674080"> Entidad</label> -
           <label style="color:#674080">
            Votos por Candidatura
           </label> 

          </h2>
          <h3 :style="{color: eleccion.tema? '#23233e': 'white', 'font-weight': bolder, 'margin-bottom': '20px'}">
            Ciudad de México
          </h3>
          
            <div :style="{'text-align': justify, 'margin-bottom': '25px', color: eleccion.tema? 'black': 'white'}">
              El total de votos mostrado a nivel Entidad representa la suma de la votación emitida en territorio Estatal y en el Extranjero.
              Por presentación, los decimales de los porcentajes muestran sólo cuatro dígitos. No obstante, al considerar a todos los decimales, suman 100%.            </div>
          <DivColor :fontsize="'18px'" :color="'#582D73'" text="Votos en Actas Computadas"/><br>
          <!--CHART CON LOGOS DE PERSONAS-->
          <ChartJG></ChartJG>
          
          <ResumenVotacion :datosResumen="datos" :key="datos" ></ResumenVotacion>

          <VotoExtra :extranjero="true" :titulo_migrante="'Voto en el Extranjero'" :prision="true" :anticipado="true"></VotoExtra>
          <EstadisticaEntidad :urbana="eleccion.urbanas_nourbanas? eleccion.urbanas_nourbanas.urbanas: 0" :nourbana="eleccion.urbanas_nourbanas? eleccion.urbanas_nourbanas.nourbanas:0"></EstadisticaEntidad>
          
        </a-col>
    </a-row>

</template>

<script setup>

import { ref, onMounted , onBeforeMount, nextTick} from "vue";
import ChartJG from "../components/ChartJG.vue";
import DivColor from '../components/DivColor.vue';


/*--------------------------------
Parámetro para tipo de elección 
----------------------------------*/
import { useRoute} from 'vue-router'

import PdfView from "../components/PdfView.vue";

const route = useRoute();
const paramID = ref(1);
/*
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
*/

/*
    STORE para compartir estado de elección
*/
import {useEleccionStore} from "../stores/eleccion_actual"
import ResumenVotacion from "../components/ResumenVotacion.vue";
import EstadisticaEntidad from "../components/EstadisticaEntidad.vue";
import VotoExtra from "../components/voto_extra.vue";

  const eleccion = useEleccionStore();
  eleccion.eleccionActual(1);

  // ------------------------------------------
  // QUITE LOS DATOS QUE NO USO 21/feb/2024
  //  const data = ref([]);
  // Y TAMBIEN COMENTE "datos", soló lo inicializo
  // ------------------------------------------
  const datos =  ref([])  //ref(eleccion.eleccion!="4"? votosDto:votosAlcaldia);
    
  const props = defineProps({
        key: String, // Propiedad para forzar la actualización
    });

    //console.log("Titulo: ", mapas.titulos[2])
    // PARA ACTAS CONTABILIZADAS:
    const categories = ref([]);


    // Función para obtener la ruta completa de una imagen
    
    // Función para obtener la ruta completa de una imagen
    onBeforeMount(async () => {
      try {
        // ESTA LECTURA YA NO ES NECESARIA
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

        await nextTick();
       // await nextTick()
      } catch (error) {
        console.error('Error al cargar los datos:', error);
      }
    });  


</script>