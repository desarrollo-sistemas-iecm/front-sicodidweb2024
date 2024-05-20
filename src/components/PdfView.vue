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
    import {useEleccionStore} from "../stores/eleccion_actual"
    
    const eleccion = useEleccionStore();
    const urlServer = eleccion.urlPrep;

    const pdfModalVisible = ref(false);
    const pdfUrl = ref(urlServer + 'El-grimorio-del-papa-honorio.pdf');

    const openPdfModal = () => {
    pdfModalVisible.value = true;
    };

    const closePdfModal = () => {
    pdfModalVisible.value = false;
    };
</script>

<style lang="scss" scoped>

</style>