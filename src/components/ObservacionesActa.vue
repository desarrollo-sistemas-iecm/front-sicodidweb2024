<template>
  
    <div style="margin-top: 15px;">
        <!--
        PARA MOSTRAR TITULO CON CUADRO DE COLOR  
        --> 
        <DivColor :fontsize="'22px'" :color="'#582D73'" text="Observaciones en Acta"/>
        
        <a-row style="padding:20px;" :gutter="{ xs: 8, sm: 16, md: 24, lg: 32 }">
          <a-col :span="12" >
                <a-row :gutter="{ xs: 8, sm: 16, md: 24, lg: 32 }">
                  <a-col :span="2">
                    <div style="top: 4345px;
                      left: 389px;
                      width: 8px;
                      height: 29px;
                      /* UI Properties */
                      background: #4099A0 0% 0% no-repeat padding-box;
                      opacity: 1;">
                    </div>
                  </a-col>
                  <a-col :span="22">
                    <h3 style="color:#4099A0; font-weight: bolder;">Computadas</h3>
                  </a-col>
                </a-row>
                <p :style="{'margin-top': '22px', color: eleccion.tema ? 'black' : 'white'}">Algunas Actas pueden presentar inconsistencias, pero tienen información que permite contabilizarlas:</p>
                <br>
                <b>Ilegible</b>
                <p :style="{ color: eleccion.tema ? 'black' : 'white'}">
                  La cantidad de votos en algún campo del Acta PREP no puede leerse, tanto en letra como en número.
                </p>
  
                <b>Sin Dato</b>
                <p>La cantidad de votos no fue asentada en el Acta PREP ni en letra ni en número en algún campo del Acta PREP.</p>
                
               
          </a-col>
          <a-col :span="12">
            <a-row :gutter="{ xs: 8, sm: 16, md: 24, lg: 32 }">
              <a-col :span="2">
                <div style="top: 4345px;
                  left: 389px;
                  width: 8px;
                  height: 29px;
                  /* UI Properties */
                  background: #D1117E 0% 0% no-repeat padding-box;
                  opacity: 1;">
                </div>
              </a-col>
              <a-col :span="22">
                <h3 style="color:#D1117E; font-weight: bolder;">No Computadas</h3>
              </a-col>
            </a-row>
            <br>
            <b>Excede Lista Nominal</b>
            <p>La suma de todos los votos en el Acta PREP, excede el número de ciudadanas y ciudadanos en la Lista Nominal de Electores de la casilla, incluido el número de votos emitidos por los representantes de los Partidos Políticos y, en su caso Candidaturas sin Partido.</p>
            
            <b>Sin Acta</b>
            <p>
              El Acta PREP no llegó junto con el paquete electoral al Centro de Acopio y Transmisión de Datos (CATD), por algunas de las siguientes causas:
              <br><br>
              1. Sin Acta por paquete no entregado.<br>
              2. Sin Acta por casilla no instalada.<br>
              3. Sin Acta por paquete entregado sin sobre.<br>
            </p>
  
            <b>Todos los campos ilegibles o sin dato</b>
            <p>
              Todos los campos del Acta PREP correspondientes al número de votos, son ilegibles o no contienen dato alguno, tanto en letra como en número. 
           </p>
            
          </a-col>
        </a-row>
      </div>
</template>

<script setup>
  import {useEleccionStore} from "../stores/eleccion_actual"
  const eleccion = useEleccionStore();
    import DivColor from './DivColor.vue';
</script>

<style lang="scss" scoped>

</style>