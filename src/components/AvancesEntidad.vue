<!--
  AvanceEntidad.vue:

  Despliega el banner con información de avance de la Elección
  
  Hijo de BodyMenuEleccion.vue
-->
<template>
   
    <a-row :gutter="{ xs: 8, sm: 16, md: 24, lg: 32 }"  justify="center" v-if="router.currentRoute.value.name != 'bd' && router.currentRoute.value.name != 'help' && router.currentRoute.value.name != 'preguntas'">
        <a-col :xs="24" :sm="24" :md="17" :lg="17" :xl="17">
            <a-card :style="{'background-color': eleccion.tema ? 'white': '#1d1d1d', padding: '1px', 'margin-bottom': '10px',
               'border-radius': '7px', border: '0px solid rgb(49, 16, 42)', color: eleccion.tema ? 'black': 'white'}">
                <a-row :gutter="{ xs: 8, sm: 16, md: 24, lg: 32 }"  justify="space-between">
                    <a-col :span="8" class="gutter-row">
                        <label :style="{'font-size': '20px', 'font-weight': 'bold', color: eleccion.tema? '#674080': 'white'}">
                            <p><b>Avance Entidad</b></p>
                        </label>
                <!--
                    ESTOY EN: {{ eleccion.eleccion }}
                        SELECCIONO: {{ eleccion.cmb1 }}, {{ eleccion.cmb2 }}, {{ eleccion.cmb3 }}
                        KEY: {{ eleccion.keyCmb }}
                        VOTOS: {{ eleccion.avance_dmr }}  
                -->                 
                    </a-col>
                    <a-col :span="4"  class="gutter-row" align="right">
                        <a-button v-if="!isMobile()" @click="leeEleccion(eleccion.eleccion); eleccion.mainKey = new Date();  " type="primary" shape="round"  :style="{height:'50px', width:'100px', color:'black', fontWeight:'bold'}">
                            <template #icon>
                            <ReloadOutlined />
                            </template> 
                            <br>
                            Actualizar
                        </a-button>
                        <a-button v-if="isMobile()" @click="leeEleccion(); eleccion.mainKey = new Date(); eleccion.ultimaEleccion=['1']; $router.push({ name: 'home' }); " type="primary" shape="round"  style=" color: black">
                            <template #icon>
                            <ReloadOutlined />
                            </template>
                        </a-button>
                    </a-col>
                </a-row>
                <a-row :gutter="{ xs: 8, sm: 8, md: 13, lg: 20 }" justify="center" v-if="!isMobile()">
                    <a-col style="margin-top:10px" class="gutter-row"  :xs="24" :sm="24" :md="8" :lg="8" :xl="8" >
                        <a-card size="small" :bordered="true" :style="{height:'100%', width: '100%', 'background-color': eleccion.tema? '#F9F9F9': ''}" >
                            <div align="left">

                                <b>Actas capturadas</b> 
                            </div>
                            <div v-if="eleccion.eleccion==1" align="right">
                                <p>{{eleccion.avance_jg.actas_capturadas!=null?cifrasMiles(eleccion.avance_jg.actas_capturadas):'0' }} de <b>{{eleccion.avance_jg.actas_capturadas_de!=null?cifrasMiles(eleccion.avance_jg.actas_capturadas_de):'0'}}</b></p>
                                <p>({{eleccion.avance_jg.actas_cap_porcen!=null?eleccion.avance_jg.actas_cap_porcen:'0'}}%)</p>
                                <div align="left">
                                    <a-progress :size="[300, 10]"  :strokeColor="'#B283B9'" :show-info="false" :percent="eleccion.avance_jg.actas_cap_porcen!=null?eleccion.avance_jg.actas_cap_porcen:'0'" />   
                                </div>
                            </div>
                            <div v-if="eleccion.eleccion==2" align="right">
                                <p>{{eleccion.avance_dmr.actas_capturadas!=null?cifrasMiles(eleccion.avance_dmr.actas_capturadas):0}} de <b>{{eleccion.avance_dmr.actas_capturadas_de!=null? cifrasMiles(eleccion.avance_dmr.actas_capturadas_de): '0'}}</b></p>
                                <p>({{eleccion.avance_dmr.actas_cap_porcen!=null?eleccion.avance_dmr.actas_cap_porcen:'0'}}%)</p>
                                <div align="left">
                                    <a-progress :size="[300, 10]"  :strokeColor="'#B283B9'" :show-info="false"  :percent="eleccion.avance_dmr.actas_cap_porcen"/>   
                                </div>
                            </div>
                            <div v-if="eleccion.eleccion==3" align="right">
                                <p>{{eleccion.avance_rp.actas_capturadas!=null?cifrasMiles(eleccion.avance_rp.actas_capturadas):'0'}} de <b>{{eleccion.avance_rp.actas_capturadas_de!=null?cifrasMiles(eleccion.avance_rp.actas_capturadas_de):'0'}}</b></p>
                                <p>({{eleccion.avance_rp.actas_cap_porcen!=null?eleccion.avance_rp.actas_cap_porcen:'0'}}%)</p>
                                <div align="left">
                                    <a-progress :size="[300, 10]"  :strokeColor="'#B283B9'" :show-info="false"  :percent="eleccion.avance_rp.actas_cap_porcen!=null?eleccion.avance_rp.actas_cap_porcen:'0'" />   
                                </div>
                            />
                            </div>
                            <div v-if="eleccion.eleccion==4" align="right">
                                <p>{{eleccion.avance_alc.actas_capturadas!=null?cifrasMiles(eleccion.avance_alc.actas_capturadas):'0'}} de <b>{{eleccion.avance_alc.actas_capturadas_de!=null?cifrasMiles(eleccion.avance_alc.actas_capturadas_de):'0'}}</b></p>
                                <p>({{eleccion.avance_alc.actas_cap_porcen!=null?eleccion.avance_alc.actas_cap_porcen:'0'}}%)</p>
                                <div align="left">
                                    <a-progress :size="[300, 10]"  :strokeColor="'#B283B9'" :show-info="false" :percent="eleccion.avance_alc.actas_cap_porcen!=null?eleccion.avance_alc.actas_cap_porcen:'0'" />   
                                </div>
                            </div>
                        </a-card>
                    </a-col >
                    <a-col style="margin-top:10px" class="gutter-row" justify="center"   :xs="24" :sm="24" :md="8" :lg="8" :xl="8">
                        <a-card size="small" :bordered="true" :style="{height:'100%', 'background-color': eleccion.tema? '#F9F9F9': ''}" >
    <!-- //////// OJO!!!!!! FALTA DEFINIR EL SLOT -->
                            <!-- <template #extra> -->
                            <div align="left" style="margin-bottom: 35px">
                                <a-tooltip :title="tooltips1" :color="'#582D73'" > <ExclamationCircleOutlined style="margin-left: 5px" /></a-tooltip>
                                <b style="margin-left:5px">Participación ciudadana</b>
                         
                            </div>
                            <p  style="text-align: center; font-size: 16px; font-weight: bold;">
                              {{lnGrafPor}} %
                            </p>
                            <!-- </template>
                            <p v-if="eleccion.eleccion==1" style="text-align: center; font-size: 16px; font-weight: bold;">
                                {{eleccion.avance_jg.participacion_porcen!=null?eleccion.avance_jg.participacion_porcen:'0'}}%
                            </p>
                            <p v-if="eleccion.eleccion==2" style="text-align: center; font-size: 16px; font-weight: bold;">
                                {{eleccion.avance_dmr.participacion_porcen!=null?eleccion.avance_dmr.participacion_porcen:'0'}}%
                            </p>
                            <p v-if="eleccion.eleccion==3" style="text-align: center; font-size: 16px; font-weight: bold;">
                                {{eleccion.avance_rp.participacion_porcen!=null?eleccion.avance_rp.participacion_porcen:'0'}}%
                            </p>
                            <p v-if="eleccion.eleccion==4" style="text-align: center; font-size: 16px; font-weight: bold;">
                                {{eleccion.avance_alc.participacion_porcen!=null?eleccion.avance_alc.participacion_porcen:'0'}}%
                            </p> -->
                        </a-card>
                    </a-col>
                    <a-col style="margin-top:10px; width:160px;" justify="center"   :xs="24" :sm="24" :md="8" :lg="8" :xl="8">
                        <a-card size="small" :bordered="true" :style="{height:'100%', 'background-color': eleccion.tema? '#F9F9F9': '' }">
                            <div align="left" style="margin-bottom: 30px">
                                <b>Último corte</b>
                            </div>
                            <a-row justify="center">
                                <a-col spam="12">
                                    <p  style="font-weight: bold;">{{eleccion.corte.corte_fecha}}</p>
                                </a-col>
                                <a-col spam="12">
                                    <p >Hora local<br>{{eleccion.corte.corte_hora}} h UTC-6</p> 
                                </a-col>
                            </a-row>
                        </a-card>
                    </a-col>
                </a-row>
                <a-row v-else>
                    <a-col class="gutter-row" justify="center" :xs="12" :sm="12" :md="12" :lg="12" :xl="12">
                        <div v-if="eleccion.eleccion==1" align="right" :style="{height:'100%', width: '100%'}">
                            <strong><p>Actas capturadas</p></strong>
                            <p>{{eleccion.avance_jg.actas_capturadas!=null?cifrasMiles(eleccion.avance_jg.actas_capturadas):'0' }} de <b>{{eleccion.avance_jg.actas_capturadas_de!=null?cifrasMiles(eleccion.avance_jg.actas_capturadas_de):'0'}}</b></p>
                        </div>
                        <div v-if="eleccion.eleccion==2" align="right" :style="{height:'100%', width: '100%'}">
                            <strong><p>Actas capturadas</p></strong>
                            <p>{{eleccion.avance_dmr.actas_capturadas!=null?cifrasMiles(eleccion.avance_dmr.actas_capturadas):0}} de <b>{{eleccion.avance_dmr.actas_capturadas_de!=null? cifrasMiles(eleccion.avance_dmr.actas_capturadas_de): '0'}}</b></p>
                        </div>
                        <div v-if="eleccion.eleccion==3" align="right" :style="{height:'100%', width: '100%'}">
                            <strong><p>Actas capturadas</p></strong>
                            <p>{{eleccion.avance_rp.actas_capturadas!=null?cifrasMiles(eleccion.avance_rp.actas_capturadas):'0'}} de <b>{{eleccion.avance_rp.actas_capturadas_de!=null?cifrasMiles(eleccion.avance_rp.actas_capturadas_de):'0'}}</b></p>
                        </div>
                        <div v-if="eleccion.eleccion==4" align="right" :style="{height:'100%', width: '100%'}">
                            <strong><p>Actas capturadas</p></strong>
                            <p>{{eleccion.avance_alc.actas_capturadas!=null?cifrasMiles(eleccion.avance_alc.actas_capturadas):'0'}} de <b>{{eleccion.avance_alc.actas_capturadas_de!=null?cifrasMiles(eleccion.avance_alc.actas_capturadas_de):'0'}}</b></p>
                        </div>
                    </a-col>
                    <a-col class="gutter-row" justify="center" :xs="12" :sm="12" :md="12" :lg="12" :xl="12">
                        <div v-if="eleccion.eleccion==1" align="right" :style="{height:'100%', width: '100%'}">
                            <p>({{eleccion.avance_jg.actas_cap_porcen!=null?eleccion.avance_jg.actas_cap_porcen:'0'}}%)</p>
                            <div align="left">
                                <a-progress :size="[300, 10]"  :strokeColor="'#B283B9'" :show-info="false" :percent="eleccion.avance_jg.actas_cap_porcen!=null?eleccion.avance_jg.actas_cap_porcen:'0'" />   
                            </div>
                        </div>
                        <div v-if="eleccion.eleccion==2" align="right" :style="{height:'100%', width: '100%'}">
                            <p>({{eleccion.avance_dmr.actas_cap_porcen!=null?eleccion.avance_dmr.actas_cap_porcen:'0'}}%)</p>
                            <div align="left">
                                <a-progress :size="[300, 10]"  :strokeColor="'#B283B9'" :show-info="false"  :percent="eleccion.avance_dmr.actas_cap_porcen"/>   
                            </div>
                        </div>
                        <div v-if="eleccion.eleccion==3" align="right" :style="{height:'100%', width: '100%'}">
                            <p>({{eleccion.avance_rp.actas_cap_porcen!=null?eleccion.avance_rp.actas_cap_porcen:'0'}}%)</p>
                            <div align="left">
                                <a-progress :size="[300, 10]"  :strokeColor="'#B283B9'" :show-info="false"  :percent="eleccion.avance_rp.actas_cap_porcen!=null?eleccion.avance_rp.actas_cap_porcen:'0'" />   
                            </div>
                        </div>
                        <div v-if="eleccion.eleccion==4" align="right" :style="{height:'100%', width: '100%'}">
                            <p>({{eleccion.avance_alc.actas_cap_porcen!=null?eleccion.avance_alc.actas_cap_porcen:'0'}}%)</p>
                            <div align="left">
                                <a-progress :size="[300, 10]"  :strokeColor="'#B283B9'" :show-info="false" :percent="eleccion.avance_alc.actas_cap_porcen!=null?eleccion.avance_alc.actas_cap_porcen:'0'" />   
                            </div>
                        </div>
                    </a-col> 
                    <a-col class="gutter-row" justify="right" :xs="12" :sm="12" :md="12" :lg="12" :xl="12">
                        <strong><p>Participación ciudadana</p></strong>
                        <!-- <p v-if="eleccion.eleccion==1" style="text-align: center; font-size: 16px; font-weight: bold;">
                            {{eleccion.avance_jg.participacion_porcen!=null?eleccion.avance_jg.participacion_porcen:'0'}}%
                        </p>
                        <p v-if="eleccion.eleccion==2" style="text-align: center; font-size: 16px; font-weight: bold;">
                            {{eleccion.avance_dmr.participacion_porcen!=null?eleccion.avance_dmr.participacion_porcen:'0'}}%
                        </p>
                        <p v-if="eleccion.eleccion==3" style="text-align: center; font-size: 16px; font-weight: bold;">
                            {{eleccion.avance_rp.participacion_porcen!=null?eleccion.avance_rp.participacion_porcen:'0'}}%
                        </p>
                        <p v-if="eleccion.eleccion==4" style="text-align: center; font-size: 16px; font-weight: bold;">
                            {{eleccion.avance_alc.participacion_porcen!=null?eleccion.avance_alc.participacion_porcen:'0'}}%
                        </p> -->
                        {{lnGrafPor}} %
                    </a-col>
                    <a-col class="gutter-row" justify="left" :xs="12" :sm="12" :md="12" :lg="12" :xl="12">
                        <a-row>
                            <a-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                                <strong><p>último corte</p></strong>
                            </a-col>
                            <a-col :xs="15" :sm="15" :md="15" :lg="15" :xl="15">
                                <p  style="font-weight: bold;">{{eleccion.corte.corte_fecha}}</p>
                            </a-col>
                            <a-col :xs="9" :sm="9" :md="9" :lg="9" :xl="9">
                                <p >Hora local<br>{{eleccion.corte.corte_hora}} h UTC-6</p> 
                            </a-col>
                        </a-row>
                    </a-col>
                </a-row>
            </a-card>
        </a-col>
        <a-col v-if="!isMobile()" :xs="24" :sm="24" :md="7" :lg="7" :xl="7" class="gutter-row" align="center" style="margin-left: -15px;">
            <a-card size="small" :bordered=" eleccion.tema ? false : true " :style="{height:'97%', 'background-color': eleccion.tema ? '#582D73' : '#1d1d1d', color:'white', 'text-align': 'left', 'border-color': '#c791a8'}" >
                <p><b>Mi sección</b></p>
                <p> <a-button @click="showModal" type="link"><QuestionCircleOutlined style="color: white"/></a-button> Para conocer los resultados, el número de tu Sección. <br> * Campo obligatorio</p>
                <label for="seccion">Sección*</label>
                <a-row  style="margin-top:25px;">
                    <a-col :xs="14" :sm="14" :md="14" :lg="14" :xl="14">
                        <a-input :name="seccion" :maxlength="5" v-model:value="message" style="width:90%"
                        @keypress="isNumber($event)" @keypress.enter="buscar"
                        placeholder="0000"/>
                    </a-col>
                    <a-col :xs="10" :sm="10" :md="10" :lg="10" :xl="10" style="display: flex; justify-content: left; text-align: center;">
                        <a-button :style="{color:'black'}" @click="buscar" style="width:90%" type="primary">Consultar</a-button>
                    </a-col>
                </a-row>
            </a-card>
        </a-col>
    </a-row>


    <!--
        Pantalla modal
    -->
    <a-modal v-model:open="open" width="700px" 
        title="Identifica la Entidad, Sección y Primer apellido de acuerdo con tu credencial."
            @ok="handleOk">

            <h5>Da click sobre la credencial: </h5>
            <i-row :gutter="{ xs: 8, sm: 16, md: 24, lg: 32 }">
                <i-col> 
                   <!--<img :width="400" style='cursor: pointer;' :src="getImagePathCredencial('a')">--> 
                    <a-image
                        :src="getImagePathCredencial('a')"
                        :width="300"
                        :preview="true"
                    />
                </i-col>
                <i-col>
                    <a-image
                        :src="getImagePathCredencial('b')"
                        :width="300"
                        :preview="true"
                    />
                </i-col>
                <i-col>
                    <a-image
                        :src="getImagePathCredencial('c')"
                        :width="300"
                        :preview="true"
                    />
                </i-col>
                <i-col>
                    <a-image
                        :src="getImagePathCredencial('d')"
                        :width="300"
                        :preview="true"
                    />
                </i-col>
            </i-row>
            
    </a-modal>

      
    
</template>

<script setup>

    import { useRouter } from 'vue-router'
    const router = useRouter();
    import { ref, onMounted, onBeforeMount } from 'vue';
    import { message as msg } from 'ant-design-vue';


    import {useEleccionStore} from "../stores/eleccion_actual"

    import { leeEleccion, cifrasMiles } from "../helpers";

    const ln = ref(0);

    const lnGrafPor = ref(0.00);
    const sin_especiales = ref(0);


    const ln_esperada = ref(0);
    const especiales = ref('0');
    const suma_esp_s_esp = ref(0);

    const eleccion = useEleccionStore();

    
    const open = ref(false);

    // Aqui sección a buscar
    const message = ref('');

    // Función para abrir modal
    const showModal = () => {
        open.value = true;
    };

    const handleOk = (e) => {
        console.log(e);
        open.value = false;
    };

    const paginaCarga = ref('home');
    import {
      QuestionCircleOutlined,
      DownloadOutlined,
      ReloadOutlined,
      ExclamationCircleOutlined
    } from '@ant-design/icons-vue';
    
    //--------------------------------------------
    // PARA CONTROL DE MOVIL / DESKTOP
    // HELPERS
    import { isMobile } from "../helpers";
    const is_mobile = ref(isMobile());
    let baseStyle = {
        width: '100%',
        height: '100%',
    };

    //------------------------------------------------
    // Tooltips para porcentaje de participación
    const tooltips1 = 'La Participación ciudadana es el porcentaje de ciudadanas y ciudadanos que votaron, con base en la Lista Nominal de las Casillas con Actas Computadas. Por ejemplo, si en una casilla votan 500 electores y el número de personas inscritas en la Lista Nominal para esa casilla es de 750, entonces: Multiplicamos 500 por 100 y el resultado lo dividimos entre 750. La votación emitida en las Casillas Especiales se tomará en cuenta para el cálculo de la Participación ciudadana.';
    // const tooltips1 = 'La Participación ciudadana es el porcentaje de ciudadanas y ciudadanos que votaron, con base en la Lista Nominal de las Casillas con Actas Computadas. Por ejemplo, si en una casilla votan 500 electores y el número de personas inscritas en la Lista Nominal para esa casilla es de 750, entonces: Multiplicamos 500 por 100 y el resultado lo dividimos entre 750. La votación emitida en las Casillas Especiales se tomará en cuenta para el cálculo de la Participación ciudadana, hasta el último corte de información que se publique, previo al cierre del PREP.';
    // Antes de cargar componente checamos dispositivo
    onBeforeMount(async () => {
        try {
            //alert(is_mobile.value)
            if(is_mobile.value==false){
                baseStyle = {
                    height: '100%',
                };
            }

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

           // if(ln_esperada.value>0)
            // {
                //lnGrafPor.value = (sin_especiales.value.replace(/,/g, "") * 100) / suma_esp_s_esp.value
                //lnGrafPor.value = (sin_especiales.value.replace(/,/g, "") * 100) / suma_esp_s_esp .value

            //    lnGrafPor.value = (sin_especiales.value.replace(/,/g, "") * 100) / ln_esperada.value
            //    lnGrafPor.value =  lnGrafPor.value>100 ? '***' : lnGrafPor.value.toFixed(4);
            //}

            if(ln_esperada.value>0)
            {
                //lnGrafPor.value = (sin_especiales.value.replace(/,/g, "") * 100) / suma_esp_s_esp .value
        
                lnGrafPor.value =  (suma_esp_s_esp.value * 100) / ln_esperada .value;

            // alert(lnGrafPor.value )
                lnGrafPor.value =  lnGrafPor.value>100 ? '***' : lnGrafPor.value.toFixed(4);
            }
        }
        catch{}
    })

    //-------------------------------------------------
    // LLave del componente principal para forzar redraw
    const forceRerender = () => {
       window.location.reload()
    };

    const prop = defineProps({
        datos: {
                type: Array,
                required: "true"
        }
    });

    const getImagePathCredencial = (imageName) => {
        return (eleccion.urlPrep + "credenciales/" + imageName + ".png");
    };

    const buscar = async () =>{
        //alert(message.value.toString());
        await buscaSecc();
        //eleccion.combosActuales('3', '56', '2.2.2', (new Date()).getTime() +'2', false);
    }

    const buscaSecc =  async () => {
      try {
        
        //const response = await fetch('../../src/assets/data/actas_contabilizadas.json'); // Cambia la ruta al archivo JSON o API
        const response = await fetch(`${eleccion.urlPrep}api_seccion.php?seccion=${message.value}`);
         // eleccion.eleccion=1 y 2 debe ser distrito / 4 debe ser alcaldia
        
        const jsonData = await response.json();
        //categories.value = jsonData.categories;
        eleccion.desdeSeccion = true;
        //alert(jsonData.encontrada.cuantos);
        if(jsonData.encontrada.cuantos>0){
        
           
           const dto= await jsonData.encontrada.id_distrito; 
           const secc= await jsonData.encontrada.id_seccion;
           const deleg = await jsonData.encontrada.id_delegacion;
           
           eleccion.readData = false;
           if(eleccion.eleccion==4){
                eleccion.cmb1 = deleg;
           }
           else
           {
                eleccion.cmb1 = dto;
           }
           
           eleccion.readData = true;
           eleccion.cmb2= secc;
           
           eleccion.keyCmb = (new Date()).getTime() +'233';
           
           //eleccion.combosActuales(parte1, parte2, '_', (new Date()).getTime() +'2', false); 
        }
        else{


            msg.warning({
                content: () => 'No existe la sección, verifique.',
                style: {
                    marginTop: '20vh',
                    color: 'red',
                    fontSize: "18px",
                    
                },
            });

            //msg.warning("NO EXISTE SECCIÓN");
            //alert("No existe sección");
            //messageApi.success('Aquí hay que llamar algo');
            message.value='';
        }
        eleccion.desdeSeccion = false;

        // PARA LIMPIAR COMBOS CUANDO CAMBIA EN MENU PRINCIPAL 11/SEP/2023
        // eleccion.combosActualesValidos("","","",paramID.value);

      } catch (error) {
        eleccion.desdeSeccion = false;
        console.error('Error al cargar los datos:', error);
      }
    };

    // Funcion para aceptar solo digitos en campo de sección
    const isNumber = (evt) => {
      evt = (evt) ? evt : window.event;
      var charCode = (evt.which) ? evt.which : evt.keyCode;
      if ((charCode > 31 && (charCode < 48 || charCode > 57))) {
            ////alert(charCode);
            evt.preventDefault();;
      } 
      else {
        return true;
      }
    }


    /*
    const onlyNumber = ($event) => {
        //console.log($event.keyCode); //keyCodes value
        let keyCode = ($event.keyCode ? $event.keyCode : $event.which);
        if ((keyCode < 48 || keyCode > 57) && keyCode !== 46) { // 46 is dot
            $event.preventDefault();
        }
    }*/
</script>

<style scoped>
   
.container {
  display: flex;
  background: white;
  height: 50vh;
}
.child-div-1 {
  background: #000;
  margin-left: 20px;
  height: 100%;
  width: 20vh;
  position:relative;
}

.docepx{
    font-size: 12px;
}
.ochopx{
    font-size: 7px;
}
.custom-extra {
  position: absolute;
  top: 15px;
  left: 5px;
}
.custom-title {
  margin-left: 20px; /* Ajusta el valor según sea necesario */
  margin-top: -50px;
  margin-bottom: 50px;
}
</style>