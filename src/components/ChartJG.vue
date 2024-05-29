<template>

    <!--
DATA!!! 
{{ dataChart }}

{{ eleccion.votos_del_jg_total }}
    ganador
{{ winner }}

index



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

    extranjero 

    {{totalExtranjeroVotos}}
    {{ winner }}
    {{ maxValor  }}
    {{ winnerIndex  }}
    -->
    <!-- {{ dataTmp }} -->
    <!-- {{ dataExtTmp }} -->
    <highcharts class="hc" :options="chartOptions"  v-if="!isMobile()"></highcharts>
    <template v-else v-for="(data, index) in dataTmp" :key="data.id">
        <a-card hoverable style="margin-top: 4%; margin-bottom: 4%;" :style="{'background-color': eleccion.tema ?  '#f5f5f5' : '#9c9c9c', border: winnerIndex == index ? '7px solid rgb(88, 45, 115)' : '0px'}">
            <template #actions >
                <a-row style="color:black; margin-top: -3%; margin-bottom: -3%;" :style="{'background-color': eleccion.tema ?  '#eae3e7' : '#292929'}">
                    <a-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24" style="align-items: left; text-align: left; margin-left: 15%; ">
                        <b>Votos</b>
                    </a-col>
                    <a-col :xs="12" :sm="12" :md="12" :lg="12" :xl="12">
                        En Territorio Estatal
                    </a-col>
                    <a-col :xs="12" :sm="12" :md="12" :lg="12" :xl="12">
                        <template v-for="ext in dataExtTmp" :key="ext.id">
                            <b v-if="ext.id == data.id"> {{ cifrasMiles(data.valor - ext.valor) }}</b>
                        </template>
                    </a-col>
                    <a-col :xs="12" :sm="12" :md="12" :lg="12" :xl="12">
                        En el extranjero
                    </a-col>
                    <a-col :xs="12" :sm="12" :md="12" :lg="12" :xl="12">
                        <template v-for="ext in dataExtTmp" :key="ext.id">
                            <b v-if="ext.id == data.id"> {{ cifrasMiles(ext.valor) }}</b>
                        </template>
                    </a-col>
                </a-row>
            </template>
            <a-card-meta :title="data.descripcion">
                <template #avatar v-if="data.id != 'no_reg' && data.id != 'nulos'">
                    <!-- <a-avatar :size="48" :src="getImagePathJG('personas' , data.id + '.png')" /> -->
                    <a-image style="width: 65px; border-radius: 30px; box-shadow: 8px 8px 24px 8px rgba(208, 216, 243, 0.6);" :src="getImagePathJG(data.id)" alt="" 
                            fallback="data:image/png;base64,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"
                        />
                </template>
            </a-card-meta>
            <img style="margin-left:10%; width: 20%" :src="getImagePath('partidos', data.imagen)" v-if="data.id != 'no_reg' && data.id != 'nulos'">
            <a-row style="align-items: center; text-align: center; margin-top: 5%;">
                <a-col :xs="12" :sm="12" :md="12" :lg="12" :xl="12">
                    <b>Total de votos</b>
                </a-col>
                <a-col :xs="12" :sm="12" :md="12" :lg="12" :xl="12">
                    <b>Porcentaje</b>
                </a-col>
                <a-col :xs="12" :sm="12" :md="12" :lg="12" :xl="12">
                    <b>{{ cifrasMiles(data.valor) }}</b>
                </a-col>
                <a-col :xs="12" :sm="12" :md="12" :lg="12" :xl="12">
                    <b>{{ data.porcentaje }}</b>
                </a-col>
            </a-row>
        </a-card>
    </template>


</template>
  
<script setup>
import { ref, onBeforeMount } from "vue";
import { useEleccionStore } from "../stores/eleccion_actual";
import { isMobile, cifrasMiles, getImagePathJG } from "../helpers";

const eleccion = useEleccionStore();

const getImagePath = (tipo, imageName) => {
    return (eleccion.urlPrep + tipo + "/" + imageName);
};

const dataTmp = ref([]);
const noRegTmp = ref(0);
const nulosTmp = ref(0);
const votosTotales = ref(0);
const votosTotalesExtranjero = ref(0);
const totalVotosExt = ref({});
const dataExtTmp = ref([]);
const dataChart = ref([]);
const totalPorcentajesChart = ref([]);
const totalVotosParChat = ref([]);
const partidosChart = ref([]);
const nombreChart = ref([]);
const winner = ref(null);
const winnerIndex = ref(null);

const initializeData = () => {
    dataTmp.value = eleccion.votos_del_jg_total.data;
    noRegTmp.value = eleccion.votos_del_jg_total.votos_cand_no_reg;
    nulosTmp.value = eleccion.votos_del_jg_total.votos_nulos;
    votosTotales.value = eleccion.votos_del_jg_total.votacion_total;

    const colores = {
        6: "orange",
        9: "#15a152",
        3: "#ffde00",
        4: "#87c344",
        5: "#ee3d44",
        8: "#fd8204",
        7: "#a53421",
        10: "#4479e1",
        11: "#722f8b",
        14: "#800040",
        no_reg: "silver",
        nulos: "gray",
    };

    dataTmp.value.forEach((elemento) => {
        dataChart.value.push({
            name: elemento.id,
            y: elemento.valor,
            color: colores[elemento.id],
            nombre: elemento.descripcion,
        });
        totalPorcentajesChart.value[elemento.id] = elemento.porcentaje;
        totalVotosParChat.value[elemento.id] = elemento.valor;
        nombreChart.value[elemento.id] = elemento.siglas;
        partidosChart.value.push(elemento.id);
    });

    if (eleccion.votos_extranjero_jg_total) {
        dataExtTmp.value = eleccion.votos_extranjero_jg_total.data;
        if (dataExtTmp.value !== undefined) {
            dataExtTmp.value.forEach((elemento) => {
                totalVotosExt.value[elemento.id] = elemento.valor;
            });
        }
    }

    const maxValor = dataChart.value.reduce((prev, current) => prev.y > current.y ? prev : current);
    winner.value = ref(maxValor.y === 0 || dataChart.value.filter(obj => obj.y === maxValor.y).length > 1 ? null : maxValor);

    if (winner.value != null) {
        winnerIndex.value = dataChart.value.findIndex(obj => obj === maxValor);
    } else {
        winnerIndex.value = null;
    }
};

onBeforeMount(async () => {
    try {
        initializeData();
    } catch (error) {
        console.error('Error al cargar los datos:', error);
    }
});

const chartOptions = ref({
    chart: {
        type: 'column',
        zoomType: null,
        zooming: {
            mouseWheel: {
                enabled: false
            }
        },
        height: 750,
        events: {
            render: function () {
                const chart = this;
                if (!chart.customRect) {
                    chart.customRect = {
                        graphic: chart.renderer.rect({
                            stroke: 'purple',
                            'stroke-width': 2
                        }).add().toFront()
                    };
                }
                chart.customRect.graphic.attr({
                    x: chart.xAxis[0].toPixels(winnerIndex.value) - 100,
                    y: 3,
                    r: 10,
                    'stroke-width': 2,
                    width: 190,
                    height: chart.chartHeight - 86,
                });
            }
        }
    },
    credits: {
        enabled: false
    },
    title: {
        text: null
    },
    subtitle: {
        text: null
    },
    xAxis: {
        type: 'category',
        labels: {
            useHTML: true,
            animate: true,
            padding: 50,
            formatter: function () {
                // Definimos las variables necesarias dentro del formateador
                const value = this.value;
                const totalVotosPar = totalVotosParChat.value;
                const totalExtranjeroVotos = totalVotosExt.value;
                const nombres = nombreChart.value;
                const totalPorcentajes = totalPorcentajesChart.value;

                // Verificamos si el valor está definido
                if (totalVotosPar[value] === undefined) {
                    return "";
                } else {
                    const vPart = totalVotosPar[value] || 0;
                    const vExtran = totalExtranjeroVotos[value] || 0;
                    const totSinExtran = vPart - vExtran;

                    console.log({
                        vPart,
                        vExtran,
                        totSinExtran
                    });

                    // Verificamos si dataExtTmp.value es un array antes de hacer push
                    if (Array.isArray(dataExtTmp.value)) {
                        dataExtTmp.value.push({
                            id: value,
                            sinExtranjero: totSinExtran,
                            extranjero: vExtran
                        });
                    }

                    return `
                        <div>
                            <img style="display: block; margin-left: auto; margin-right: auto; vertical-align: middle; border-radius: 50%; height:64px; width:64px;" src="${getImagePath("personas_jg", value)}.png" /><br>
                            <b style="font-size:8px">${nombres[value] !== 'noreg' && nombres[value] !== 'nulos' ? nombres[value] : ''}</b><br><br>
                            <img style="display: block; border: 1px solid #000; margin-left: auto; margin-right: auto;" src="${getImagePath("partidos", value)}.jpg" /><br><br><br>
                            ${cifrasMiles(totalVotosPar[value])}<br>
                            ${totalPorcentajes[value]}<br><br>
                            ${cifrasMiles(totSinExtran)}<br>
                            ${cifrasMiles(vExtran)}<br><br><br><br>
                        </div>
                    `;
                }
            },
            align: 'center',
            x: 0,
            y: 35,
        },
        title: {
            text: `<b>Votos<br><label style="font-size:8px">Total<br>Porcentaje</label></b><br><spam  style="font-size:10px"><br><br>En Territorio Estatal<br>En el extranjero</spam>`,
            align: 'low',
            x: -55,
            y: -115
        },
        min: 0,
        max: 4,
        scrollbar: {
            enabled: true,
            buttonBackgroundColor: 'white',
            buttonBorderColor: 'white',
            buttonArrowColor: 'white'
        },
        tickLength: 0
    },
    yAxis: {
        title: {
            text: null
        },
    },
    legend: {
        enabled: false
    },
    plotOptions: {
        series: {
            point: {
                events: {
                    click: function () {
                        // Evento de click
                    }
                }
            },
            borderWidth: 1,
            borderColor: '#34344e',
        }
    },
    tooltip: {
        headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
        pointFormat: '<span style="color:{point.color}">{point.nombre}</span>: <b>{point.y}</b> votos<br/>',
        enabled: true
    },
    series: [
        {
            name: "Votos",
            colorByPoint: true,
            data: dataChart.value,
        }
    ],
});

</script>
<style scoped>
.avatar {
    vertical-align: middle;
    width: 50px;
    height: 50px;
    border-radius: 50%;
  }
</style>