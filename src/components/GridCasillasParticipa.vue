<!--
  GridCasillasParticipa.vue:

  Despliega el grid con datos obtenidos de
  
  Hijo de VotosSeccion.vue
-->
<template>
  <!--
   CMB1: {{   eleccion.cmb1 }}
  CMB2: {{   eleccion.cmb2 }}
  CMB3: {{   eleccion.cmb3 }}   
  -->

    <label style="color: #333333; font-size: 18px; font-weight: bold;">
   
    <label style="font-size: 17px; font-weight: bold;">Participación ciudadana con base en la Lista Nominal </label>
    <!-- de las Actas PREP Contabilizadas -->
  
    </label>

    <a-table :scroll="{x:800}" :columns="columns" :data-source="participacion" @resizeColumn="handleResizeColumn">
      <template #headerCell="{ column }" >
        <template v-if="column.key == 'votacion_total'">
          <span>

            Total de votos <a-tooltip :title="tooltips1" :color="'#582D73'" ><ExclamationCircleOutlined /></a-tooltip>

          </span>
        </template>
      </template>
      <template #bodyCell="{ column, record }">
       
        <template v-if="column.key === 'name'">
          <a>
            {{ record.name }}
          </a>
        </template>
        <template v-else-if="column.key === 'tags'">
          <span>
            <a-tag
              v-for="tag in record.tags"
              :key="tag"
              :color="tag === 'loser' ? 'volcano' : tag.length > 5 ? 'geekblue' : 'green'"
            >
              {{ tag.toUpperCase() }}
            </a-tag>
          </span>
        </template>
        
        
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
    
      
    <label>El cálculo de Participación ciudadana puede rebasar el 100% si vota toda la ciudadanía de la Lista Nominal de una casilla; así como las Representaciones de Partidos Políticos y Candidaturas sin Partido.</label>

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
              title: 'Casilla',
              key: 'num_casilla',
              dataIndex: 'num_casilla',
              key:'num_casilla',
              width: 100,
            }, {
              
              key: 'caracter_cas',
              dataIndex: 'caracter_cas',
              key:'caracter_cas',
              width: 150,
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
              title: 'Participación(%)',
              key: 'participacion',
              dataIndex: 'participacion',
              key:'participacion',
              align: 'right'
            }
      ]);
        
        import {
          ExclamationCircleOutlined
        } from '@ant-design/icons-vue';
        // TODO: Este texto
        const tooltips1 = 'Se refiere a la suma total de votos que realiza el sistema informático con base en los datos que muestran en cada Acta; podrás consultar la cifra del total de votos mostrado en cada Acta en la base de datos (numeral 26, fr. XIV del Anexo 13 del Reglamento de Elecciones).';
            

        onBeforeMount(async () => {
            try {
              //eleccion.loadData = true;

            const item = eleccion.cmb1;
            const item_2 = eleccion.cmb2;
            const item_3 = eleccion.cmb3;
            const type = eleccion.eleccion;
            const urlServer = eleccion.urlPrep;
            
            const  url = urlServer + "actas_grid_data.php?type="+type+"&item="+item+"&item_2="+item_2+"&item_3="+item_3;
            //alert(url)
            console.log(url)
            //const response = await fetch('../../src/assets/data/actas_contabilizadas.json'); // Cambia la ruta al archivo JSON o API
            const response = await fetch(url);
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