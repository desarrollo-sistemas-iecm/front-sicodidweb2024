<template>
    <a-config-provider
        :theme="{
                token: {
                    fontFamily: 'Calibri',
                    //fontSize: '1em',
                    borderRadius: 5,
                        colorPrimary: '#c791a8',
                        colorPrimaryHover: '#aa6482'
                },
                //algorithm: (eleccion.tema == 1) ? theme.lightAlgorithm: theme.darkAlgorithm,
                components: {
                  Radio: {
                    colorPrimary: '#aa6482',
                    colorPrimaryHover: '#c791a8',
                    controlHeight: 64
    
                  }
                },
        }"
    >
    <a-watermark :content="['PROTOTIPO', 'PARA PREP 2024!!!', 'DATOS DE PRUEBA']">
        <div class="back container">
            <div class="centrarDiv container">
                <div style='display: flex; flex-wrap: wrap; justify-content: start;' :style="{width:'100%', padding:'10px'}">
                    <p><img src="@/assets/iecm_gimp_medium.png" alt=""></p>
                    <p><img width="290" src="@/assets/logo.png" alt=""></p> 
                </div>
                <div :style="{width:'100%', fontSize:'2.6em', fontWeight:'boldest'}">
                    Elecciones Estatales de <br>
                    <p style="color: #582d73;">La Ciudad de México <label style="color: black">2024</label></p>
                </div>
                <div :style="{width:'60%', padding:'10px'}">
                    El Programa de Resultados Electorales Preliminares (PREP) inicia la publicación el 2 de junio a partir de la 20:00 horas, hora local.
                    <br><br>
                    Los resultados presentados son preliminares y no son definitivos, por lo tanto carecen de efectos jurídicos.
                    <br><br>
                    El día 2 de junio de 2024 darán inicio los Cómputos Distritales, los cuales determinan los resultados electorales en cada uno de los Distritos de la entidad.
                </div>
                <div :style="{width:'40%', padding:'10px'}">
                
                </div>  
                <div style="justify-content: start; "  :style="{marginTop:'1px' }">
                    <a-button :style="{width:'280px', color:'black'}" 
                        type="primary" @click="clickBoton"
                        :disabled="!buttonActivated"
                        >
                        <b>Consultar Resultados Preliminares</b>
                    </a-button>  
                    <br>
                    <p>Hora de apertura: {{ eleccion.horaabre }}</p>
                </div> 
            </div>
             
        </div>
    
    </a-watermark>
    </a-config-provider>
    
    </template>
    
    <script setup>
            import { ref, onMounted, onUnmounted } from 'vue';

            import {useDispositivoStore} from "../stores/dispositivo.js";
            const dispositivo = useDispositivoStore();
            // Pinia Store de la elección
            import {useEleccionStore} from "../stores/eleccion_actual";
            const eleccion = useEleccionStore();
            
    
            const clickBoton = ()=>{
                dispositivo.despliega_splash = false;
            }

            const buttonActivated = ref(false);
            // Fecha y hora específicas para activar el botón (ejemplo: 11 de mayo de 2024 a las 12:00)
            //const targetDate = new Date('2024-05-20T12:53:00');
            const targetDate = new Date(eleccion.horaabre);
        
            // Función para verificar si la fecha y hora actual es igual o después de la fecha objetivo
            const checkActivation = () => {
                const currentDate = new Date();
                if (currentDate >= targetDate) {
                    buttonActivated.value = true;
                    // Si la condición se cumple, limpiar el intervalo
                    clearInterval(intervalId.value);
                }
            };

            // Configurar el intervalo de tiempo para verificar la fecha y hora actuales
            const intervalId = ref(null);

            onMounted(() => {
                // Realizar la verificación inicial
                //checkActivation();
                if(eleccion.horaabre==''){
                    alert("La hora de apertura está mal configurada. Imposible apertura del sistema.");
                    eleccion.horaabre = '2025-05-20T12:53:00'
                }
                setTimeout(function() {
                        //ESPERO 3 SEGUNDOS Y DISPARO
                        checkActivation();
                }, 3000);
                // Configurar el intervalo para verificar cada segundo
                intervalId.value = setInterval(() => {
                    setTimeout(function() {
                        //ESPERO 3 SEGUNDOS Y DISPARO
                        checkActivation();
                    }, 3000);
                    
                }, 1000);
            });

            onUnmounted(() => {
                // Limpiar el intervalo al desmontar el componente
                if (intervalId.value) {
                    clearInterval(intervalId.value);
                }
            });
            /*
            const startDate = new Date(2024, 3, 16, 18, 50, 0); // Año, mes (0-11), día, hora, minuto, segundo
            const currentDate = new Date();
            const deshabilita = ref(true);

            setTimeout(function() {

                  // Aquí va el código que quieres ejecutar después de 2 segundos
                  console.log("Han pasado 2 segundos");
                 // deshabilita.value = false;
                 deshabilita.value = false;
                  
            }, 2000); // 2000 milisegundos = 2 segundos
            */

            // Variable reactiva para almacenar el estado del botón

    </script>
    
    <style scoped>
    .back {
            /* Background pattern from Toptal Subtle Patterns */
            /* position:fixed; */
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
            background-image: 
                url("../../src/assets/splash_2.svg");
            background-repeat: no-repeat;
            background-size: 100%;
            /* border: 1px solid purple; */
            border-radius: 15px;
            
          }
    </style>