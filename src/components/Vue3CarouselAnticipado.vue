
<script setup>
  import { ref , onBeforeMount } from 'vue';

    import 'vue3-carousel/dist/carousel.css'
    import { Carousel, Slide, Navigation, Pagination} from 'vue3-carousel'
    import { isMobile, cifrasMiles } from "../helpers";

    import {useEleccionStore} from "../stores/eleccion_actual"

    const eleccion = useEleccionStore();
    const data = ref(null);
/*
    const getImagePath = (tipo="partidos", imageName) => {
        return (eleccion.urlPrep + tipo + "/"+ imageName);
    };
    */
    const getImagePath = (tipo="personas", imageName) => {
        return (eleccion.urlPrep + tipo + "/"+ imageName);
    };
//getImagePath("partidos" ,"1.jpg") 
    const slides = [
      { id: '1', title: 'P1', content: 'VueJS is a library', image: getImagePath("partidos" ,"1.jpg")  },
      { id: '2', title: 'P2', content: 'Know the components', image: getImagePath("partidos" ,"2.jpg") },
      { id: '3', title: 'P3', content: 'Rendering Conditionally', image: getImagePath("partidos" ,"3.jpg") },
      { id: '4', title: 'P4', content: 'VueJS is Reactive' , image: getImagePath("partidos" ,"4.jpg")}, 
      { id: '5', title: 'P5', content: 'VueJS uses computed properties', image: getImagePath("partidos" ,"5.jpg") },
      { id: '6', title: 'P6', content: 'VueJS uses computed properties', image: getImagePath("partidos" ,"6.jpg") },
      { id: '7', title: 'P7', content: 'VueJS uses computed properties', image: getImagePath("partidos" ,"7.jpg") },
      { id: '8', title: 'P8', content: 'VueJS uses computed properties', image: getImagePath("partidos" ,"8.jpg") },
      { id: '9', title: 'P9', content: 'VueJS uses computed properties', image: getImagePath("partidos" ,"9.jpg") },
      { id: '9', title: 'P10', content: 'VueJS uses computed properties', image: getImagePath("partidos" ,"10.jpg") },
    ]

    const props = defineProps({
      tipo: {
              type: String
              // required: "true"
        }
    })

    onBeforeMount(async () => {
        try {
              const item = eleccion.cmb1;
              const item_2 = eleccion.cmb2;
              const item_3 = eleccion.cmb3;
              const type = eleccion.eleccion;   
              
              const urlServer = eleccion.urlPrep;
              
              const  url = urlServer + "funciones_carrusel.php?type="+type+"&item="+item+"&item_2="+item_2+"&item_3="+item_3+"&es_A_M_P="+props.tipo;
              
    // alert(url)  

              const response = await fetch(url);
              const jsonData = await response.json();
              /// --- DATOS DE SUMATORIAS
              const datoJson = await jsonData;

              //---------------------------------------
              // 14/Mar/2024
              // eliminamos id y total general
              data.value = datoJson.filter(
                (e) => e.id != "").map((e) => { return {id: e.id, campo: e.campo, valor: e.valor, partido: e.partido, porcentaje:e.porcentaje }}
              ); 
              //data.value = await jsonData;

        } catch (error) {
        //eleccion.loadData = false;
          console.error('Error al cargar los datos:', error);
        }
    });
    
</script>


<template>

 
  <!--
    DATA!!!   {{ props.tipo }}

  <a-tag
        v-for="item in data"
        :key="item"
        >
        {{ item.campo }}
  </a-tag> 
  -->
 
  <div style="width: 100%">
    <!--
     {{ eleccion.cmb3 }}  
   
   
            ESTOY EN: {{ eleccion.eleccion==4? 'Alcaldía': 'Distrito'}}
            <br> <br>   
            COMBOS:<br>

            cmb1: {{ eleccion.cmb1 }} <br>
            cmb2: {{ eleccion.cmb2 }} <br>
            cmb3: {{ eleccion.cmb3 }} <br>     

 -->
    <Carousel :items-to-show="!isMobile() ? 3 : 0" :autoplay="false" :wrap-around="true">
      <Slide v-for="slide in data" :key="slide.campo">
        <div class="carousel__item">

          <a-card hoverable style="width: 190px; height: 180px;">
            
              <img
                alt="example"
                :src="getImagePath('partidos' , slide.partido)"
              />
  
            
            <p style="margin-top: 20px;">
              <a-row  style="text-align: center;" :gutter="{ xs: 8, sm: 16, md: 24, lg: 32 }">
                <a-col :span="24" :style="{margin:'auto', height: '45px', 'text-align': 'center', 'background-color': eleccion.tema ? 'rgb(234, 232, 232)' : 'rgb(44,44,44)' }">
                  <div style="color: rgb(14, 14, 14); font-size: 10px; font-weight: bolder; width: 100%;">
                    <table :style="{width: '100%', color: eleccion.tema ? '' : 'white'}">
                      <tr>
                        <td style="width: 50%;">
                          Votos
                        </td>
                        <td>
                          Porcentaje
                        </td>
                      </tr>
                    </table>                      
                  </div>
                </a-col>
                <a-col :span="24" :style="{margin:'auto', height: '45px', 'text-align': 'center', 'background-color': eleccion.tema ? 'rgb(234, 232, 232)' : 'rgb(44,44,44)'}">
                  <div style="color: purple; font-size: 10px; margin:auto;">
                    <table :style="{width: '100%', color: eleccion.tema ? '' : 'white'}">
                      <tr>
                        <td style="width: 50%;">
                          {{ cifrasMiles(slide.valor) }}
                        </td>
                        <td>
                          {{slide.porcentaje}}
                        </td>
                      </tr>
                    </table> 
                  </div>
                </a-col>
              </a-row>
          </p>
          </a-card>
        </div>
      </Slide>

      <template #addons>
        <Navigation />
        <Pagination />
      </template>
    </Carousel> 
  </div>
  
</template>

<style scoped>
    .carousel__item {
      min-height: 180px;
      border: 1;
      background-color: rgb(255, 255, 255);
      color: black;
      font-size: 12px;
      border-radius: 8px;
      justify-content: center;
      align-items: center;
    }

    .carousel__slide {
      padding: 5px;
    }

    .carousel__prev,
    .carousel__next {
      box-sizing: content-box;
      border: 5px solid white;
      color: rgb(16, 82, 141);
    }

    .carousel__prev--in-active,
    .carousel__next--in-active {
      display: none;
    }
</style>