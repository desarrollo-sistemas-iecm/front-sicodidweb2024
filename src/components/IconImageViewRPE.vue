

<template>
    <!--
      
    --> 
  
  
    <div>
      <!--
        <Button type="primary" @click="openImageModal">Abrir Imagen</Button>
      -->
      <a-button type="primary" @click="openImageModal"  
          style="color:black; font-weight: bold; width: 100%; height: 100%;">
          <img v-if="registroTMP.ue_qr==null" style="padding-right: 10px;" class="img_28" src="@/assets/votoext/acta.png"> 
          <img v-if="registroTMP.ue_qr!=null" style="padding-right: 10px;" class="img_28" src="@/assets/votoext/urna.png"> 
          Acta
      </a-button>
     
      <Modal :width="800"  :open="imageModalVisible" title="Visor de Imagen de Actas" @cancel="closeImageModal" :footer="null">
          <!--
             REGISTRO <br>
            {{ registro }}
          -->
           
           
            <!--  
              
               <br>COLUMNAS<br>
  
            {{ columnas }}
            <br><br>
                  ENCONTRE!!!! <br>
            <br>
                  {{objetoEncontrado}}
  
  
            <br><br>
            COMPUTADO - Reactivo
            <br><br>  
            {{arregloCombinado}} 
              
              <a-tag
                    v-for="column in columnas"
                    :key="column"
                  >
                    {{ column }}
            </a-tag>   
            -->
            <UrnaElectronicaDesktopRPE v-if="registroTMP.ue_qr!==null && !isMobile()" :registroLeido="registroTMP"></UrnaElectronicaDesktopRPE>
            <UrnaElectronicaMovilRPE v-else-if="registroTMP.ue_qr!==null && isMobile()" :registroLeido="registroTMP"></UrnaElectronicaMovilRPE>
  
            <img v-if="registroTMP.ue_qr==null" :src="imageUrl" alt="Imagen" style="max-width: 100%; max-height: 100%;" />
      </Modal>
    </div>
  </template>
  
  <script setup>
  import { ref, onBeforeMount, computed } from 'vue';
  import { Modal, Button } from 'ant-design-vue';
  import { useEleccionStore } from "../stores/eleccion_actual";
  import UrnaElectronicaDesktopRPE from './UrnaElectronicaDesktopRPE.vue';
  import { isMobile } from "../helpers";
  import UrnaElectronicaMovilRPE from './UrnaElextronicaMovilRPE.vue';
  
  
  
  const eleccion = useEleccionStore();
  const urlServer = eleccion.urlPrep;
  
  const imageModalVisible = ref(false);
  const imageUrl = ref('');
  
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
        registro:{
              type: Object
        },
  
        columnas:{
              type: Object
        }
    })
  
    const registroTMP = ref([]);
    const columnasTMP = ref([]);
    const objetoEncontrado = ref([]);
  
    onBeforeMount ( async  () =>  {
  
      registroTMP.value = props.registro;
      columnasTMP.value = props.columnas;
  
      // objetoEncontrado.value = encontrarObjetoConDataIndex("id_seccion");
    })
  
    // Crear un arreglo reactivo combinando los elementos de columnasTMP y registroTMP por posición
    /*
    const arregloCombinado = computed(() => {
        const combinedArray = [];
        for (let i = 0; i < columnasTMP.value.length; i++) {
            const columna = columnasTMP.value[i];
            const registroKey = columna.dataIndex;
            const valor = registroTMP.value[registroKey];
            combinedArray.push({ ...columna, valor });
        }
        return combinedArray;
    });
    */
   // Crear un arreglo reactivo combinando los elementos de columnasTMP y registroTMP por posición
  const arregloCombinado = computed(() => {
      const combinedArray = [];
      for (const columna of columnasTMP.value) {
          const registroKey = columna.dataIndex;
          const valor = registroTMP.value[registroKey] !== undefined ? registroTMP.value[registroKey] : null;
          combinedArray.push({ ...columna, valor });
      }
      // Agregar los elementos adicionales de registroTMP que no tienen una clave correspondiente en columnasTMP
      for (const key in registroTMP.value) {
          if (!columnasTMP.value.some(columna => columna.dataIndex === key)) {
              combinedArray.push({ title: '', key, resizable: 'resizable', width: 100, minWidth: 100, maxWidth: 200, valor: registroTMP.value[key] });
          }
      }
      return combinedArray;
  });
  
  
    //25/abril/2024
    // Función para encontrar el objeto con el campo 'dataIndex'
  function encontrarObjetoConDataIndex(dataIndex) {
    if(!dataIndex){
        return [];
    }
    return columnasTMP.value.find(columna => columna.dataIndex === dataIndex);
  }
  
  const openImageModal = () => {
    //imageUrl.value = "urlServer" + props.nombreImg; //'15-1672-B01alcC.jpg';
    //imageUrl.value = "http://145.0.179.20:8010/prepDigitalizacion2024/camera/uploads/"+ props.dto +"/" +props.nombreImg; //'15-1672-B01alcC.jpg';
    imageUrl.value = eleccion.hostactas+"/"+props.dto+"/" +props.nombreImg
    
    //alert(imageUrl.value);
    imageModalVisible.value = true;
  };
  
  const closeImageModal = () => {
    imageModalVisible.value = false;
  };
  </script>
  
  <style scoped>
  /* Estilos opcionales */
  </style>
  