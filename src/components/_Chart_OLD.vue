<template>
    <highcharts class="hc" :options="chartOptions"></highcharts>
</template>
  
<script setup>

import { ref } from "vue";

var data = [
                { name: '0', y: 1034846, color: '#00579c', nombre: 'P1',},
                { name: '1', y: 564655, color: '#15a152', nombre: 'P2',},
                { name: '2', y: 230548, color: '#ffde00', nombre: 'P3',},
                { name: '3', y: 108952, color: '#87c344', nombre: 'P4',},
                { name: '4', y: 87624, color: '#ee3d44', nombre: 'P5',},
                { name: '5', y: 127791, color: '#fd8204', nombre: 'P6',},
                { name: '6', y: 1577888, color: '#a53421', nombre: 'P7',},
                { name: '7', y: 27076, color: '#e6057e', nombre: 'P8',},
                { name: '8', y: 55822, color: '#722f8b', nombre: 'P9',},
                { name: '9', y: 27717, color: '#c62f38', nombre: 'P10',},
                { name: '10', y: 75646, color: '#ec62a0', nombre: 'P11',},
                { name: '11', y: 9154, color: 'silver', nombre: 'CI1',},
                { name: '12', y: 5121, color: 'silver', nombre: 'CI2',},
                { name: '13', y: 2777, color: 'silver', nombre: 'CI3',},
                { name: '14', y: 662, color: 'gray', nombre: 'CI4',},
                { name: '15', y: 900, color: 'gray', nombre: 'CI9',},
                { name: '16', y: 3036, color: 'gray', nombre: 'CI11',},
                { name: '17', y: 2692, color: 'gray', nombre: 'CI12',}
        ];


	var totalPorcentajes=['26.2458%',
		'14.3208%',
		'5.8472%',
		'2.7632%',
		'2.2223%',
		'3.2410%',
		'40.0184%',
		'0.6867%',
		'1.4158%',
		'0.7030%',
		'1.9185%',
		'0.2322%',
		'0.1299%',
		'0.0704%',
		'0.0168%',
		'0.0228%',
		'0.0770%',
		'0.0683%',
		];

	var totalVotosPar=[
		1034846,
		564655,
		230548,
		108952,
		87624,
		127791,
		1577888,
		27076,
		55822,
		27717,
		75646,
		9154,
		5121,
		2777,
		662,
		900,
		3036,
		2692,
		];

	var partidos = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg","6.jpg", "7.jpg", "8.jpg",
 "9.jpg", "10.jpg","11.jpg", "12.jpg", "13.jpg", "14.jpg", "15.jpg", "16.jpg", "17.jpg", "18.jpg"]
	
 	const chartOptions = ref({
		chart: {
			type: 'column',
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
					x:  chart.xAxis[0].toPixels(0)-50,  // serie a encerrar
					y: 3,
					r: 10,
					'stroke-width': 2,
					width: 97,
					//fill: 'yellow',
					height: chart.chartHeight - 6,
					
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
				autoRotation: false,

				useHTML: true,
				animate: true,
				
				// AQUI FORMATEAR INE
				formatter: function () {
					var value = this.value,
						output;
						output = this.value;
					return '<span><img style="display: block; border: 1px solid #000;margin-left: auto; margin-right: auto;" src="../partidos/' + partidos[output] + '" /><br>' + totalVotosPar[output]+'<br>'+totalPorcentajes[output]+'<br><br><div style="display: block;margin-left: auto; margin-right: auto;">100<br>200<br>300<br>400</div></span>';
				}
			},
			title: {
				text: '<b>Votos<br>%</b><br><br>En Casillas<br>En el extranjero<br>Anticipados<br>En presion prev.',
				align: 'low',
				floating: true,
				x: -40,
				y: -103,
				style: {
					//fontFamily: 'serif'
					fontSize: 11
				},
			},
			min: 0,  // Minimo de series a mostrar
        	max: 4,	 // Maximo de series a mostrar
			scrollbar: {
				enabled: true
			},
			tickLength: 0
		},
		yAxis: {
			title: {
				text: null //'Total percent market share'
			}
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
					borderColor: '#34344e'
			}
		},
		tooltip: {
			headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
			pointFormat: '<span style="color:{point.color}">{point.nombre}</span>: <b>{point.y:.0f}</b> votos<br/>'
		},

		series: [
			{
				name: "Votos",
				colorByPoint: true,
				data: data,
				// -- FIN DATA
			}
		]
	});
</script>