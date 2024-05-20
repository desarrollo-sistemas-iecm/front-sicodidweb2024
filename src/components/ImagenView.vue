

<template>
    <div>
      <!--
        <Button type="primary" @click="openImageModal">Abrir Imagen</Button>
      -->
      <a-button type="primary" @click="openImageModal"  
          style="color:black; font-weight: bold; width: 90%; height: 100%;">
          <img style="padding-right: 10px;" class="img_28" src="@/assets/votoext/acta.png"> Acta
      </a-button>
     
      <Modal :width="800"  :open="imageModalVisible" title="Visor de Imagen de Actas" @cancel="closeImageModal" :footer="null">
        <img :src="imageUrl" alt="Imagen" @error="setErrorImg" style="max-width: 100%; max-height: 100%;" />
      </Modal>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import { Modal, Button } from 'ant-design-vue';
  import { useEleccionStore } from "../stores/eleccion_actual";
  
  const eleccion = useEleccionStore();
  const urlServer = eleccion.urlPrep;
  
  const imageModalVisible = ref(false);
  const imageUrl = ref('');

  import notImg from '@/assets/noimage.png';
  function setErrorImg(event) { 
        // evento que asigna ruta a etiqueta img de html
        event.target.src = notImg
  }

  const props = defineProps({
      nombreImg: {
              type: String
              // required: "true"
        },
        linkImg: {
              type: String
              // required: "true"
        },
        dto: {
              type: String
              // required: "true"
        },
    })
  
  const openImageModal = () => {
    //imageUrl.value = "urlServer" + props.nombreImg; //'15-1672-B01alcC.jpg';
    //imageUrl.value = "http://145.0.179.20:8010/prepDigitalizacion2024/camera/uploads/"+ props.dto +"/" +props.nombreImg; //'15-1672-B01alcC.jpg';
    imageUrl.value = eleccion.hostactas+"/"+props.dto+"/" +props.nombreImg
    
   // alert(imageUrl.value);
    imageModalVisible.value = true;
  };
  
  const closeImageModal = () => {
    imageModalVisible.value = false;
  };
  </script>
  
  <style scoped>
  /* Estilos opcionales */
  </style>
  