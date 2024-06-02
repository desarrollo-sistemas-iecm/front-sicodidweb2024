<template>
  
    <!--{{ urbanas_nourbanas }}
    PARA MOSTRAR TITULO CON CUADRO DE COLOR  
    --> 
    <DivColor :fontsize="'22px'" :color="'#582D73'" text="Estadística Entidad"/>
    <a-card :headStyle="{backgroundColor: 'rgba(255, 255, 255, 0.4)', border: 0, fontSize:'20px' }"
    size="small" style="width: 100%; ">
        
        <div :style="{marginTop:'20px', padding:'5px'}" style="display: flex; flex-wrap: wrap; justify-content: space-around;">

            <!--
                GRAFICAS DE BARRAS y DATOS URBANA/NO URBANA
           
           {{ eleccion.avance_dmr }}  
            --> 
            

                <div>
                    <!--
                          {{ actas_capturadas-1 }} - {{actas_capturadas_de }} -- 
                    <br> actas_cap_porcen  {{ actas_cap_porcen }}
                    -->
                  

                    <!-- <br>  Quitado por comentarios de mucho espacio: Dai-->
                    <ChartMini 
                        :actas_capturadas="actas_capturadas" 
                        :actas_capturadas_de="actas_capturadas_de"  
                        :actas_contabilizadas="actas_contabilizadas"
                        :actas_cap_porcen = "actas_cap_porcen"

                        >
                    </ChartMini><br>
                </div>
           
        
                <div style="margin-bottom: 20px;">
                    <label>
                        <b>Actas Contabilizadas por ubicación de casilla:</b><br>
                    </label>
                    <!--
                    <a-row>
                        <a-col>
                            <img style="width:80px; justify-content: start"  src="/estadisticas/ciudad.png" alt="Urbanas">
                        </a-col>
                        <a-col span="8">
                        </a-col>
                        <a-col>
                            <img style="width:80px; justify-content: end"  src="/estadisticas/nourbanos.png" alt="No Urbanas">
                        </a-col>
                    </a-row>
                    <a-row>
                        <a-col :style="{padding:'10px', borderRadius: '6px', width: '50%', backgroundColor: '#E2488E', textAlign: 'start'}">
                            <div>
                                <label style="font-size: 18px; font-weight: bold;">22222</label><br>
                                DDDD   
                            </div>
                            
                        </a-col>

                        <a-col :style="{padding:'10px',borderRadius: '6px',width: '50%', backgroundColor: '#79144c', textAlign: 'end'}">
                            <div style="color:white">
                                <label style="font-size: 18px; font-weight: bold;">22222</label><br>
                                ZZZZ   
                            </div>
                            
                        </a-col>
                    </a-row>
                    -->
                    <a-row>
                        <a-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">

                            <!-- TODO: AQUI -->
                            <div :style="{'background-image': 'url(/sicodid2024/estadisticas/urbano_nourbano.png)', 'background-repeat': 'no-repeat round','width': '100%', 'height': '100px','background-size': '100%'}">
                                <a-row>
                                    <a-col :xs="12" :sm="12" :md="12" :lg="12" :xl="12" style="color: black; padding-top: 12%; text-align: center;">
                                        <p style="font-size: 27px;"><b>{{ urbanas_nourbanas.urbanas===undefined?0:cifrasMiles(urbanas_nourbanas.urbanas) }}</b></p>
                                        <p style="margin-top: -23%;">Urbanas</p>
                                    </a-col>
                                    <a-col :xs="12" :sm="12" :md="12" :lg="12" :xl="12" style="color: white; padding-top: 12%; text-align: center;">
                                        <p style="font-size: 27px;"><b>{{ urbanas_nourbanas.nourbanas===undefined?0:cifrasMiles(urbanas_nourbanas.nourbanas) }}</b></p>
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
                <label style="font-size: 18px; text-decoration: underline;">
                    <b>Lista Nominal</b><br>
                </label>
                
                <Gauge :ln="ln_esperada?ln_esperada:0" :ln_captura="ln>0?ln:0" style="height:300px; margin: 0 auto;"></Gauge>
               <!--
                    <label>En el gráfico no se considera la cantidad de votos asentada en las Actas PREP de Casilla Especial de Representación Proporcional.</label>
               -->
                 </div>

            <div style="width: 400px">
                <label style="font-size: 18px; text-decoration: none; font-weight: bolder;">
                    <b>Votos</b><br><br>
                </label>
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
                            {{sin_especiales}}
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
                                {{especiales}}
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
                               {{ cifrasMiles(suma_esp_s_esp) }}
                            
                            </a-col>
                        </a-row>
                    </p>
                </div>
                
            </div>
        </div>

        <ParticipacionEstadisticaEntidad></ParticipacionEstadisticaEntidad>
    </a-card>
</template>

<script setup>
    import ChartMini from './ChartMini.vue';
    import Gauge from './Gauge.vue'
    import {useEleccionStore} from "../stores/eleccion_actual"
    import ParticipacionEstadisticaEntidad from './ParticipacionEstadisticaEntidad.vue';
    import { cifrasMiles } from '../helpers'
    const eleccion = useEleccionStore();

    
    import DivColor from './DivColor.vue';
    import { onBeforeMount, nextTick, ref } from 'vue';

    const ln = ref(0);
    const ln_esperada = ref(0);

    const sin_especiales = ref('0');
    const especiales = ref('0');


    const urbanaNorbana = ref({
        urbana: '0',
        nourbana: '0'
    })

    const actas_capturadas = ref(10);
    const actas_capturadas_de= ref(0); 
    const actas_contabilizadas=ref(0);


    //-----------------------------------
    const actas_cap_porcen = ref(0);
/*
    actas_capturadas.value ="eleccion.avance_jg.actas_capturadas" 
    actas_capturadas_de.value ="eleccion.capturadas_jg.actas_capturadas_de"  
    actas_contabilizadas.value ="eleccion.avance_jg.actas_capturadas"
*/

    const urbanas_nourbanas = ref([]);

    const suma_esp_s_esp = ref(0);
    const props = defineProps({
        datosEstadistica : {
            type: Object,
            required: 'true'
        },
        urbana: {
            type: String
        },

        nourbana: {
            type: String
        },
    })

    onBeforeMount ( async  () =>  {
        if(eleccion.eleccion ==1){
            actas_capturadas.value = eleccion.avance_jg.actas_capturadas;
            actas_capturadas_de.value = eleccion.capturadas_jg.actas_capturadas_de; 
            actas_contabilizadas.value = eleccion.computadas_jg.actas_computadas?eleccion.computadas_jg.actas_computadas:0;
            actas_cap_porcen.value = eleccion.avance_alc.actas_cap_porcen?eleccion.avance_jg.actas_cap_porcen:0;
       

            if (eleccion.avance_jg) {
                ln.value=eleccion.computadas_jg.ln;
                ln_esperada.value = eleccion.avance_jg.ln;
                sin_especiales.value = eleccion.resumen_jg[0].votos_sin_especiales;
                especiales.value = eleccion.resumen_jg[0].votos_especiales;
                suma_esp_s_esp.value= eleccion.resumen_jg[0].suma_esp_s_esp;
            }
            else{
                ln.value = 0;
                ln_esperada.value=0;
                sin_especiales.value = '0';
                especiales.value == '0';
            }
        }

        if(eleccion.eleccion ==2){
            actas_capturadas.value = eleccion.avance_dmr.actas_capturadas;
            actas_capturadas_de.value = eleccion.capturadas_dmr.actas_capturadas_de; 
            actas_contabilizadas.value = eleccion.computadas_dmr.actas_computadas? eleccion.computadas_dmr.actas_computadas:0;
            actas_cap_porcen.value = eleccion.avance_dmr.actas_cap_porcen?eleccion.avance_dmr.actas_cap_porcen:0;
       
            if (eleccion.avance_dmr) {
                //ln.value=eleccion.avance_dmr.ln;
                ln.value=eleccion.computadas_dmr.ln;
                ln_esperada.value = eleccion.avance_dmr.ln;
                sin_especiales.value = eleccion.resumen_dmr[0].votos_sin_especiales!=undefined?eleccion.resumen_dmr[0].votos_sin_especiales:0;
                especiales.value = eleccion.resumen_dmr[0].votos_especiales;
                suma_esp_s_esp.value= eleccion.resumen_dmr[0].suma_esp_s_esp;
            }
            else{
                ln.value = 0;
                ln_esperada.value=0;
                sin_especiales.value = '0';
                especiales.value == '0';
            }
        }

        if(eleccion.eleccion ==3){
            actas_capturadas.value = eleccion.avance_rp.actas_capturadas;
            actas_capturadas_de.value = eleccion.capturadas_rp.actas_capturadas_de; 
            actas_contabilizadas.value = eleccion.computadas_rp.actas_computadas?eleccion.computadas_rp.actas_computadas:0;
            actas_cap_porcen.value = eleccion.avance_rp.actas_cap_porcen?eleccion.avance_rp.actas_cap_porcen:0;
       
            if (eleccion.avance_rp) {
                //ln.value=eleccion.avance_rp.ln;
                ln.value=eleccion.computadas_rp.ln;
                ln_esperada.value = eleccion.avance_rp.ln;
                sin_especiales.value = eleccion.resumen_rp[0].votos_sin_especiales;
                sin_especiales.value = eleccion.resumen_rp[0].votos_especiales;
                suma_esp_s_esp.value= eleccion.resumen_rp[0].suma_esp_s_esp;
            }
            else{
                ln.value = 0;
                ln_esperada.value=0;
                sin_especiales.value = '0';
                especiales.value == '0';
            }
        }

        if(eleccion.eleccion == 4){
            actas_capturadas.value = eleccion.avance_alc.actas_capturadas;
            //!!! OJO RESTAMOS 1 por la VT EXTRANJERO
            actas_capturadas_de.value = eleccion.capturadas_alc.actas_capturadas_de-1; 
            actas_contabilizadas.value = eleccion.computadas_alc.actas_computadas?eleccion.computadas_alc.actas_computadas:0;
            actas_cap_porcen.value = eleccion.avance_alc.actas_cap_porcen?eleccion.avance_alc.actas_cap_porcen:0;
       
            if (eleccion.avance_alc) {
                //ln.value=eleccion.avance_alc.ln;
                ln.value=eleccion.computadas_alc.ln;
                ln_esperada.value = eleccion.avance_alc.ln;
                sin_especiales.value = eleccion.resumen_alc[0].votos_sin_especiales;
                especiales.value = eleccion.resumen_alc[0].votos_especiales;
                suma_esp_s_esp.value= eleccion.resumen_alc[0].suma_esp_s_esp;
            }
            else{
                ln.value = 0;
                ln_esperada.value=0;
                sin_especiales.value = '0';
                especiales.value == '0';
            }
        }

        urbanaNorbana.value.urbana = props.urbana;
        urbanaNorbana.value.nourbana = props.nourbana;


        const item = eleccion.cmb1;
        const item_2 = eleccion.cmb2;
        const item_3 = eleccion.cmb3;
        const type = eleccion.eleccion;

        const urlServer = eleccion.urlPrep;
        
        const  url = urlServer + "test_nourbanas.php?type="+type+"&item="+item+"&item_2="+item_2+"&item_3="+item_3;
   ////alert(url)
        ///console.log(url)
        //const response = await fetch('../../src/assets/data/actas_contabilizadas.json'); // Cambia la ruta al archivo JSON o API
        const response = await fetch(url);
        const jsonData = await response.json();
        urbanas_nourbanas.value = jsonData.urbanas_nourbanas;


        await nextTick()
     });

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