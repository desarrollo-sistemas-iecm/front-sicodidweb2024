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
    -->
    <!--
     <div>
        Titulo: {{ prop }}
    </div> 
    -->
    
    <!--
    <label style="color: #333333; font-size: 18px; font-weight: bold;">
      Votos en Actas Contabilizadas
    </label>    {{ columns }}
    -->

   
    <br/>
    <!--
      PARA MOSTRAR TITULO CON CUADRO DE COLOR
    --> 
    <DivColor :color="'#582D73'" text="Votos en Actas Computadas"/>

    <br><br>
    <label :style="{color: eleccion.tema ? '#333333' : 'white', 'font-size': '12px', 'font-weight': 'normal'}">
      En la tabla se muestran los votos que cada Partido Político, Coalición o Candidatura Independiente ha obtenido hasta el momento.
    </label>
    <a-table class="ant-table-striped" :scroll="{x:800}" 
        :columns="columns" :data-source="data" @resizeColumn="handleResizeColumn"
        :row-class-name="(_record, index) => (index % 2 === 1 ? 'table-striped' : null)" bordered
        :pagination="false" style="margin-bottom: 10px,">
      <template #headerCell="{ column }" >
        <template v-if="column.key >= 1">
          <span>

      <!-- TODO: aqui -->

            <img :src="'/prep2024/partidos_dtto/'+column.key+'.jpg'">

          </span>
        </template>
      </template>
      <template #bodyCell="{ column, record, index}">
       
        <template v-if="column.key === 'id_distrito'">
          <label style="font-weight: bolder; font-size: 15px;" v-if="index==0">
              Total de Votos
          </label>
          <label style="font-size: 13px;" v-else-if="index==1">
              Porcentaje
          </label>
          <label style="font-size: 13px;" v-else-if="index==2">
              Anticipados
          </label>
          <label style="font-size: 13px;" v-else-if="index==3">
              En Prisión Preventiva
          </label>
          <label v-else>
              ?????
          </label>
              
               

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
        
        <template v-else-if="column.key=='id_delegacion'">
          <div style = "text-align: center; vertical-align: middle">
            <!-- <a>Invite {{ record.id_delegacion }}</a>
            <a>Invite {{ record.id_delegacion }}</a>
            -->
            
            <div class="circle_tiny_green"></div>            
          </div>
        </template>
      </template>
    </a-table>
    <br>

    <label :style="{'font-size': '12px', 'font-weight': 'bolder', 'margin-bottom': '10px', color: eleccion.tema ? 'black': 'white'}">
      No se considera la cantidad de votos asentada en las Actas de Casilla Especial de Representación Proporcional. Por presentación, los decimales de los porcentajes muestran sólo cuatro dígitos. No obstante, al considerar todos los decimales, suman 100%.  
    </label>
<!--
  <h3> <br>
      Estadísticas de casilla
    </h3>
-->
     
   
    
  </template>
  <script setup>
        import { ref , onMounted, onBeforeMount} from 'vue';
        import { SmileOutlined, DownOutlined } from '@ant-design/icons-vue';
        import { useEleccionStore} from "../stores/eleccion_actual"
        import ResumenVotacion from "../components/ResumenVotacion.vue";
        import DivColor from './DivColor.vue';
        import { cifrasMiles } from "../helpers";

        
        import { message } from 'ant-design-vue';

        // 
        const errorMSG = (err) => {
          const errorM = err;
          if(errorM.includes("Failed to fetch")){
            message.error('Error al cargar los datos en Grid');
          }
          else
          {
            message.error(errorM);
          }

          
        };

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
       /*
        const columns = ref([{
          dataIndex: 'name',
          key: 'name',
          resizable: true,
          width: 150,
        }, {
          title: 'Age',
          dataIndex: 'age',
          key: 'age',
          resizable: true,
          width: 100,
          minWidth: 100,
          maxWidth: 200,
        }, {
          title: 'Address',
          dataIndex: 'address',
          key: 'address',
        }, {
          title: 'Tags',
          key: 'tags',
          dataIndex: 'tags',
        }, {
          title: 'Action',
          key: 'action',
        }]);
        */

        onBeforeMount(async () => {
            try {
              //eleccion.loadData = true;

            const item = eleccion.cmb1;
            const item_2 = eleccion.cmb2;
            const item_3 = eleccion.cmb3;
            const type = eleccion.eleccion;
            
            const urlServer = eleccion.urlPrep;

            const  url = urlServer + "actas_grid_data_todo.php?type="+type+"&item="+item+"&item_2="+item_2+"&item_3="+item_3;
 // alert(url)
            ///console.log(url)
            //const response = await fetch('../../src/assets/data/actas_contabilizadas.json'); // Cambia la ruta al archivo JSON o API
            const response = await fetch(url);
            const jsonData = await response.json();
            data.value = jsonData.data;
            
            columns.value = jsonData.columns;
            value_fields.value = jsonData.value_fields;
            participacion.value = jsonData.participacion;
            
            datos.value = jsonData.resumen;
            //Para poder agregar valores por cifras en miles en la tabla
            for(let i= 1; i< 15; i++){
              if(data.value[0]["votos_part_"+i] != undefined){
                data.value[0]["votos_part_"+i] = cifrasMiles(data.value[0]["votos_part_"+i]);
              }
              // console.log(data.value[0]["votos_part_"+i], 'esto es un part', i);
            }
            if(data.value[0]["votos_cand_no_reg"] != undefined){
              data.value[0]["votos_cand_no_reg"] = cifrasMiles(data.value[0]["votos_cand_no_reg"]);
            }
            if(data.value[0]["votos_nulos"] != undefined){
              data.value[0]["votos_nulos"] = cifrasMiles(data.value[0]["votos_nulos"]);
            }
            //eleccion.loadData = false;
            //console.log("LEI CAT: ", datos);

          } catch (error) {
            //eleccion.loadData = false;
            errorMSG(error.message);

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