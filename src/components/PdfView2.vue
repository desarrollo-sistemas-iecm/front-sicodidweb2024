<template>
    <div>
      <Button type="primary" @click="openPdfModal">Abrir PDF</Button>
      <Modal :open="pdfModalVisible" title="Visor de PDF" @cancel="closePdfModal" :footer="null">
        <embed :src="pdfUrl" type="application/pdf" width="100%" height="500px" />
      </Modal>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import { Modal, Button } from 'ant-design-vue';
  import { useEleccionStore } from "../stores/eleccion_actual";
  
  const eleccion = useEleccionStore();
  const urlServer = eleccion.urlPrep;
  
  const props = defineProps({
      nombrePdf: {
              type: String
              // required: "true"
        },
        linkPdf: {
              type: String
              // required: "true"
        },
    })

  const pdfModalVisible = ref(false);
  const pdfUrl = ref('');
  
  const openPdfModal = () => {
   // pdfUrl.value = urlServer + 'El-grimorio-del-papa-honorio.pdf';
   pdfUrl.value = urlServer + props.nombrePdf;
    pdfModalVisible.value = true;
  };
  
  const closePdfModal = () => {
    pdfModalVisible.value = false;
  };
  </script>
  
  <style scoped>
  /* Estilos opcionales */
  </style>
  