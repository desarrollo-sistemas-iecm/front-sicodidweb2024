<!--
  DistribucionCategoria.vue:

  Muestra la distribución de votos a los partido. 
  
  Hijo de VotosCandidato.vue
-->

<template>
  <h2>
    <br>
    Distribución de votos por Partido Político y Candidaturas Independientes a nivel {{ eleccion.eleccion == 2 ? 'Distrito' : 'Alcaldía' }}
  </h2>
  <h4>
    La tabla muestra el desglose de votos que cada Partido Político, Coalición, Candidatura Común o Candidatura sin Partido presente en {{ eleccion.eleccion == 2 ? 'el Distrito': 'la Alcaldía'}} , indicando los votos recibidos de manera individual y, en su caso, los votos recibidos vía Coalición.
    <br><br>
    <u>
      <!-- TODO: aqui -->
      <a style="color: black;" href="/prep2024/files/Info-Paraentenderdistribucionvotos.pdf" download="info-para-entender-distribucion-votos.pdf">
        Conoce cómo se disribuyen los votos para Candidaturas de Coalición de acuerdo con la legislación vigente.
      </a>
    </u>
    <br>
    <u>
      <!-- TODO: aqui -->
      <a style="color: black;" href="/prep2024/files/Info-ConvenioCC.pdf" download="info-convenio-cc.pdf">
        Conoce cómo se distribuyen los votos para la Candidatura Común de acuerdo con el convenio
      </a>
    </u>
    <br><br>
  </h4>
  <div>
      <!--TITULOS-->
      <a-row justify="space-around" align="middle" :gutter="{ xs: 8, sm: 16, md: 24, lg: 32 }">
        <a-col style="width: 12%;" align="middle"><b>Partidos</b></a-col>
        <a-col style="width: 12%;" align="middle"><b>Votos recibidos
          por Partido Político</b></a-col>
        <a-col style="width: 12%;" align="middle"><b>+</b></a-col>
        <a-col style="width: 12%;" align="middle"><b>Votos recibidos
          por Coalición o Candidatura Común</b>
        </a-col>
        <a-col style="width: 12%;" align="middle"><b>=</b>
        </a-col>
        <a-col style="width: 12%;" align="middle"><b>Resultado</b>
        </a-col>
      </a-row>
      <!-- FOR CON DATOS-->
      <div style="width:100%"  v-for="(category, index) in categories" :key="category.id">
        <a-row justify="space-around" align="middle" v-if="eleccion.cmb1 != 21 && eleccion.eleccion == 2 && category.icono == '8' || eleccion.cmb1 != 6 && eleccion.eleccion == 4 && category.icono == '9' || eleccion.eleccion == 2 && category.icono == '9' || eleccion.eleccion == 4 && category.icono == '8' ">
          <!-- nada {{ category.icono }} -->
        </a-row>
        <a-row justify="space-around" align="middle" v-else>
            <a-col style="width: 100%; " align="middle" v-if="index == 0">
              <a-divider type="horizontal"/>
            </a-col>
            <a-col style="width: 12%; " align="middle">
              <p>{{ category.name }}</p>
              <p><img :src="getImagePathPartido(category.icono)" alt=""> </p>
            </a-col>
            <a-col style="width: 12%; " align="middle">
             <strong>{{ cifrasMiles(sumatoriasTMP['PP'+category.icono]) }}</strong>
            </a-col>
            <a-col style="width: 12%; " align="middle">
              <!-- + <br><br> -->
              <img src="@/../public/icons/icons_add_24.png" alt="">
            </a-col>
            <a-col style="width: 12%; " align="middle">
              <!-- MAS VOTOS<br><br> -->
              
              <template v-if="category.icono == '1' && eleccion.cmb1 == 12 && eleccion.eleccion == 2 || category.icono == '1' && eleccion.cmb1 == 13 && eleccion.eleccion == 2 || category.icono == '1' && eleccion.cmb1 == 17 && eleccion.eleccion == 2 || category.icono == '1' && eleccion.cmb1 == 20 && eleccion.eleccion == 2 || category.icono == '1' && eleccion.cmb1 == 21 && eleccion.eleccion == 2 || category.icono == '1' && eleccion.cmb1 == 25 && eleccion.eleccion == 2 || category.icono == '1' && eleccion.cmb1 == 26 && eleccion.eleccion == 2 || category.icono == '1' && eleccion.cmb1 == 30 && eleccion.eleccion == 2">
                <p><strong>0</strong></p>
              </template>
              <template v-else-if="category.icono == '1' && eleccion.cmb1 != 12 && eleccion.eleccion == 2 || category.icono == '1' && eleccion.cmb1 != 13 && eleccion.eleccion == 2 || category.icono == '1' && eleccion.cmb1 != 17 && eleccion.eleccion == 2 || category.icono == '1' && eleccion.cmb1 != 20 && eleccion.eleccion == 2 || category.icono == '1' && eleccion.cmb1 != 21 && eleccion.eleccion == 2 || category.icono == '1' && eleccion.cmb1 != 25 && eleccion.eleccion == 2 || category.icono == '1' && eleccion.cmb1 != 26 && eleccion.eleccion == 2 || category.icono == '1' && eleccion.cmb1 != 30 && eleccion.eleccion == 2 || eleccion.eleccion == 4 && category.icono == '1'">
              <!-- {{  category.icono }} -->
                <p><img style="width: 70%; " :src="getImagePathPartidoCoalicion(category.icono+'-1')" alt=""> <strong>{{ cifrasMiles(votosDistribuidos1['P1']) }}</strong></p>
                <p><img style="width: 70%; " :src="getImagePathPartidoCoalicion(category.icono+'-2')" alt=""> <strong>+ {{ cifrasMiles(votosDistribuidos2['P1']) }}</strong></p>
                <p><img style="width: 70%; " :src="getImagePathPartidoCoalicion(category.icono+'-3')" alt=""> <strong>+ {{ cifrasMiles(votosDistribuidos3['P1']) }}</strong></p>
              </template>
              <template v-else-if="category.icono == '2' && eleccion.cmb1 == 12 || category.icono == '2' && eleccion.cmb1 == 13 || category.icono == '2' && eleccion.cmb1 == 17 || category.icono == '2' && eleccion.cmb1 == 20 || category.icono == '2' && eleccion.cmb1 == 21 || category.icono == '2' && eleccion.cmb1 == 25 || category.icono == '2' && eleccion.cmb1 == 26 || category.icono == '2' && eleccion.cmb1 == 30">
                <p><strong>0</strong></p>
              </template>
              <template v-else-if="category.icono == '2' && eleccion.cmb1 != 12 || category.icono == '2' && eleccion.cmb1 != 13 || category.icono == '2' && eleccion.cmb1 != 17 || category.icono == '2' && eleccion.cmb1 != 20 || category.icono == '2' && eleccion.cmb1 != 21 || category.icono == '2' && eleccion.cmb1 != 25 || category.icono == '2' && eleccion.cmb1 != 26 || category.icono == '2' && eleccion.cmb1 != 30 || eleccion.eleccion == 4 && category.icono == '2'">
              <!-- {{  category.icono }} -->
                <p><img style="width: 70%; " :src="getImagePathPartidoCoalicion(category.icono+'-1')" alt=""> <strong>{{ cifrasMiles(votosDistribuidos1['P2']) }}</strong></p>
                <p><img style="width: 70%; " :src="getImagePathPartidoCoalicion(category.icono+'-2')" alt=""> <strong>+ {{ cifrasMiles(votosDistribuidos2['P2']) }}</strong></p>
                <p><img style="width: 70%; " :src="getImagePathPartidoCoalicion(category.icono+'-3')" alt=""> <strong>+ {{ cifrasMiles(votosDistribuidos4['P2']) }}</strong></p>
              </template>
              <template v-else-if="category.icono == '3' && eleccion.cmb1 == 12 || category.icono == '3' && eleccion.cmb1 == 13 || category.icono == '3' && eleccion.cmb1 == 17 || category.icono == '3' && eleccion.cmb1 == 20 || category.icono == '3' && eleccion.cmb1 == 21 || category.icono == '3' && eleccion.cmb1 == 25 || category.icono == '3' && eleccion.cmb1 == 26 || category.icono == '3' && eleccion.cmb1 == 30">
              <!-- {{  category.icono }} -->
                <p><strong>0</strong></p>
              </template>
              <template v-else-if="category.icono == '3' && eleccion.cmb1 != 12 || category.icono == '3' && eleccion.cmb1 != 13 || category.icono == '3' && eleccion.cmb1 != 17 || category.icono == '3' && eleccion.cmb1 != 20 || category.icono == '3' && eleccion.cmb1 != 21 || category.icono == '3' && eleccion.cmb1 != 25 || category.icono == '3' && eleccion.cmb1 != 26 || category.icono == '3' && eleccion.cmb1 != 30 || eleccion.eleccion == 4 && category.icono == '3'">
              <!-- {{  category.icono }} -->
                <p><img style="width: 70%; " :src="getImagePathPartidoCoalicion(category.icono+'-1')" alt=""> <strong>{{ cifrasMiles(votosDistribuidos1['P3']) }}</strong></p>
                <p><img style="width: 70%; " :src="getImagePathPartidoCoalicion(category.icono+'-2')" alt=""> <strong>+ {{ cifrasMiles(votosDistribuidos3['P3']) }}</strong></p>
                <p><img style="width: 70%; " :src="getImagePathPartidoCoalicion(category.icono+'-3')" alt=""> <strong>+ {{ cifrasMiles(votosDistribuidos4['P3']) }}</strong></p>
              </template>
              <template v-else-if="category.icono == '4'">
              <!-- {{  category.icono }} -->
                <p>
                  <!-- <img style="width: 70%; " :src="getImagePathPartidoCoalicion(category.icono+'-1')" alt="">  -->
                <strong>{{ cifrasMiles(votosDistribuidos5['P4']) }}</strong></p>
                <!-- <p><img style="width: 70%; " :src="getImagePathPartidoCoalicion(category.icono+'-2')" alt=""> <strong>+ {{ votosDistribuidos6['P4'] }}</strong></p> -->
                <!-- <p><img style="width: 70%; " :src="getImagePathPartidoCoalicion(category.icono+'-3')" alt=""> <strong>+ {{ votosDistribuidos7['P4'] }}</strong></p> -->
              </template>
              <template v-else-if="category.icono == '5'">
              <!-- {{  category.icono }} -->
                <p>
                  <!-- <img style="width: 70%; " :src="getImagePathPartidoCoalicion(category.icono+'-1')" alt="">   -->
                <strong>{{ cifrasMiles(votosDistribuidos5['P5']) }}</strong></p>
                <!-- <p><img style="width: 70%; " :src="getImagePathPartidoCoalicion(category.icono+'-2')" alt=""> <strong>+ {{ votosDistribuidos6['P5'] }}</strong></p> -->
                <!-- <p><img style="width: 70%; " :src="getImagePathPartidoCoalicion(category.icono+'-3')" alt=""> <strong>+ {{ votosDistribuidos8['P5'] }}</strong></p> -->
              </template>
              <template v-else-if="category.icono == '6'">
                <!-- {{  category.icono }} -->
                <p><strong>0</strong></p>
              </template>
              <template v-else-if="category.icono == '7'">
              <!-- {{  category.icono }} -->
                <p>
                  <!-- <img style="width: 70%; " :src="getImagePathPartidoCoalicion(category.icono+'-1')" alt="">  -->
                  <strong>{{ cifrasMiles(votosDistribuidos5['P7'] + Math.round(decimales)) }}</strong></p>
                <!-- <p><img style="width: 70%; " :src="getImagePathPartidoCoalicion(category.icono+'-2')" alt=""> <strong>+ {{ votosDistribuidos7['P7'] }}</strong></p> -->
                <!-- <p><img style="width: 70%; " :src="getImagePathPartidoCoalicion(category.icono+'-3')" alt=""> <strong>+ {{ votosDistribuidos8['P7'] }}</strong></p> -->
              </template>
              <template v-else-if="category.icono == '8'">
                <!-- {{  category.icono }} -->
                <p><strong>0</strong></p>
              </template>
              <template v-else-if="category.icono == '9'">
                <!-- {{  category.icono }} -->
                <p><strong>0</strong></p>
              </template>
             </a-col>
            <a-col style="width: 12%; margin-top: 5px;" align="middle">
              <!-- <h5>=</h5>          -->
              <img src="@/../public/icons/icon_equal_24.png" alt="">
            </a-col>
            <a-col style="width: 12%; margin-top: 5px;" align="middle">
              <!-- <h5>SUMA</h5>          -->
              <template v-if="category.icono == '1'">
                <!-- {{  category.icono }} -->
                <p><strong>{{ cifrasMiles(sumatoriasTMP['PP'+category.icono] + votosDistribuidos1['P1'] + votosDistribuidos2['P1'] + votosDistribuidos3['P1']) }}</strong></p>
              </template>
              <template v-else-if="category.icono == '2'">
                <!-- {{  category.icono }} -->
                <p><strong>{{ cifrasMiles(sumatoriasTMP['PP'+category.icono] + votosDistribuidos1['P2'] + votosDistribuidos2['P2'] + votosDistribuidos4['P2']) }}</strong></p>
              </template>
              <template v-else-if="category.icono == '3'">
                <!-- {{  category.icono }} -->
                <p><strong>{{ cifrasMiles(sumatoriasTMP['PP'+category.icono] + votosDistribuidos1['P3'] + votosDistribuidos3['P3'] + votosDistribuidos4['P3']) }}</strong></p>
              </template>
              <template v-else-if="category.icono == '4'">
                <!-- {{  category.icono }} -->
                <p><strong>{{ cifrasMiles(sumatoriasTMP['PP'+category.icono] + votosDistribuidos5['P4'] + votosDistribuidos6['P4'] + votosDistribuidos7['P4']) }}</strong></p>
              </template>
              <template v-else-if="category.icono == '5'">
                <!-- {{  category.icono }} -->
                <p><strong>{{ cifrasMiles(sumatoriasTMP['PP'+category.icono] + votosDistribuidos5['P5'] + votosDistribuidos6['P5'] + votosDistribuidos8['P5']) }}</strong></p>
              </template>
              <template v-else-if="category.icono == '6'">
                <!-- {{  category.icono }} -->
                <p><strong>{{ cifrasMiles(sumatoriasTMP['PP'+category.icono]) }}</strong></p>
              </template>
              <template v-else-if="category.icono == '7'">
                <!-- {{  category.icono }} -->
                <p><strong>{{ cifrasMiles(sumatoriasTMP['PP'+category.icono] + votosDistribuidos5['P7'] + votosDistribuidos7['P7'] + votosDistribuidos8['P7'] + Math.round(decimales)) }}</strong></p>
              </template>
              <template v-else-if="category.icono == '8' && eleccion.cmb1 == 21 && eleccion.eleccion == 2">
                <!-- {{  category.icono }} -->
                <p><strong>{{ cifrasMiles(sumatoriasTMP['PP'+category.icono])  }}</strong></p>
              </template>
              <template v-else-if="category.icono == '9' && eleccion.cmb1 == 6 && eleccion.eleccion == 4">
                <!-- {{  category.icono }} -->
                <p><strong>{{ cifrasMiles(sumatoriasTMP['PP'+category.icono]) }}</strong></p>
              </template>
            </a-col>
            <a-col style="width: 100%; " align="middle">
              <a-divider type="horizontal"/>
            </a-col>
        </a-row>
    </div>

      <!-- {{ sumatoriasTMP }} {{ decimales  }} -->

  </div>

</template>

<script setup>
  import {useEleccionStore} from "../stores/eleccion_actual";
  import { getImagePath,  getImagePathPartido, formatNumber, getImagePathPartidoCoalicion, cifrasMiles} from "../helpers";
  import { ref, onMounted, computed } from 'vue';
  const eleccion = useEleccionStore();
  const data = ref([]);
  let categories = ref([]);

  let decimales = ref(0);

  let dip = [{ pp8: 21, pp9: false }];
  let alc = [{ id_distrito: 1, pp: false }];


  let sumatoriasTMP = ref({ PP1: 0 ,  PP2: 0 ,  PP3: 0 ,  PP4: 0 ,  PP5: 0 ,  PP6: 0 ,  PP7: 0 ,  PP8: 0 , PP9: 0, PP10: 0, PP11:0, PP12:0, PP13:0, PP14:0, PP15: 0, PP16:0, PP17:0, COAL1: 0 ,  COAL2: 0 ,  COAL3: 0 ,  COAL4: 0 ,  COAL5: 0 ,  COAL6: 0 ,  COAL7:0 ,  COAL8:0 ,  COAL9:0, P1:0, P2:0, P3:0, P4:0, P5:0, P6:0, P7:0, P8:0 });
  let VotosCoaliciones1 = ref([0,0,0]);
  let VotosCoaliciones2 = ref([0,0]);
  let VotosCoaliciones3 = ref([0,0]);
  let VotosCoaliciones4 = ref([0,0]);
  let VotosCoaliciones5 = ref([0,0,0]);
  let VotosCoaliciones6 = ref([0,0]);
  let VotosCoaliciones7 = ref([0,0]);
  let VotosCoaliciones8 = ref([0,0]);

  let votosDistribuidos1 = ref({ P1: 0, P2: 0, P3: 0 });
  let votosDistribuidos2 = ref({ P1: 0, P2: 0 });
  let votosDistribuidos3 = ref({ P1: 0, P3: 0 });
  let votosDistribuidos4 = ref({ P2: 0, P3: 0 });
  let votosDistribuidos5 = ref({ P4: 0, P5: 0, P7: 0 });
  let votosDistribuidos6 = ref({ P4: 0, P5: 0 });
  let votosDistribuidos7 = ref({ P4: 0, P7: 0 });
  let votosDistribuidos8 = ref({ P5: 0, P7: 0 });

  let Coal1 = 0;
  let Coal2 = 0;
  let Coal3 = 0;
  let Coal4 = 0;
  let Coal5 = 0;
  let Coal6 = 0;
  let Coal7 = 0;
  let Coal8 = 0;

  // Función para obtener la ruta completa de una imagen


  onMounted(async () => {
    try {  
      const urlServer = eleccion.urlPrep;

      const item = eleccion.cmb1;
      const item_2 = eleccion.cmb2;
      const item_3 = eleccion.cmb3;
      const type = eleccion.eleccion;
      const  url = urlServer+"actas_grid_data.php?type="+type+"&item="+item+"&item_2="+item_2+"&item_3="+item_3;
      const responseURL = await fetch(url);
      let jsonData2 = await responseURL.json();
      data.value = jsonData2.resumen;

      console.log(data.value);


      const response = await fetch(urlServer + 'actas_contabilizadas.php');
      const response2 = await fetch(urlServer + 'api_distribucion_partido.php?type='+eleccion.cmb1+'&eleccion='+eleccion.eleccion).then(response => response.json())
      .then(data => {
          console.log(data);
          console.log(data.datosMSSQL);
          /**
           * Sumatoria de todos los campos que lleguen a faltar
           */
          (data.datosMSSQL).forEach(element => {
            // console.log(element.votos_part_1 != null ? element.votos_part_1 : 0);
            //PAN
            sumatoriasTMP.value['PP1'] += element.votos_part_1 != null ? element.votos_part_1 : 0 ;
            //PRI
            sumatoriasTMP.value['PP2'] += element.votos_part_2 != null ? element.votos_part_2 : 0 ;
            //PRD
            sumatoriasTMP.value['PP3'] += element.votos_part_3 != null ? element.votos_part_3 : 0 ;
            //VERDE
            sumatoriasTMP.value['PP4'] += element.votos_part_4 != null ? element.votos_part_4 : 0 ;
            //PT
            sumatoriasTMP.value['PP5'] += element.votos_part_5 != null ? element.votos_part_5 : 0 ;
            //MC
            sumatoriasTMP.value['PP6'] += element.votos_part_6 != null ? element.votos_part_6 : 0 ;
            //MORENA
            sumatoriasTMP.value['PP7'] += element.votos_part_7 != null ? element.votos_part_7 : 0 ;
            //CSP1
            sumatoriasTMP.value['PP8'] += element.votos_part_8 != null ? element.votos_part_8 : 0 ;
            //CSP2
            sumatoriasTMP.value['PP9'] += element.votos_part_9 != null ? element.votos_part_9 : 0 ;
            //PAN - PRI -PRD
            sumatoriasTMP.value['PP10'] += element.votos_part_10 != null ? element.votos_part_10 : 0 ;
            // PAN - PRI
            sumatoriasTMP.value['PP11'] += element.votos_part_11 != null ? element.votos_part_11 : 0 ;
            // PAN - PRD
            sumatoriasTMP.value['PP12'] += element.votos_part_12 != null ? element.votos_part_12 : 0 ;
            //PRI - PRD
            sumatoriasTMP.value['PP13'] += element.votos_part_13 != null ? element.votos_part_13 : 0 ;
            // VERDE - PT - MORENA
            sumatoriasTMP.value['PP14'] += element.votos_part_14 != null ? element.votos_part_14 : 0 ;
            // VERDE - PT
            sumatoriasTMP.value['PP15'] += element.votos_part_15 != null ? element.votos_part_15 : 0 ;
            // VERDE - MORENA
            sumatoriasTMP.value['PP16'] += element.votos_part_16 != null ? element.votos_part_16 : 0 ;
            //PT - MORENA
            sumatoriasTMP.value['PP17'] += element.votos_part_17 != null ? element.votos_part_17 : 0 ;
            // 
            sumatoriasTMP.value['COAL1'] += element.total_votos_cc1 != null ? element.total_votos_cc1 : 0;
            sumatoriasTMP.value['COAL2'] += element.total_votos_cc2 != null ? element.total_votos_cc2 : 0;
            sumatoriasTMP.value['COAL3'] += element.total_votos_cc3 != null ? element.total_votos_cc3 : 0;
            sumatoriasTMP.value['COAL4'] += element.total_votos_cc4 != null ? element.total_votos_cc4 : 0;
            sumatoriasTMP.value['COAL5'] += element.total_votos_cc5 != null ? element.total_votos_cc5 : 0;
            sumatoriasTMP.value['COAL6'] += element.total_votos_cc6 != null ? element.total_votos_cc6 : 0;
            sumatoriasTMP.value['COAL7'] += element.total_votos_cc7 != null ? element.total_votos_cc7 : 0;
            sumatoriasTMP.value['COAL8'] += element.total_votos_cc8 != null ? element.total_votos_cc8 : 0;
            sumatoriasTMP.value['COAL9'] += element.total_votos_cc9 != null ? element.total_votos_cc9 : 0;
          });


          //console.table(sumatoriasTMP);
          /**
           * Creación de variables para las coaliciones
          */
         //votos_part_10
          VotosCoaliciones1.value = [sumatoriasTMP.value['PP1'], sumatoriasTMP.value['PP2'], sumatoriasTMP.value['PP3']];
          //votos_part_11
          VotosCoaliciones2.value = [sumatoriasTMP.value['PP1'], sumatoriasTMP.value['PP2']];
          //votos_part_12
          VotosCoaliciones3.value = [sumatoriasTMP.value['PP1'], sumatoriasTMP.value['PP3']];
          //votos_part_13
          VotosCoaliciones4.value = [sumatoriasTMP.value['PP2'], sumatoriasTMP.value['PP3']];
          //votos_part_14
          VotosCoaliciones5.value = [sumatoriasTMP.value['PP4'], sumatoriasTMP.value['PP5'], sumatoriasTMP.value['PP7']];
          //votos_part_15
          VotosCoaliciones6.value = [sumatoriasTMP.value['PP4'], sumatoriasTMP.value['PP5']];
          //votos_part_16
          VotosCoaliciones7.value = [sumatoriasTMP.value['PP4'], sumatoriasTMP.value['PP7']];
          //votos_part_17
          VotosCoaliciones8.value = [sumatoriasTMP.value['PP5'], sumatoriasTMP.value['PP7']];

          //PAN-PRI-PRD
          Coal1 = sumatoriasTMP.value['PP10'];
          //PAN-PRI
          Coal2 = sumatoriasTMP.value['PP11'];
          //PAN-PRD
          Coal3 = sumatoriasTMP.value['PP12'];
          //PRI-PRD
          Coal4 = sumatoriasTMP.value['PP13'];
          //VERDE-PT-MORENA
          Coal5 = sumatoriasTMP.value['PP14'];
          //VERDE-PT
          Coal6 = sumatoriasTMP.value['PP15'];
          //VERDE-MORENA
          Coal7 = sumatoriasTMP.value['PP16'];
          //PT-MORENA
          Coal8 = sumatoriasTMP.value['PP17'];

          if( Coal1>0 ){ //PAN PRI PRD
            distribucionVotos1('COAL1', Coal1, VotosCoaliciones1.value);
          }
          if ( Coal2>0 ){ //PAN PRI
            distribucionVotos1('COAL2', Coal2, VotosCoaliciones2.value);
          }
          if ( Coal3>0 ){// PAN PRD
            distribucionVotos1('COAL3', Coal3, VotosCoaliciones3.value);
          }
          if ( Coal4>0 ){ // PRI PRD
            distribucionVotos1('COAL4', Coal4, VotosCoaliciones4.value);
          }
          if ( Coal5>0 ){ // VERDE PT MORENA
            distribucionVotos1('COAL5', Coal5, VotosCoaliciones5.value);
          }
          if ( Coal6>0 ){ // VERDE PT
            distribucionVotos1('COAL6', Coal6, VotosCoaliciones6.value);
          }
          if ( Coal7>0 ){ // VERDE MORENA
            distribucionVotos1('COAL7', Coal7, VotosCoaliciones7.value);
          }
          if ( Coal8>0 ){ // PT MORENA
            distribucionVotos1('COAL8', Coal8, VotosCoaliciones8.value);
          }
        }
      )
      .catch(error => console.error('Error:', error));
      
      const jsonData = await response.json();
      categories.value = jsonData.categories;

      console.table(categories.value);

      // const jsonData2 = await response2.json();
      // datos = jsonData2.datosMSSQL;
      
    } catch (error) {
      console.error('Error al cargar los datos:', error);
    }
  });

  function distribucionVotos1(coalicion, votosCoalicion, votosPart){
    console.log(coalicion, votosCoalicion, votosPart, ' Esto es');
    // console.log(coalicion);
    const coaliciones =  { COAL1: [1,2,3],             COAL2: [1,2],   COAL3: [1,3],   COAL4: [2,3],   COAL5: [4,5,7],          COAL6: [4,5],   COAL7: [4,7],   COAL8: [5,7]} ;
    const porcentajes =  { COAL1: [33.33,33.33,33.33], COAL2: [50,50], COAL3: [50,50], COAL4: [50,50], COAL5: [26.67,20,53.33], COAL6: [50,50], COAL7: [50,50], COAL8: [50,50]} ;
    const partidosCCArray = coaliciones[coalicion];
    const porcentajeArray = porcentajes[coalicion];
    const partidos = partidosCCArray.length;
    console.log(partidosCCArray);
    console.log(sumatoriasTMP.value);
    console.table(porcentajeArray);
    let bandera = false;
    let sortVotosPart = [...votosPart];
    let reparto = [];
    if (coalicion != 'COAL5' && coalicion != 'COAL8'){
      const division = Math.trunc(votosCoalicion/partidos);
      console.log('division', division);
      const modulo = (votosCoalicion%partidos);
      console.log('modulo', modulo);
      for(let b =0; b< partidos; b++){
        reparto[b] = division;
      }
    } else {
      bandera = true;
    }
    if ( bandera ){
      for(let a = 0; a < partidos; a++ ){
        reparto[a] = Math.trunc((votosCoalicion*porcentajeArray[a]) / 100);
        if(coalicion == 'COAL5'){
          decimales.value += ((votosCoalicion*porcentajeArray[a]) / 100) % 1;
        }
      }
      
    }
    
    
    console.table(reparto);
    for (let i=0; i<partidos; i++){
      let indice = 'P'+coaliciones[coalicion][i];
      console.log(coalicion, indice);
      sumatoriasTMP.value[indice] += reparto[i];
      if( coalicion == 'COAL1'){
        votosDistribuidos1.value[indice] += reparto[i];
        console.table(votosDistribuidos1.value);
      } else if(coalicion == 'COAL2'){
        console.table(votosDistribuidos2.value);
        votosDistribuidos2.value[indice] += reparto[i];
      } else if(coalicion == 'COAL3'){
        console.table(votosDistribuidos3.value);
        votosDistribuidos3.value[indice] += reparto[i];
      } else if(coalicion == 'COAL4'){
        votosDistribuidos4.value[indice] += reparto[i];
        console.table(votosDistribuidos4.value);
      } else if(coalicion == 'COAL5'){
        votosDistribuidos5.value[indice] += reparto[i];
        console.table(votosDistribuidos5.value);
      } else if(coalicion == 'COAL6'){
        votosDistribuidos6.value[indice] += reparto[i];
        console.table(votosDistribuidos6.value);
      } else if(coalicion == 'COAL7'){
        votosDistribuidos7.value[indice] += reparto[i];
        console.table(votosDistribuidos7.value);
      } else if(coalicion == 'COAL8'){
        votosDistribuidos8.value[indice] += reparto[i];
        console.table(votosDistribuidos8.value);
      }
    }
    console.table(sumatoriasTMP.value);
    //return sumatoriasTMP;
  }

  // function distribucionVotos1(coalicion, votosCoalicion, votosPart){
  //   // console.log(coalicion);
  //   const coaliciones =  { COAL1: [1,2,3], COAL2: [1,2], COAL3: [1,3], COAL4: [2,3], COAL5: [4,5,7], COAL6: [4,5], COAL7: [4,7], COAL8: [5,7]} ;
  //   const partidosCCArray = coaliciones[coalicion];
  //   console.log(partidosCCArray);
  //   // let sumatorias = [];
  //   console.log(sumatoriasTMP.value);
  //   // console.log(partidosCCArray);
  //   const partidos = partidosCCArray.length;

  //   const division = Math.trunc(votosCoalicion/partidos);
  //   console.log('division', division);

  //   const modulo = (votosCoalicion%partidos);
  //   console.log('modulo', modulo);

  //   let sortVotosPart = [...votosPart];

  //   sortVotosPart.sort((a, b) => a - b);
  //   // console.log(votosPart);

  //   const mayor = sortVotosPart[partidos-1];
  //   const empates = sortVotosPart[partidos -2] == mayor ? 1 : 0;

  //   let reparto = [];

  //   if (modulo === 0) {
  //     for(let i =0; i< partidos; i++){
  //       reparto[i] = division;
  //     }
  //   } else if (modulo === 1){
  //     for(let i =0; i< partidos; i++){
  //       reparto[i] = division;
  //     }

  //     for(let i =0; i<partidos; i++){
  //       if(sortVotosPart[i] == mayor){
  //         reparto[i]++;
  //         break;
  //       }
  //     }
  //   } else if(modulo === 2){
  //     for(let i=0; i<partidos; i++){
  //     reparto[i] = division; 
  //     }
  //     if(empates  ===1){
  //       sortVotosPart.foreach(element =>{
  //         if(votosPart[element] == mayor){
  //           reparto[element]++;
  //         } else {
  //           for(let i =0; i< partidos-1; i++){
  //             reparto[element]++;
  //           }
  //         }
  //       })
  //     }
  //   }
  //   console.table(reparto);
  //   for (let i=0; i<partidos; i++){
  //     let indice = 'P'+coaliciones[coalicion][i];
  //     console.log(coalicion, indice);
  //     sumatoriasTMP.value[indice] += reparto[i];
  //     if( coalicion == 'COAL1'){
  //       votosDistribuidos1.value[indice] += reparto[i];
  //       console.table(votosDistribuidos1.value);
  //     } else if(coalicion == 'COAL2'){
  //       console.table(votosDistribuidos2.value);
  //       votosDistribuidos2.value[indice] += reparto[i];
  //     } else if(coalicion == 'COAL3'){
  //       console.table(votosDistribuidos3.value);
  //       votosDistribuidos3.value[indice] += reparto[i];
  //     } else if(coalicion == 'COAL4'){
  //       votosDistribuidos4.value[indice] += reparto[i];
  //       console.table(votosDistribuidos4.value);
  //     } else if(coalicion == 'COAL5'){
  //       votosDistribuidos5.value[indice] += reparto[i];
  //       console.table(votosDistribuidos5.value);
  //     } else if(coalicion == 'COAL6'){
  //       votosDistribuidos6.value[indice] += reparto[i];
  //       console.table(votosDistribuidos6.value);
  //     } else if(coalicion == 'COAL7'){
  //       votosDistribuidos7.value[indice] += reparto[i];
  //       console.table(votosDistribuidos6.value);
  //     }
  //   }
  //   console.table(sumatoriasTMP.value);
  //   //return sumatoriasTMP;
  // }

  const prop = defineProps({
    categories: {
            type: Array,
            required: "true"
    },
    tipo: {
        type: Number
    }
  });

  /*
  const getImagePath = (imageName) => {
      return `/personas/${imageName}.png`;
    };
  const getImagePathPartido = (imageName) => {
    return `/partidos/${imageName}.jpg`;
  };
  */
</script>