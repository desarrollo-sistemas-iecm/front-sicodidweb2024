<template>
    <div>
        <img style="width: 700px; height: 700px;" class="imagen" src="@/assets/construccion.png"/>

        <h2>BASE DE DATOS</h2>
    </div>
</template>

<script setup>
    import { onUnmounted} from 'vue';
    // Pinia Store de la elección
    import {useEleccionStore} from "../stores/eleccion_actual";
    const eleccion = useEleccionStore();

    onUnmounted(() => {
        // text content should be the same as current `count.value`
        console.log("UNMOUNTED!!!!!!!!!!!!");
        eleccion.es_bd = false;
    })
</script>

<style lang="css" scoped>

</style>