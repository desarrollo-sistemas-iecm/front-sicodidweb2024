<template>
    <div style="color: #582D73;">
        <center>
            <label style="font-size: 1.6em; font-weight: bolder;">
                Representación Proporcional
            </label>
            <br>
            <div :style="{'font-size': '1.1em', 'font-weight': 'normal', width: '600px', 'margin-top': '30px', 'margin-bottom': '40px', color: eleccion.tema ? '' : 'white'}">
                El apartado "Actas RP" muestra la cantidad de votos asentada en las Actas de Casilla Especial de Representación Proporcional, los cuales se suman únicamente a nivel Entidad.
            </div>   

            <div style="margin-bottom: 40px;">
                <!--
                   <a-button @click="$router.push({ name: 'home' });" type="primary" shape="round"  :style="{height:'50px', width:'100px', color:'black', fontWeight:'bold'}">
                 
                -->
                <a-button  @click="showData('Ver resultados')" type="primary" shape="squere"  :style="{height:'30px', width:'200px', color:'black', fontWeight:'bold'}">
                    Ver Actas
                </a-button>
            </div>
        </center>
        
    </div>
</template>

<script setup>
    import {ref} from 'vue'
    import {RouterView, RouterLink} from 'vue-router';
    // HELPERS
    import { isMobile } from "../helpers";

    import {useEleccionStore} from "../stores/eleccion_actual";
    const eleccion = useEleccionStore();
    
    //GlobalOutlined
    import { GlobalOutlined, MailOutlined, DropboxOutlined } from '@ant-design/icons-vue';

    import { message as msg } from 'ant-design-vue';
    
    import { useRouter } from 'vue-router'
    const router = useRouter();

    function irActasRPE() {
        //router.push({ name:'chart', params:{ id : '1' }, replace: true});
        router.push({ name:'actasrpe',  replace: true});
    }
    
    const showData = ( mensaje='Proximamente!!')=>{
        eleccion.cambia_votacion_ext(true, true);
       
        msg.warning({
                content: () => "Cargando datos....",
                style: {
                    marginTop: '20vh',
                    color: 'red',
                    fontSize: "18px",
                    
                },
                duration: 1
            });
            
     
            irActasRPE();
                
    }
</script>