import { ref, computed, onBeforeMount } from 'vue'
import { defineStore } from 'pinia'

import alcaldiasMap from "../assets/alcaldias.geo.json";
// import distritosMap from "../assets/distritos_convertido.geo.json";
import distritosMap from "../assets/distritos.geo.json";

export const useMapStore = defineStore('mapas', () => {

    // MAPAS geoJSON
    const mapaFileAlcaldias = ref(alcaldiasMap);
    const mapaFileDistritos = ref(distritosMap);

    // TEXTOS
    const titulos = ['S/D', 'Jefatura de Gobierno', 'Diputación de Mayoría Relativa','Diputación de Representación Proporcional','Alcaldía'];
    // FUNCINES DE MAPEO
    /*
    async function cargarMapa() {
          try {
            const response = await fetch("../../src/assets/alcaldias.geo.json");
            
            if (!response.ok) {
              throw new Error("No se pudo cargar el archivo JSON");
            }
            
            //mapaFile = await response.json();
            mapaFile = await response.json();
            //console.log("mapaJSON: ", JSON.stringify(mapaFile)); // Aquí puedes hacer lo que necesites con el objeto JSON
            
            // Ahora puedes utilizar 'mapaJSON' en tu componente Vue
          } catch (error) {
            console.error(error);
          }
    }

    onBeforeMount(async()=>{
      
        // MAPA
        
        await cargarMapa();
        console.log("CARGUE: ", JSON.stringify(mapaFile))
        
    })
    */
  return { mapaFileAlcaldias, mapaFileDistritos, titulos }
})