<template>
<!-- ULTIMA{{ eleccion.ultimaEleccion }}     -->
  <div>
 
      <Splash v-if="dispositivo.despliega_splash"> </Splash>

      <MainComponent :key="eleccion.mainKey" v-if="!dispositivo.despliega_splash"> </MainComponent>
      
  </div>
</template>

<script setup>
    import { nextTick, onBeforeMount, onMounted, ref } from 'vue';
     //19/feb/2024
     /*
    const dataFiltrada = ref([]);
    const dataSustitucion = ref([]);
    const muestraError = ref("");
    */

    const muestraError = ref("");
    // Pinia Store de la elección
    import {useEleccionStore} from "./stores/eleccion_actual";
    const eleccion = useEleccionStore();
    
    import '@fontsource/roboto';

    import MainComponent from './components/MainComponent.vue';

    import Splash from './components/Splash.vue';

    // para conseguir url
    ///import { getUrlPrep } from "./helpers";
    ///const urlPrep = ref(getUrlPrep());


    /////////   alert(urlPrep.value);

    //getUrlPrep
    import {useDispositivoStore} from "./stores/dispositivo.js";

    import { leeEleccion } from "./helpers";

    const dispositivo = useDispositivoStore();

    //----------------------------------------------
    // OJO!!! ESTO SE USABA EN onBeforeMount
    ////// const zeroPad = (num, places) => String(num).padStart(places, '0');

    const urbana_no_urbana = ref([]);
    // Función para obtener lo datos generales de votación antes de montar componente
    onBeforeMount(async () => {
        
        try {
/*
            const dataFiltrada = ref([]);
            const dataSustitucion = ref([]);
            const muestraError = ref("");

            eleccion.loadData = true;

            // servidor  26/Feb/2024 : http://nombreserver/prep2024/
            const urlServer = eleccion.urlPrep;
            
            const response = await fetch(urlServer+"api_avance_entidad.php?type="+(eleccion.eleccion>0? eleccion.eleccion: "1")); // Cambia la ruta al archivo JSON o API
          //alert(urlServer+"api_avance_entidad.php?type="+eleccion.eleccion);
            //http://localhost/prep2024/
            const jsonData = await response.json();

                      //15/Abril/2024
            //alert(jsonData.urbanas_nourbanas.urbanas)
            eleccion.urbanas_nourbanas = jsonData.urbanas_nourbanas;
            
            console.log(jsonData);
            // Pongo a falso la votacion_ext  //25/Nov/2023
            //eleccion.cambia_votacion_ext(false);

            eleccion.corte = jsonData.corte ? jsonData.corte: [];

            // Conteos generales para mostrar en la APLICACIÓN
            // ---- AVANCES
            eleccion.avance_jg = jsonData.avance_jg.length>0? jsonData.avance_jg[0]: [];
            eleccion.avance_alc = jsonData.avance_alc.length>0? jsonData.avance_alc[0]: [];
            eleccion.avance_dmr = jsonData.avance_dmr.length>0? jsonData.avance_dmr[0]: [];
            eleccion.avance_rp = jsonData.avance_dmr.length>0? jsonData.avance_rp[0]: [];

            // ---- Esperadas   19/Marzo/2024
            eleccion.esperadas_jg = jsonData.esperadas_jg.length>0? jsonData.esperadas_jg[0]: [];
            eleccion.esperadas_alc = jsonData.esperadas_alc.length>0? jsonData.esperadas_alc[0]: [];
            eleccion.esperadas_dmr = jsonData.esperadas_dmr.length>0? jsonData.esperadas_dmr[0]: [];
            eleccion.esperadas_rp = jsonData.esperadas_rp.length>0? jsonData.esperadas_rp[0]: [];
            
            // ---- Esperadas   19/Marzo/2024
            eleccion.capturadas_jg = jsonData.capturadas_jg.length>0? jsonData.capturadas_jg[0]: [];
            eleccion.capturadas_alc = jsonData.capturadas_alc.length>0? jsonData.capturadas_alc[0]: [];
            eleccion.capturadas_dmr = jsonData.capturadas_dmr.length>0? jsonData.capturadas_dmr[0]: [];
            eleccion.capturadas_rp = jsonData.capturadas_rp.length>0? jsonData.capturadas_rp[0]: [];
            
            // ------Computadas  12/Abril/2024
            eleccion.computadas_jg = jsonData.computadas_jg.length>0? jsonData.computadas_jg[0]: [];
            eleccion.computadas_alc = jsonData.computadas_alc.length>0? jsonData.computadas_alc[0]: [];
            eleccion.computadas_dmr = jsonData.computadas_dmr.length>0? jsonData.computadas_dmr[0]: [];
            eleccion.computadas_rp = jsonData.computadas_rp.length>0? jsonData.computadas_rp[0]: [];
            
            // ----- VOTOS X ENTIDAD
            eleccion.votos_del_jg = jsonData.votos_del_jg.length>0?  jsonData.votos_del_jg:[];
            eleccion.votos_del_alc = jsonData.votos_del_alc.length>0? jsonData.votos_del_alc: [];
            eleccion.votos_dto_dmr = jsonData.votos_dto_dmr.length>0? jsonData.votos_dto_dmr: [];
            eleccion.votos_dto_rpe = jsonData.votos_dto_rpe.length>0? jsonData.votos_dto_rpe: [];
            // ----- Ranking Ganadores
            const rankJG = jsonData.rank_dto_jg.length>0? jsonData.rank_dto_jg:[];
            const rankDMR = jsonData.rank_dto_dmr.length>0? jsonData.rank_dto_dmr:[];
            //     const rankRP = jsonData.rank_dto_rp.length>0? jsonData.rank_dto_rp:[];
            const rankALC = jsonData.rank_del_alc.length>0? jsonData.rank_del_alc:[];

            // resumen
            eleccion.resumen_jg = jsonData.resumen_jg? jsonData.resumen_jg:[];
            eleccion.resumen_dmr = jsonData.resumen_dmr? jsonData.resumen_dmr:[];
            eleccion.resumen_rp = jsonData.resumen_rpe? jsonData.resumen_rpe:[];
            eleccion.resumen_alc = jsonData.resumen_alc? jsonData.resumen_alc:[];
            
            // Campos a usar x dto/del
            eleccion.fields_vote_jg = jsonData.fields_vote_jg? jsonData.fields_vote_jg:[];
            eleccion.fields_vote_mr = jsonData.fields_vote_mr? jsonData.fields_vote_mr:[];
            eleccion.fields_vote_rp = jsonData.fields_vote_rp? jsonData.fields_vote_rp:[];
            eleccion.fields_vote_alc = jsonData.fields_vote_alc? jsonData.fields_vote_alc:[];
            
            // 21/feb/2024
            eleccion.win_alc_alc = jsonData.win_alc_alc? jsonData.win_alc_alc:[];
            eleccion.win_dto_dmr = jsonData.win_dto_dmr? jsonData.win_dto_dmr:[];

            //13/Marzo/2023
            // Datos para gráficas generales y carrusel
            eleccion.votos_del_jg_total = jsonData.votos_del_jg_total? jsonData.votos_del_jg_total:[];
            eleccion.votos_dto_dmr_total = jsonData.votos_dto_dmr_total? jsonData.votos_dto_dmr_total:[];
            eleccion.votos_dto_rpe_total = jsonData.votos_dto_rpe_total? jsonData.votos_dto_rpe_total:[];
            eleccion.votos_del_alc_total = jsonData.votos_del_alc_total? jsonData.votos_del_alc_total:[];
            
            //22/Marzo/2023
            // Datos para gráficas total extranjero
            eleccion.votos_extranjero_jg_total = jsonData.votos_extranjero_jg_total? jsonData.votos_extranjero_jg_total:[];
            eleccion.votos_extranjero_dmr_total = jsonData.votos_extranjero_dmr_total? jsonData.votos_extranjero_dmr_total:[];
            eleccion.votos_extranjero_rpe_total = jsonData.votos_extranjero_rpe_total? jsonData.votos_extranjero_rpe_total:[];
            eleccion.votos_extranjero_alc_total = jsonData.votos_extranjero_alc_total? jsonData.votos_extranjero_alc_total:[];
            
            //13/abril/2024

            if(urlServer.includes('prep2024.')){
              eleccion.hostactas = jsonData.hosts[0].hostactas;
            }
            else{
              eleccion.hostactas = jsonData.hosts[0].hostactasext;
            }
            //  eleccion.hostactas = jsonData.hosts[0].hostactas;
            

            // alert(eleccion.hostactas)
            
            // AQUI DEFINIR COLORES DE MAPA
            const colores = [
              '#00579c',   //votos_part_1
              'blue',      //votos_part_2
              'green',    //votos_part_3
              '#87c344',    //votos_part_4
              '#ee3d44',    //votos_part_5
              '#fd8204',    //votos_part_6
              '#a53421',    //votos_part_7
              '#e6057e' ,   //votos_part_8
              '#722f8b',    //votos_part_9
              'silver',    //votos_part_10
              'silver',    //votos_part_11
              'silver',     //votos_part_12
              'silver',     //votos_part_13
              'silver',     //votos_part_14
              'gray',       //votos_part_15
              'gray',       //votos_part_16
              'gray',       //votos_part_17
              'gray', 
              'gray', 
              'gray', 
              'gray', 
              'gray', 
              'gray', 
              'gray', 
              'gray', 
              'gray', 
              'gray', 
              'gray', 
              'navy', 'gray', 'gray', 'gray', 'gray', 'gray', 'gray', 'brown', 'gray', 'gray', 'gray', 'gray']
            // Cargo datos necesarios a Rank DMR /resumen DMR
            let tmp = [];
            for (let index = 0; index < rankJG.length; index++) {
              tmp.push([rankJG[index].item, rankJG[index].number, "#"+Math.floor(Math.random()*16777215).toString(16) ,  rankJG[index].id_participante +'.jpg' ]);
            }
            eleccion.rank_dto_jg =  tmp;


            // Cargo datos necesarios a Rank DMR
            tmp = [];
            for (let index = 0; index < rankDMR.length; index++) {
              const ipar = parseInt(rankDMR[index].id_participante);
              tmp.push([rankDMR[index].item, rankDMR[index].number, colores[ipar] ,  rankDMR[index].id_participante +'.jpg' ]);
            }
            eleccion.rank_dto_dmr =  tmp; //jsonData.rank_dto_dmr.length>0? jsonData.rank_dto_dmr:[];
         
            // Cargo datos necesarios a Rank ALC
            tmp = [];
            for (let index = 0; index < rankALC.length; index++) {
              const ipar = parseInt(rankALC[index].id_participante);
              tmp.push([zeroPad(rankALC[index].item, 3), rankALC[index].number, colores[ipar] ,  rankALC[index].id_participante +'.jpg' ]);
            }
            eleccion.rank_del_alc =  tmp;
    
           // console.log("LONGITUD rank_dto_dmr: ", eleccion.rank_dto_dmr.length);
           // console.log("Avance 1: ", eleccion.avance_alc);
  
            // quito Sppiner
            if( eleccion.eleccion ==0 )  {
                eleccion.eleccion = 1;
                $router.push({ name: 'home' });
                //router.push({ name: 'home' });
            }

            eleccion.loadData = false;

            //-------------------------------------------------
            // 19/Feb/2024
            // Con este código obtenco los valores de determinada Alcaldia o DTO
            dataFiltrada.value =  filtrarPorDelegacion(eleccion.fields_vote_alc, 2);
            dataSustitucion.value =  filtrarPorDelegacion(eleccion.votos_del_alc, 2);
            // Agregar el campo "valor" a cada objeto en dataFiltrada
            dataFiltrada.value.forEach(item => {
            const correspondiente = dataSustitucion.value.find(sustitucion => sustitucion.id_delegacion === item.id_delegacion);
                if (correspondiente) {
                  item.valor = correspondiente[item.campo_votos];
                }
            });

            
            await nextTick();
              ///const urlPrep = ref(getUrlPrep());

            ///alert(eleccion.urlPrep);

            */
            
            await leeEleccion(1);
            await nextTick();

        } catch (error) {
            eleccion.loadData = false;
            console.error('Error al cargar los datos:', error);
            
            muestraError.value = error;
            // No hay xampp :   TypeError: Failed to fetch
        }
        
    });



</script>

<style>
    @import url("https://fonts.googleapis.com/css?family=Roboto+Condensed");

    html, body {
      font-family: 'Roboto', sans-serif;
    }

    #app {
      font-family: 'Roboto', sans-serif;
    }

    p, div, a, h1, h2, h3, h4, h5, tag {
      font-family: 'Roboto', sans-serif;
    }

</style>