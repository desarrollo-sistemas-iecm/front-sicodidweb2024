

<template>

  <highcharts :key="lnGrafPor" :options="chartOptions"></highcharts>
  
</template>

<script setup>
import { ref, onBeforeMount, nextTick, computed } from "vue";
import { formatNumber, cifrasMiles } from "../helpers";

const props = defineProps({
    ln: Number, 
    ln_captura: Number
});

// Nuevo 
const ln = ref(0);
const ln_captura = ref(0);
const lnGrafPor = ref(0.00);

onBeforeMount(async () => {
  
  ln.value = props.ln;
  ln_captura.value = props.ln_captura;

  if(ln_captura.value>0){
    lnGrafPor.value =  (ln.value*100)/ln_captura.value
    
  }

  await nextTick();
})

const porcentajeLN = computed(() => {
    return (ln.value*100)/ln_captura.value;
});

const chartOptions = ref({
        chart: {
          type: "solidgauge",
          styledMode: false,
          margin: 0,
          borderWidth: 2,
          plotBackgroundColor: 'white',
          plotShadow: true,
          plotBorderWidth: 1,
          height: 400
        },
        exporting: { enabled: false },
        tooltip: { enabled: false },
        credits: { enabled: false },
        title: {
          text: '<br>Lista Nominal de las casillas<br>con Actas Contabilizadas<br><label style="font-size:16px;color:black; font-weight:bold">'+formatNumber(Number(props.ln_captura))+'</label>',
          align: 'right',
          style: {
            fontSize: '12px'
          }
        },
        pane: {
								 startAngle: -90,
								 endAngle: 90,
								 background: [{ // Track for Move
								   outerRadius: '112%',
								   innerRadius: '88%',
								   backgroundColor: 'none',
								   borderWidth: 0
								}, { // Track for Exercise
								  outerRadius: '87%',
								  innerRadius: '63%',
								  backgroundColor: 'none',
								  borderWidth: 0
								}, { // Track for Stand
								  outerRadius: '62%',
								  innerRadius: '38%',
								  backgroundColor: 'none',
								  borderWidth: 0
								}]
							  },
							  yAxis: {
								min: 0,
								max: 100,
								lineWidth: 0,
								tickPositions: [],
								labels: {
								  y: 16
								}
							  },
							  plotOptions: {
								  solidgauge: {
									  dataLabels: {
									   enabled: false
									   //y: 5,
									   //borderWidth: 0,
									   //useHTML: true
									  },
									  linecap: 'round',
									  stickyTracking: false,
									  rounded: false
								  },

							  },
							series: [{
                              name: 'Lista Nominal de casillas aprobadas',
                              colorByPoint: true,
                              data: [{
                                color: '#E3E3E3',
                                radius: '100%',
                                innerRadius: '78%',
                                y: 100,
                                completa:  formatNumber(Number(props.ln))
                              }],
                              dataLabels: {

                                  borderWidth: 0,
                                  enabled: true,
                                  useHTML: true,
                                  allowOverlap: true,
                                  align: 'center',
                                  y:-40,
                                 //format: '<span style="text-align: center;"><label style="color:#000000; font-weight: bold">{series.name}</label><br><label style="font-size:22px; color: Black; text-align:center; font-weight: bold">{point.completa}</label></span>',
                                 formatter: function() {
                                  //return `<div style="text-align: center;"><label style="color:#000000; font-weight: bold; font-size:15px;">${this.series.name}</label><br><label style="font-size:22px; color: Black; text-align:center; font-weight: bold">${this.point.completa}</label></div><div style='font-size: 13px; text-align: center;'><span>${this.series.name}</span><br></br><span> ${this.point.completa}</span></div>`;
                                  return `<div style='font-size: 13px; text-align: center;'><span>Lista nominal de<br>casillas aprobadas</br></br></span><span style='font-size:22px;'> ${this.point.completa}</span></div>`;
                                },
                                 style: {
                                  textShadow: false,
                                  'fontSize': '10px'
                                },
                               },
                              
                      }, 
                      {
                              name: 'Capturadas',
                              colorByPoint: true,
                              data: [{
                                color: '#C791A8',
                                radius: '85%',
                                innerRadius: '95%', //75%

                                y: porcentajeLN
                              }],
                              dataLabels: {
                                  enabled: false ,  ////!!! OJO
                                  format: '<div style="text-align:center;><span style="color:#F4CEE8; font-weight: bold">{series.name}</span><br><span style="font-size:12px; color: {point.color}; font-weight: bold">{point.y} %</span></div>'
                              }
							        }
                  ]
      }
);
</script>

<style scoped>
.highcharts-data-label span {
  text-align: center
}
</style>