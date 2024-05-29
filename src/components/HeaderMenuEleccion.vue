<template>
    <!-- <a-config-provider :theme="themes"> -->
        <div :style="{display: flex, 'flex-wrap': wrap, 'justify-content': 'space-between', backgroundColor: eleccion.tema? 'white': '#1d1d1d', '-webkit-box-shadow': '0 6px 6px -6px black', '-moz-box-shadow': '0 6px 6px -6px black', 'box-shadow': '0 6px 6px -6px black' }">
            <div v-if="!isMobile()">
                <!-- v-model:selectedKeys="selectedKeys1"-->
                <a-menu 
                    v-model:selectedKeys="eleccion.ultimaEleccion"
                    theme="dark"
                    mode="horizontal"
                    :style="{ width:'100%', lineHeight: '64px', backgroundColor: eleccion.tema? '#ffffff': '#1d1d1d', color:'black'}"
                >
                    <a-menu-item key="1" :style="{backgroundColor: eleccion.tema? '#ffffff': '#1d1d1d', color:'black'}">
                        <!-- <RouterLink :to=" eleccion.eleccion ==1 ?  {name:'jg_cdmx'} : eleccion.eleccion == 2 ? {name:'map', params:{id: '2'}} : {name:'map', params:{id: '4'}}"> -->
                        <RouterLink :to="{name:'jg_cdmx'}">
                            <!--
                                <HomeTwoTone :style="{fontSize: '20px',}" two-tone-color="#00000"/>   
                            -->
                            <img v-if="eleccion.tema" src = "@/assets/home24.png" style="width: 28px;">
                            <img v-if="!eleccion.tema" src = "@/assets/home24_blanco.png" style="width: 28px;">
                        </RouterLink>
                    </a-menu-item>
                    <a-menu-item style="border-top-left-radius: 10px; border-top-right-radius: 10px;" key="1"><RouterLink :to="{name:'jg_cdmx'}"><a :style="{color: eleccion.tema? 'black': 'white', borderRadius: '10px'}">Jefatura de Gobierno</a> </RouterLink></a-menu-item>
                    <a-menu-item style="border-top-left-radius: 10px; border-top-right-radius: 10px;" key="2"><RouterLink :to="{name:'map', params:{id: '2'}}"><a :style="{color: eleccion.tema? 'black': 'white', borderRadius: '10px'}">Diputaciones</a> </RouterLink></a-menu-item>
                    <a-menu-item style="border-top-left-radius: 10px; border-top-right-radius: 10px;" key="4"><RouterLink :to="{name:'map', params:{id: '4'}}"><a :style="{color: eleccion.tema? 'black': 'white', borderRadius: '10px'}">Alcaldías</a> </RouterLink></a-menu-item>
                </a-menu> 
            </div>
            <div v-else-if="isMobile()">
                <a-row>
                    <a-col class="gutter-row"  :xs="12" :sm="12" :md="12" :lg="12" :xl="12" style="align-items: start; text-align: start; padding-left: 5%;">
                        <img v-if="eleccion.tema" src = "@/assets/prep_movil.png" style="width: 80%;">
                        <img v-if="!eleccion.tema" src = "@/assets/prep_movil_blanco.png" style="width: 80%;">
                    </a-col>
                    <a-col class="gutter-row"  :xs="12" :sm="12" :md="12" :lg="12" :xl="12" style="align-items: end; text-align: end; padding-right: 5%" :style="{color: eleccion.tema? '#582d73': 'white'}">
                        <a-button type="text" @click="showDrawer">
                            <template #icon>
                                <MenuOutlined style="font-size: 29px"/>
                            </template>
                            <p :style="{color: eleccion.tema? '#582d73': 'white'}">Menú</p>
                        </a-button>
                    </a-col>
                </a-row>
            </div>
        </div>
        <!--
            <Slide :closeOnNavigation="true" >
                <a id="home" href="#">
                <span>Home</span>
                </a>
            </Slide>             
        -->
        <a-drawer
            v-model:open="open"
            :headerStyle="{ color: 'white !important'}"
            :contentWrapperStyle="{ color:'white !important' }"
            :rootStyle="{ color:'white !important' }"
            :bodyStyle="{ color: 'white', 'padding-top': '0% !important' }"
            class="custom-class"
            root-class-name="root-class-name"
            :style="{'background-color': eleccion.tema ? '#582d73' : '#1d1d1d', color:'white !important'}"
            title="Menú"
            placement="left"
            width="100%"
            @after-open-change="afterOpenChange"
        >
        <a-divider style="border-color: white; padding-top: 0%; padding-bottom: 0%;"/>
            <!--<p>Tipo de elección</p>
            <p><RouterLink @click="onClose"  :to="{name:'jg_cdmx'}"><a style="color:white">Jefatura de Gobierno</a> </RouterLink></p>
            <p><RouterLink @click="onClose" :to="{name:'map', params:{id: '2'}}"><a style="color:white">DMR</a> </RouterLink></p>
            <p><RouterLink @click="onClose" :to="{name:'map', params:{id: '4'}}"><a style="color:white">Alcalde</a> </RouterLink></p>-->
            <a-menu
                v-model:openKeys="openKeys"
                v-model:selectedKeys="selectedKeys"
                :style="{'background-color': eleccion.tema ? '#582d73' : '#1d1d1d', 'font-size': '20px', color: white}"
                mode="inline"
            >
                <template v-for="item in items" :key="item.key">
                    <a-menu-item :style="{'background-color': eleccion.tema ? '#582d73' : '#1d1d1d', height: item.children!=''? '200px' : ''}">
                        <RouterLink :to="item.route" @click="onClose" v-if="item.children == ''">
                            <a style="color:white" v-if="item.route != ''">{{ item.label }}</a>
                        </RouterLink>
                        <a-sub-menu :key="item.key" :title="item.label" v-if="item.children != ''" >
                            <a-menu-item v-for="subItem in item.children" :key="subItem.key" :style="{'background-color': eleccion.tema ? '#582d73' : '#1d1d1d', width: '120%'}">
                                <RouterLink :to="subItem.route" @click="onClose">
                                    <a style="color:white">{{ subItem.label }}</a>
                                </RouterLink>
                            </a-menu-item>
                        </a-sub-menu>
                        <a style="color:white" v-if="item.route =='' && item.children =='' && item.key != 'sub2'" type="link" href="https://www.iecm.mx/" >{{ item.label }}</a>
                        <a style="color:white" v-if="item.key == 'sub2'" @click="showModal">{{ item.label }}</a>
                    </a-menu-item>
                    <a-divider style="border-color: white" />
                </template >
            </a-menu>
            <p style="font-size: 25px; color: white">Tema:</p>
            <a-row style="align-items: center; text-align: center;">
                <a-col style="margin-top:10px" class="gutter-row"  :xs="12" :sm="12" :md="12" :lg="12" :xl="12" >
                    <p>Claro</p>
                    <a-button shape="round" :size="size" :style="{width: '75%', height: '50px','background-color': eleccion.tema ? 'white' : 'black'}" @click="eleccion.tema = true; cambiarSlider(11);">
                        <template #icon>
                        <BulbFilled :style="{color: eleccion.tema ? 'black' : 'white'}" />
                        </template>
                    </a-button>
                </a-col>
                <a-col style="margin-top:10px" class="gutter-row"  :xs="12" :sm="12" :md="12" :lg="12" :xl="12" >
                    <p>Oscuro</p>
                    <a-button shape="round" :size="size" :style="{width: '75%', height: '50px', 'background-color': eleccion.tema  ? 'black' : 'pink'}" @click="eleccion.tema = false; cambiarSlider(11); ">
                        <template #icon>
                        <BulbOutlined :style="{color: eleccion.tema ? 'white' : 'black'}" />
                        </template>
                    </a-button>
                </a-col>
            </a-row>
        </a-drawer>
        <a-modal v-model:open="openDialog" centered :okButtonProps="{ show: false }" @ok="handleOk" cancelText="Cerrar" okText="Consultar">
            <a-divider type="horizontal" :style="{'color': eleccion.tema ? '#582d73' : '#1d1d1d'}"/>
            <a-card :bordered="false" :style="{'background-color': eleccion.tema ? '#582d73' : '#1d1d1d', color:'white'}" title="Mi sección" headStyle="color: white">
                <a-row>
                    <a-col  :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                        <p>Para concocer los resultados, ingresa el número de tu sección</p>
                        <p>*Campo obligatorio</p>
                    </a-col>
                    <a-col  :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                        <label for="seccion">Sección*</label>
                        <a-row  style="margin-top:25px;">
                            <a-col :xs="14" :sm="14" :md="14" :lg="14" :xl="14">
                                <a-input :name="seccion" :maxlength="5" v-model:value="message" style="width:90%"
                                @keypress="isNumber($event)" @keypress.enter="buscar"
                                placeholder="0000"/>
                            </a-col>
                        </a-row>
                    </a-col>
                    <a-col  :xs="24" :sm="24" :md="24" :lg="24" :xl="24" style="text-align: center; justify-content: center; align-items: center;">
                        <a-carousel arrows>
                            <template #prevArrow>
                                <div class="custom-slick-arrow" style="left: 10px; z-index: 1">
                                    <left-circle-outlined />
                                </div>
                            </template>
                            <template #nextArrow>
                                <div class="custom-slick-arrow" style="right: 10px">
                                    <right-circle-outlined />
                                </div>
                            </template>
                            <div>
                                <a-image
                                    :src="getImagePathCredencial('a')"
                                    :width="300"
                                    :preview="true"
                                />
                            </div>
                            <div>
                                <a-image
                                    :src="getImagePathCredencial('b')"
                                    :width="300"
                                    :preview="true"
                                />
                            </div>
                            <div>
                                <a-image
                                    :src="getImagePathCredencial('c')"
                                    :width="300"
                                    :preview="true"
                                />
                            </div>
                            <div>
                                <a-image
                                    :src="getImagePathCredencial('d')"
                                    :width="300"
                                    :preview="true"
                                />
                            </div>
                        </a-carousel>
                    </a-col>

                    <a-col  :xs="24" :sm="24" :md="24" :lg="24" :xl="24" style="text-align: center; justify-content: center; align-items: center;">
                        <a-row  style="margin-top:25px;" >
                            <a-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                                <a-button :style="{color:'black'}" @click="buscar" style="width:50%" type="primary">Consultar</a-button>
                            </a-col>
                        </a-row>
                    </a-col>
                </a-row>
            </a-card>
            <template #title>
                <div ref="modalTitleRef" style="width: 100%; cursor: move" :style="{'color': eleccion.tema ? '#582d73' : 'white'}"> <ArrowLeftOutlined /> Mi sección</div>
            </template>
            <template #modalRender="{ originVNode }">
                <div :style="transformStyle">
                <component :is="originVNode" />
                </div>
            </template>
            <template #footer style="text-align: center; justify-content: center; align-items: center;">
                <a-button key="back" @click="handleOk">Cerrar</a-button>
            </template>
        </a-modal>
    <!-- </a-config-provider>    -->
</template>

<script setup>

    import {ref, reactive, h} from 'vue'
    import {RouterView, RouterLink} from 'vue-router';
    import {RightCircleTwoTone, HomeTwoTone, MenuOutlined, AppstoreOutlined, AlertOutlined, BulbOutlined, BulbFilled, ArrowLeftOutlined, LeftCircleOutlined, RightCircleOutlined } from  '@ant-design/icons-vue';
    
    // PARA DIPUTADOS CIFRAS COMPLETAS
    import MenuElec2 from './menus/MenuElec2.vue';
    import MenuElec2_1 from './menus/MenuElec2_1.vue';
    // PARA ALCALDES CIFRAS COMPLETAS
    import MenuElec4 from './menus/MenuElec4.vue';
    import MenuElec4_1 from './menus/MenuElec4_1.vue';
    import MenuElec1 from './menus/MenuElec1.vue';
    import MenuElec1_1 from './menus/MenuElec1_1.vue';

    import MenuElecBD from './menus/MenuElctBD.vue';
    // HELPERS
    import { isMobile } from "../helpers";
    import { theme } from 'ant-design-vue';
    import {useEleccionStore} from "../stores/eleccion_actual";

    // Aqui sección a buscar
    const message = ref('');

    const getImagePathCredencial = (imageName) => {
        // return "https://aplicaciones.iecm.mx/prep2024/credenciales/"+imageName+".png";
        return (eleccion.urlPrep + "credenciales/" + imageName + ".png");
    };

    
    
    const eleccion = useEleccionStore();
    const size = ref('large');
    const openDialog = ref(false);
    const showModal = () => {
        openDialog.value = true;
    };

    const handleOk = e => {
        console.log(e);
        openDialog.value = false;
    };

    //DRAWER-----
    const open = ref(false);
    const afterOpenChange = bool => {
        console.log('open', bool);
    };
    const showDrawer = () => {
        open.value = true;
    };
    const onClose = () => {
        open.value = false;
    };
    //------------------------
    const selectedKeys = ref([eleccion.ultimaEleccion]);
    const openKeys = ref(['sub1']);

    const buscar = async () =>{
        //alert(message.value.toString());
        await buscaSecc();
        //eleccion.combosActuales('3', '56', '2.2.2', (new Date()).getTime() +'2', false);
    }

    const buscaSecc =  async () => {
      try {
        
        //const response = await fetch('../../src/assets/data/actas_contabilizadas.json'); // Cambia la ruta al archivo JSON o API
        // const response = await fetch('https://aplicaciones.iecm.mx/prep2024/api_seccion.php?seccion='+message.value);
        const response = await fetch(`${eleccion.urlPrep}api_seccion.php?seccion=${message.value}`);
         // eleccion.eleccion=1 y 2 debe ser distrito / 4 debe ser alcaldia
        //const response = await fetch('http://localhost/prep2024/api_seccion.php?seccion='+message.value);
        
        //http://localhost/prep2024/
        const jsonData = await response.json();
        //categories.value = jsonData.categories;
        eleccion.desdeSeccion = true;
        //alert(jsonData.encontrada.cuantos);
        if(jsonData.encontrada.cuantos>0){
        
           
           const dto= await jsonData.encontrada.id_distrito; 
           const secc= await jsonData.encontrada.id_seccion;
           const deleg = await jsonData.encontrada.id_delegacion;
           
           eleccion.readData = false;
           if(eleccion.eleccion==4){
                eleccion.cmb1 = deleg;
           }
           else
           {
                eleccion.cmb1 = dto;
           }
           
           eleccion.readData = true;
           eleccion.cmb2= secc;
           
           eleccion.keyCmb = (new Date()).getTime() +'233';

           message.value ='';
            open.value = false;
            openDialog.value = false;
           
           //eleccion.combosActuales(parte1, parte2, '_', (new Date()).getTime() +'2', false); 
        }
        else{


            msg.warning({
                content: () => 'No existe la sección, verifique.',
                style: {
                    marginTop: '20vh',
                    color: 'red',
                    fontSize: "18px",
                    
                },
            });

            //msg.warning("NO EXISTE SECCIÓN");
            //alert("No existe sección");
            //messageApi.success('Aquí hay que llamar algo');
            message.value='';
        }
        eleccion.desdeSeccion = false;

        // PARA LIMPIAR COMBOS CUANDO CAMBIA EN MENU PRINCIPAL 11/SEP/2023
        // eleccion.combosActualesValidos("","","",paramID.value);

      } catch (error) {
        eleccion.desdeSeccion = false;
        console.error('Error al cargar los datos:', error);
      }
    };

    // Funcion para aceptar solo digitos en campo de sección
    const isNumber = (evt) => {
      evt = (evt) ? evt : window.event;
      var charCode = (evt.which) ? evt.which : evt.keyCode;
      if ((charCode > 31 && (charCode < 48 || charCode > 57))) {
            ////alert(charCode);
            evt.preventDefault();;
      } 
      else {
        return true;
      }
    }

    const state = reactive({
        mode: 'inline',
        theme: 'light',
        //selectedKeys: ['1'],
        openKeys: ['sub1'],
    });
    const items = ref([
        {
            key: 'sub1',
            icon: () => h(AppstoreOutlined),
            label: 'Tipo de elección',
            title: 'Tipo de elección',
            route: '',
            children: [
            {
                key: '1',
                label: 'Jefatura de Gobierno',
                title: 'Jefatura de Gobierno',
                route: {name:'jg_cdmx'}
            },
            {
                key: '2',
                label: 'Diputaciones',
                title: 'Diputaciones',
                route: {name:'map', params:{id: '2'}}
            },
            {
                key: '4',
                label: 'Alcaldía',
                title: 'Alcaldía',
                route: {name:'map', params:{id: '4'}}
            },
            ],
        },
        {
            key: 'sub2',
            icon: () => h(AppstoreOutlined),
            label: 'Mi sección',
            title: 'Mi sección',
            route: '',
            children:''
        },
        {
            key: 'sub3',
            icon: () => h(AppstoreOutlined),
            label: 'Preguntas frecuentes',
            title: 'Preguntas frecuentes',
            route: { name: 'preguntas' },
            children:''
        },
        {
            key: 'sub4',
            icon: () => h(AppstoreOutlined),
            label: 'Base de datos',
            title: 'Base de datos',
            route: { name: 'bd' },
            children:''
        },
        {
            key: 'sub5',
            icon: () => h(AppstoreOutlined),
            label: 'Centro de Ayuda',
            title: 'Centro de Ayuda',
            route: { name: 'help' },
            children: ''
        },
        {
            key: 'sub6',
            icon: () => h(AppstoreOutlined),
            label: 'Portal IECM',
            title: 'Portal IECM',
            route: '',
            children:'',
            link: 'https://www.iecm.mx/'
        },
    ]);

    /// CONTROL DE TABS!!!!
    const selectedKeys1 = ref(eleccion.ultimaEleccion);
    
    //const selectedKeys1 = ref(["4"]);

    function cambiarSlider(valor) {
      console.log(valor);
      valor = valor * 1.2;
      eleccion.themes={
              token: {
                  fontFamily: 'Roboto', //'Calibri'
                  //fontSize: '1.0em',
                  borderRadius: 5,
                  colorPrimary: '#c791a8',
                  colorPrimaryHover: '#aa6482',                           
              },
              algorithm: (eleccion.tema == true) ? theme.lightAlgorithm: theme.darkAlgorithm,
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
    //   console.log(themes);
    }
    //router.push({ name: 'home' });
</script>

<style scoped>
.home64{
    width: 24;
    height: 24;
}

:where(.css-dev-only-do-not-override-jjddj).ant-menu-light .ant-menu-item-selected {
    background-color: #582d73;
}

.ant-drawer .ant-drawer-title {
    color: white !important;
}

.ant-menu-horizontal >.ant-menu-item-selected, .ant-menu-horizontal >.ant-menu-submenu-selected {
    border-radius: 10px !important;
}

:deep(.slick-arrow.custom-slick-arrow) {
  width: 25px;
  height: 25px;
  font-size: 25px;
  color: #fff;
  background-color: rgba(31, 45, 61, 0.11);
  transition: ease all 0.3s;
  opacity: 0.3;
  z-index: 1;
}
:deep(.slick-arrow.custom-slick-arrow:before) {
  display: none;
}
:deep(.slick-arrow.custom-slick-arrow:hover) {
  color: #fff;
  opacity: 0.5;
}

</style>

