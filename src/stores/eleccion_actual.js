import { ref, reactive , onMounted} from 'vue'
import { defineStore } from 'pinia'

// para conseguir url
import { getUrlPrep, getUrlAPIPrep_node, getDelegacion } from "../helpers";
///const urlPrep = ref(getUrlPrep());

// AQUI MUESTRO URL
//alert(urlPrep.value);

export const useEleccionStore = defineStore('eleccion', () => {
  const eleccion = ref(0)
  const tema = ref(true);
  // Combos
  const cmb1 = ref("");
  const cmb2 = ref("");
  const cmb3 = ref("");
  const keyCmb = ref("");
  const readData = ref(true);

  const loadData = ref(true);
  //const votacion = ref([]);

  const desdeSeccion = ref(false);

  const mainKey = ref(new Date());

  const avance_jg = ref([]);
  const avance_alc = ref([]);
  const avance_dmr = ref([]);
  const avance_rp = ref([]);

  //19/Marzo/2024
  const esperadas_jg = ref([]);
  const esperadas_alc = ref([]);
  const esperadas_dmr = ref([]);
  const esperadas_rp = ref([]);

  const votos_del_jg = ref([]);
  const votos_del_alc = ref([]);
  const votos_dto_dmr = ref([]);
  const votos_dto_rpe = ref([]);

  const rank_dto_jg = ref([]);
  const rank_dto_dmr = ref([]);
  const rank_dto_rp = ref([]);
  const rank_del_alc = ref([]);
  
  const resumen_jg = ref([]);
  const resumen_dmr = ref([]);
  const resumen_rp = ref([]);
  const resumen_alc = ref([]);

  const capturadas_jg = ref([]);
  const capturadas_dmr = ref([]);
  const capturadas_rp = ref([]);
  const capturadas_alc = ref([]);
  
  // computadas 11/Abril/2024
  const computadas_jg = ref([]);
  const computadas_dmr = ref([]);
  const computadas_rp = ref([]);
  const computadas_alc = ref([]);

  // Cambio al 19/Feb/2024
  const fields_vote_jg = ref([]);
  const fields_vote_mr = ref([]);
  const fields_vote_rp = ref([]);
  const fields_vote_alc = ref([]);

  // 13/03/2024
  const votos_del_jg_total = ref([]);
  const votos_dto_dmr_total = ref([]);
  const votos_dto_rpe_total = ref([]);
  const votos_del_alc_total = ref([]);

  //22/marzo/2024
  const votos_extranjero_jg_total= ref([]); const votos_extranjero_dmr_total= ref([]);
  const votos_extranjero_rpe_total= ref([]); const votos_extranjero_alc_total= ref([]);
  // 21/feb/2024
  const win_dto_dmr = ref([]);
  const win_alc_alc = ref([]);
  
  const es_desktop = ref(true);

  const es_voto_extra = ref(false);

  const es_voto_extra_rpe = ref(false);

  const es_bd = ref(false);

  // Store para totales por dto / del

  // URL BASE
  const urlPrep = ref(getUrlPrep());
  const urlPrepAPINode = ref(getUrlAPIPrep_node());

  const estadisticaCategoria = ref([])

  const avance = ref(null); 
  const capturadas = ref(null);  
  const resumen = ref(null);
  const contabilizadas = ref(null);
  const lista_nominal = ref(null);
  const lista_nominal_contabilizadas = ref(null);
  const especiales = ref(null);
  const sin_especiales = ref(null);
  const suma_esp_sinesp = ref(null);
  const participacion = ref(null);
  
  // Nuevo para saber donde esta parado
  const ultimaEleccion = ref(["1"]);
  const ultimaPantalla = ref("");

  const corte = ref(null);

  // Nuevo, host de imagenes
  const hostactas = ref("");
  const hostactasext = ref("");
  const horaabre = ref("2024-05-19T08:30:00");

  //15/Abril/2024
  const urbanas_nourbanas = ref(null)


  function eleccionActual(actual) {
    eleccion.value = actual;
  }

  function temaActual() {
    tema.value = !tema.value;   
  }

  function combosActuales(c1, c2, c3, myKey, nread){
    readData.value = nread===''? readData.value: nread;
    cmb1.value = c1;
    readData.value = nread===''? readData.value: nread;
    cmb2.value = c2;
    if(c3!="_"){
        readData.value = nread===''? readData.value: nread;
        cmb3.value = c3;
    }
    //--------------------------------------------
    // OJO!!! AQUI ESTA EL ERROR AL BUSCAR SECCION!!!!
    //-------------------------------------------
    
    keyCmb.value = myKey;
    //readData.value = nread===''? readData.value: nread;
  }

  // Solo cargamos lo que tenga un valor
  function combosActualesValidos(c1, c2, c3, key =''){
    cmb1.value = c1;
    cmb2.value = c2;
    cmb3.value = c3;
    if(key!=='') keyCmb.value = eleccion.value
    //keyCmb.value = eleccion.value
  }

  // Función para cabiar el estado al seleccionar
  // vatación extranjero / votación sin libertad/ votación en postración
  function cambia_votacion_ext(valor, valor2=false){
    es_voto_extra.value = valor;
    es_voto_extra_rpe.value = valor2;
    /////alert(es_voto_extra.value)
  }


  return { eleccion, eleccionActual, tema, 
    temaActual, combosActuales, combosActualesValidos, cmb1, cmb2, cmb3,
    keyCmb, readData, avance_jg, avance_alc, avance_dmr, avance_rp, votos_del_jg, 
    votos_del_alc, votos_dto_dmr, votos_dto_rpe, loadData, rank_dto_jg, rank_dto_dmr, 
    rank_dto_rp, rank_del_alc, resumen_jg, resumen_dmr, 
    resumen_rp, resumen_alc, desdeSeccion, es_desktop, es_voto_extra,
    cambia_votacion_ext, es_voto_extra_rpe, es_bd, urlPrep, urlPrepAPINode, fields_vote_jg, fields_vote_mr,
    fields_vote_rp, fields_vote_alc, win_dto_dmr, win_alc_alc,votos_del_jg_total, votos_dto_dmr_total,
    votos_dto_rpe_total,votos_del_alc_total,    
    votos_extranjero_jg_total, votos_extranjero_dmr_total,
    votos_extranjero_rpe_total,votos_extranjero_alc_total,     
    estadisticaCategoria, avance, capturadas, resumen, 
    contabilizadas, lista_nominal, lista_nominal_contabilizadas, esperadas_jg, esperadas_alc, 
    esperadas_dmr, esperadas_rp, especiales, sin_especiales, suma_esp_sinesp, participacion, 
    ultimaEleccion, ultimaPantalla, capturadas_jg, capturadas_alc, 
    capturadas_dmr, capturadas_rp, corte, computadas_jg, computadas_dmr, computadas_rp, 
    computadas_alc, hostactas, hostactasext, horaabre, urbanas_nourbanas, mainKey

  }
  
})
