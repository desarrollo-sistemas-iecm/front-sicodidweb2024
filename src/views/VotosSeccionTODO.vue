<template>
    <a-row>

        <h2>
          {{ eleccion.eleccion==4? 'Alcaldías': 'Distritos'}} -
         <label style="font-weight: bold; color:#d1308a"> Todas las secciones </label> 

        </h2>
        
    </a-row>
    <a-row :gutter="{ xs: 8, sm: 16, md: 24, lg: 32 }">
      <div :style="{'text-align': justify, margin: '15px', color: eleccion.tema ? 'black' : 'white'}">
        El total de votos calculado y porcentaje que se muestra, se refieren a los votos asentados en las Actas de casillas básicas, contiguas y extraordinarias{{ eleccion.eleccion == 2 || eleccion.eleccion == 3 ? ', más las actas de representación proporcional de las casillas especiales' : '' }}.
        Por presentación, los decimales de los porcentajes muestran sólo cuatro dígitos. No obstante, al considerar todos los decimales, suman 100%.
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
                Lei: {{ id  }}

            lei: {{ key }}

            eleccion : {{ eleccion.eleccion==4? 'Alcaldía': 'Distrito'}}

            ESTOY EN: {{ eleccion.eleccion }}
            <br> <br>   
            COMBOS:<br>

            cmb1: {{ eleccion.cmb1 }} <br>
            cmb2: {{ eleccion.cmb2 }} <br>
            cmb3: {{ eleccion.cmb3 }} <br>        
          -->


        </h2>
    </div>


    <!--
        PARA MOSTRAR TITULO CON CUADRO DE COLOR
    --> 
    <DivColor :color="'#582D73'" text="Votos en Actas Computadas"/>
    <!--

          <h3> <br>
      Votos en Actas Contabilizadas
    </h3>
      <a-carousel autoplay>
        <div><h3>1</h3></div>
        <div><h3>2</h3></div>
        <div><h3>3</h3></div>
        <div><h3>4</h3></div>
    </a-carousel>
    -->

    <Vue3Carousel> </Vue3Carousel>

    <!--
      Apartado de Datos de Casillas 
      GridCasillas.vue
    -->
    <GridSecciones titulo="SECCION DOS"></GridSecciones>

    <!--
      Apartado de ESTADISTICAS Categoria
    -->
    
    <EstadisticaCategoria> :datosEstadistica="datos"></EstadisticaCategoria>

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

    import GridCasillas from "../components/GridSecciones.vue";

    import Vue3Carousel from "../components/Vue3Carousel.vue";
    import ObservacionesActa from "../components/ObservacionesActa.vue";

    import DivColor from "../components/DivColor.vue";
    
    
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
        ///// const jsonData = await response.json();
        //////categories.value = jsonData.categories;
//alert("TODAS!!!");
//console.log("LEI CAT (GridSecciomes.vue!!!!!): ", categories.value);
        // Pongo a falso la votacion_ext  //25/Nov/2023
        //eleccion.cambia_votacion_ext(false);

        // PARA LIMPIAR COMBOS CUANDO CAMBIA EN MENU PRINCIPAL 11/SEP/2023
        // eleccion.combosActualesValidos("","","",paramID.value);

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