<!--
  Cards.vue:

  Despliega el grid con Cards de datos 
  
  Hijo de MapView.vue
-->
<template>
    <!--

         <a-divider orientation="left">RESULTADOS</a-divider>
    -->
 
    <a-row :gutter="{ xs: 8, sm: 16, md: 24, lg: 32 }">
      <a-col v-for="category in categories" :key="category.id" class="gutter-row" :span="6">
        <a-card title="" style="align-items: center; margin-bottom: 1px; margin-top: 1px; border-color:purple">
              <a-row :gutter="{ xs: 8, sm: 16, md: 24, lg: 32 }">
                <a-col :span="24">
                  <a-card-grid style="width: 100%; text-align: center; margin: 4px; border-color:purple">
                      <img :src="getImagePath(category.id)" alt="">
                      <p style="align-items: justify-center; font-size: 10px; font-weight: bolder; margin-top: 10px;">
                        {{category.name}}
                      </p>
                      <img style="border: 1px solid #000;" :src="getImagePathPartido(category.icono)" alt="">
                 
                  </a-card-grid>
                
                </a-col>
              </a-row>
              <!--
                <a-row :gutter="{ xs: 8, sm: 16, md: 24, lg: 32 }">
                <a-col :span="24">
                  <a-card-grid style="width: 100%; text-align: center; margin: 4px; border-color:purple">
                    <img style="border: 1px solid #000;" :src="getImagePathPartido(category.icono)" alt="">
                  </a-card-grid>
                </a-col>
              </a-row>  
              -->
             

              <a-row :gutter="{ xs: 6, sm: 12, md: 24, lg: 32 }" style="background-color: rgb(234, 232, 232);">
                <a-col :span="10" style="width: 100%; text-align: center; margin: 4px; border-color:purple">
                  Votos <b>{{category.valor}}</b>
                </a-col>
                <a-col :span="10" style="width: 100%; text-align: center; margin: 4px; border-color:purple">
                  Porcentaje <b>{{category.porcentaje}} %</b>
                </a-col>
              </a-row> 
        </a-card>
      </a-col>
    </a-row>
</template>

<script setup>
 // import { priceProperty } from "../helpers";
 import { getImagePath,  getImagePathPartido} from "../helpers";

  const prop = defineProps({
    categories: {
            type: Array,
            required: "true"
      }
  });
/*
  const getImagePath = (imageName) => {
    return `/personas/${imageName}.png`;
  };
  const getImagePathPartido = (imageName) => {
    return `/partidos/${imageName}.jpg`;
  };
*/
</script>

<style scoped>
  .gutter-box {
    background: #0092ff;
    padding: 8px 0;
  }
</style>