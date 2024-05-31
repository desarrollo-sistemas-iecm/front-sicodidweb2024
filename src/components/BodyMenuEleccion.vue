<!--
  BodyMenuEleccion.vue:

  Despliega el Sidemenu y body content de la APP
  
  Hijo de App.vue
-->
<template>
  <a-layout> 
      <!-- Menú Slider-->
      <a-layout-sider v-if="!isMobile()"  v-model:collapsed="collapsed" :trigger="null" collapsible :style="{backgroundColor: eleccion.tema ? '#582d73': '#1d1d1d', color: 'white'}">
            <p v-if="!collapsed" :style="{ paddingLeft:'15px', paddingTop:'5px', fontWeight:'bold'}">
                <label v-show="!eleccion.es_bd">Consulta de votación</label>
            </p>
            
            <!--
                DIV PARA CONTROLAR MUNUS A MOSTRAR DEPENDIENDO DE STORE: Cuando está seleccionado 
                el combo 2 o combo 3 no se muestra ningún menu
            -->           
            <div v-if="eleccion.es_voto_extra==false">
                  <p v-if="!collapsed && !eleccion.es_bd" style="padding-left:15px">
                    Selecciona el reporte que deseas consultar:
                  </p>
                  <div v-if="eleccion.cmb2==''">
                    <!-- MENU PARA ELECCIÓN DE DISTRITO-->
                    <MenuElec1 :key="m1" v-if="eleccion.eleccion==1 && eleccion.cmb1=='' && !eleccion.es_bd" :eleccion="eleccion.eleccion" :inline="'inline'"/>
                    <!-- MENU PARA ELECCIÓN DE DISTRITO-->
                    <MenuElec1_1 :key="m2" v-if="eleccion.eleccion==1 && eleccion.cmb1!='' && !eleccion.es_bd" :eleccion="eleccion.eleccion" :inline="'inline'"/>
                    <!-- MENU PARA ELECCIÓN DE DISTRITO-->
                    <MenuElec2 :key="m3" v-if="eleccion.eleccion==2 && eleccion.cmb1=='' && !eleccion.es_bd" :eleccion="eleccion.eleccion" :inline="'inline'"/>
                    <!-- MENU PARA ELECCIÓN DE DISTRITO-->
                    <MenuElec2_1 :key="m4" v-if="eleccion.eleccion==2 && eleccion.cmb1!='' && !eleccion.es_bd" :eleccion="eleccion.eleccion" :inline="'inline'"/>
                    <!-- MENU PARA ELECCIÓN DE ALCALDIA-->
                    <MenuElec4 :key="m5" v-if="eleccion.eleccion==4  && eleccion.cmb1=='' && !eleccion.es_bd" :eleccion="eleccion.eleccion" :inline="'inline'"/>
                    <!-- MENU PARA ELECCIÓN DE ALCALDIA-->
                    <MenuElec4_1 :key="m6" v-if="eleccion.eleccion==4  && eleccion.cmb1!='' && !eleccion.es_bd" :eleccion="eleccion.eleccion" :inline="'inline'"/>
                    
                    <MenuElec_Regresar :key="mOYT" v-if="eleccion.es_bd"></MenuElec_Regresar>
                     
                    <!-- MENU PARA ELECCIÓN DE ALCALDIA-->
                    
                     <MenuElecBD :key="m32BD" v-if="eleccion.es_bd"></MenuElecBD>
                      
                  </div>
                  <div  v-else>
                      <a-descriptions>
                        <a-descriptions-item>
                          <h2 style="text-align: center; width: 100%; color: red;">
                              <!--
                              APARECE CUANDO COMBO 2 TRAE VALOR 
                              -->
                              
                          </h2>
                        </a-descriptions-item>
                      </a-descriptions> 
                  </div>
                  <br><br>
                  <p v-if="!collapsed && !eleccion.es_bd" :style="{ paddingLeft:'15px'}">
                    Detalle por:
                  </p>
                  
                  <CombosEleccion :key="eleccion.keyCmb" v-if="!collapsed && eleccion.eleccion!=0 && !eleccion.es_bd" 
                        :style="{ paddingLeft:'15px', paddingRight:'15px'}"/>
            </div>
            <div v-else>
               
                  <MenuElec_Regresar v-if="!eleccion.es_voto_extra_rpe"></MenuElec_Regresar>
                  <MenuElec_RegresarRPE v-if="eleccion.es_voto_extra_rpe"></MenuElec_RegresarRPE>
                
            </div>
            

           
            <!--
               ESTOY EN: {{ eleccion.eleccion }}
            SELECCIONO+++: {{ eleccion.cmb1 }}, {{ eleccion.cmb2 }}, {{ eleccion.cmb3 }}
            KEY: {{ eleccion.keyCmb }}
        

            RANK:!!! {{eleccion.rank_del_alc}}             
            -->

      </a-layout-sider>
      <!-- 
                SECCIÓN DE CONTENIDO (ROWTERVIEW)
      -->
      <a-layout style="padding: 0 24px 24px">
            <!--
                SECCIÓN MIGAS DE PAN
            -->
            <a-space>
              <!--
                  ------------------------------------------------------------

                  ------------------------------------------------------------

                  ESTO ES PARA OCULTAR O MOSTRAR EL BOTON PARA COLAPSAR MENÚ LATERAL

                  ------------------------------------------------------------
                  
                  ------------------------------------------------------------

              -->
              <!--  
                <left-circle-two-tone two-tone-color="#eb2f96" :style="{fontSize: '26px'}"
                    v-if="collapsed"
                    class="trigger"
                    @click="() => (collapsed = !collapsed)"
                />
              
                <right-circle-two-tone two-tone-color="#eb2f96" :style="{fontSize: '26px'}" v-else class="trigger" @click="() => (collapsed = !collapsed)" />
              

                <a-breadcrumb style="margin: 16px 0" two-tone-color="#eb2f96">
                        <a-breadcrumb-item>Home</a-breadcrumb-item>
                        <a-breadcrumb-item>List</a-breadcrumb-item>
                        <a-breadcrumb-item>App</a-breadcrumb-item>
                </a-breadcrumb>

              -->
                <br>
            </a-space>
            
            <!--
                HEADER GENERAL (CARDS)
            -->
            <!-- <a-card :style="{'background-color': eleccion.tema ? white: '#1d1d1d', padding: '1px', 'margin-bottom': '10px',
             'border-radius': '5px', border: '1px solid rgb(49, 16, 42)'}"> -->
                  <AvancesEntidad :key="eleccion.eleccion"> </AvancesEntidad>
                  <v-card v-if="isMobile() && router.currentRoute.value.name != 'bd' && router.currentRoute.value.name != 'help' && router.currentRoute.value.name != 'preguntas'" :style="{backgroundColor: eleccion.tema ? '#582d73': '#1d1d1d', color: 'white', 'border-radius': '7px'}">
                    <div v-if="eleccion.es_voto_extra==false">
                      <p style="margin-top:5%; margin-left: 5%;  margin-right: 10%;"><b>Consulta de votación</b></p>
                      <p style="margin-left: 5%;">Selecciona el reporte que deseas consultar:</p>
                      <div v-if="eleccion.cmb2==''" style="margin-top:2%; margin-left: 5%; margin-right: 10%;">
                        <!-- MENU PARA ELECCIÓN DE DISTRITO-->
                        <MenuElec1 :key="m1" v-if="eleccion.eleccion==1 && eleccion.cmb1=='' && !eleccion.es_bd" :eleccion="eleccion.eleccion" :inline="'inline'"/>
                        <!-- MENU PARA ELECCIÓN DE DISTRITO-->
                        <MenuElec1_1 :key="m2" v-if="eleccion.eleccion==1 && eleccion.cmb1!='' && !eleccion.es_bd" :eleccion="eleccion.eleccion" :inline="'inline'"/>
                        <!-- MENU PARA ELECCIÓN DE DISTRITO-->
                        <MenuElec2 :key="m3" v-if="eleccion.eleccion==2 && eleccion.cmb1=='' && !eleccion.es_bd" :eleccion="eleccion.eleccion" :inline="'inline'"/>
                        <!-- MENU PARA ELECCIÓN DE DISTRITO-->
                        <MenuElec2_1 :key="m4" v-if="eleccion.eleccion==2 && eleccion.cmb1!='' && !eleccion.es_bd" :eleccion="eleccion.eleccion" :inline="'inline'"/>
                        <!-- MENU PARA ELECCIÓN DE ALCALDIA-->
                        <MenuElec4 :key="m5" v-if="eleccion.eleccion==4  && eleccion.cmb1=='' && !eleccion.es_bd" :eleccion="eleccion.eleccion" :inline="'inline'"/>
                        <!-- MENU PARA ELECCIÓN DE ALCALDIA-->
                        <MenuElec4_1 :key="m6" v-if="eleccion.eleccion==4  && eleccion.cmb1!='' && !eleccion.es_bd" :eleccion="eleccion.eleccion" :inline="'inline'"/>
                        
                        <MenuElec_Regresar :key="mOYT" v-if="eleccion.es_bd"></MenuElec_Regresar>
                        
                        <!-- MENU PARA ELECCIÓN DE ALCALDIA-->
                        
                        <MenuElecBD :key="m32BD" v-if="eleccion.es_bd"></MenuElecBD>
                          
                      </div>
                      <div  v-else>
                          <a-descriptions>
                            <a-descriptions-item>
                              <h2 style="text-align: center; width: 100%; color: red;">
                                  <!--
                                  APARECE CUANDO COMBO 2 TRAE VALOR 
                                  -->
                                  
                              </h2>
                            </a-descriptions-item>
                          </a-descriptions> 
                      </div>
                      
                      <CombosEleccion :key="eleccion.keyCmb" v-if="!collapsed && eleccion.eleccion!=0 && !eleccion.es_bd" 
                            :style="{ paddingLeft:'15px', paddingRight:'15px', 'margin-top':'2%', 'margin-left': '5%', 'margin-bottom': '5%',  'margin-right': '10%'}"/>
                    </div>
                  </v-card>
        
            <!-- </a-card> -->
            
            <!-- 
                ROUTERVIEW
            -->
            <!-- <a-layout-content
              :style="{ background: eleccion.tema ? 'white': '#1d1d1d', padding: '24px', margin: 0, minHeight: '280px' }"
            > -->
                  <br>
                  
                  <!-- Forzamos renderizados del router-view agregando key dinamica
                      :key="$route.fullPath"
                  -->
                  <a-card>
                    <RouterView :key="$route.fullPath"> </RouterView>
                  </a-card>
            <!-- </a-layout-content> -->
            
            <!-- <div :style="{padding:'15px', 'text-align': 'center', color: eleccion.tema ? 'black':'white'}">
              Los resultados presentados tienen un carácter informativo y no son definitivos, por tanto, no tienen efectos jurídicos.
            </div> -->
      </a-layout>

          
  </a-layout>
  
  <a-layout-footer :style="{backgroundColor: eleccion.tema ? '#582d73' : '#1d1d1d', height:'15px', color:'white'}"
    style="text-align:end;height:'15px';">
    Este sitio se visualiza mejor en las versiones más recientes de los navegadores web  |  Instituto Electoral Ciudad de México  |  UTSI v.4.0.0
  </a-layout-footer>

</template>

<script setup>
  import {RouterView, RouterLink} from 'vue-router'
  import { ref } from 'vue';
  import { isMobile } from "../helpers";
  import {useEleccionStore} from "../stores/eleccion_actual"
  import { useRouter } from 'vue-router'
  const router = useRouter();
  const eleccion = useEleccionStore();


  // Para SideMenu
  import CombosEleccion from "./CombosEleccion.vue"

  import AvancesEntidad from './AvancesEntidad.vue';


  import {
        VideoCameraOutlined,
        UploadOutlined,
        MenuUnfoldOutlined,
        MenuFoldOutlined,
        LeftCircleTwoTone,
        RightCircleTwoTone,
        UserOutlined, 
        LaptopOutlined, 
        NotificationOutlined
  } from '@ant-design/icons-vue';


  // PARA DIPUTADOS CIFRAS COMPLETAS
  import MenuElec2 from './menus/MenuElec2.vue';
  import MenuElec2_1 from './menus/MenuElec2_1.vue';
  // PARA ALCALDES CIFRAS COMPLETAS
  import MenuElec4 from './menus/MenuElec4.vue';
  import MenuElec4_1 from './menus/MenuElec4_1.vue';
  import MenuElec1 from './menus/MenuElec1.vue';
  import MenuElec1_1 from './menus/MenuElec1_1.vue';
  import MenuElec_Regresar from './menus/MenuElec_Regresar.vue';
  import MenuElec_RegresarRPE from './menus/MenuElec_RegresaRPE.vue';
  import MenuElecBD from './menus/MenuElctBD.vue';
  //const selectedKeys = ref(['1']);
  const collapsed = ref(false);
  
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
  
</style>