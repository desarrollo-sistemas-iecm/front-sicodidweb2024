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
                            <div style="padding-top: 20px; margin-top: 10px;">
                                <a-row :gutter="{ xs: 8, sm: 16, md: 24, lg: 32 }">
                                    <a-col :xs="24" :sm="24" :md="11" :lg="11" :xl="11" >
                                        <div  style="text-align: right; justify-content: right; width: 100%;">

                                            <a-raw>
                                                <a-col>
                                                    <!--
                                                      !!!!!!!
                                                   {{eleccion.especiales}}  
                                                    -->
                                                    
                                                    <div style="text-align: center; ">                                                        
                                                        
                                                            <a-row :gutter="{ xs: 8, sm: 16, md: 24, lg: 32 }" justify="space-between" align="bottom">
                                                                <a-col :span="14">
                                                                    <div style="text-align: left; border-style: dashed;">
                                                                        <a-space>
                                                                            <label style="color:#582D73; font-weight: bold; font-size: 12px;">Total de Votos</label><div  class="circle_tiny">A</div>
                                                                        </a-space>
                                                                        <br>
                                                                        <label v-if="eleccion.especiales==0" style="font-size: 10px; font-weight: bold;">
                                                                            Sin considerar la votación en Casillas Especiales MR
                                                                        </label>
                                                                    
                                                                        <label style="font-size: 25px; font-weight: bolder;">
                                                                       <!--{{ eleccion.sin_especiales }} -->   {{ eleccion.suma_esp_sinesp }}
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
                                                           
                                                            {{ cifrasMiles(eleccion.lista_nominal_contabilizadas) }}
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
                                    <a-col :xs="2" :sm="2" :md="2" :lg="2" :xl="2"  >
                                        <div  style="display: flex;
                                            justify-content: center;
                                            align-items: center;
                                            height: 200px;">
                                            <label>=</label>
                                        </div>
                                    </a-col>
                                    <a-col :xs="22" :sm="22" :md="11" :lg="11" :xl="11" >
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
                                       <!--
                                        {{ eleccion.suma_esp_sinesp}}  {{ eleccion.lista_nominal_contabilizadas }}
                                       -->        
                                       {{ eleccion.suma_esp_sinesp && eleccion.lista_nominal_contabilizadas ? ((eleccion.suma_esp_sinesp.replace(/,/g, "") * 100) / eleccion.lista_nominal_contabilizadas).toFixed(4) : '0' }} %
                                      
                                               <!--{{ eleccion.participacion }}--> 
                                            </p>
                                        </div>
                                    </a-col>
                                </a-row>                           
                            </div>  
                        </center>
                        <div>
                            <label :style="{'font-size': '10px', 'text-align': 'left', 'letter-spacing': '0px', color: eleccion.tema ? '#4B3943' : 'white',  width: '100%'}">
                                <!-- TODO: Esta leyenda -->
                                Por su naturaleza, las casillas especiales no cuentan con lista nominal, por tanto, para el cálculo de la participación ciudadana, la cantidad de votos asentada en las Actas de casilla especial, se deberá considerar hasta el último corte de información que se publique, al cierre del SICODID (numeral 29, fr. IX del Anexo 13 del Reglamento de Elecciones).
                            </label>  
                        </div>
                        
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
import { useEleccionStore} from "../stores/eleccion_actual";
import { isMobile, cifrasMiles } from "../helpers";

const eleccion = useEleccionStore();

</script>

<style lang="css" scoped>

</style>