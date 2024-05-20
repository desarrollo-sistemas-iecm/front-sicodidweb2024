<template>
    <a-config-provider :theme="themes">
        <div :style="{display: flex, 'flex-wrap': wrap, 'justify-content': 'space-between', backgroundColor: eleccion.tema? 'white': '#1d1d1d', '-webkit-box-shadow': '0 6px 6px -6px black', '-moz-box-shadow': '0 6px 6px -6px black', 'box-shadow': '0 6px 6px -6px black' }">
            <div v-if="!isMobile()">
                <!-- v-model:selectedKeys="selectedKeys1"-->
                <a-menu 
                    v-model:selectedKeys="eleccion.ultimaEleccion"
                    theme="dark"
                    mode="horizontal"
                    :style="{ width:'100%', lineHeight: '64px', backgroundColor: eleccion.tema? '#ffffff': '#1d1d1d', color:'black'}"
                >
                    <a-menu-item :key="eleccion.eleccion" :style="{backgroundColor: eleccion.tema? '#ffffff': '#1d1d1d', color:'black'}">
                        <RouterLink :to=" eleccion.eleccion ==1 ?  {name:'jg_cdmx'} : eleccion.eleccion == 2 ? {name:'map', params:{id: '2'}} : {name:'map', params:{id: '4'}}">
                            <!--
                                <HomeTwoTone :style="{fontSize: '20px',}" two-tone-color="#00000"/>   
                            -->
                            <img v-if="eleccion.tema" src = "@/assets/home24.png" style="width: 28px;">
                            <img v-if="!eleccion.tema" src = "@/assets/home24_blanco.png" style="width: 28px;">
                        </RouterLink>
                    </a-menu-item>
                    <!--
                    <a-menu-item key="1" style="border-top-left-radius: 10px; border-top-right-radius" :to="{name:'chart'}" :style=" {backgroundColor: 'navy' }">Jefe de Gobierno</a-menu-item>
                    
                    -->
                
                    <a-menu-item style="border-top-left-radius: 10px; border-top-right-radius: 10px;" key="1"><RouterLink :to="{name:'jg_cdmx'}"><a :style="{color: eleccion.tema? 'black': 'white', borderRadius: '10px'}">Jefatura de Gobierno</a> </RouterLink></a-menu-item>
                    <a-menu-item style="border-top-left-radius: 10px; border-top-right-radius: 10px;" key="2"><RouterLink :to="{name:'map', params:{id: '2'}}"><a :style="{color: eleccion.tema? 'black': 'white', borderRadius: '10px'}">Diputaciones</a> </RouterLink></a-menu-item>
                    <a-menu-item style="border-top-left-radius: 10px; border-top-right-radius: 10px;" key="4"><RouterLink :to="{name:'map', params:{id: '4'}}"><a :style="{color: eleccion.tema? 'black': 'white', borderRadius: '10px'}">Alcaldías</a> </RouterLink></a-menu-item>
                    
                    
                </a-menu> 
                    
            </div> 
            <!-- <div v-else>
                <div v-if="eleccion.cmb2==''"> -->
                    <!-- MENU PARA ELECCIÓN DE DISTRITO-->
                    <!-- <MenuElec1 :key="m11" v-if="eleccion.eleccion==1 && eleccion.cmb1.trim()=='' && eleccion.es_bd!=true" :eleccion="eleccion.eleccion" :inline="'horizontal'"/> -->
                    <!-- MENU PARA ELECCIÓN DE DISTRITO-->
                    <!-- <MenuElec1_1 :key="m12" v-if="eleccion.eleccion==1 && eleccion.cmb1.trim()!='' && eleccion.es_bd!=true" :eleccion="eleccion.eleccion" :inline="'horizontal'"/> -->
                    <!-- MENU PARA ELECCIÓN DE DISTRITO-->
                    <!-- <MenuElec2 :key="m21" v-if="eleccion.eleccion==2 && eleccion.cmb1.trim()=='' && eleccion.es_bd!=true" :eleccion="eleccion.eleccion"  :inline="'horizontal'"/> -->
                    <!-- MENU PARA ELECCIÓN DE DISTRITO-->
                    <!-- <MenuElec2_1 :key="m22" v-if="eleccion.eleccion==2 && eleccion.cmb1.trim()!='' && eleccion.es_bd!=true" :eleccion="eleccion.eleccion"  :inline="'horizontal'"/> -->
                    <!-- MENU PARA ELECCIÓN DE ALCALDIA-->
                    <!-- <MenuElec4 :key="m31" v-if="eleccion.eleccion==4  && eleccion.cmb1.trim()=='' && eleccion.es_bd!=true" :eleccion="eleccion.eleccion"  :inline="'horizontal'"/> -->
                    <!-- MENU PARA ELECCIÓN DE ALCALDIA-->
                    <!-- <MenuElec4_1 :key="m32" v-if="eleccion.eleccion==4  && eleccion.cmb1.trim()!='' && eleccion.es_bd!=true" :eleccion="eleccion.eleccion"  :inline="'horizontal'"/> -->
                    <!-- MENU PARA ELECCIÓN DE ALCALDIA-->
                    <!-- <MenuElecBD :key="m32BD" v-if="eleccion.es_bd == true" />
                </div>
            </div> -->
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
                            <a style="color:white">{{ item.label }}</a>
                        </RouterLink>
                        <a-sub-menu :key="item.key" :title="item.label" v-if="item.children != ''" >
                            <a-menu-item v-for="subItem in item.children" :key="subItem.key" :style="{'background-color': eleccion.tema ? '#582d73' : '#1d1d1d', width: '120%'}">
                                <RouterLink :to="subItem.route" @click="onClose">
                                    <a style="color:white">{{ subItem.label }}</a>
                                </RouterLink>
                            </a-menu-item>
                        </a-sub-menu>
                    </a-menu-item>
                    <a-divider style="border-color: white" />
                </template >
            </a-menu>
            <p style="font-size: 25px; color: white">Tema:</p>
            <a-row style="align-items: center; text-align: center;">
                <a-col style="margin-top:10px" class="gutter-row"  :xs="12" :sm="12" :md="12" :lg="12" :xl="12" >
                    <p>Claro</p>
                    <a-button shape="round" :size="size" :style="{width: '75%', height: '50px','background-color': eleccion.tema ? 'white' : 'black'}" @click="eleccion.temaActual(); cambiarSlider(11)">
                        <template #icon>
                        <BulbFilled :style="{color: eleccion.tema ? 'black' : 'white'}" />
                        </template>
                    </a-button>
                </a-col>
                <a-col style="margin-top:10px" class="gutter-row"  :xs="12" :sm="12" :md="12" :lg="12" :xl="12" >
                    <p>Oscuro</p>
                    <a-button shape="round" :size="size" :style="{width: '75%', height: '50px', 'background-color': eleccion.tema  ? 'black' : 'pink'}" @click="eleccion.temaActual(); cambiarSlider(11)">
                        <template #icon>
                        <BulbOutlined :style="{color: eleccion.tema ? 'white' : 'black'}" />
                        </template>
                    </a-button>
                </a-col>
            </a-row>
        </a-drawer>
    </a-config-provider>   
</template>

<script setup>

    import {ref, reactive, h} from 'vue'
    import {RouterView, RouterLink} from 'vue-router';
    import {RightCircleTwoTone, HomeTwoTone, MenuOutlined, AppstoreOutlined, AlertOutlined, BulbOutlined, BulbFilled } from  '@ant-design/icons-vue';
    
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

    
    const eleccion = useEleccionStore();
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
    const size = ref('large');
    //import { Slide } from 'vue3-burger-menu' 

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
            route: '',
            children:''
        },
        {
            key: 'sub6',
            icon: () => h(AppstoreOutlined),
            label: 'Portal IECM',
            title: 'Portal IECM',
            route: '',
            children:''
        },
    ]);

    /// CONTROL DE TABS!!!!
    const selectedKeys1 = ref(eleccion.ultimaEleccion);
    
    //const selectedKeys1 = ref(["4"]);

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

</style>

