<!--
    Componente MenuElec2.vue: Menu para DISTRITOS (Datos completos de CDMX)
    Hijo de BodyMenuEleccion.vue
    PARA ALCALDIA
-->
<template>
    <!--''
          MENUELECT1.VUE <br>
      props.eleccion: {{ props.eleccion }} <br>
      selectedKeys:  {{ selectedKeys }}
  
    -->
  
      <a-menu  :style="{fontSize:'12px', 'background-color': eleccion.tema ? '#582d73' : '#1d1d1d'}" 
        v-model:selectedKeys="selectedKeys" theme="dark" :mode="inline">
        <!--
          <a-menu-item  key="1" :style="{height:'64px'}">
          <user-outlined />
          
          <span>
              <RouterLink :to="{name:'chart', params:{id: '1'}}" >REGRESAR</RouterLink>
          </span>
        </a-menu-item>      
        -->
  
  
  <!-- AQUI ME QUEDE 25/Nov/2023-->
        <a-menu-item @click="irDip" key="1" style="hyphens: 'auto'; text-align: center; line-height : 65px;" :style="{height:'64px', fontSize:'1.3em'}">
          
          <span  style="hyphens: 'auto'; text-align: center;  line-height : 20px;">
              <ArrowLeftOutlined :style="{fontSize:'1.5em'}"  />
              REGRESAR RPE
          </span>
        </a-menu-item>
         
              
    </a-menu>
      <!-- ALCALDIA!! -->
  </template>
  
  <script setup>
      import { ref,  onBeforeMount, onMounted} from 'vue';
      import { useRouter } from 'vue-router'
  
      import {
        VideoCameraOutlined,
        UploadOutlined,
        MenuUnfoldOutlined,
        MenuFoldOutlined,
        LeftCircleTwoTone,
        RightCircleTwoTone,
        UserOutlined, 
        LaptopOutlined, 
        NotificationOutlined,
        ArrowLeftOutlined
      } from '@ant-design/icons-vue';
  
      import {useEleccionStore} from "../../stores/eleccion_actual";
      const eleccion = useEleccionStore();
  
      const props = defineProps({
          'eleccion': {
              type: Number
          },
          'vista': {
              type: String
          },
          'inline':{
              type: String
          }
      });
  
      const selectedKeys = ref(['1']);
  
      const inline = ref("inline");
  
      onMounted(() => {
        ///    alert(props.inline)
        //if(props.inline!='' && props.inline!=null){
          
          inline.value = props.inline;
        //}
  
      });
  
      const router = useRouter();
  
    function irDip() {
      eleccion.cambia_votacion_ext(false);
      // router.push({ name:'chart', params:{id: '2'},  replace: true});
      // router.go(-1);
      // return;
      eleccion.eleccion == '1' ? router.push({ name:'jg_cdmx',  replace: true}) : eleccion.eleccion == '2' ? router.push({name:'map', params:{id: '2'},  replace: true}) : router.push({name:'map', params:{id: '4'},  replace: true});
      return;
    }
  
    
  
    // ...
  
  </script>
  
  <style scoped>
  
  </style>