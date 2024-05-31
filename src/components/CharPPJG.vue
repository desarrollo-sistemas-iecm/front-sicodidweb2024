<template>
    <highcharts class="hc" :options="chartOptions"  v-if="!isMobile()"></highcharts>
    <a-row style="align-items: center; text-align: center; justify-content: center" v-else>
        <template v-for="(cat) in dataChart" :key="cat.name">
            <a-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                <a-card hoverable style="margin-top: 4%; margin-bottom: 4%;" :style="{'background-color': eleccion.tema ?  '#eae3e7' : '#9c9c9c'}">
                    <img :src="getImagePathPartido(cat.name)">
                    <a-row style="align-items: center; text-align: center; margin-top: 5%;">
                        <a-col :xs="12" :sm="12" :md="12" :lg="12" :xl="12">
                            <b>Total de votos</b>
                        </a-col>
                        <a-col :xs="12" :sm="12" :md="12" :lg="12" :xl="12">
                            <b>Porcentaje</b>
                        </a-col>
                        <a-col :xs="12" :sm="12" :md="12" :lg="12" :xl="12">
                            <p><strong> {{ cifrasMiles(totales(cat.name)) }}</strong></p>
                        </a-col>
                        <a-col :xs="12" :sm="12" :md="12" :lg="12" :xl="12">
                            <p style="padding-top:9px"><strong>{{ ((totales(cat.name)*100)/sumatoriasTMP.votacion_total).toFixed(4) }} %</strong></p>
                        </a-col>
                    </a-row>
                </a-card>
            </a-col>
        </template>
    </a-row>
</template>
<script setup>
  import {useEleccionStore} from "../stores/eleccion_actual";
  import { getImagePathPartido, formatNumber, getImagePathPartidoCoalicion, cifrasMiles} from "../helpers";
  import { ref, onMounted, computed, onBeforeMount } from 'vue';
  import { isMobile, nombresJG } from "../helpers";

  const getImagePath = (tipo, imageName) => {
    return (eleccion.urlPrep + tipo + "/"+ imageName);
  };

  const eleccion = useEleccionStore();
  const data = ref([]);
  let categories = ref([]);
  let decimales = ref(0);

  let sumatoriasTMP = ref({ PP1: 0 ,  PP2: 0 ,  PP3: 0 ,  PP4: 0 ,  PP5: 0 ,  PP6: 0 ,  PP7: 0 ,  PP8: 0 , PP9: 0, PP10: 0, PP11:0, PP12:0, PP13:0, PP14:0, PP15: 0, PP16:0, PP17:0, COAL1: 0 ,  COAL2: 0 ,  COAL3: 0 ,  COAL4: 0 ,  COAL5: 0 ,  COAL6: 0 ,  COAL7:0 ,  COAL8:0 ,  COAL9:0, P1:0, P2:0, P3:0, P4:0, P5:0, P6:0, P7:0, P8:0, votacion_total: 0 });
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
  let chartOptions = ref({});

  let Coal1 = 0;
  let Coal2 = 0;
  let Coal3 = 0;
  let Coal4 = 0;
  let Coal5 = 0;
  let Coal6 = 0;
  let Coal7 = 0;
  let Coal8 = 0;

  const dataJSON = ref([]);


  const dataTmp = ref([]);
  const noRegTmp = ref(0);
  const nulosTmp = ref(0);

  const dataChart = ref([]);
  const totalPorcentajesChart = ref([]);
  const totalVotosParChat = ref([]);
  const partidosChart = ref([]);
  const nombreChart = ref([]);


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

      //console.log(data.value);


      const response = await fetch(urlServer + 'actas_contabilizadas.php');
      const response2 = await fetch(urlServer + 'api_distribucion_partido.php?type='+eleccion.cmb1+'&eleccion='+eleccion.eleccion).then(response => response.json())
      .then(data => {
          /**
           * Sumatoria de todos los campos que lleguen a faltar
           */
          (data.datosMSSQL).forEach(element => {
            // //console.log(element.votos_part_1 != null ? element.votos_part_1 : 0);
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
            sumatoriasTMP.value['votacion_total'] += element.votacion_total != null ? element.votacion_total : 0;
          });


          ////console.table(sumatoriasTMP);
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

      //console.table(categories.value);

      // const jsonData2 = await response2.json();
      // datos = jsonData2.datosMSSQL;

      chartOptions.value = {
        chart: {
              type: 'column',
                    zoomType: null,
                    zooming: {
                        mouseWheel: {
                        enabled: false
                        }
                    },
                    height: 750
        },
        credits: {
                        enabled: false
        },
        title: {
            text: null ///'Browser market shares. January, 2018'
        },
        subtitle: {
            text: null  //'Click the columns to view versions. Source: <a href="http://statcounter.com" target="_blank">statcounter.com</a>'
        },
        xAxis: {
            type: 'category',
            labels: {
                useHTML: true,
                animate: true,
                padding: 50,
                formatter: function () {
                    var value = this.value,
                        output;
                        output = this.value;
                    var prefijo = "";

                    var indiceReal = value;
                    // alert(value);

                    if(isNaN(totales(value))){
                        return "--";
                    }
                    else{
                      if(value == 1){
                        return '<b>'+ nombres[value] +'</b><br><br><img style="display: block; border: 1px solid #000; margin-left: auto; margin-right: auto;" src="' + getImagePath("partidos" ,prefijo + value) + '.jpg" /><br><br><br>'+cifrasMiles(totales(value))+'<br>'+((totales(value)*100)/sumatoriasTMP.value['votacion_total']).toFixed(4)+'%<br><br><br><br>';             
                      } else if(value == 2){
                        return '<b>'+ nombres[value] +'</b><br><br><img style="display: block; border: 1px solid #000; margin-left: auto; margin-right: auto;" src="' + getImagePath("partidos" ,prefijo + value) + '.jpg" /><br><br><br>'+cifrasMiles(totales(value))+'<br>'+((totales(value)*100)/sumatoriasTMP.value['votacion_total']).toFixed(4)+'%<br><br><br><br>';             
                      } else if(value == 3){
                        return '<b>'+ nombres[value] +'</b><br><br><img style="display: block; border: 1px solid #000; margin-left: auto; margin-right: auto;" src="' + getImagePath("partidos" ,prefijo + value) + '.jpg" /><br><br><br>'+cifrasMiles(totales(value))+'<br>'+((totales(value)*100)/sumatoriasTMP.value['votacion_total']).toFixed(4)+'%<br><br><br><br>';             
                      } else if(value == 4){
                        return '<b>'+ nombres[value] +'</b><br><br><img style="display: block; border: 1px solid #000; margin-left: auto; margin-right: auto;" src="' + getImagePath("partidos" ,prefijo + value) + '.jpg" /><br><br><br>'+cifrasMiles(totales(value))+'<br>'+((totales(value)*100)/sumatoriasTMP.value['votacion_total']).toFixed(4)+'%<br><br><br><br>';             
                      } else if(value == 5){
                        return '<b>'+ nombres[value] +'</b><br><br><img style="display: block; border: 1px solid #000; margin-left: auto; margin-right: auto;" src="' + getImagePath("partidos" ,prefijo + value) + '.jpg" /><br><br><br>'+cifrasMiles(totales(value))+'<br>'+((totales(value)*100)/sumatoriasTMP.value['votacion_total']).toFixed(4)+'%<br><br><br><br>';             
                      } else if(value == 7){
                        return '<b>'+ nombres[value] +'</b><br><br><img style="display: block; border: 1px solid #000; margin-left: auto; margin-right: auto;" src="' + getImagePath("partidos" ,prefijo + value) + '.jpg" /><br><br><br>'+cifrasMiles(totales(value))+'<br>'+((totales(value)*100)/sumatoriasTMP.value['votacion_total']).toFixed(4)+'%<br><br><br><br>';             
                      } else {
                        return '<b>'+ nombres[value] +'</b><br><br><img style="display: block; border: 1px solid #000; margin-left: auto; margin-right: auto;" src="' + getImagePath("partidos" ,prefijo + value) + '.jpg" /><br><br><br>'+cifrasMiles(totales(value))+'<br>'+((totales(value)*100)/sumatoriasTMP.value['votacion_total']).toFixed(4)+'%<br><br><br><br>';             
                      }
                    }
                    //return '<span><img style="display: block; margin-left: auto; margin-right: auto;" src="' + getImagePath("personas" , data[output-1].name) + '.png" /><br><b>Nombre(s)</b><br><b>Apellidos(s)</b><img style="display: block; border: 1px solid #000; margin-left: auto; margin-right: auto;" src="' + getImagePath("partidos" ,prefijo + data[output-1].name) + '.jpg" /><br><br><br>'+totalVotosPar[output-1]+'<br>'+totalPorcentajes[output-1]+'<br><br>10000<br>900<br>200<br>100<br><br><br><br></span>';
                
                },
                align: 'center',
                x: 0,
                y: 45,

            },
            title: {
                text: '<b>Votos<br><br><label style="font-size:8px">Total<br>Porcentaje</label></b>',
                align: 'low',
                // nuevo
                //offset: 0,
                floating: false,
                //floating: true,
            x: -35,
            y: -95
            },
            min: 0,
            max: 5,//dataChart.length,
            scrollbar: {
                enabled: true,
                
                buttonBackgroundColor:'white',
                buttonBorderColor:'white',
                buttonArrowColor:'white' 
            },
            tickLength: 0

        },
        yAxis: {
            title: {
                text: null //'Total percent market share'
            },
            /*visible: false,
            labels: {
                enabled: false
            }*/

        },
        legend: {
            enabled: false
        },
        plotOptions:{
            series:{
                point:{
                    events:{
                        click: function(){
    //alert(this.cve_mun + " - "+this.value);
    //window.location.href = "http://www.w3schools.com";
            //window.location.href = "screen01_01.php?4lc4l="+this.cve_mun+"&t1p0=A";
                        }
                    }
                },
                borderWidth: 1,
                borderColor: '#34344e',
              
            }
        },
        tooltip: {
            headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
            //pointFormat: '<span style="color:{point.color}">{point.nombre}</span>: <b>{point.y:.0f}</b> votos<br/>',
            pointFormat: '<span style="color:{point.color}">{point.nombre}</span>: <b>{point.y}</b> votos<br/>',
            enabled: true
        },

        series: [
            {
                name: "Votos",
                colorByPoint: true,
                data: data1,
                // -- FIN DATA
            }
        ],
        
      };
      const datoJsonTem = categories.value;

        // 23/marzo/2024
      const datoJson = datoJsonTem;

      dataJSON.value = datoJson.filter(
        (e) =>  e.id != '').map((e) => { return {id: e.id, campo: e.id, valor: totales(e.id), partido: e.name, porcentaje:e.porcentaje }}
      ); 

      var colores = [];
      colores[2] = "#009f65";
      colores[6] = "#f58100";
      colores[9] = "#15a152";
      colores[3] = "#ffcd04";
      colores[4] = "#4eb45b";
      colores[5] = "#ef1c1e";
      colores[8] = "#fd8204";
      colores[7] = "#7b2629";
      colores[10] = "#e6057e";
      colores[11] = "#000000";

      dataTmp.value = dataJSON.value; //eleccion.votos_del_jg_total.data;
      
      dataTmp.value.forEach((elemento) => {
        // console.log( elemento, 'ESTO ES ELEMENTO');
        if ( eleccion.eleccion == 1 && elemento.id != '8' && elemento.id != '9'
        || eleccion.eleccion == 2 && elemento.id != '8' && elemento.id != '9' && eleccion.cmb1 >= 1 && eleccion.cmb1 <= 20
        || eleccion.eleccion == 2 && elemento.id != '9' && eleccion.cmb1 == 21 
        || eleccion.eleccion == 2 && elemento.id != '8' && elemento.id != '9' && eleccion.cmb1 > 21 
        || eleccion.eleccion == 4 && elemento.id != '8' && elemento.id != '9' && eleccion.cmb1 >= 2 && eleccion.cmb1 <= 5
        || eleccion.eleccion == 4 && elemento.id != '8' && eleccion.cmb1 == 6 
        || eleccion.eleccion == 4 && elemento.id != '8' && elemento.id != '9' && eleccion.cmb1 > 6 ){
          //alert(elemento.id)
          // Puedes acceder a más propiedades aquí según tu necesidad
          dataChart.value.push(
              { name: elemento.id, y: totales(elemento.id), color: colores[elemento.id], nombre: elemento.partido},
          );
          totalPorcentajesChart.value[elemento.id] = elemento.porcentaje; //"0%";
          totalVotosParChat.value[elemento.id] = totales(elemento.id);
          nombreChart.value[elemento.id] = ""; //elemento.descripcion;
          partidosChart.value.push(elemento.id);
        }
      });
    } catch (error) {
      console.error('Error al cargar los datos:', error);
    }
  });

  function totales(value){
    if(value == '1'){
      return sumatoriasTMP.value['PP'+value] + votosDistribuidos1.value['P'+value] + votosDistribuidos2.value['P'+value] + votosDistribuidos3.value['P'+value];             
    } else if(value == '2'){
      return sumatoriasTMP.value['PP'+value] + votosDistribuidos1.value['P'+value] + votosDistribuidos2.value['P'+value] + votosDistribuidos4.value['P'+value];             
    } else if(value == '3'){
      return sumatoriasTMP.value['PP'+value] + votosDistribuidos1.value['P'+value] + votosDistribuidos3.value['P'+value] + votosDistribuidos4.value['P'+value];             
    } else if(value == '4'){
      return sumatoriasTMP.value['PP'+value] + votosDistribuidos5.value['P'+value] + votosDistribuidos6.value['P'+value] + votosDistribuidos7.value['P'+value];             
    } else if(value == '5'){
      return sumatoriasTMP.value['PP'+value] + votosDistribuidos5.value['P'+value] + votosDistribuidos6.value['P'+value] + votosDistribuidos8.value['P'+value];             
    } else if(value == '7'){
      return sumatoriasTMP.value['PP'+value] + votosDistribuidos5.value['P'+value] + votosDistribuidos7.value['P'+value] + votosDistribuidos8.value['P'+value] + Math.round(decimales.value);             
    } else {
      return sumatoriasTMP.value['PP'+value];            
    }
  }

  function distribucionVotos1(coalicion, votosCoalicion, votosPart){
    //console.log(coalicion, votosCoalicion, votosPart, ' Esto es');
    // //console.log(coalicion);
    const coaliciones =  { COAL1: [1,2,3],             COAL2: [1,2],   COAL3: [1,3],   COAL4: [2,3],   COAL5: [4,5,7],          COAL6: [4,5],   COAL7: [4,7],   COAL8: [5,7]} ;
    const porcentajes =  { COAL1: [33.33,33.33,33.33], COAL2: [50,50], COAL3: [50,50], COAL4: [50,50], COAL5: [26.67,20,53.33], COAL6: [50,50], COAL7: [50,50], COAL8: [50,50]} ;
    const partidosCCArray = coaliciones[coalicion];
    const porcentajeArray = porcentajes[coalicion];
    const partidos = partidosCCArray.length;
    //console.log(partidosCCArray);
    //console.log(sumatoriasTMP.value);
    //console.table(porcentajeArray);
    let bandera = false;
    let sortVotosPart = [...votosPart];
    let reparto = [];
    if (coalicion != 'COAL5' && coalicion != 'COAL8'){
      const division = Math.trunc(votosCoalicion/partidos);
      //console.log('division', division);
      const modulo = (votosCoalicion%partidos);
      //console.log('modulo', modulo);
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
    
    
    //console.table(reparto);
    for (let i=0; i<partidos; i++){
      let indice = 'P'+coaliciones[coalicion][i];
      //console.log(coalicion, indice);
      sumatoriasTMP.value[indice] += reparto[i];
      if( coalicion == 'COAL1'){
        votosDistribuidos1.value[indice] += reparto[i];
        //console.table(votosDistribuidos1.value);
      } else if(coalicion == 'COAL2'){
        //console.table(votosDistribuidos2.value);
        votosDistribuidos2.value[indice] += reparto[i];
      } else if(coalicion == 'COAL3'){
        //console.table(votosDistribuidos3.value);
        votosDistribuidos3.value[indice] += reparto[i];
      } else if(coalicion == 'COAL4'){
        votosDistribuidos4.value[indice] += reparto[i];
        //console.table(votosDistribuidos4.value);
      } else if(coalicion == 'COAL5'){
        votosDistribuidos5.value[indice] += reparto[i];
        //console.table(votosDistribuidos5.value);
      } else if(coalicion == 'COAL6'){
        votosDistribuidos6.value[indice] += reparto[i];
        //console.table(votosDistribuidos6.value);
      } else if(coalicion == 'COAL7'){
        votosDistribuidos7.value[indice] += reparto[i];
        //console.table(votosDistribuidos7.value);
      } else if(coalicion == 'COAL8'){
        votosDistribuidos8.value[indice] += reparto[i];
        //console.table(votosDistribuidos8.value);
      }
    }
    //console.table(sumatoriasTMP.value);
  }
  const prop = defineProps({
    categories: {
            type: Array,
            required: "true"
    },
    tipo: {
        type: Number
    }
  });
    
    var data1 = dataChart.value;

    var totalPorcentajes= totalPorcentajesChart.value;

    var totalVotosPar= totalVotosParChat.value;

    var partidos = partidosChart.value;

    var nombres = nombreChart.value;

</script>