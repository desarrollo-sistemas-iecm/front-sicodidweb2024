<template>
  <div style="display: flex; justify-content: center;">
    <img v-if="!isMobile()" :style="{float: 'center', height:'400px', width:'400px'}" class="imagen" src="@/assets/construccion.png"/>
  </div>
</template>

<script setup>
    import {useEleccionStore} from "../stores/eleccion_actual"
    const eleccion = useEleccionStore();
       // HELPERS
    import { isMobile } from "../helpers";
</script>

<style lang="css" scoped>

</style>