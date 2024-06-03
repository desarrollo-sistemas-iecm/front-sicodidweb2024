<template>
  <a-row>

      <h2>
        <label v-if="eleccion.eleccion==1">Jefatura de Gobierno</label>
        <label v-if="eleccion.eleccion==2">Diputado Migrante</label>
        <label v-if="eleccion.eleccion==4">Alcaldías</label>
         -
       <label style="font-weight: bolder; color:#582D73"> Voto en el Extranjero </label> 

      </h2>
      
  </a-row>
  <a-row :gutter="{ xs: 8, sm: 16, md: 24, lg: 32 }">
          <div style='text-align: justify; margin-left: 18px; font-size: 12px;'>
              El total de votos calculado que se muestra, se refiere a los votos emitidos desde el Extranjero y asentados en el Acta de Cómputo de Entidad Federativa.
            <br>
            </div>
  </a-row>

  <div>
    <!--
            <h1>
          Menu VOTOS X SECCION
      </h1>  
    -->

      <h2>
        
<!--
        eleccion : {{ eleccion.eleccion==4? 'Alcaldía': 'Distrito'}}

          ESTOY EN: {{ eleccion.eleccion }}
-->


      </h2>
  </div>
  
  <div  style="display: flex; flex-wrap: wrap; justify-content: left; padding: 5px; ">
    <div style="
      left: 389px;
      width: 8px;
      height: 25px;
      text-align: left;
      justify-content: center;
      opacity: 1; 
      background-color: #582D73; margin-right: 10px; "
      
      >
    </div>
    <label  style="font-size: 1.4em;"> 
      Votos en Acta Contabilizada
    </label><br> 
  </div>
  
  <!--
    <a-carousel autoplay>
      <div><h3>1</h3></div>
      <div><h3>2</h3></div>
      <div><h3>3</h3></div>
      <div><h3>4</h3></div>
  </a-carousel>
  -->
  <label style="font-size: .9em; font-weight: bold;"><br>
      Ver acta digitalizada de Cómputo de entidad Federativa
  </label>
  <br><br>

  
  
  <Vue3CarouselAnticipado tipo="M"> </Vue3CarouselAnticipado>

  <!--
    Apartado de Datos de Casillas 
    GridCasillas.vue
  -->
  <GridCasillasExtranjero titulo="SECCION DOS"></GridCasillasExtranjero>



</template>

<script setup>
  import { ref, onMounted} from "vue";
  import CardsCandidatos from "../components/CardsCandidatos.vue";
  // import ResumenVotacion from "../components/ResumenVotacion.vue";
  import EstadisticaCategoria from "../components/EstadisticaCategoria.vue";
  import DistribucionCategoria from "../components/DistribucionCategoria.vue";
  import { priceProperty } from "../helpers";
  import { useRoute, useRouter  } from 'vue-router';
  import { useEleccionStore} from "../stores/eleccion_actual"

  import ImagenView from "../components/ImagenView.vue";

  import GridCasillasExtranjero from "../components/GridCasillasExtranjero.vue";

  import Vue3CarouselAnticipado from "../components/Vue3CarouselAnticipado.vue";
  
  const nombreActa = ref("0-0-M01jgob.jpg");
  // DATOS DE PRUEBA
  //--------------------------------------------
  const votosAlcaldia = ref([
        ['002', '728', 'red', 'https://upload.wikimedia.org/wikipedia/commons/5/5c/Flag_of_Alabama.svg'],
        ['003', '710', 'blue', 'https://upload.wikimedia.org/wikipedia/commons/5/5c/Flag_of_Alabama.svg'],
        ['004', 963, 'green', 'https://upload.wikimedia.org/wikipedia/commons/5/5c/Flag_of_Alabama.svg'],
        ['005', 541, 'silver', 'https://upload.wikimedia.org/wikipedia/commons/5/5c/Flag_of_Alabama.svg'],
        ['006', 622, 'yellow', 'https://upload.wikimedia.org/wikipedia/commons/5/5c/Flag_of_Alabama.svg'],
        ['007', 361, 'orange', 'https://upload.wikimedia.org/wikipedia/commons/5/5c/Flag_of_Alabama.svg']
  ]);

  const votosDto = ref([
      ['2', '728', 'red', '1.jpg'],
      ['3', '710', 'blue', '2.jpg'],
      ['4', 963, 'green', '3.jpg'],
      ['5', 541, 'silver', '4.jpg'],
      ['6', 622, 'yellow', '5.jpg'],
      ['7', 361, 'orange', '6.jpg']
  
    ]);
          
  // PARA ACTAS CONTABILIZADAS:
  const categories = ref([]);
  const eleccion = useEleccionStore();
  const datos = ref(eleccion.eleccion!="4"? votosDto:votosAlcaldia);

  const route = useRoute();  
  const router = useRouter();
  const id = route.params.id;
  const cas = route.params.cas;
  const key = route.query.key;

  const props = defineProps({
      key: String, // Propiedad para forzar la actualización
  });

      // Función para obtener la ruta completa de una imagen
  onMounted(async () => {
    try {
      const urlServer = eleccion.urlPrep;
      //const response = await fetch('../../src/assets/data/actas_contabilizadas.json'); // Cambia la ruta al archivo JSON o API
      const response = await fetch(urlServer+'actas_contabilizadas.php');
      const jsonData = await response.json();
      categories.value = jsonData.categories;
      
      if(eleccion.eleccion!=1){
           nombreActa.value = "0-0-M01dmr.jpg";
      }
      
      // Pongo a falso la votacion_ext  //25/Nov/2023
      //eleccion.cambia_votacion_ext(false);

      // PARA LIMPIAR COMBOS CUANDO CAMBIA EN MENU PRINCIPAL 11/SEP/2023
      //eleccion.combosActualesValidos("","","",1);

    } catch (error) {
      console.error('Error al cargar los datos:', error);
    }
  });

</script>

<style scoped>
/* For demo */
.ant-carousel :deep(.slick-slide) {
text-align: center;
height: 160px;
line-height: 160px;
background: #364d79;
overflow: hidden;
}

.ant-carousel :deep(.slick-slide h3) {
color: #fff;
}
</style>