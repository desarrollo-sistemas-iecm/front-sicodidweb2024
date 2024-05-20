<template>
    <div :style="{ color: eleccion.tema ? 'black' : 'white'}">
<!--
            OJO!!!!
        ESTOY EN: {{ eleccion.eleccion }}
        1=jefatura de gobierno  
        2=dmr  (DTO)
        4=alcaldias (DELEGACION)
        <br> <br>   
        COMBOS:<br>

        cmb1: {{ eleccion.cmb1 }} <br>
        cmb2: {{ eleccion.cmb2 }} <br>
        cmb3: {{ eleccion.cmb3 }} <br>   

        {{getDelegacion(eleccion.cmb1)}}
        REF {{ tipo_elec }}
-->

Ciudad de México / <label>{{tipo_elec==4? 'Alcaldía ' + getDelegacion(eleccion.cmb1):'Distrito '+eleccion.cmb1}}</label>
        <label v-if="eleccion.cmb2" style="font-weight: bold;"> / Sección {{eleccion.cmb2}}</label>
        <label v-if="eleccion.cmb3" style="font-weight: bold;"> / Casilla {{tipo_cas}}</label>
    </div>
</template>

<script setup>
import { ref, onMounted} from "vue";
import { useRoute, useRouter  } from 'vue-router';
import { useEleccionStore} from "../stores/eleccion_actual"
import { getDelegacion } from "../helpers";

const route = useRoute();  
const router = useRouter();
const eleccion = useEleccionStore();

const tipo_elec = ref('');
const tipo_cas = ref('');

onMounted(async () => {
      try {
        
        tipo_elec.value = eleccion.eleccion;

        if(eleccion.cmb3){
            const letra = eleccion.cmb3.substring(0,1);
            switch (letra) {
                case 'B':
                    tipo_cas.value = 'Básica ' + eleccion.cmb3.substring(1);
                    break;
                case 'C':
                    tipo_cas.value = 'Contigua ' + eleccion.cmb3.substring(1);
                    break;
                default:
                    tipo_cas.value = eleccion.cmb3;
                    break;
            }

           

        }

      } catch (error) {
        console.error('Error al cargar los datos:', error);
      }
    });
</script>

<style lang="css" scoped>
    
</style>