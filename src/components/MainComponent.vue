<template :style=" {backgroundColor: eleccion.tema? '#F9F9F9' : 'black'}">
  <!-- ACTAS: {{ eleccion.hostactas }} -->
    <!--Botones flotantes se muestran en Desktop / Mobil-->
   
    <a-float-button-group trigger="hover" type="primary"  :style="{ colorPrimary:'red', right: '48px' }">
      <template #icon>
        <ShareAltOutlined />
      </template>
      <a-float-button tooltip="Youtube"
              :style="{
                right: '48px',
              }"  @click="handleClick" 
      >
        <template #icon>
          <YoutubeOutlined />
        </template>
      </a-float-button>
  
      <a-float-button tooltip="Twitter"
              :style="{
                right: '48px',
              }"  @click="handleClick" 
      >
        <template #icon>
          <TwitterOutlined />
        </template>
      </a-float-button>
      
      <a-float-button  tooltip="Facebook"
        :style="{
          right: '48px',
        }"  @click="handleClick">
        <template #icon>
          <FacebookOutlined/>
        </template>
      </a-float-button>
    </a-float-button-group>
    
    <!-- Boton de regreso va en Desktop / Mobil-->
    <a-back-top :style="{
          right: '48px'}" />
  
    <!-- 
  
      ******************************************************************
  
      Marca de agua va en Desktop / Mobil
  
      ******************************************************************
    
    -->
    <a-watermark 
      :content="['- PREP 2024 -', '[[*** DATOS DE PRUEBA SIN VALOR ***]]', 'Última act. 17/05/2024 16:00 hrs']"
      :font="{color: eleccion.tema ? 'rgba(105,105,105,.2)':'rgba(255,255,255,.10)'}"
      >
  
      <a-spin tip="Cargando datos ..." size="large" color="#632A5B"
          :spinning="eleccion.loadData">
  
        <a-config-provider :theme="themes">
          <context-holder />
          <!-- <a-layout>
            <a-layout-sider
              breakpoint="lg"
              collapsed-width="0"
              @collapse="onCollapse"
              @breakpoint="onBreakpoint"
            ></a-layout-sider>
          </a-layout> -->
          
          <a-layout>
  
            <!-- Menú horizontal  backgroundColor: eleccion.tema? 'white': '#1d1d1d',-->
            <!-- <a-layout-header  style=" background-color: #582d73;  position: fixed; z-index: 1; width:100%; padding: 0 0; height: 35px"> -->
            <a-layout-header  style=" background-color: #582d73; width:100%; padding: 0 0; height: 35px" :style="{ 'position': !isMobile() ? '' : 'fixed', 'z-index': !isMobile() ? '' : '1', 'background-color': eleccion.tema ? '#582d73' : '#1d1d1d',}">
              <!-- Notones superiores van en Desktop / Mobil-->
              <a-tag v-if="!isMobile()" :style="{'background-color': eleccion.tema ? '#582d73' : '#1d1d1d', width:'100%', 'text-align': 'end', 'padding': '0 0', 'margin' : '0%'}">
                  <div style="display: flex; flex-wrap: wrap; justify-content: space-between;">
                        <div style="display: flex; flex-wrap: wrap; justify-content: left;">
                            <img src="@/assets/iecm_white.png" style="height: 35px;">
                            <!--
                              <a-button style="color: white" type="link" :size="large" @click="openNotification('top', 'Página IEDF')">
                            
                            -->
                            <a-button style="color: white" type="link" :size="large" @click="openLink()">
                                <template #icon>
                                      <GlobalOutlined :style="{fontSize: '16px',}"/>
                                </template>
                                
                                  Portal del IECM
                                  
                              </a-button>
                        </div>
  
                        <div style="display: flex; flex-wrap: wrap; justify-content: right;">
      <!--
        <a-button style="color: white" type="link" :size="large" @click="$router.push({ name: 'bd' });">
                              
      -->
                            <a-button style="color: white" type="link" :size="large" @click="databaseGO()">
        
                                <template #icon>
                                      <database-outlined/>
                                </template>
                                Base de Datos
                              </a-button>
  
                              <a-button style="color: white" type="link" :size="large" @click="$router.push({ name: 'preguntas' });">
                                <template #icon>
                                      <QuestionCircleOutlined />
                                </template>
                                  Preguntas frecuentes
                              </a-button>
                              <a-button style="color: white" type="link" :size="large" @click="$router.push({ name: 'help' });">
                                <template #icon>
                                      <ExclamationCircleOutlined/>
                                </template>
                                  Centro de ayuda
                              </a-button>
                              <div style="display: flex; justify-content: center; align-items: center; margin-right: 10px; color: white">
                                A
                              </div>
                              <a-slider v-model:value="slider" @change="cambiarSlider" :style="{width:'90px'}" :color="eleccion.tema ? '': 'white'" :min="10" :max="18" :step="2" style="margin-right:'25px';"></a-slider>
                              <div style=" display: flex; justify-content: center; align-items: center; margin-left: 15px; color: white">
                                A
                              </div>
                              <a-switch
                                :checked="eleccion.tema"
                                checked-children="Claro"
                                un-checked-children="Oscuro"
                                @change="eleccion.temaActual();cambiarSlider(slider.value);"
                                style='margin-top: 4px; margin-right: 5px; margin-left: 15px;'
                              />
  
                        </div>
                  </div>
                  
  <!-- Header principal va en Desktop / Mobil-->  
              
              </a-tag> 
                <BannerEleccion ></BannerEleccion>
                <HeaderMenuEleccion/>
                
              </a-layout-header>
              <a-layout-content :style="{padding: '0 0', 'margin-top':  !isMobile()? '177px' : '65px'}">
                <!-- Menú Slider-->
                <BodyMenuEleccion ></BodyMenuEleccion> 
            </a-layout-content>
          </a-layout>
  
        </a-config-provider>
  
      </a-spin>
  
      </a-watermark>
      <!--
          HAY ERROR??? 
      {{ muestraError }}
      <div v-if="!isMobile()">
        ES DESKTOP
      </div>
      <div v-else>
        ES MOBILE
      </div>
      
    {{ dataFiltrada }}
        <br><br>
  {{  dataSustitucion }}
      <br><br>
      ELECCION RUTA
      {{ eleccion.urlPrep }}
      <PdfView></PdfView>
      -->
      
  
    
  </template>
  <script setup>
  
      import {RouterView, RouterLink, useRouter} from 'vue-router'
      import { h, ref, onBeforeMount, onMounted, nextTick, computed} from 'vue';
      import { BorderOutlined, DatabaseOutlined, SmileOutlined, GlobalOutlined, QuestionCircleOutlined,ExclamationCircleOutlined } from '@ant-design/icons-vue';  
      // Para botones
      import { ShareAltOutlined, FacebookOutlined, TwitterOutlined, YoutubeOutlined   } from '@ant-design/icons-vue';  
     
      import HeaderMenuEleccion from './HeaderMenuEleccion.vue';
      import BodyMenuEleccion from './BodyMenuEleccion.vue';
      import { theme } from 'ant-design-vue';
      // import { isMobile } from "../helpers";
  
      // Pinia Store de la elección
      import {useEleccionStore} from "../stores/eleccion_actual";
      
      const eleccion = useEleccionStore();
      //import ChartVue from "../components/Chart.vue";
  
      const router = useRouter();
  
      let slider = ref(12);
      
      let themes = ref({
                      token: {
                          fontFamily: 'Roboto', //'Calibri'
                          //fontSize: '1.0em',
                          borderRadius: 5,
                          colorPrimary: '#c791a8',
                          colorPrimaryHover: '#aa6482',                           
                      },
                      algorithm: (eleccion.tema == 1) ? theme.lightAlgorithm: theme.darkAlgorithm,
                      components: {
                        Radio: {
                          colorPrimary: '#aa6482',
                          colorPrimaryHover: '#c791a8',
                          controlHeight: 64
                        },
                        Menu:{
                          fontFamily: 'Roboto', //'Calibri'
                          fontSize: '12px',
                          //fontSize: '1em',
                          borderRadius: 5,
                          colorPrimary: '#c791a8',
                          colorPrimaryTextHover: '#000000',
                          colorPrimaryHover: 'navy',
                        },
                        Tag:{
                          colorPrimary: '#c791a8',
                          colorPrimaryTextHover: '#000000',
                          colorPrimaryHover: 'white',
                          
                        },
                        Table:{
                          fontSize: '14px',
                        },
                        Card:{
                          fontSize: '14px',
                        },
                        MenuItem:{
                          fontSize: '14px',
                        },
                        Carousel: {
                          fontSize: '14px',
                        },
                        AButton:{
                          fontSize: '14px',
                          size: '14px'
                        },
                        Button:{
                          fontSize: '14px',
                          size: '14px'
                        },
                        ATag:{
                          fontSize: '14px',
                        },
                        Row:{
                          fontSize: '14px'
                        },
                        ALayout:{
                          fontSize: '14px'
                        },
                        ALayoutHeader:{
                          fontSize: '14px'
                        },
                        ALayoutContent:{
                          fontSize: '14px'
                        },
                        Watermark:{
                          fontSize: '14px'
                        },
                        Col:{
                          fontSize: '14px'
                        },
                        RouterView:{
                          fontSize: '14px'
                        },
                        P:{
                          fontSize: '14px'
                        },
                        Select:{
                          fontSize: '14px'
                        },
                        Label:{
                          fontSize: '14px'
                        }
                      },
              });
      // Para mensajes
      import { message } from 'ant-design-vue';
      const [messageApi, contextHolder] = message.useMessage();
      const info = () => {
        messageApi.success('Aqui se va la BD');
      };
      // Para notificaciones
      import { notification } from 'ant-design-vue';
      import BannerEleccion from './BannerEleccion.vue';
    
      // HELPERS
      import { isMobile, filtrarPorDelegacion, filtrarPorDto, agregarCampoValor } from "../helpers";
  
      // Para flatbutton
      import { CustomerServiceOutlined, CommentOutlined } from '@ant-design/icons-vue';
  import { Carousel } from 'vue3-carousel';
  
  
      //19/feb/2024
      //const dataFiltrada = ref([]);
      //const dataSustitucion = ref([]);
  
  
      
      
      const openNotification = (placement, texto='') => {
        notification.open({
          message: `Notificación ${placement}`,
          description: 'Este botón servirá para hacer referencia al procedimiento de '+ texto.toLocaleUpperCase() +'.',
          placement,
          icon: () => h(SmileOutlined, {
            style: 'color: #108ee9',
          }),
        });
      };
  
      const openLink = (linkText='') => {
        window.open("https://www.iecm.mx", "_self");
      };
  
      const databaseGO=()=>{
          eleccion.es_bd = true;
  
          router.push({ name: 'bd' });
      }
      function cambiarSlider(valor) {
        console.log(valor);
        valor = valor * 1.2;
        themes.value={
                token: {
                    fontFamily: 'Roboto', //'Calibri'
                    //fontSize: '1.0em',
                    borderRadius: 5,
                    colorPrimary: '#c791a8',
                    colorPrimaryHover: '#aa6482',                           
                },
                algorithm: (eleccion.tema == 1) ? theme.lightAlgorithm: theme.darkAlgorithm,
                components: {
                  Radio: {
                    colorPrimary: '#aa6482',
                    colorPrimaryHover: '#c791a8',
                    controlHeight: 64
                  },
                  Menu:{
                    fontFamily: 'Roboto', //'Calibri'
                    fontSize: valor+'px',
                    borderRadius: 5,
                    colorPrimary: '#c791a8',
                    colorPrimaryTextHover: '#000000',
                    colorPrimaryHover: 'navy',
                  },
                  Tag:{
                    colorPrimary: '#c791a8',
                    colorPrimaryTextHover: '#000000',
                    colorPrimaryHover: 'white',
                    
                  },
                  Table:{
                    fontSize: valor+'px',
                  },
                  Card:{
                    fontSize: valor+'px',
                  },
                  MenuItem:{
                    fontSize: valor+'px',
                  },
                  Carousel: {
                    fontSize: valor+'px',
                  },
                  AButton:{
                    fontSize: valor+'px',
                    size: valor+'px'
                  },
                  Button:{
                    fontSize: valor+'px',
                    size: valor+'px'
                  },
                  ATag:{
                    fontSize: valor+'px',
                  },
                  Row:{
                    fontSize: valor+'px',
                  },
                  ALayout:{
                    fontSize: valor+'px',
                  },
                  ALayoutHeader:{
                    fontSize: valor+'px',
                  },
                  ALayoutContent:{
                    fontSize: valor+'px',
                  },
                  Watermark:{
                    fontSize: valor+'px',
                  },
                  Col:{
                    fontSize: valor+'px',
                  },
                  Div:{
                    fontSize: valor+'px',
                  },
                  RouterView:{
                    fontSize: valor+'px',
                  },
                  P:{
                    fontSize: valor+'px',
                  },
                  Select:{
                    fontSize: valor+'px',
                  },
                  Label:{
                    fontSize: valor+'px',
                  }
                },
        };
        console.log(themes);
      }
  
  
      const handleClick = () =>  messageApi.success('Aquí hay que llamar algo');
  
      //const zeroPad = (num, places) => String(num).padStart(places, '0');
      
      //MOBILE
      /*
      const isMobile=()=>{
          if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
            return true
          } else {
            return false
          }
      }; 
      */
  
  
  
  </script>
  <style scoped>
  
      .imagen{
        width: 120px;
        height: 55px;
        margin: 2px 2px 2px 2px;
        background-size: cover;
        background: white;
      }
  
      .a-menu-item {
        height:65px
      }
  
      button {
        color : white
      }
      button :hover {
          color : pink
      }
   
  
    .ant-menu-item:hover {
      background: orange;
      color: black;
    }
  
  
    .ant-menu-item {
      color: #ffffff;
    }
  
    .ant-menu-item-selected {
      background-color: #c791a8 !important;
      color: black !important;
      font-weight: bolder; 
    }
    
  </style>
  