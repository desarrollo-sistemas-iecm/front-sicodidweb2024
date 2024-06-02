<template>
    <a-row justify="center">
        <a-col  :xs="14" :sm="14" :md="14" :lg="14" :xl="14" style="text-align: right;">
            <img  src = "@/assets/iecm.png" />
        </a-col>
        <a-col :xs="5" :sm="5" :md="5" :lg="5" :xl="5"></a-col>
        <a-col  :xs="3" :sm="3" :md="3" :lg="3" :xl="3" style="text-align: center; align-items: center;">
            <a-card hoverable :style="{'background-color': eleccion.tema ?  'white' : '#9c9c9c', border: '4px solid rgb(88, 45, 115)'}">
                <b> RP </b>
            </a-card>   
        </a-col>
        <a-col :xs="14" :sm="14" :md="14" :lg="14" :xl="14" style="text-align: center; align-items: center; justify-content: center; padding-top: 20px; padding-bottom: 20px;">
            <b> ACTA DE RESULTADOS</b>
        </a-col>
        <a-col :xs="14" :sm="14" :md="14" :lg="14" :xl="14" style="text-align: center; align-items: center; justify-content: center;">
            <a-qrcode  :size="400" :value="value" />
        </a-col>
        <a-col :xs="14" :sm="14" :md="14" :lg="14" :xl="14" style="text-align: center; align-items: center; justify-content: center; padding-top: 20px; padding-bottom: 20px;">
            <p><b>PROCESO ELECTORAL LOCAL ORDINARIO 2023 - 2024</b></p>
        </a-col>
    </a-row>
    <a-row>
        <a-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24" style="text-align: left; align-items: left; justify-content: left;">
            <p><b>DISTRITO ELECTORAL LOCAL :  {{ arreglo[3]? arreglo[3].valor:'S/D' }} </b></p>
            <p><b>DEMARCACIÓN :  {{ arreglo[0]? arreglo[0].valor:'S/D' }} </b></p>
            <p><b>CIRCUNSCRIPCIÓN PLURINOMINAL :  {{ arreglo[0]? arreglo[0].valor:'S/D' }} </b></p>
            <p><b>SECCIÓN :  {{ arreglo[0]? arreglo[0].valor:'S/D' }} </b></p>
            <p><b>TIPO CASILLA :  {{ arreglo[2]? arreglo[2].valor:'S/D' }} </b></p>
            <p><b>VERSIÓN DE SOFTWARE :   {{ arreglo[25]? arreglo[25].valor:'S/D' }} </b></p>
            <p><b>FECHA Y HORA DE IMPRESIÓN :   {{ arreglo[26]? arreglo[26].valor:'S/D' }} </b></p>
            <p><b>IDENTIFICACIÓN DE URNA :   {{ arreglo[23]? arreglo[23].valor:'S/D' }} </b></p>
        </a-col>
    </a-row>
    <a-row justify="center">
        <a-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24" style="text-align: center; align-items: center; justify-content: center;">
            <p><b>INFORMACIÓN DEL ACTA</b></p>
            <p>PERSONAS QUE VOTARON: {{ arreglo[22]? parseInt(arreglo[22].valor):'S/D' }}</p>
            <p><b> DIPUTACIONES </b></p>
        </a-col>
    </a-row>
<!--
    VOTOS <br><br>
{{ votos }}
Arreglo <br><br>
{{ arreglo }}
-->
    <center>

        <div style='width: 80%; margin-top: 25px;'>
            <a-list v-for="item in votos" :key="item.imagen" item-layout="horizontal" bordered >
           
                    <a-row justify="space-around">
                        <a-col :span="12">
      <!-- TODO: aqui -->

                            <img :src="'/sicodid2024/partidos/'+item.valores.imagen">
                        </a-col>
                        <!--
                        <a-col :span="6">
                            {{ item.valores.imagen }}
                        </a-col>    
                        -->
                        
                        <a-col :span="12">
                            {{ item.valor }}
                        </a-col>

                        <!--
                          <a-col :span="6">
                            {{ item.valores.siglas }}
                        </a-col>   
                        -->
                       
                    </a-row>
            </a-list>
            <a-list :key="2323" item-layout="horizontal" bordered >
           
                <a-row justify="space-around">
                    <a-col :span="12">
                        <img :src="'/sicodid2024/partidos/no_reg.jpg'">
                    </a-col>
                    
                    <a-col :span="12">
                        {{arreglo[4]? arreglo[4].valor:'S/D' }}
                    </a-col>
                    
                </a-row>
            </a-list>

            <a-list :key="454545" item-layout="horizontal" bordered >
            
                <a-row justify="space-around">
                    <a-col :span="12">
                        <img :src="'/sicodid2024/partidos/nulos.jpg'">
                    </a-col>
                    
                    <a-col :span="12">
                        {{arreglo[5]? arreglo[5].valor:'S/D' }}
                    </a-col>
                    
                </a-row>
            </a-list>
            <br><hr>
            <a-list item-layout="horizontal" bordered >
                <a-row justify="space-around">
                    <a-col :span="12" class="cellTitleTot" >
                        Total de votos: 
                    </a-col>
                    <a-col :span="12" class="cellTot">
                       {{ arreglo[6]? arreglo[6].valor:'S/D' }}
                    </a-col>
                </a-row>
            </a-list>
            
        </div>

        <a-row style="margin-top: 15px;">
            <a-col class="pTitle" :span="12"  >
                <div>
                    Mensaje Original
                </div>
                
            </a-col>
            <a-col class="pTitle" :span="1">

            </a-col>
            <a-col class="pTitle" :span="11" >
                Código de Integridad
            </a-col>
        </a-row>

        <a-row>
            <a-col class="pTitle" :span="12" style="padding: 10px; border-style: ridge;" >
                <div>
                    {{ arreglo[28]? arreglo[28].valor:'S/D' }} 
                </div>
                
            </a-col>
            <a-col class="pTitle" :span="1">

            </a-col>
            <a-col class="pTitle" :span="11" style="padding: 10px; border-style: ridge;">
                {{ arreglo[27]? arreglo[27].valor:'S/D' }}
            </a-col>
        </a-row>

    </center>
    
   


</template>

<script setup>
    import { ref, onBeforeMount, computed } from 'vue';
    import { useEleccionStore} from "../stores/eleccion_actual"
    import QrcodeVue from 'qrcode.vue'

    const eleccion = useEleccionStore();
    
    const props = defineProps({
        registroLeido:{
                type: Object
        }
    })

    const value = ref(props.registroLeido.ue_qr)
    const level = ref('M')
    const renderAs = ref('svg')
    const data = ref([]);
   
    const arreglo = ref([]);
    const votos = ref([]);
    /*
    Esta función buscarItemPorIdLlave toma un argumento idLlave y utiliza 
    el método find para buscar el elemento en el array data cuyo campo id_llave
     coincide con idLlave. Luego devuelve el primer elemento que cumple con esta condición.
     
    La función buscarItemPorIdLlave devolverá el objeto que tenga el campo "id_llave" igual al valor proporcionado como argumento.
    
    Si no se encuentra ningún elemento con el id_llave proporcionado, la función devolverá undefined.
    */
    const buscarItemPorIdLlave = (idLlave) => {
        return data.value.find(item => item.id_llave === idLlave);
    }

    const recorrerObjetoJSON = () => {
        for (var item in props.registroLeido) {
            if (Object.hasOwnProperty.call(props.registroLeido, item)) {
                const value = props.registroLeido[item];
                
                const itemEncontrado = buscarItemPorIdLlave(item);
                if(item.indexOf('votos_part_') === -1){
                    arreglo.value.push({ 'item': item, 'valor': value, 'valores': itemEncontrado});
                }
                else{
                    votos.value.push({ 'item': item, 'valor': value, 'valores': itemEncontrado});
                }
                
                
                //alert(`${item}: ${value}`);
            }
        }
    }

    const getImagePath = (imageName) => {
        return `${eleccion.urlPrep}partidos/${imageName}`;
    };
    
    onBeforeMount(async () => {
        try {
            
            const urlServer = eleccion.urlPrep;
            const  url = urlServer + "nombre_campos.php";
  //alert(url);
            const response = await fetch(url);
            const jsonData = await response.json();
            if(jsonData){
                data.value = jsonData; 
  
            }
            else{
                data.value = []; 
            }
          
            //------------------
            
            recorrerObjetoJSON();
         
        } catch (error) {
            //eleccion.loadData = false;
            console.error('Error al cargar los datos:', error);
        }
    });
</script>

<style scoped>
.imagen2{
    width: 130px;
    height: 50px;
    margin: 22px 45px 2px 2px;
    background-size: cover;
}

.colCenter{
    font-size: 10px;
    font-weight: bolder;
}
.pTitle{
    font-size: 8px;
    font-weight: normal;
    text-align: justify;
}

.cellTitleTot{
    font-size: 20px;
    font-weight: bold;
}
.cellTot{
    font-size: 20px;
    font-weight: normal;
}
</style>