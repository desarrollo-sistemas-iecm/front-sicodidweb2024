<template>
    <!--
    PARA MOSTRAR TITULO CON CUADRO DE COLOR  
    --> 
<!--
    {{ props.datosEstadistica.avance[0].actas_capturadas     }}
-->
    
<!--
    {{ eleccion.estadisticaCategoria.avance }}
-->
    
    <br>
    <DivColor v-if="eleccion.eleccion!=4" :fontsize="'22px'" :color="'#582D73'" text="Estadística Distrital"/>
    <DivColor v-if="eleccion.eleccion==4" :fontsize="'22px'" :color="'#582D73'" text="Estadística Alcaldía"/>
    <a-card :headStyle="{backgroundColor: 'rgba(255, 255, 255, 0.4)', border: 0 }"
    size="small" style="width: 100%; background-color: white;">
        <div :style="{marginTop:'20px', padding:'5px'}" style="display: flex; flex-wrap: wrap; justify-content: space-around;">

            <!--
                GRAFICAS DE BARRAS y DATOS URBANA/NO URBANA
            -->     
            
                <div>
                    <ChartMiniCategoria :key="eleccion.type+2"
                        :actas_capturadas= parseInt(eleccion.avance?eleccion.avance:0)  
                        :actas_capturadas_de= parseInt(eleccion.capturadas?eleccion.capturadas:0)
                        :actas_contabilizadas = parseInt(eleccion.contabilizadas?eleccion.contabilizadas:0)
                    >
                    </ChartMiniCategoria><br>
                </div>
           
        
                <div style="margin-bottom: 20px;">
                    <label>
                        <b>Actas Contabilizadas por ubicación de casilla:</b><br>
                    </label>

                    <a-row>
                        <a-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                            <div :style="{'background-image': 'url(/prep2024/estadisticas/urbano_nourbano.png)', 'background-repeat': 'no-repeat round','width': '100%', 'height': '100px','background-size': '100%'}">
                                <a-row>
                                    <a-col :xs="12" :sm="12" :md="12" :lg="12" :xl="12" style="color: black; padding-top: 12%; text-align: center;">
                                        <p style="font-size: 27px;"><b>{{ cifrasMiles(urbanaNorbana.urbana) }}</b></p>
                                        <p style="margin-top: -23%;">Urbanas</p>
                                    </a-col>
                                    <a-col :xs="12" :sm="12" :md="12" :lg="12" :xl="12" style="color: white; padding-top: 12%; text-align: center;">
                                        <p style="font-size: 27px;"><b>{{ cifrasMiles(urbanaNorbana.nourbana) }}</b></p>
                                        <p style="margin-top: -23%;">No urbanas</p>
                                    </a-col>
                                </a-row>
                                <!-- <img style="width:280px; justify-content: start; margin-top: 30px;"  src="/estadisticas/urbano_nourbano.png" alt="Urbanas/nourbanas"> -->
                            </div>
                        </a-col>
                    </a-row>

                </div>
  
        </div>


        <div :style="{marginTop:'20px', padding:'5px'}" style="display: flex; flex-wrap: wrap; justify-content: space-around;">
            <!--
                GRAFICAS DE GAUGE y DATOS URBANA/NO URBANA
            -->    
            <div style="width: 400px">
                    <label>
                    <b>Lista Nominal</b><br>
                </label>

                <Gauge :key="eleccion.type+3" :ln='eleccion.lista_nominal' :ln_captura="eleccion.lista_nominal_contabilizadas"  style="height:300px; margin: 0 auto;"></Gauge>
                <label>En el gráfico no se considera la cantidad de votos asentada en las Actas PREP de Casilla Especial de Representación Proporcional.</label>
            </div>

            <div style="width: 400px">
                <div style="margin-bottom: 5px; border-style: dashed; padding: 10px;">
                    <a-row>
                        <a-col :span="2" >
                                <div class="circle">A</div>
                        </a-col>
                        <a-col :span="10" >
                            Votos en Casillas Básicas,
                            Contiguas y Extraordinarias 
                            y Mesas de Escrutinio
                        </a-col>
                        <a-col :span="12" style="text-align: end; font-weight: bold; font-size: 2em;">
   
                            {{ eleccion.sin_especiales }}
                        </a-col>
                    </a-row>
                </div>
                <div>
                    <p style="opacity: 0.5; background-color:silver; margin-bottom: 0px;">
                        <a-row>
                            <a-col :span="2" style="padding-left:5px ; padding-top: 5px;">
                                <div class="circle">B</div>
                            </a-col>
                            <a-col :span="10" >
                                Votos en Casillas Especiales MR
                            </a-col>
                            <a-col :span="2" style="font-size: 22px;" >
                                +
                            </a-col>
                            <a-col :span="10" style="text-align: end; font-weight: bold; font-size: 20px;">
                                {{ eleccion.especiales }}
                            </a-col>
                        </a-row>
                    </p>
                    <hr :style="{opacity: '1',color:'black'}">
                    <p style="opacity: 0.5;background-color:silver; margin-top: 0px;">
                        <a-row>
                            <a-col :span="2"  style="opacity: 0;background-color:silver; margin-top: 0px;">
                                X
                            </a-col>
                            <a-col :span="10" style="font-size: 18px;">
                                Total de Votos
                            </a-col>
                            <a-col :span="2" style="font-size: 22px;">
                                =
                            </a-col>
                            <a-col :span="8" style="text-align: end; font-weight: bold; font-size: 20px;">
                                {{eleccion.suma_esp_sinesp}}

                            </a-col>
                        </a-row>
                    </p>
                </div>
                
            </div>
        </div>


        <ParticipacionEstadistica></ParticipacionEstadistica>
    </a-card>
</template>

<script setup>
    import { ref, onMounted, onBeforeMount, provide, nextTick} from "vue";
    import ChartMiniCategoria from './ChartMiniCategoria.vue';
    import Gauge from './Gauge.vue'
    import {useEleccionStore} from "../stores/eleccion_actual"
    import ParticipacionEstadistica from './ParticipacionEstadistica.vue';
    import { cifrasMiles } from '../helpers'

    import DivColor from './DivColor.vue';
 

    const eleccion = useEleccionStore();

    const dataCate = ref([]);
    const data = ref([]);

    const urbanaNorbana = ref({
        urbana: '0',
        nourbana: '0'
    })

    const props = defineProps({
        datosEstadistica : {
            type: Object,
            required: 'true'
        }
    })

    onBeforeMount(async () => {
        // Pongo a falso la votacion_ext  //25/Nov/2023
        //eleccion.cambia_votacion_ext(false);
        const item = eleccion.cmb1;
        const item_2 = eleccion.cmb2;
        const item_3 = eleccion.cmb3;
        const type = eleccion.eleccion;
        const urlServer = eleccion.urlPrep;
        const  urlCate = urlServer + "funciones_estadistica.php?type="+type+"&item="+item;
                
//alert(urlCate)
        const responseCate = await fetch(urlCate);
        //http://localhost/prep2024/
        dataCate.value = await responseCate.json();
        eleccion.estadisticaCategoria = dataCate.value;
        
        //if (eleccion.estadisticaCategoria.avance) {
            eleccion.avance = eleccion.estadisticaCategoria.avance[0]? eleccion.estadisticaCategoria.avance[0].actas_capturadas:0;
            eleccion.capturadas = eleccion.estadisticaCategoria.avance[0]? eleccion.estadisticaCategoria.avance[0].actas_capturadas_de : 0;
            eleccion.resumen = 777;
            eleccion.contabilizadas = eleccion.estadisticaCategoria.avance[0]? eleccion.estadisticaCategoria.avance[0].contabilizadas : 0;
            eleccion.lista_nominal = eleccion.estadisticaCategoria.avance[0]? eleccion.estadisticaCategoria.avance[0].ln : 0;
            
            
            ////  ---- lista_nominal_contabilizadas
            eleccion.lista_nominal_contabilizadas= eleccion.estadisticaCategoria.avance[0]? eleccion.estadisticaCategoria.avance[0].ln_contabilizadas : 0;
            eleccion.especiales = eleccion.estadisticaCategoria.resumen[0]?  eleccion.estadisticaCategoria.resumen[0].voto_especiales : 0;
            eleccion.sin_especiales = eleccion.estadisticaCategoria.resumen[0]? eleccion.estadisticaCategoria.resumen[0].voto_sin_especiales : 0;
            eleccion.suma_esp_sinesp = eleccion.estadisticaCategoria.resumen[0]?eleccion.estadisticaCategoria.resumen[0].suma_esp_sinesp : 0;
            eleccion.participacion = eleccion.estadisticaCategoria.avance[0]? eleccion.estadisticaCategoria.avance[0].participacion_porcen : 0;
        //}

        urbanaNorbana.value.urbana = eleccion.estadisticaCategoria.urbanas_nourbanas[0]? eleccion.estadisticaCategoria.urbanas_nourbanas[0].urbanas: 0;
        urbanaNorbana.value.nourbana = eleccion.estadisticaCategoria.urbanas_nourbanas[0]? eleccion.estadisticaCategoria.urbanas_nourbanas[0].nourbanas: 0;
        
    })


    //console.log("Datos en Estadistica: " ,props.datosEstadistica);
</script>

<style>
.circle {
    border-radius: 50%;
    width: 20px;
    height: 20px;
    padding: 3px;
    background: #582D73;
    border: 1px solid #000;
    color: #fff;
    text-align: center;
    font: 12px Arial, sans-serif;
  }

  .circle_tiny {
    border-radius: 50%;
    width: 12px;
    height: 12px;
    padding: 1px;
    background: #582D73;
    border: 1px solid #000;
    color: #fff;
    text-align: center;
    font: 8px Arial, sans-serif;
  }
</style>