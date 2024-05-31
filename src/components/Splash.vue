<template>
    <a-config-provider
        :theme="{
                token: {
                    fontFamily: 'Calibri',
                    borderRadius: 5,
                    colorPrimary: '#c791a8',
                    colorPrimaryHover: '#aa6482'
                },
                components: {
                  Radio: {
                    colorPrimary: '#aa6482',
                    colorPrimaryHover: '#c791a8',
                    controlHeight: 64
                  }
                },
        }"
    >
    <a-watermark :content="['PROTOTIPO', 'PARA SICODID 2024', 'DATOS DE PRUEBA']">
        <div class="back container">
            <div class="centrarDiv container">
                <div style='display: flex; flex-wrap: wrap; justify-content: start;' :style="{width:'100%', padding:'10px'}">
                    <p><img src="@/assets/iecm_gimp_medium.png" alt=""></p>
                    <p><img width="290" src="@/assets/sicodid.jpg" alt=""></p> 
                </div>
                <div :style="{width:'100%', fontSize:'2.6em', fontWeight:'boldest'}">
                    Elecciones Estatales de <br>
                    <p style="color: #582d73;">La Ciudad de México <label style="color: black">2024</label></p>
                </div>
                <div :style="{width:'40%', padding:'10px'}">
                
                </div>  
                <div style="justify-content: start;" :style="{marginTop:'1px' }">
                    <a-button :style="{width:'280px', color:'black'}" 
                        type="primary" @click="clickBoton"
                        :disabled="deshabilita"
                    >
                        <b>Consultar Resultados</b>
                    </a-button>  
                </div> 
            </div>
        </div>
    </a-watermark>
    </a-config-provider>
</template>

<script setup>
import { ref, watch, onMounted } from "vue";
import { useDispositivoStore } from "../stores/dispositivo.js";
import { useEleccionStore } from "../stores/eleccion_actual";

const dispositivo = useDispositivoStore();
const deshabilita = ref(true);

const eleccionStore = useEleccionStore();

const clickBoton = () => {
    const horaabre = eleccionStore.horaabre;

    console.log(horaabre);

    deshabilita.value = horaabre == 1;

    if(deshabilita.value){
        // console.log('Cerrado!');
        dispositivo.despliega_splash = false;
    } else {
        // dispositivo.despliega_splash = true;
        alert("En espera del corte de publicación");
    }
};

onMounted(() => {
    setTimeout(() => {
        // Ejecutar después de 2 segundos
        console.log("Han pasado 2 segundos");
        deshabilita.value = false;
    }, 2000); // 2000 milisegundos = 2 segundos
});
</script>

<style scoped>
.back {
    padding:0;
    margin:0;
    top:0;
    left:0;
    width: 100%;
    height: 100%;
}

.container {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 90vh;
}

.centrarDiv {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    width: 70%;
    height: 70%;
    background-image: url("../../src/assets/splash_2.svg");
    background-repeat: no-repeat;
    background-size: 100%;
            border-radius: 15px;
            border-radius: 15px;
            border-radius: 15px;
            
    border-radius: 15px;
            
    border-radius: 15px;
            border-radius: 15px;
            
    border-radius: 15px;
            
}
</style>
