<!--
  Cards.vue:

  Despliega el grid con Cards de datos 
  
  Hijo de MapView.vue
-->
<template>
    <a-divider orientation="left"><h2 class="subtitulo-seccion pleca-izquierda">Votos de Actas Computadas</h2></a-divider>
    <a-row :gutter="{ xs: 8, sm: 16, md: 24, lg: 32 }">
      <a-col v-for="category in categories" :key="category.id" class="gutter-row" :span="6">
        <a-card title="" style="margin-bottom: 1px; margin-top: 1px; border-color:purple">
            <a-card-grid style="height: 70px; width: 45%; text-align: center; margin: 4px; border-color:purple"><img :src="getImagePath(category.id)" alt=""></a-card-grid>
            <a-card-grid style="height: 70px;width: 45%; text-align: center; margin: 4px;">

              Alcaldías <b>{{category.id}}</b>
            </a-card-grid>
            <a-card-grid style="height: 70px;width: 45%; text-align: center; margin: 4px;">Votos <b>{{category.valor}}</b></a-card-grid>
            <a-card-grid style="height: 70px;width: 45%; text-align: center; margin: 4px;">Porcentaje <b>{{category.porcentaje}}</b></a-card-grid>
        </a-card>
      </a-col>
    </a-row>
</template>

<script setup>
 // import { priceProperty } from "../helpers";
  import {useEleccionStore} from "../stores/eleccion_actual"
  const eleccion = useEleccionStore();
  const prop = defineProps({
    categories: {
            type: Array,
            required: "true"
      }
  });

  const getImagePath = (imageName) => {
    return `${eleccion.urlPrep}partidos/${imageName}.jpg`;
  };
</script>

<style scoped>
  .gutter-box {
    background: #0092ff;
    padding: 8px 0;
  }

  .pleca-izquierda {
    padding-left: 0.5em;
    border-left: 9px solid #d1308a;
  }

  .subtitulo-seccion.pleca-izquierda {
  font-size: 20px;
  }


</style>