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

      <br>
      <a-row :gutter="{ xs: 8, sm: 16, md: 24, lg: 32 }" v-if="eleccion.cmb1 != ''">
        <a-col :span="1">
        <div style="top: 4345px;
            left: 389px;
            width: 8px;
            height: 29px;
            /* UI Properties */
            background: #582D73 0% 0% no-repeat padding-box;
            opacity: 1;">
        </div>
        </a-col>
        <a-col :span="23">
          <label style="color: #333333; font-size: 18px; font-weight: bold;">
            Detalle de votos por Mesa de Escrutinio y Cómputo del Voto {{prop.titulo}}
          </label>
        </a-col>
      </a-row>

      <br>

      <a-table class="ant-table-striped" :scroll="{x:900}" 
          :columns="columns" :data-source="data" @resizeColumn="handleResizeColumn"
          :row-class-name="(_record, index) => (index % 2 === 1 ? 'table-striped' : null)" bordered >
        <template #headerCell="{ column }" >
          <template v-if="column.key >= 1">
            <span>
          <!--
            
               <img :src="'/partidos/'+value_fields[column.key-1].id_participante+'.jpg'">
          -->    
      <!-- TODO: aqui -->

             <img :src="'/sicodid2024/partidos/'+value_fields[column.key-1].id_participante+'.jpg'">
                
            </span>
          </template>
          <template v-if="column.key == 'tipo_casilla'">
            Mesa de Escrutinio
          </template>
          
          <template v-if="column.key == 'id_distrito'">
            Distrito
         </template> 

         <!-- <template v-if="column.key == 'contabilizar'">
          Contabilizada
        </template> -->
      </template>
    

      </a-table>
      
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
             
    alert(url)
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