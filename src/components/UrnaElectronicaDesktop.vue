<template>

    <a-flex gap="middle" horizontal>
        <img  class="imagen2" src = "@/assets/logo.png" />
        <div>
            <p :style="{fontSize:'20px', marginTop:'30px'}">Proceso Electoral Local 2023 - 2024</p>
           
        </div>
          
    </a-flex>
    <p> 
        Representación del Acta de Resultados de la Casilla Electoral Local de la Elección para 
        <b v-if="eleccion.eleccion == 1">Jefatura de Gobierno</b>
        <b v-if="eleccion.eleccion == 2">Diputaciones</b>
        <b v-if="eleccion.eleccion == 3">Diputaciones</b>
        <b v-if="eleccion.eleccion == 4">Alcaldía</b>  
  </p>
<!--
    VOTOS <br><br>
{{ votos }}
Arreglo <br><br>
{{ arreglo }}
-->

    <div style="font-size: 20px; text-align: left;">
        Datos de la Casilla  
    </div>
    <!--
       <br>DATOS<br>
    {{ data }}
    <br><br>     
    -->

    <!--   QR   
    <qrcode-vue :value="value" :size="150" level="Q" />
    <br>
    <a-flex wrap="wrap"  gap="middle" horizontal></a-flex>
    -->
    <a-row justify="space-around">
        <a-col :span="20">

            <!--
                Row 1 dentro de col
            -->
            <a-row>
                <a-col :span="4" class="colCenter">
                    Entidad:
                    <p class="pTitle">
                        Ciudad de México
                    </p>
                </a-col>
                <a-col :span="4" class="colCenter">
                    Distrito Electoral<br>Local: 
                    <p class="pTitle">
                        {{ arreglo[3]? arreglo[3].valor:'S/D' }}
                    </p>
                </a-col>
                <a-col :span="4" class="colCenter">
                    Municipio o Alcaldía:
                    <p class="pTitle">
                        {{ arreglo[0]? getDelegacion(arreglo[0].valor):'S/D' }}
                    </p>
                </a-col>
                <a-col :span="4" class="colCenter">
                    Circunscripción:
                    <p class="pTitle">
                        {{ arreglo[17]? arreglo[17].valor:'S/D' }}
                    </p>
                </a-col>
                <a-col :span="4" class="colCenter">
                    Sección:
                    <p class="pTitle">
                        {{ arreglo[1]? arreglo[1].valor:'S/D' }}
                    </p>
                </a-col>
                <a-col :span="4" class="colCenter">
                    Tipo de Casilla
                    <p class="pTitle">
                        {{ arreglo[2]? arreglo[2].valor:'S/D' }}
                    </p>
                </a-col>
            </a-row>

            <!--
                Row 2 dentro de col
            -->
            <a-row>
                <a-col :span="4" class="colCenter">
                    Versión <br>del software
                    <p class="pTitle">
                        {{ arreglo[25]? arreglo[25].valor:'S/D' }}
                    </p>
                </a-col>
                <a-col :span="8" class="colCenter">
                    Fecha y Hora<br>
                    de Impresión:
              
                    <p class="pTitle" style="padding-right: 6px;">
                            {{ arreglo[26]? Date (arreglo[26].valor) :'S/D' }}

                    </p>
                </a-col>
                <a-col :span="4" class="colCenter">
                    Identificación de<br>Urna Electrónica
                    <p class="pTitle" style="padding-right: 6px;">
                        {{ arreglo[23]? arreglo[23].valor:'S/D' }}
                    </p>
                </a-col>
                <a-col :span="4" class="colCenter">
                    Personas que<br>Votaron
                    <p class="pTitle">
                        {{ arreglo[22]? parseInt(arreglo[22].valor):'S/D' }}
                    </p>
                </a-col>
                <a-col :span="2" class="colCenter">
                    
                    <p class="pTitle">
                        
                    </p>
                </a-col>
                <a-col :span="2" class="colCenter">
                    
                    <p class="pTitle">
                        
                    </p>
                </a-col>
            </a-row>
      
           <!--      {{arreglo}}
            <p width="100%" style="font-size: 10px;">
                    DATOS DEL ACTA<br>
                    Delegación: {{ arreglo[0]? arreglo[0].valor:'S/D' }}
                    Sección: {{ arreglo[1]? arreglo[1].valor:'S/D' }}
                    Casilla: {{ arreglo[2]? arreglo[2].valor:'S/D' }}
                    id_distrito: {{ arreglo[3]? arreglo[3].valor:'S/D' }}

                    Tipo elección: {{ eleccion.eleccion }}
        
                    ue_identificador_comprobante: {{ arreglo[16]? arreglo[16].valor:'S/D' }}
                    ue_circunscripcion_federal: {{ arreglo[17]? arreglo[17].valor:'S/D' }}
                    ue_id_casilla: {{ arreglo[18]? arreglo[18].valor:'S/D' }}
                    ue_tipo_casilla: {{ arreglo[19]? arreglo[19].valor:'S/D' }}
                    ue_id_ext_contigua: {{ arreglo[20]? arreglo[20].valor:'S/D' }}
                    ue_tipo_documento: {{ arreglo[21]? arreglo[21].valor:'S/D' }}
                    ue_personas_votaron: {{ arreglo[22]? arreglo[22].valor:'S/D' }}
                    ue_identificacion {{ arreglo[23]? arreglo[23].valor:'S/D' }}
                    ue_votos_partidos:  {{ arreglo[24]? arreglo[24].valor:'S/D' }}
                    ue_version_software: {{ arreglo[25]? arreglo[25].valor:'S/D' }}
                    ue_fecha_impresion: {{ arreglo[26]? arreglo[26].valor:'S/D' }}
                    ue_codigo_integridad: {{ arreglo[27]? arreglo[27].valor:'S/D' }}
                    ue_qr: {{ arreglo[28]? arreglo[28].valor:'S/D' }}
                </p>
           -->
        </a-col>

        <!-- AQUI EL QR-->
        <a-col :span="4">
            <a-qrcode  :size="150" :value="value" />
        </a-col>
    </a-row>
    
    <div style="font-size: 20px; text-align: center;">
        Resultados de la votación de las Elecciones Locales para {{  eleccion.eleccion === 1 ? 'Jefatura de Gobierno' : (eleccion.eleccion === 2 ? 'Diputaciones' : 'Alcaldía') }}
    </div>
    <center>

        <div style='width: 50%; margin-top: 25px;'>
            <a-list v-for="item in votos" :key="item.imagen" item-layout="horizontal" bordered >
           
                    <a-row justify="space-around">
                        <a-col :span="12">
                            <img :src="'/prep2024/partidos/'+item.valores.imagen">
                        </a-col>
                        <!--
                        <a-col :span="6">
                            {{ item.valores.imagen }}
                        </a-col>    
                        -->
                        
                        <a-col :span="12">
                            {{ item.valor? item.valor: '' }}
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
                        <img :src="'/prep2024/partidos/no_reg.jpg'">
                    </a-col>
                    
                    <a-col :span="12">
                        {{arreglo[4]? arreglo[4].valor:'S/D' }}
                    </a-col>
                   
                </a-row>
            </a-list>

            <a-list :key="454545" item-layout="horizontal" bordered >
           
                <a-row justify="space-around">
                    <a-col :span="12">
                        <img :src="'/prep2024/partidos/nulos.jpg'">
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
            
            // servidor  26/Feb/2024 : http://nombreserver/prep2024/
            const urlServer = eleccion.urlPrep;
           // const  url ="https://aplicaciones.iecm.mx/prep2024/actas_grid_data.php?type="+type+"&item="+item+"&item_2="+item_2+"&item_3="+item_3;
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

    const getDelegacion = (idx) => {

        const delegacion = ["S/D","S/D","Azcapotzalco","Coyoacán","Cuajimalpa de Morelos","Gustavo A. Madero","Iztacalco",
        "Iztapalapa","La Magdalena Contreras","Milpa Alta","Álvaro Obregón","Tláhuac ","Tlalpan","Xochimilco","Benito Juárez",
        "Cuauht&eacute;moc","Miguel Hidalgo","Venustiano Carranza"];

        if(idx<0) return "S/D";

        return delegacion[idx];
    };
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