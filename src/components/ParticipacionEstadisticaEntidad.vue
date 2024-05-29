<template>
    <div>
        <a-row :gutter="{ xs: 8, sm: 16, md: 24, lg: 32 }" :style="{marginTop: '20px'}">
            <a-col :span="24">
                <div>
                   <label style="font-size: 18px;text-align: justify; font-weight: bolder; width: '100%';">
                    Fórmula | Porcentaje de Participación ciudadana
                    </label>
                    <br>
                    <label style="font-size: 10px;text-align: justify; width: '100%';">
                        Se calcula considerando: Total de votos de las Actas Contabilizadas, multiplicado por 100, dividido entre la Lista Nominal de las casillas con Actas Contabilizadas.
                    </label>
                    <div :style="{background: eleccion.tema ? '#e8e8e8' : '#2c2c2c', 'margin-top': '10px'}">
                        <center>
                            <div :style="{width: !isMobile ? '650px' : '', 'padding-top': '20px', 'margin-top': '10px'}">
                                <a-row :gutter="{ xs: 8, sm: 16, md: 24, lg: 32 }">
                                    <a-col :span="11">
                                        <div  style="text-align: right; justify-content: right; width: 100%;">

                                            <a-raw>
                                                <a-col>
                                                   
                                                    <div style="text-align: center; ">                                                        
                                                        
                                                            <a-row :gutter="{ xs: 8, sm: 16, md: 24, lg: 32 }" justify="space-between" align="bottom">
                                                                <a-col :span="14">
                                                                    <div style="text-align: left; border-style: dashed;">
                                                                        <a-space>
                                                                            <label style="color:#582D73; font-weight: bold; font-size: 12px;">Total de Votos</label><div class="circle_tiny">A</div>
                                                                        </a-space>
                                                                        <br>
                                                                        <label style="font-size: 10px; font-weight: bold;">
                                                                            Sin considerar la votación en Casillas Especiales MR
                                                                        </label>
                                                                    
                                                                        <label style="font-size: 25px; font-weight: bolder;">
                                                                            {{ sin_especiales }} 
                                                                        </label>
                                                                    </div>
                                                                </a-col>
                                                                <a-col :span="4">
                                                                    <a-space>
                                                                        <label style="color:#582D73; font-weight: bold; font-size: 12px;"> </label><div></div>
                                                                    </a-space>
                                                                    <br>
                                                                    <div>
                                                                       <label style="font-size: 25px; font-weight: bolder; color:gray">
                                                                        x   
                                                                        </label> 
                                                                    </div>
                                                                    
                                                                    
                                                                </a-col>
                                                                <a-col :span="6">
                                                                    <a-space>
                                                                        <label style="color:#582D73; font-weight: bold; font-size: 12px;"> </label><div></div>
                                                                    </a-space>
                                                                    <br>
                                                                    <label style="font-size: 25px; font-weight: bolder; color: gray">
                                                                       100 
                                                                    </label>
                                                                    
                                                                </a-col>
                                                            </a-row> 

                                                        <hr style="border: 2px solid black; opacity: .5;">
                                                        <label style="font-size: 25px; font-weight: bolder;">
                                                        
                                                            {{ cifrasMiles(ln_esperada) }}
                                                           </label>
                                                        <br>
                                                        <label style="font-size:10px; font-weight: normal;">
                                                            (Lista Nominal de las casillas con Actas Contabilizadas)
                                                        </label>
                                                         
                                                    </div>
                                                    
                                                </a-col>
                                            </a-raw>
                                        </div>
                                    </a-col>
                                    <a-col :span="2" >
                                        <div  style="display: flex;
                                            justify-content: center;
                                            align-items: center;
                                            height: 200px;">
                                            <label>=</label>
                                        </div>
                                    </a-col>
                                    <a-col :span="11" >
                                        <label style="text-decoration: underline; font-size: 18px; font-weight: bolder; color: #582D73;">
                                            Participación ciudadana <br>
                                        </label>
                                        <div  style="text-align: left;  width: 100%;">
                                            <p style="display: flex;
                                                justify-content: center;
                                                align-items: center;
                                                height: 200px;
                                                font-size: 30px; font-weight: bolder;
                                                color: #582D73;">

                                                {{ lnGrafPor }} %
                                            </p>
                                        </div>
                                    </a-col>
                                </a-row>                           
                            </div>  
                        </center>
                        
                    </div>
                   <!--
                    <p style="margin-bottom: 5px;">
                        <a-progress :percent="45" strokeColor="black" 
                                :size="[300, 20]"  :title="Grafica" :show-info="false"/>
                    </p> 
                   --> 
                  
                </div>
                
            </a-col>
            
        </a-row>
    </div>
</template>

<script setup>
import { ref, onBeforeMount} from "vue";
import { useEleccionStore} from "../stores/eleccion_actual"
import { isMobile, cifrasMiles } from "../helpers";

const eleccion = useEleccionStore();

const ln = ref(0);

const lnGrafPor = ref(0.00);
const sin_especiales = ref(0);


    const ln_esperada = ref(0);
    const especiales = ref('0');
    const suma_esp_s_esp = ref(0);

onBeforeMount ( async  () =>  {


    if(eleccion.eleccion ==1){
            if (eleccion.avance_jg) {
                ln.value=eleccion.avance_jg.ln;
                //ln_esperada.value = eleccion.esperadas_jg.ln_esperadas;
                ln_esperada.value = eleccion.computadas_jg.ln;
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
        if (eleccion.avance_dmr) {
            ln.value=eleccion.avance_dmr.ln;
            //ln_esperada.value = eleccion.esperadas_dmr.ln_esperadas;
            ln_esperada.value = eleccion.computadas_dmr.ln;
            sin_especiales.value = eleccion.resumen_dmr[0].votos_sin_especiales;
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
        if (eleccion.avance_rp) {
            ln.value=eleccion.avance_rp.ln;
            //ln_esperada.value = eleccion.esperadas_rp.ln_esperadas;
            ln_esperada.value = eleccion.computadas_rp.ln;
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
        if (eleccion.avance_alc) {
            ln.value=eleccion.avance_alc.ln;
            //ln_esperada.value = eleccion.esperadas_alc.ln_esperadas;
            ln_esperada.value = eleccion.computadas_alc.ln;
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

        if(ln_esperada.value>0)
        {
            lnGrafPor.value = (sin_especiales.value.replace(/,/g, "") * 100) / ln_esperada.value
            lnGrafPor.value =  lnGrafPor.value>100 ? '***' : lnGrafPor.value.toFixed(4);
        }


});

</script>

<style lang="css" scoped>

</style>