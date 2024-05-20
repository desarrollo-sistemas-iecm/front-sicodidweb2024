<template>

    <highcharts class="hc" style="width: 350px;" :options="chartOptions"></highcharts>
</template>
  
<script setup>

import { ref, onBeforeMount } from "vue";

const props = defineProps({
    actas_capturadas: String, 
    actas_capturadas_de: String,
    actas_contabilizadas: String,
});

const chartOptions = ref({
    chart: {
              type: 'column',
          },
    title: {
        text: 'Actas',
        align: 'left'
    },
    credits: {
                    enabled: false
    },
    /*
    subtitle: {
              text: 'Source: <a ' +
                  'href="https://en.wikipedia.org/wiki/List_of_continents_and_continental_subregions_by_population"' +
                  'target="_blank">Wikipedia.org</a>',
              align: 'left'
    },
    */
    series: [{
              name: null,
              data: [
                {y: props.actas_capturadas_de, color:"#C791A8"} , 
                {y: props.actas_capturadas, color:"#B283B9  "},
                {y: props.actas_contabilizadas, color:"#582D73"}
              ],
              colorByPoint: true,
          }],
    xAxis: {
              categories: ['Esperadas', 'Capturadas', 'Contabilizadas'],
              title: {
                  text: null
              },
              gridLineWidth: 0,  // QUITO LINEA DIVISORIAS 27/Nov/2023
              lineWidth: 0,
              labels:{
                useHTML: true,
                animate: true,
                padding: 50,
                formatter: function () {
                    console.log(this.value)

                    var value = this.value,
                        output;
                        output = this.value;
                    var value2 = this.axis.series[0].yData[this.pos]; // Obtener el valor real de la columna
                    var tmpVal =0;
                    if(props.actas_capturadas_de){
                        tmpVal = (value2*100)/props.actas_capturadas_de;
                    }
                    return '<span><br>'+value2+'<br>'+tmpVal.toFixed(4)+'%<br><br>'+this.value+'</span>';
                
                },
                align: 'center',
                x: 0,
                y: 15,                
              }
          },
    yAxis: {
        min: 0,
        title: {
            text: null,
            align: 'high'
        },
        labels: {
            overflow: 'justify',
        },
        gridLineWidth: 0,
        visible: false
    },
    legend: {
            enabled: false
    },
    tooltip: {
        // valueSuffix: ' millions'
        enabled: false
    },
    plotOptions: {
        column: {
            borderRadius: '4%',
            dataLabels: {
                enabled: true
            },
            groupPadding: 0.1
        },
        
    },
});
</script>