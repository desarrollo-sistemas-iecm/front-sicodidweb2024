<template>
<!--
    DATOS: 
   {{ props.datos }}
   <br><br><br><br>
   eleccion: 
   {{ eleccion.eleccion }}
-->

   
    <highcharts :key="props.id" :constructor-type="'mapChart'" :options="chartOptions" />
    

</template>
  
<script setup>
  //import worldMap from "../../src/assets/alcaldias.geo.json";
  import { ref,computed } from "vue";

  import {useEleccionStore} from "../stores/eleccion_actual"
  import { useRoute, useRouter } from "vue-router";

  const eleccion = useEleccionStore();
  const votosDto = ref(eleccion.rank_dto_dmr);  // MAPA SOLO PARA 2
  const votosAlcaldia = ref(eleccion.rank_del_alc); 

  const route = useRoute();   // La url
  const router = useRouter();

  const props = defineProps({
      datos: {
          type: Array,
          required: "true"
      },
      id: {
          type: String
      },
      mapaJSON: {
          type: Object,
          required: 'true'
      }
  });

  const tipoMapa = computed(() => {
      if(eleccion.cmb2=="") return "NO MOSTRAR"

      return eleccion.cmb1 && eleccion.cmb2 && !eleccion.cmb3;
    })


  // console.log(props.datos)
  const chartOptions = ref({
    chart: {
      map: props.mapaJSON
    },
    title: {
							text: props.id==4? "ALCALDÍAS": "DISTRITOS"
		},
    subtitle: {
							text: 'Votos obtenidos',
              style: {
                  color: '#FF00FF',
                  fontWeight: 'bold'
              }
		},
    colorAxis: {
      min: 0,
    },
    credits: {
							enabled: false
		},
    mapNavigation: {
      enabled: true,
      buttonOptions: {
        verticalAlign: 'bottom'
      }
    },
    tooltip: {
        //backgroundColor: null,
        enabled: false,   /// OJO!!! PONER A TRUE PARA MOSTRAR DATOS EN TOOLTIPS
        borderWidth: 1,
        shadow: false,
        useHTML: true,
        styledMode: true,
        opacity: 1,
        style: {
            padding: "1"
        },
        backgroundColor: "#ffffff",
				borderRadius: 5,
        headerFormat: '<div style="background-color: white; border-top-right-radius:5px;border-top-left-radius:5px; border-left: 1px solid #73AD21;border-right: 1px solid #73AD21; border-top: 1px solid #73AD21;background-image: url(/partidos/back.gif);padding: 5px;">Alcaldia</div>',
				pointFormat: props.id==4? 
                    '<div style="background-color: white; border-bottom-right-radius:5px;border-bottom-left-radius:5px;background-image: url(/partidos/back.gif);padding: 5px; border-left: 14px solid {point.color};border-right: 1px solid #73AD21;border-bottom: 1px solid #73AD21;"><img style="width: 36px; height: 36px;" src=\'/partidos/{point.image}\'>'+'<br><b> * {point.properties.nomgeo}</b><br>Clave: {point.properties.cve_mun}<br>{point.value}</div>'
                    :
                    '<div style="background-color: white; border-bottom-right-radius:5px;border-bottom-left-radius:5px;background-image: url(/partidos/back.gif);padding: 5px; border-left: 14px solid {point.color};border-right: 1px solid #73AD21;border-bottom: 1px solid #73AD21;"><img style="width: 36px; height: 36px;" src=\'/partidos/{point.image}\'>'+'<br><b> * Dto {point.properties.DISTRITO_L}</b><br>Clave: {point.properties.DISTRITO_L}<br>{point.value}</div>',
        footerFormat: null,
    },
    plotOptions:{
              series:{
                point:{
                  events:{
                    click: function(){

                      const elemetoMapa = (this.DISTRITO_L?  parseInt(this.DISTRITO_L) : parseInt(this.cve_mun));
                      
                      buscarCMB(elemetoMapa);
                      //alert(elemetoMapa + " - " +this.value);
                      //window.location.href = "http://www.w3schools.com";
                      console.log("LEI EN MAPA: ")
                      console.log(this);
                    }
                  }
                }
              }
    },
    legend: {
      enabled: false
    },
    series: [
      {
        name: "Votos",
        keys: props.id!=4? ['DISTRITO_L', 'value','color', 'image']: ['cve_mun', 'value','color','image'],
        joinBy: props.id!=4? 'DISTRITO_L':'cve_mun',
        
        states: {
          hover: {
            color: "#BADA55",
          },
        },
        dataLabels: {
          enabled: true,
          useHTML: true,
          format: props.id!=4? '{point.properties.DISTRITO_L}':'{point.properties.nomgeo}'
        },
        allAreas: true,

        data :   props.datos
      },
    ],
  });




  
  const buscarCMB = (elemento) =>{
        //alert(message.value.toString());
        buscaElemento(elemento);
        //eleccion.combosActuales('3', '56', '2.2.2', (new Date()).getTime() +'2', false);
  }
  // PARA BUSCAR CMB1
  const buscaElemento =  (elemento) => {
      try {

        eleccion.desdeSeccion = true;
        //alert(jsonData.encontrada.cuantos);
        eleccion.readData = true;
        
        // los paso como strings
        eleccion.cmb1 = elemento +"";
        eleccion.cmb2 = "-1";
        //eleccion.readData = true;
        //eleccion.cmb2= secc;
        
        eleccion.keyCmb = (new Date()).getTime() + 22*2;

        //router.push({name: "cadidatos", params:{id: 'Candidatos!!!'}, query:{ key: Date.now() }})
        eleccion.desdeSeccion = false;

        // PARA LIMPIAR COMBOS CUANDO CAMBIA EN MENU PRINCIPAL 11/SEP/2023
        // eleccion.combosActualesValidos("","","",paramID.value);
        //updateSecciones()
      } catch (error) {
        eleccion.desdeSeccion = false;
        console.error('Error al cargar los datos:', error);
      }
    };





</script>

<style scoped>
.map {
  min-height: 1100px;
}

div {
  fill: black;
  fill-opacity: 0.6;
  stroke-width: 0;
  background-image: url(/partidos/back.gif); 
}

.highcharts-tooltip text {
  fill: white;
  text-shadow: 0 0 3px black;
}
 </style>