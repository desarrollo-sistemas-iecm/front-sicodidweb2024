<!--
  DistribucionCategoria.vue:

  Muestra la distribución de votos a los partido. 
  
  Hijo de VotosCandidato.vue
-->

<template>
  <h2>
    <br>
        <!--
            PARA MOSTRAR TITULO CON CUADRO DE COLOR
        --> 
        <DivColor :fontsize="'18px'" :color="'#582D73'" text="Distribución de votos por Candidatura"/>
  </h2>
  <h4>
    La tabla muestra el desglose de votos que cada Candidatura presente en la Alcaldía , indicando los votos recibidos de manera individual y, en su caso, los votos recibidos vía Coalición.
    <br><br>
    <u>
      Conoce cómo se suman los votos para Candidaturas de Coalición de acuerdo con la legislación vigente.
    </u>
    <br><br>
  </h4>
  <div>
      <!--Progress Bars-->
      <a-row justify="space-around" align="middle" :gutter="{ xs: 8, sm: 16, md: 24, lg: 32 }">
        <a-col style="width: 20%;" align="middle"><b>Candidaturas</b></a-col>
        <a-col style="width: 60%;" align="middle"><b>Distribución de votos por Candidatura</b></a-col>
        <a-col style="width: 20%;" align="middle"><b>Total de votos por Candidatura</b></a-col>
      </a-row>
      <!-- <a-row v-for="category in categories" 
      :key="category.id" justify="space-around" align="middle">
        <a-col style="width: 20%; " align="middle">
          {{ category.name }} <br><br>
          <img :src="getImagePath(category.icono)" alt=""> <br><br>
        </a-col>

        <a-col style="width: 60%;" align="right">
          <img :src="getImagePathPartido(category.icono)" style='padding: 20px;' alt="">
          <b style='padding: 20px;'>[ {{formatNumber(category.valor)}} ]</b>
        </a-col>
        <a-col style="width: 20%; margin-top: 5px;" align="middle">
          
          <h2> <label style="background:#000; color:#fff; border-radius: 100%; padding-left: 0.25em;padding-right: 0.25em;">=</label>  {{category.valor}} </h2><br>
          <h5>Total de votos por Candidatura</h5>
        </a-col>
      </a-row> -->
      <a-row v-for="(cat, index) in catalogo" :key="cat.id_participante" justify="space-around" align="middle">
        <a-col style="width: 100%; " align="middle" v-if="index == 0">
          <a-divider type="horizontal"/>
        </a-col>
        <a-col style="width: 20%; " align="middle">
          <p>Nombre de persona candidata {{ cat.id_participante }}</p>
          <p><img :src="getImagePath(cat.id_participante)" alt=""></p>
        </a-col>
        <a-col style="width: 60%;" align="right">
          <!-- <img :src="getImagePathPartido(cat.id_participante)" style='padding: 20px;' alt=""> -->
          <template v-if="cat.integrantes != ''">
            <template v-for="integrante in integrantesSplit" :key="integrante.participante">
              <template v-if="integrante.id_integrante === cat.id_participante" >
                <template v-for="(integra,index) in integrante.changos" :key="integra.id_integrante">
                  <img src="@/../public/icons/icons_add_24.png" alt="" style="padding-right: 15px; padding-left: 15px" v-if="index != 0">
                  <img v-if="integra <= 9" :src="getImagePathPartido(integra)" style='padding: 20px;' alt="">
                  <img v-else :src="getImagePathPartido(integra)" style='padding: 20px; width: 11%;' alt="">
                  <strong> {{ cifrasMiles(data[0]['votos_part_'+integra]) }}</strong>
                </template>
              </template>
              
              <!-- <template v-else>
                <img :src="getImagePathPartido(cat.id_participante)" style='padding: 20px;' alt="">
              </template> -->
            </template>
          </template>
          <template v-else> 
            <img v-if="cat.id_participante >= 10" :src="getImagePathPartido(cat.id_participante)" style='padding: 20px; width: 15%;' alt="" >
            <img v-else :src="getImagePathPartido(cat.id_participante)" style='padding: 20px;' alt="">
            <strong> {{ cifrasMiles(data[0][cat.campo_votos]) }}</strong>
          </template>
          <!-- <b style='padding: 20px;'>[  ]</b> -->
        </a-col>
        <a-col style="width: 20%; margin-top: 5px;" align="middle">
          <h2> <label style="background:#000; color:#fff; border-radius: 100%; padding-left: 0.25em;padding-right: 0.25em;">=</label> <strong> {{ cifrasMiles(data[0][cat.campo_votos]) }}</strong> </h2><br>
          <h5>Total de votos por Candidatura</h5>
        </a-col>
        <a-col style="width: 100%; " align="middle">
          <a-divider type="horizontal"/>
        </a-col>
      </a-row>
          
  </div>

</template>

<script setup>
import {useEleccionStore} from "../stores/eleccion_actual";
import { ref, onMounted } from 'vue';
import { getImagePath,  getImagePathPartido, formatNumber, cifrasMiles} from "../helpers";
const eleccion = useEleccionStore();

let catalogo = ref({});
let data = ref({});
let integrantes = ref({});
let integrantesSplit = ref([]); 


onMounted(async () => {
  try {  
    //const response2 = await fetch('http://localhost/prep2024/funciones_distribucion.php?type='+eleccion.eleccion+'&item='+eleccion.cmb1+'&item_2='+eleccion.cmb2+'&item_3='+eleccion.cmb3).then(response => response.json())
    const urlServer = eleccion.urlPrep;
    const response2 = await fetch(urlServer+'funciones_distribucion.php?type='+eleccion.eleccion+'&item='+eleccion.cmb1+'&item_2='+eleccion.cmb2+'&item_3='+eleccion.cmb3).then(response => response.json())
    .then(datos => {
        console.log(datos);
        let array;
        catalogo.value = datos.catalogo;
        data.value = datos.data;
        integrantes.value = datos.split_integrantes;
        catalogo.value.forEach(element => {
          if (element.integrantes != '')
          array = {};
          array = (element.integrantes).split('&');
          console.log(array);
          integrantesSplit.value.push({ id_integrante: element.id_participante, changos: array })
        });
        console.table(integrantesSplit.value);
      }
    )
    .catch(error => {console.error('Error:', error)});
  } catch (error) {
    console.error('Error al cargar los datos:', error);
  }
});


/*
import { ref, onMounted } from 'vue';

const categories = ref([]);

// Función para obtener la ruta completa de una imagen

onMounted(async () => {
  try {
    //const response = await fetch('../../src/assets/data/actas_contabilizadas.json'); // Cambia la ruta al archivo JSON o API
    const response = await fetch('https://aplicaciones.iecm.mx/prep2024/actas_contabilizadas.php');
    //http://localhost/prep2024/
    const jsonData = await response.json();
    categories.value = jsonData.categories;
  } catch (error) {
    console.error('Error al cargar los datos:', error);
  }
});

*/

function distribucionVotos(){
  
}

const prop = defineProps({
  categories: {
          type: Array,
          required: "true"
  },
  tipo: {
      type: Number 
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
