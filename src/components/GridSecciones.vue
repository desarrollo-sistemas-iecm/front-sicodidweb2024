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
      <label style="color: #333333; font-size: 18px; font-weight: bold;">
        Detalle de votos por Sección
      </label> <br>
      
      <br>
      <!--
        <label style="color: #333333;  font-size: 10px; font-weight: bold;">
        Imagen procedente de:
      </label>
          <div style="display: flex; flex-wrap: wrap; justify-content: space-around; padding: 10px; margin-top:25px; font-size: 12px;">
        <img class="img_28" src="@/assets/votoext/acta.png"> <img class="img_28" src="@/assets/votoext/printer.png" style="padding-right: 10px;">  
        <img class="img_28" src="@/assets/votoext/acta.png" style="padding-left: 10px;"> <img class="img_28" src="@/assets/votoext/celular.png" style="padding-right: 10px;"> Movil <label style="font-size: 24px;">|</label> 
        <img class="img_28" style="padding-right: 10px; padding-left: 10px;" src="@/assets/votoext/urna.png"> Urna electrónica <label style="font-size: 24px;">|</label>
        <img class="img_28" src="@/assets/votoext/acta_gris.png" style="padding-left: 10px;"> <img class="img_28" src="@/assets/votoext/reloj_gris.png" > Acta en proceso  
        <div class="circle_tiny_green"></div><label style="color:green">Contabilizada</label>
        <div class="circle_tiny_red"></div><label style="color:red">No Contabilizada</label>
      </div>
      -->
    <!-- {{ data }} -->
      <a-table class="ant-table-striped" :scroll="{x:900}" 
          :columns="columns" :data-source="data" @resizeColumn="handleResizeColumn"
          :row-class-name="(_record, index) => (index % 2 === 1 ? 'table-striped' : null)" bordered>
        <template #headerCell="{ column }" >
          <template v-if="column.key >= 1">
            <span>
  
              <img :src="'/sicodid2024/partidos/'+value_fields[column.key-1].id_participante+'.jpg'">
  
            </span>
          </template>
        </template>
    
        <template #bodyCell="{ column, record }">
         
          <template v-if="column.key === 'id_distrito'">
            <a>
              <!--
                {{ record.name }} 
              -->
              <img class="img_28" src="@/assets/votoext/acta.png"><img class="img_28" src="@/assets/votoext/printer.png">
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
  <!--
    <h3> <br>
        Estadísticas de casilla
      </h3>
  -->
       

  <!--
      // ELIMINADO EL 15 de ENERO 2023
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

  -->
           
      
    <!--
      <label>El cálculo de Participación ciudadana puede rebasar el 100% si vota toda la ciudadanía de la Lista Nominal de una casilla; así como las Representaciones de Partidos Políticos y Candidaturas sin Partido.</label>
  
    -->
      
    </template>
    <script setup>
          import { ref , onMounted, onBeforeMount} from 'vue';
          import { SmileOutlined, DownOutlined } from '@ant-design/icons-vue';
          import { useEleccionStore} from "../stores/eleccion_actual"
          import ResumenVotacion from "../components/ResumenVotacion.vue";
          import { cifrasMiles } from "../helpers";

  
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
              
              const  url = urlServer + "actas_grid_data_seccion.php?type="+type+"&item="+item+"&item_2=&item_3=";
      
              const response = await fetch(url);
              const jsonData = await response.json();

              /// --- DATOS DE LAS SECCIONES
              data.value = jsonData.data;

              if(data.value.length != 0){
                data.value.forEach((element) =>{
                  // console.log(element);
                  element["votacion_total"] = cifrasMiles(element["votacion_total"]);
                })
              }

              // --- NOMBRES DE LAS COLUMNAS
              columns.value = jsonData.columns;

              // Catalogo de los partidos
              value_fields.value = jsonData.value_fields;
              participacion.value = jsonData.participacion;
              
              datos.value = jsonData.resumen;
  
              //eleccion.loadData = false;
              /////alert("TODAS!!!");
              //console.log("LEI CAT (GridSecciomes.vue!!!!!): ", categories.value);
              //console.log("LEI CAT (GridSecciomes.vue??????): ", value_fields.value);
  
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