<!--
  GridCasillasParticipa.vue:

  Despliega el grid con datos obtenidos de
  
  Hijo de VotosSeccion.vue
-->
<template>
  {{ prop.tipo_acta }}
    <!--
{{ participacion }}    
  
  CMB1: {{   eleccion.cmb1 }}
    CMB2: {{   eleccion.cmb2 }}
    CMB3: {{   eleccion.cmb3 }}   
    -->
      
    <a-row :gutter="{ xs: 8, sm: 16, md: 24, lg: 32 }">
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
                    <label style="font-size: 17px; font-weight: bold; ">Estadística de Mesas de Escrutinio y Cómputo</label> <br>
            </a-col>
    </a-row> <br>     
    <label style="font-size: 12px; font-weight: bold;text-decoration: underline;">Participación ciudadana con base en la Lista Nominal de las Actas PREP Contabilizadas</label>
           

      <a-table :scroll="{x:800}" :columns="columns" :data-source="participacion" @resizeColumn="handleResizeColumn">
        <template #headerCell="{ column }" >
          <template v-if="column.key == 'votacion_total'">
            <span>
  
              Total de votos <a-tooltip :title="tooltips1" :color="'#582D73'" ><ExclamationCircleOutlined /></a-tooltip>
  
            </span>
          </template>
        </template>
        <template #bodyCell="{ column, record }">
         
          <template v-if="column.key === 'caracter_cas'">
            
              {{ record.caracter_cas2 }}
            
          </template>
<!--
    <template v-else-if="column.key === 'caracter_cas2'">
            <span>
              <div v-if="record.tipo_casilla=='B1'">
                Voto {{column.key}} 1
              </div>
              <div v-else>
                Voto {{column.key}} 2
              </div>
            </span>
          </template>
-->
        
         
          
        </template>
      </a-table>
  
      <div v-if="eleccion.cmb2!='' && eleccion.cmb2!=''">
          <div  v-for="(item,index) in participacion" :key="index">
            <div style="display: flex; flex-wrap: wrap; justify-content: space-between;">
                  <div style="justify-content: start;">
                    <label>{{ item.num_casilla}} {{item.caracter_cas}}</label>
                    <h2>{{item.participacion}} %</h2>
                  </div>
                  <div style="justify-content: end;">
                    <label>Total de lista nominal</label>
                    <h2>{{item.lista_nominal}}</h2>
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
          import ResumenVotacion from "./ResumenVotacion.vue";
  
          const prop = defineProps({
            titulo: {
                    type: String,
                   // required: "true"
              },
            tipo:{
              type: String,
            }
          });
  
          const eleccion = useEleccionStore();
          
          const datos = ref([]);
          const data = ref([]);
          //const columns = ref([]);
          const value_fields = ref([]);
          const participacion = ref([]);
  
          
          /*
          const data = [{
            key: '1',
            name: 'John Brown',
            age: 32,
            address: 'New York No. 1 Lake Park',
            tags: ['nice', 'developer'],
          }, {
            key: '2',
            name: 'Jim Green',
            age: 42,
            address: 'London No. 1 Lake Park',
            tags: ['loser'],
          }, {
            key: '3',
            name: 'Joe Black',
            age: 32,
            address: 'Sidney No. 1 Lake Park',
            tags: ['cool', 'teacher'],
          }];
          */
  
          const columns = ref([
              {
                title: 'Mesa de escrutinio',
                key: 'tipo_casilla',
                dataIndex: 'tipo_casilla',
                key:'tipo_casilla',
                width: 250,
              },  {
                title: 'Total de votos',
                key: 'votacion_total',
                dataIndex: 'votacion_total',
                key: 'votacion_total',
                align: 'right'
                
              }, {
                title: 'Lista Nominal',
                key: 'lista_nominal',
                dataIndex: 'lista_nominal',
                key:'lista_nominal',
                align: 'right'
              }, {
                title: 'Participación ciudadana(%)',
                key: 'participacion',
                dataIndex: 'participacion',
                key:'participacion',
                align: 'right'
              }
        ]);
          
          import {
            ExclamationCircleOutlined
          } from '@ant-design/icons-vue';
          const tooltips1 = 'Se refiere a la suma total de votos que realiza el sistema informático con base en los datos que muestran en cada Acta; podrás consultar la cifra del total de votos mostrado en cada Acta en la base de datos del PREP (numeral 26, fr. XIV del Anexo 13 del Reglamento de Elecciones).';
              
  
          onBeforeMount(async () => {
              try {
                //eleccion.loadData = true;
  
              const item = eleccion.cmb1;
              const item_2 = eleccion.cmb2;
              const item_3 = eleccion.cmb3;
              const type = eleccion.eleccion;

              // servidor  26/Feb/2024 : http://nombreserver/prep2024/
              const urlServer = eleccion.urlPrep;

             const  url = urlServer + "actas_grid_data_voto_prision_ant.php?type="+type+"&item="+item+"&item_2="+item_2+"&item_3="+item_3+"&tipo_acta="+prop.tipo;
              //const  url ="https://aplicaciones.iecm.mx/prep2024/actas_grid_data_todo.php?type="+type+"&item=2&item_2=959&item_3="+item_3;
  ///alert(url)
              console.log(url)
              //const response = await fetch('../../src/assets/data/actas_contabilizadas.json'); // Cambia la ruta al archivo JSON o API
              //const response = await fetch('https://aplicaciones.iecm.mx/prep2024/actas_grid_data.php');
              const response = await fetch(url);
              //http://localhost/prep2024/
              const jsonData = await response.json();
              data.value = jsonData.data;
              //columns.value = jsonData.columns;
              value_fields.value = jsonData.value_fields;
              participacion.value = jsonData.participacion;
              
              //datos.value = jsonData.resumen;
  
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
  
    <style scoped>
    .ant-table td { white-space: nowrap; }
    </style>