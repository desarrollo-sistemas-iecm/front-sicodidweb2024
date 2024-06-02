

<!--
  GridCasillas.vue:

  Despliega el grid con datos obtenidos de
  
  Hijo de VotosSeccion.vue
-->
<template>


  
  <!--
       CMB1: {{   eleccion.cmb1 }} <br/>
  CMB2: {{   eleccion.cmb2 }}<br/>
  CMB3: {{   eleccion.cmb3 }}   <br/>

  
  
   
      Apartado de RESUMEN DE VOTACIÓN  <br/>  
      
         ESTOY AQUI!!<br/>
    <div>
        eleccion: {{ eleccion.eleccion }}
    </div>
    
    MOSTRAR OBSERVA???  {{ mostrarObservaciones }}
  -->

    <ResumenVotacion :datosResumen="datos" :key="datos?datos.votos_acumulados:0"></ResumenVotacion>
    
    <br>
    <label :style="{color: eleccion.tema ? '#333333' : 'white', 'font-size': '18px', 'font-weight': 'bold'}">
      Detalle de votos por Casilla
    </label> <br>
    <label :style="{color: eleccion.tema ? '#333333' : 'white',  'font-size': '10px', 'font-weight': 'bold'}">
      Imagen procedente de:
    </label>
    <br>
    <div style="display: flex; flex-wrap: wrap; justify-content: space-around; padding: 10px; margin-top:25px; font-size: 12px;">
      <img class="img_28" src="@/assets/votoext/acta.png"> <img class="img_28" src="@/assets/votoext/printer.png" style="padding-right: 10px;"> <label :style="{ color: eleccion.tema ? 'black' : 'white' }">Escáner </label>
      <img class="img_28" src="@/assets/votoext/acta.png" style="padding-left: 10px;"> <img class="img_28" src="@/assets/votoext/celular.png" style="padding-right: 10px;"> <label :style="{ color: eleccion.tema ? 'black' : 'white' }"> Móvil </label> <label style="font-size: 24px;">|</label> 
      <img class="img_28" style="padding-right: 10px; padding-left: 10px;" src="@/assets/votoext/urna.png"> <label :style="{ color: eleccion.tema ? 'black' : 'white' }"> Urna electrónica </label> <label style="font-size: 24px;">|</label>
      <img class="img_28" src="@/assets/votoext/acta_gris.png" style="padding-left: 10px;"> <img class="img_28" src="@/assets/votoext/reloj_gris.png" >   <label :style="{ color: eleccion.tema ? 'black' : 'white' }"> Acta en proceso</label> 
      <div class="circle_tiny_green"></div><label style="color:green">Contabilizada</label>
      <div class="circle_tiny_red"></div><label style="color:red">No Contabilizada</label>
    </div>

    <a-table class="ant-table-striped" :scroll="{x:900}" 
        :columns="columns" :data-source="data" @resizeColumn="handleResizeColumn"
        :row-class-name="(_record, index) => (index % 2 === 1 ? 'table-striped' : null)" bordered>
      <template #headerCell="{ column }" >
        <template v-if="column.key >= 1">
          <span>

      <!-- TODO: aqui -->

            <img :src="'/sicodid2024/partidos/'+value_fields[column.key-1].id_participante+'.jpg'">
<!--
  
 <img :src="'/partidos/'+value_fields[column.key-1].id_participante+'.jpg'">
-->
          </span>
        </template>

        <template v-if="column.key == 'tipo_casilla'">
          <span>

            Casilla
          </span>
        </template>

        <template v-if="column.key == 'contabilizar'">
          <span>
            Contabilizar
          </span>
        </template>

        <template v-if="column.key == 'id_distrito'">
          <span>
          </span>
        </template>
      </template>

      
  
      <template #bodyCell="{ column, record }">
       
        <template v-if="column.key === 'id_distrito'">
          <!--

            AQUI HAY QUE HACER PRUEBAS!!!!!!! OJO!!

          -->
         
          <IconImageViewRPE :key="record" v-if="record.nombre_img || record.validado=='T'" :dto="record.id_distrito" :nombreImg="record.nombre_img" :registro ="record" :columnas="columns" ></IconImageViewRPE>

          <a v-if="!record.nombre_img && record.validado!= 'T'" >
            <!--
              {{ record.name }} 
            -->
            
            <img  class="img_28" src="@/assets/votoext/acta_gris.png"><img class="img_28" src="@/assets/votoext/reloj_gris.png">
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
        
        <template v-else-if="column.key=='contabilizar'">
          <div style = "text-align: center; vertical-align: middle">
            <!-- <a>Invite {{ record.id_delegacion }}</a>
            <a>Invite {{ record.id_delegacion }}</a>
            <div class="circle_tiny_green"></div>
            -->

            <span v-if="record.contabilizar==='T'" >
              <div class="circle_tiny_green"></div>
            </span>
            <span v-if="record.contabilizar!='T'" >
              <div class="circle_tiny_red"></div>
            </span>
                        
          </div>
        </template>
            
        <template v-else-if="column.key === 'observaciones'">
          <span>
            <a-tag>
              {{ record.observaciones }}
            </a-tag>
          </span>
        </template>

        <template v-else-if="column.key === 'tipo_casilla'">
          <span>
              {{ record.tipo_casilla }}
              <br>(Dto {{ record.id_distrito }} - {{ record.id_seccion }})
          </span>
        </template>
           
       
        </template>
 
    </a-table>
<!--
  <h3> <br>
      Estadísticas de casilla
    </h3>
-->
     
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
    

    <label :style="{'font-size': '10px', 'margin-top': '30px', 'margin-bottom': '30px', color: eleccion.tema ? '' : 'white'}">El cálculo de Participación ciudadana puede rebasar el 100% si vota toda la ciudadanía de la Lista Nominal de una Casilla; así como las Representaciones de Partidos Políticos y Candidaturas Independientes.</label>
  
  </template>
  <script setup>
        import { ref , onMounted, onBeforeMount } from 'vue';
        import { SmileOutlined, DownOutlined } from '@ant-design/icons-vue';
        import { useEleccionStore} from "../stores/eleccion_actual"
        import ResumenVotacion from "../components/ResumenVotacion.vue";

        import IconImageViewRPE from './IconImageViewRPE.vue';

        const prop = defineProps({
            titulo: {
                    type: String,
                   // required: "true"
              },
            tipo: {
                    type: String,
                   // required: "true"
            },
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

            const item = eleccion.cmb1;
            const item_2 = eleccion.cmb2;
            const item_3 = eleccion.cmb3;
            const type = eleccion.eleccion;

            const urlServer = eleccion.urlPrep;
            
            const  url = urlServer + "actas_grid_data_rp.php?type=3&item=&item_2=&item_3=";
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