<template>
    <div :style="{marginTop:'20px', padding:'5px'}" style="flex-wrap: wrap; justify-content: space-around; text-align: center; align-items: center;">
        <a-row :gutter="{ xs: 8, sm: 16, md: 24, lg: 32 }"  justify="center">
            <a-col :xs="24" :sm="24" :md="8" :lg="8" :xl="8" v-if="props.extranjero==true && eleccion.eleccion!=4" style="align-content: center; text-align:center">
                <a-card :style="{'background-color': eleccion.tema ? 'white': '#1d1d1d', padding: '1px', 'margin-bottom': '10px',
               'border-radius': '7px', border: '0px solid rgb(49, 16, 42)', color: eleccion.tema ? 'black': 'white'}">
                    <div class="container imageDivMapWorld">
                        <p :style="{color: eleccion.tema ? '': 'white'}">{{titulo_migrante}}</p> 
                        <p><img style="width:46px; justify-content: start"  src="/votoext/mundo.png" alt="Urbanas"></p>
                        <a-button type="primary" :style="{color: eleccion.tema ? 'black': 'white'}" @click="showData(1, 'Ver resultados')">Ver resultados</a-button>
                    </div>
                </a-card>
            </a-col>
            <a-col :xs="24" :sm="24" :md="8" :lg="8" :xl="8" v-if="props.anticipado==true" style="align-content: center; text-align:center">
                <a-card :style="{'background-color': eleccion.tema ? 'white': '#1d1d1d', padding: '1px', 'margin-bottom': '10px',
               'border-radius': '7px', border: '0px solid rgb(49, 16, 42)', color: eleccion.tema ? 'black': 'white'}">
                    <div class="container imageDivPos">
                        <p :style="{color: eleccion.tema ? '': 'white'}">Voto anticipado</p>
                        <p><img style="width:46px; justify-content: start"  src="/votoext/carta.png" alt="Urbanas"></p>
                        <a-button :style="{color: eleccion.tema ? 'black': 'white'}" type="primary" @click="showData(2, 'Ver resultados')">Ver resultados</a-button>
                    </div>
                </a-card>
            </a-col>
            <a-col :xs="24" :sm="24" :md="8" :lg="8" :xl="8" v-if="props.prision==true" style="align-content: center; text-align:center">
                <a-card :style="{'background-color': eleccion.tema ? 'white': '#1d1d1d', padding: '1px', 'margin-bottom': '10px',
               'border-radius': '7px', border: '0px solid rgb(49, 16, 42)', color: eleccion.tema ? 'black': 'white'}">
                    <div class="container imageDivPos">
                        <p :style="{color: eleccion.tema ? '': 'white'}">Voto en prisión preventiva</p>
                        <p><img style="width:46px; justify-content: start"  src="/votoext/boleta.png" alt="Urbanas"></p>
                        <a-button :style="{color: eleccion.tema ? 'black': 'white'}" type="primary" @click="showData(3, 'Ver resultados')">Ver resultados</a-button>
                    </div>
                </a-card>
            </a-col>
        </a-row>
        
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

    const props = defineProps({
        extranjero: {
                  type: Boolean,
                 // required: "true"
            },
        titulo_migrante: {
                type: String,
                // required: "true"
        },
        prision: {
                  type: Boolean,
                 // required: "true"
        },
        anticipado: {
                  type: Boolean,
                 // required: "true"
        },

        });

    function irAChart() {
        //router.push({ name:'chart', params:{ id : '1' }, replace: true});
        router.push({ name:'votoexten',  replace: true});
    }

    function irAExtranjero() {
        //router.push({ name:'chart', params:{ id : '1' }, replace: true});
        router.push({ name:'votoextranjero',  replace: true});
    }
    function irAPrision() {
        //router.push({ name:'chart', params:{ id : '1' }, replace: true});
        router.push({ name:'votoprision',  replace: true});
    }

    function irAnticipado() {
        //router.push({ name:'chart', params:{ id : '1' }, replace: true});
        router.push({ name:'votoanticipado',  replace: true});
    }
    
    const showData = (voto, mensaje='Proximamente!!')=>{
        eleccion.cambia_votacion_ext(true);

        msg.warning({
                content: () => "Cargando datos....",
                style: {
                    marginTop: '20vh',
                    color: 'red',
                    fontSize: "18px",
                    
                },
                duration: 1
            });
            
            switch (voto) {
                case 1:
                    irAExtranjero();
                    break;
                case 2:
                    irAnticipado();
                    break;
                case 3:
                    irAPrision();
                    break;
                default:
                    irAChart();
                    break;
            }

    }
</script>

<style lang="css" scoped>
.back {
    /* Background pattern from Toptal Subtle Patterns */
    /* position:fixed; */
    padding:0;
    margin:0;

    top:0;
    left:0;

    width: 100%;
    height: 100%;
    background:rgba(234, 225, 225, 0.5);
    
}

.container {
    /* display: flex; */
    align-items: center;
    justify-content: center;
    height: 25vh;
    font-size: medium;
    color: purple;
    font-weight: bolder;
    align-items: center;
    align-content: center;
}

.imageDivMapWorld {
    background-image: url("../../src/assets/pngocean500px.png");
    background-repeat: no-repeat;
    background-size: 100%;
    border-radius: 15px;
    
  }
.imageDivPos {
    background-image: url("../../src/assets/gpo44092.png");
    background-repeat: no-repeat;
    background-size: 100%;
    border-radius: 15px;
    
  }
  p{
    text-decoration-color: black;
  }
</style>