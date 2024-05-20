<!--
    Componente MenuElec2.vue: Menu para DISTRITOS (Datos completos de CDMX)
    Hijo de BodyMenuEleccion.vue
    PARA ALCALDIA
-->
<template>
  <!--
        MENUELECT1.VUE <br>
    props.eleccion: {{ props.eleccion }} <br>
    selectedKeys:  {{ selectedKeys }}

  -->

    <a-menu  :style="{'background-color': eleccion.tema ? '#582d73' : '#1d1d1d'}" 
      v-model:selectedKeys="selectedKeys" theme="dark" :mode="inline">
      
      <a-menu-item  key="1" :style="{height:'64px'}">
        <!--<user-outlined />-->
        
        <span>
            <RouterLink :to="{name:'map', params:{id: '2'}} " >Votos por Candidatura</RouterLink>
          </span>
      </a-menu-item>

      <a-menu-item :style="{height:'64px', whiteSpace: 'pre-wrap', height: 'auto'}" key="2">
        <!--<video-camera-outlined />-->
        
        <span :style="{hyphens: 'auto', 'text-align': justify, 'line-height' : '15px'}">
          <RouterLink :style="{lineHeight: '1px'}" :to="{name:'chart', params:{id: '2'}} ">Votos por Partido Político y Candidatura Independiente</RouterLink>
        </span>
      </a-menu-item>

  </a-menu>
    <!-- ALCALDIA!! -->
</template>

<script setup>
  import {useEleccionStore} from "../../stores/eleccion_actual";
  const eleccion = useEleccionStore();
  import { ref,  onBeforeMount, onMounted} from 'vue';

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

  const props = defineProps({
      'eleccion': {
          type: Number
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
</script>

<style scoped>

</style>