<!--
    Componente MenuElec4_1.vue: Menu para ALCALDIAS (Depende de combos)
    Hijo de BodyMenuEleccion.vue
-->
<template>
  <!--
       MENUELECT4_1.VUE <br>
    props.eleccion: {{ props.eleccion }} <br>
    selectedKeys:  {{ selectedKeys }} 
  -->

    <a-menu  :style="{'background-color': eleccion.tema ? '#582d73' : '#1d1d1d'}" 
    v-model:selectedKeys="selectedKeys" theme="dark" :mode="inline">
      <a-menu-item key="1" :style="{height:'64px'}">
        <!--<user-outlined />-->
        
        <span>
            <RouterLink :to="{name:'cadidatos', params:{id: 'Candidato!!!'},  query:{ key: Date.now() }} ">Votos por Candidatura</RouterLink>
        </span>
      </a-menu-item>
      <a-menu-item :style="{height:'64px', whiteSpace: 'pre-wrap', height: 'auto'}" key="2">
        <!--<video-camera-outlined />-->
        
        <span style="hyphens: 'auto'; text-align: justify;">
          <RouterLink :to="{name:'partidos', params:{id: 'Partidos!!!'}} ">Votos por Partido Político y Candidatura sin Partido</RouterLink>
        </span>
      </a-menu-item>
      <a-menu-item :style="{height:'64px', whiteSpace: 'pre-wrap', height: 'auto'}" key="3">
        <!--<video-camera-outlined />-->
        
        <span style="hyphens: 'auto'; text-align: justify;">
          <RouterLink :to="{name:'casilla', params:{id: 'Casillas!!!'}} ">Votos por Casilla</RouterLink>
        </span>
      </a-menu-item>

  </a-menu>
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
    //if(props.inline){
      inline.value = props.inline;
    //}

  });
</script>
