<!--
  GridCasillas.vue:

  Despliega el grid con datos obtenidos de
  
  Hijo de VotosSeccion.vue
-->
<template>
    <!--
     CMB1: {{   eleccion.cmb1 }}
    CMB2: {{   eleccion.cmb2 }}
    CMB3: {{   eleccion.cmb3 }}   
    -->
  
    
       <!--
        Apartado de RESUMEN DE VOTACIÓN  
              <div>
                  Titulo: {{ prop }}
              </div>
      -->
      <ResumenVotacion :datosResumen="datos" :key="datos?datos.votos_acumulados:0"></ResumenVotacion>
  

  <!--
    <h3> <br>
        Estadísticas de casilla
      </h3>
  -->
      <div>
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
           <label style="font-size: 1.5em; ">
            Estadística de Mesa de Escrutinio
          </label> 
          </div>
           <br>
          <!-- <label style="text-decoration: underline; font-weight: bold; font-size: 0.8em;">Participación ciudadana con base en la Lista Nominal de la mesa con Acta PREP Contabilizada</label><br><br> -->
          <p style="text-decoration: underline; font-weight: bold; font-size: 0.8em; text-align: justify;" :style="{ 'padding-left': !isMobile() ? '30px' : '0px' ,'padding-right': !isMobile() ? '30%' : '0px'}">Participación ciudadana con base en la Lista Nominal de votantes registrados para votar desde el extranjero más los 1,500 votantes potenciales que pueden votar en cada uno de los 23 consulados sin haberse registrado previamente. (50,277 votantes registrados + 34,500 posibles votantes en consulados = 84,777)</p><br><br>
          <div  v-for="(item,index) in participacion" :key="index">
            <div style="display: flex; flex-wrap: wrap; justify-content: space-between;">
                  <div style="justify-content: start;">
                    <!--
                      <label>{{ item.num_casilla}} {{item.caracter_cas}}</label>
                    -->
                    <label style="font-weight: bolder; ">Participación ciudadana</label>
                    <h2>{{item.participacion}} %</h2>
                  </div>
                  <div style="justify-content: end;">
                    <label>Total de lista nominal</label>
                    <h2>{{cifrasMiles(item.lista_nominal)}}</h2>
                  </div>
              </div>
              
  
              
              <a-progress :stroke-color="{
                  '0%': '#B283B9',
                  '100%': '#B283B9',
              }" :strokeWidth="30" :percent="item.participacion" size="xl" :show-info="false" />
  
          </div>
      </div>       
      
    <!--
      <label>El cálculo de Participación ciudadana puede rebasar el 100% si vota toda la ciudadanía de la Lista Nominal de una casilla; así como las Representaciones de Partidos Políticos y Candidaturas Independientes.</label>
  
    -->
      
    </template>
    <script setup>
          import { ref , onMounted, onBeforeMount} from 'vue';
          import { SmileOutlined, DownOutlined } from '@ant-design/icons-vue';
          import { useEleccionStore} from "../stores/eleccion_actual"
          import ResumenVotacion from "../components/ResumenVotacion.vue";
          import { cifrasMiles, isMobile } from "../helpers";

  
          const prop = defineProps({
            titulo: {
                    type: String,
                   // required: "true"
              }
          });
  
          const eleccion = useEleccionStore();
          
          const datos = ref([]);
          const data = ref([]);
          const columns = ref([]);
          const value_fields = ref([]);
          const participacion = ref([]);
    
          onBeforeMount(async () => {
              try {
                //eleccion.loadData = true;
              const urlServer = eleccion.urlPrep;
              
              const item = eleccion.cmb1;
              const item_2 = eleccion.cmb2;
              const item_3 = eleccion.cmb3;
              const type = eleccion.eleccion;

              //const  url = urlServer + "actas_grid_data.php?type=1&item=2&item_2=958&item_3=B1";
              const  url = urlServer + "actas_grid_data_voto_prision_ant.php?type="+type+"&item="+item+"&item_2="+item_2+"&item_3="+item_3+"&tipo_acta=M";
             
    //alert(url)
              ///console.log(url)
              //const response = await fetch('../../src/assets/data/actas_contabilizadas.json'); // Cambia la ruta al archivo JSON o API
              const response = await fetch(url);
              const jsonData = await response.json();
              data.value = jsonData.data;
              columns.value = jsonData.columns;
              value_fields.value = jsonData.value_fields;
              participacion.value = jsonData.participacion;
              
              datos.value = jsonData.resumen;
  
              //eleccion.loadData = false;
              //console.log("LEI CAT: ", datos);
  
            } catch (error) {
              //eleccion.loadData = false;
              console.error('Error al cargar los datos:', error);
            }
          });
  
  
          function handleResizeColumn(w, col) {
            col.width = w;
          }
  
  
    </script>
  
    <style>
  
    .circle_tiny_green {
      border-radius: 50%;
      width: 12px;
      height: 12px;
      padding: 1px;
      background: green;
      border: 1px solid #000;
      color: #fff;
      text-align: center;
      font: 8px Arial, sans-serif;
    }
  
    .circle_tiny_red {
      border-radius: 50%;
      width: 12px;
      height: 12px;
      padding: 1px;
      background: red;
      border: 1px solid #000;
      color: #fff;
      text-align: center;
      font: 8px Arial, sans-serif;
    }
  
     .ant-table-row {
      font-size: 0.8em;
      height: 48px;
    }
  
  
  /*
    .ant-table-tbody .ant-table-row:nth-child(even) {
      background-color: #fafafa;
    }
  */
    /*
  
    .ant-table-thead .ant-table-cell {
       background-color: #582d73 !important;
      color: #ffffff !important; 
      font-size: 0.8em;
    }
  
    */
  
    </style>