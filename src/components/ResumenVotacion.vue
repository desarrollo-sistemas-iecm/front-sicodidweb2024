<!--
    Componente de RESUMEN DE LA VOTACIÓN ( ResumenVotacion.vue )
    Hijo de: MapView.vue
-->
<template>

  <!----> 

<!--
    <a-descriptions style="margin-top: 20px;">
      <a-descriptions-item>No se considera la cantidad de votos asentada en las Actas PREP de Casilla Especial de Representación Proporcional.</a-descriptions-item>
  </a-descriptions>
-->
  <div v-if="router.currentRoute.value.name != 'votoextranjero' " :style="{'padding-top': '30px', 'font-size': '12px', 'font-weight': bolder, 'color': eleccion.tema ? 'black' : 'white'}">
    Por presentación, los decimales de los porcentajes muestran sólo cuatro dígitos. No obstante, al considerar todos los decimales, suman 100%.
  </div>
  <a-row v-else>
    <a-col style="width: 100%; " align="middle">
      <a-divider type="horizontal"/>
    </a-col>
  </a-row>
  <a-row :gutter="{ xs: 8, sm: 16, md: 24, lg: 32 }" v-if="!isMobile()">
    <a-col  :xs="24" :sm="24" :md="24" :lg="24" :xl="24" >
          <a-card :headStyle="{backgroundColor: 'rgba(255, 255, 255, 0.4)', border: 0, fontSize:'20px' }"
          title="Resumen de la votación" size="small" 
          :style="{'background-color': eleccion.tema ? '#F9F9F9' : '#2c2c2c', width: '100%', 'margin-bottom': '15px', 'margin-top': '15px'}">
              <a-row :gutter="{ xs: 8, sm: 16, md: 24, lg: 32 }">
                  <a-col style="text-align: center;">
                    Votos acumulados <a-tooltip :title="tooltips1" :color="'#582D73'" ><ExclamationCircleOutlined /></a-tooltip><br> 
                    <b>{{props.datosResumen? cifrasMiles(props.datosResumen.votos_acumulados):'0' }}<br></b>
                    {{props.datosResumen? props.datosResumen.votos_acumulados_por:'0%' }}<br>
                  </a-col>
                  <a-col style="text-align: center;">
                      <label style="font-size: 30px;">+</label>
                  </a-col>
                  <a-col style="text-align: center;">
                    Candidaturas no registradas<br>
                    <b>{{props.datosResumen? cifrasMiles(props.datosResumen.candidatos_no_reg):'0' }}<br></b>
                    {{props.datosResumen? props.datosResumen.candidatos_no_reg_por:'0%' }}<br>
                  </a-col>
                  <a-col style="text-align: center;">
                      <label style="font-size: 30px;">+</label>
                  </a-col>
                  <a-col style="text-align: center;">
                    <label style="font-size: 12px;">Votos nulos  <a-tooltip :title="toolTips3" :color="'#582D73'" v-if="eleccion.cmb1 == '' && router.currentRoute.value.name != 'votoextranjero' && router.currentRoute.value.name != 'votoanticipado' && router.currentRoute.value.name != 'votoprision'"><ExclamationCircleOutlined /></a-tooltip></label><br>
                    <b>{{props.datosResumen? cifrasMiles(props.datosResumen.nulos):'0' }}<br></b>
                    {{props.datosResumen? props.datosResumen.nulos_por:'0%' }}<br>
                  </a-col>
                  <a-col style="text-align: center;">
                    <label style="font-size: 30px;">=</label>
                  </a-col>
                  <a-col style="text-align: center;">
                    <label style="font-size: 12px; font-weight: bold;">Total de votos <a-tooltip :title="tooltips2" :color="'#582D73'" ><ExclamationCircleOutlined /></a-tooltip></label><br>
                    <label style="font-size: 30px; font-weight: bold; color:#582D73">{{props.datosResumen? cifrasMiles(props.datosResumen.total):'0' }}</label><br> 
                    <label style="font-size: 12px; color:#582D73">{{props.datosResumen? props.datosResumen.total_por:'0%' }}</label><br>
                  </a-col>
                  <!-- <a-col style="text-align: center;">
                    <a-button :style="{ color: eleccion.tema ? '#582D73' : 'white', 'font-size': '12px', 'font-weight': 'bold', width: '100%'}" 
                      click="#" type="link">Observaciones<br/>en acta</a-button>
                    
                  </a-col> -->
              </a-row>
          </a-card>
    </a-col>
  </a-row>
  <a-row v-else :gutter="{ xs: 24, sm: 24, md: 24, lg: 24 }">
    <v-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24" style="text-align: left; align-items: center; align-content: center; width: 100%; font-size: 30px; margin-top: 2%; margin-left: 2%;">
      <b>Resumen de la votación</b>
    </v-col>  
    <v-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24" style="text-align: center; align-items: center; align-content: center; width: 100%; margin: 0%; padding: 0%;">
      <a-card hoverable style="margin-top: 2%; margin-bottom: 2%;" :style="{'background-color': eleccion.tema ?  'white' : '#2c2c2c'}">
        <a-row :gutter="{ xs: 24, sm: 24, md: 24, lg: 24 }">
          <v-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24" style="text-align: center; align-items: center; align-content: center; width: 100%; margin: 0%; padding: 0%;">
            <p><b>Votos acumulados <a-tooltip :title="tooltips1" :color="'#582D73'" ><ExclamationCircleOutlined /></a-tooltip></b></p> 
          </v-col>
          <v-col :xs="12" :sm="12" :md="12" :lg="12" :xl="12" style="text-align: center; align-items: center; align-content: center; width: 50%; margin: 0%; padding: 0%;">
            <b>{{props.datosResumen? cifrasMiles(props.datosResumen.votos_acumulados):'0' }}</b>
          </v-col>
          <v-col :xs="12" :sm="12" :md="12" :lg="12" :xl="12" style="text-align: center; align-items: center; align-content: center; width: 50%; margin: 0%; padding: 0%;">
            <b>{{props.datosResumen? props.datosResumen.votos_acumulados_por:'0%' }}</b>
          </v-col>
          <a-divider></a-divider>
          <v-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24" style="text-align: center; align-items: center; align-content: center; width: 100%; margin: 0%; padding: 0%;">
            <p><b>Candidaturas no registradas</b></p> 
          </v-col>
          <v-col :xs="12" :sm="12" :md="12" :lg="12" :xl="12" style="text-align: center; align-items: center; align-content: center; width: 50%; margin: 0%; padding: 0%;">
            <img src="@/../public/icons/icons_add_24.png" alt="" style="padding-right: 15px;">
            <b>{{props.datosResumen? cifrasMiles(props.datosResumen.candidatos_no_reg):'0' }}</b>
          </v-col>
          <v-col :xs="12" :sm="12" :md="12" :lg="12" :xl="12" style="text-align: center; align-items: center; align-content: center; width: 50%; margin: 0%; padding: 0%;">
            <b>{{props.datosResumen? props.datosResumen.candidatos_no_reg_por:'0%' }}</b>
          </v-col>
          <a-divider></a-divider>
          <v-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24" style="text-align: center; align-items: center; align-content: center; width: 100%; margin: 0%; padding: 0%;">
            <p><b>Votos nulos <a-tooltip :title="toolTips3" :color="'#582D73'" v-if="eleccion.cmb1 == '' && router.currentRoute.value.name != 'votoextranjero' && router.currentRoute.value.name != 'votoanticipado' && router.currentRoute.value.name != 'votoprision'"><ExclamationCircleOutlined /></a-tooltip></b></p> 
          </v-col>
          <v-col :xs="12" :sm="12" :md="12" :lg="12" :xl="12" style="text-align: center; align-items: center; align-content: center; width: 50%; margin: 0%; padding: 0%;">
            <img src="@/../public/icons/icons_add_24.png" alt="" style="padding-right: 15px;">
            <b>{{props.datosResumen? cifrasMiles(props.datosResumen.nulos):'0' }}</b>
          </v-col>
          <v-col :xs="12" :sm="12" :md="12" :lg="12" :xl="12" style="text-align: center; align-items: center; align-content: center; width: 50%; margin: 0%; padding: 0%;">
            <b>{{props.datosResumen? props.datosResumen.nulos_por:'0%' }}</b>
          </v-col>
          <!-- <a-divider></a-divider>
          <v-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24" style="text-align: center; align-items: center; align-content: center; width: 100%; margin: 0%; padding: 0%;">
            <p><b>Total de votos <a-tooltip :title="tooltips2" :color="'#582D73'" ><ExclamationCircleOutlined /></a-tooltip></b></p> 
          </v-col>
          <v-col :xs="12" :sm="12" :md="12" :lg="12" :xl="12" style="text-align: center; align-items: center; align-content: center; width: 50%; margin: 0%; padding: 0%;">
            <b>{{props.datosResumen? props.datosResumen.total:'0' }}</b>
          </v-col>
          <v-col :xs="12" :sm="12" :md="12" :lg="12" :xl="12" style="text-align: center; align-items: center; align-content: center; width: 50%; margin: 0%; padding: 0%;">
            {{props.datosResumen? props.datosResumen.total_por:'0%' }}
          </v-col> -->
        </a-row>
      </a-card>
    </v-col>
    <v-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24" style="text-align: center; align-items: center; align-content: center; width: 100%; margin: 0%; padding: 0%;">
      <p style="font-size: 25px" :style="{ 'color': eleccion.tema ? '##582D73' : 'white' }"><b>Total de votos <a-tooltip :title="tooltips2" :color="'#582D73'" ><ExclamationCircleOutlined /></a-tooltip></b></p> 
    </v-col>
    <v-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24" style="text-align: center; align-items: center; align-content: center; width: 100%; margin: 0%; padding: 0%;">
      <img src="@/../public/icons/icon_equal_24.png" alt="" style="padding-right: 75px;">
      <label style="color: #582D73; font-size: 70px;"><b>{{props.datosResumen? cifrasMiles(props.datosResumen.total):'0' }}</b></label>
      <p style="font-size: 12px; color:#582D73">{{props.datosResumen? props.datosResumen.total_por:'0%' }}</p>
    </v-col>
  </a-row>

<!--

  MOSTRAR OBSERVA???  {{ mostrarObservaciones }} --- <br>

-->
  

</template>

<script setup>
  import { ref, computed } from 'vue';
  import { useEleccionStore} from "../stores/eleccion_actual"
  import { isMobile, cifrasMiles } from "../helpers";
  import { useRouter } from 'vue-router'
  const router = useRouter();

  const eleccion = useEleccionStore();

  import {
    ExclamationCircleOutlined
  } from '@ant-design/icons-vue';

  const props = defineProps({
      datosResumen: {
          type: Array,
          required: 'true'
      }
  })

  

  const mostrarObservaciones = computed(() => {
    if(eleccion.cmb2=="") return "NO MOSTRAR"

    return eleccion.cmb1 && eleccion.cmb2 && !eleccion.cmb3;
  })

  const tooltips1 = 'Es la suma de los votos en territorio estatal (Casillas, Anticipados y Prisión Preventiva), así como los emitidos en el Extranjero; desglosados por partidos Político, Coalición y Candidatura Independiente. Sin incluir candidaturas no registradas, ni votos nulos.';
  const tooltips2 = 'Se refiere a la suma total de votos que realiza el sistema informático con base en los datos que muestran en cada Acta; podrás consultar la cifra del total de votos mostrado en cada Acta en la base de datos (numeral 26, fr. XIV del Anexo 13 del Reglamento de Elecciones).';
  const toolTips3 = 'El total y el porcentaje de votos para candidaturas no registradas y nulos, considera la votación en Casillas, en el Extranjero, Anticipado y Prisión Preventiva.';
  console.log("CATALOGO EN RESUMEN", props.datosResumen);


</script>
