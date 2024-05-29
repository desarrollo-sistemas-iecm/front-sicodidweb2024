<template>
    
    <highcharts class="hc" style="width: 350px;" :options="chartOptions"></highcharts>
</template>
  
<script setup>

//import Highcharts from 'highcharts';

import { ref, onBeforeMount, nextTick } from "vue";
import {useEleccionStore} from "../stores/eleccion_actual"
const eleccion = useEleccionStore();


const chartOptions = ref(null);
const props = defineProps({
    actas_capturadas: Number, 
    actas_capturadas_de: Number,
    actas_contabilizadas: Number
});

onBeforeMount(async () => {
      try {
        var data = [{y: props.actas_capturadas_de, color:"#C791A8"} , 
                    {y: props.actas_capturadas, color:"#B283B9  "},
                    {y: props.actas_contabilizadas, color:"#582D73"}
        ];
            chartOptions.value = {
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
                        data: data,
                        colorByPoint: true,
                    }],
                xAxis: {
                        categories: ['Esperadas', 'Capturadas', 'Computadas'],
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
                                return '<span><br>13,191<br>100.0000%<br><br>'+this.value+'</span>';
                            
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
            };

           
        } catch (error) {
        console.error('Error al cargar los datos:', error);
      }
    });


</script>