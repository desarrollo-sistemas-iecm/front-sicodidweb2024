<template>

    <!--

    ganador
{{ winner }}

index

{{ winnerIndex }}

        ..... VALUE ------<br>
    {{ eleccion.votos_del_jg_total.data }}
    ..... VALUE dataTmp ------<br>
    {{ dataTmp }}
    <br><br>..... VALUE nulosTmp------<br><br>
    {{ nulosTmp }}
    <br><br>..... VALUE noRegTmp------<br><br>
    {{ noRegTmp }}
    <br><br>..... VALUE dataChart!!!!------<br><br>
    {{ dataChart }}

    <br><br>..... VALUE totalPorcentajesChart!!!!------<br><br>
    {{ totalPorcentajesChart }}
    <br><br>..... VALUE totalVotosParChat!!!!------<br><br>
    {{ totalVotosParChat }}------<br><br>------<br><br>------<br><br>

    -->
    
    
    <highcharts class="hc" :options="chartOptions" ></highcharts>
</template>
  
<script setup>

import { ref, onBeforeMount } from "vue";
import {useEleccionStore} from "../stores/eleccion_actual"

const eleccion = useEleccionStore();


const getImagePath = (tipo="personas", imageName) => {
    return (eleccion.urlPrep + tipo + "/"+ imageName);
};

const dataTmp = ref([]);
const noRegTmp = ref(0);
const nulosTmp = ref(0);

// Nuevo 15/Marzo/2024
const dataChart = ref([]);
const totalPorcentajesChart = ref([]);
const totalVotosParChat = ref([]);
const partidosChart = ref([]);
const nombreChart = ref([]);
const winner = ref(null);
const winnerIndex = ref(null);

onBeforeMount(async () => {
        try {
            const urlServer = eleccion.urlPrep;
            
            var colores = [];
            colores[6] = "#00579c";
            colores[9] = "#15a152";
            colores[3] = "#ffde00";
            colores[4] = "#87c344";
            colores[5] = "#ee3d44";
            colores[8] = "#fd8204";
            colores[7] = "#a53421";
            colores[10] = "#e6057e";
            colores[11] = "#722f8b";
            
            dataTmp.value = eleccion.votos_del_jg_total.data;
            noRegTmp.value = eleccion.votos_del_jg_total.votos_cand_no_reg;
            nulosTmp.value =  eleccion.votos_del_jg_total.votos_nulos;
              
            dataTmp.value.forEach((elemento) => {
                //alert(elemento.id)
                // Puedes acceder a más propiedades aquí según tu necesidad
                 dataChart.value.push(
                    { name: elemento.id, y: elemento.valor, color: colores[elemento.id], nombre: elemento.descripcion,},
                );
                totalPorcentajesChart.value[elemento.id] = "10%";
                totalVotosParChat.value[elemento.id] = elemento.valor;
                nombreChart.value[elemento.id] = elemento.descripcion;
                partidosChart.value.push(elemento.id);
            });

            let maxValor = dataChart.value.reduce((prev, current) => prev.y > current.y ? prev : current);
            
            winner.value = ref(maxValor.y === 0 || dataChart.value.filter(obj => obj.y === maxValor.y).length > 1 ? null : maxValor);

            if(winner.value!=null){
                winnerIndex.value = dataChart.value.findIndex(obj => obj === maxValor);
            }
            else{
                winnerIndex.value=null;
            }
            //winner.value = dataChart.value.reduce((prev, current) => prev.y > current.y ? prev : current);
            

        } catch (error) {
        //eleccion.loadData = false;
          console.error('Error al cargar los datos:', error);
        }
    });
    
    var data = dataChart.value;

    
                
/*

var data = [
                { name: '6', y: 127791, color: '#00579c', nombre: 'P6',},
                { name: '9', y: 564655, color: '#15a152', nombre: 'P2',},
                { name: '3', y: 1034846, color: '#ffde00', nombre: 'P3',},  // coalicion de 3
                { name: '4', y: 108952, color: '#87c344', nombre: 'P4',},
                { name: '5', y: 87624, color: '#ee3d44', nombre: 'P5',},
                { name: '8', y: 230548, color: '#fd8204', nombre: 'P8',},   //CI
                { name: '7', y: 1577, color: '#a53421', nombre: 'P7',},
                { name: '10', y: 27076, color: '#e6057e', nombre: 'P10',},
                { name: '11', y: 55822, color: '#722f8b', nombre: 'P11',},
                //{ name: '3', y: 27717, color: '#c62f38', nombre: 'P10',},
                //{ name: '11', y: 75646, color: '#ec62a0', nombre: 'P11',},

        ];
*/
var totalPorcentajes= totalPorcentajesChart.value;

/*
	var totalPorcentajes=[
        '26.2458%',
		'14.3208%',
		'45.8472%',
		'2.7632%',
		'2.2223%',
		'3.2410%',
		'33.0184%',
		'0.6867%',
		'1.4158%',
		//'0.7030%',

		];
*/

var totalVotosPar= totalVotosParChat.value;

/*
	var totalVotosPar=[
		1033,
		564655,
		1577888,
		108952,
		87624,
		127791,
		1034846,
		27076,
		55822,
		//27717
		];
*/

var partidos = partidosChart.value;

var nombres = nombreChart.value;

//var partidos = ["1", "2", "3", "4", "5","6", "7", "8", "9", "10"];

const chartOptions = ref({
    chart: {
			    type: 'column',
                zoomType: null,
                height: 750,
                events: {
				render: function() {
					const chart = this,
					xAxis = chart.xAxis[0],
					yAxis = chart.yAxis[0];

					if (!chart.customRect) {
						chart.customRect = {
							graphic: chart.renderer.rect({
							stroke: 'purple',
							'stroke-width': 2
							}).add().toFront()
						}
					}
                    
					chart.customRect.graphic.attr({
                        ///////////////////////////////////////////////////
                        // IMPORTANTE!!!!!!
                        // PARA ENCERRAR GANADOR!!!!
                        ///////////////////////////////////////////////////
                        x:  chart.xAxis[0].toPixels(winnerIndex.value)-100,   // SERIE A ENCERRAR CON RECT
                        y: 3,
                        r: 10,
                        'stroke-width': 2,
                        width: 190,
                        //fill: 'yellow',
                        height: chart.chartHeight - 116,
					
					});
				}
			}
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
                //if(value==3 || output==8) prefijo="coalicion_y_ci/image00";

                var indiceReal = value;
                //alert(value);

                return '<div><img style="display: block; margin-left: auto; margin-right: auto;" src="' + getImagePath("personas" , value) + '.png" /><br><b>'+ nombres[value]+'</b><br><br><img style="display: block; border: 1px solid #000; margin-left: auto; margin-right: auto;" src="' + getImagePath("partidos" ,prefijo + value) + '.jpg" /><br><br><br>'+totalVotosPar[value]+'<br>'+totalPorcentajes[value]+'<br><br>10000<br>900<br>200<br>100<br><br><br><br></span>';
                //return '<span><img style="display: block; margin-left: auto; margin-right: auto;" src="' + getImagePath("personas" , data[output-1].name) + '.png" /><br><b>Nombre(s)</b><br><b>Apellidos(s)</b><img style="display: block; border: 1px solid #000; margin-left: auto; margin-right: auto;" src="' + getImagePath("partidos" ,prefijo + data[output-1].name) + '.jpg" /><br><br><br>'+totalVotosPar[output-1]+'<br>'+totalPorcentajes[output-1]+'<br><br>10000<br>900<br>200<br>100<br><br><br><br></span>';
            
            },
            align: 'center',
            x: 0,
            y: 45,

        },
        title: {
            text: '<b>Votos<br><label style="font-size:8px">Total<br>Porcentaje</label></b><br><br><spam style="font-size:10px">En Casillas<br>En el extranjero<br>Anticipados<br>En presion prev.</spam>',
            align: 'low',
            // nuevo
            //offset: 0,
            floating: false,
            //floating: true,
				x: -55,
				y: -145
        },
        min: 0,
        max: 2,
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
        pointFormat: '<span style="color:{point.color}">{point.nombre}</span>: <b>{point.y:.0f}</b> votos<br/>',
        enabled: true
    },

    series: [
        {
            name: "Votos",
            colorByPoint: true,
            data: data,
            // -- FIN DATA
        }
    ],
/*
    caption: {
        text: '<table border="1"><tr><th>Nombre</th><th>Valor</th></tr><tr><td>A</td><td>1</td></tr><tr><td>B</td><td>3</td></tr><tr><td>C</td><td>2</td></tr><tr><td>D</td><td>4</td></tr><tr><td>E</td><td>5</td></tr></table>',
        useHTML: true
    },*/
});
</script>