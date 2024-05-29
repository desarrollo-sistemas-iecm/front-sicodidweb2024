import { nextTick, onBeforeMount, onMounted, ref } from 'vue';
import {useEleccionStore} from "../stores/eleccion_actual";

export const capitalize = (s) => s && s.length > 0 && s[0].toUpperCase() + s.slice(1);

export const reverse = (s) => s && s.split``.reverse().join``;

export const priceProperty =(price)=> Number(price).toLocaleString('en-US', {
    style: "currency",
    currency: "USD"
});

// Función para formatear Números
export const formatNumber = number => Math.floor(number).toLocaleString('en-US');

export const cifrasMiles = (numeros) =>{
  return isNaN(numeros) ? '0' : new Intl.NumberFormat('es-MX').format(numeros);
}

// Función para aplicar prefijos (000) a números
export const formatNumberWithPrefix = number => {
    const formattedNumber = Math.floor(number).toLocaleString('en-US', { minimumIntegerDigits: 1 })
    return `00${formattedNumber}`.slice(-3); // Agregamos ceros y luego tomamos los últimos 5 dígitos
};

// Sin uso --------------
// TODO: aqui

export const getImagePath = (imageName) => {
   // return `../personas/${imageName}.png`;
    return `/prep2024/personas/${imageName}.png`;
  };

export const getImagePathPartido = (imageName) => {
  //return `../partidos/${imageName}.jpg`;
  return `/prep2024/partidos/${imageName}.jpg`;
};

export const getImagePathPartidoDtto = (imageName) => {
  //return `../partidos/${imageName}.jpg`;
  return `/prep2024/partidos_dtto/${imageName}.jpg`;
};

export const getImagePathPartidoCoalicion = (imageName) => {
  //return `../partidos/degradados_distribucion/${imageName}.png`;
  return `/prep2024/partidos/degradados_distribucion/${imageName}.png`;
};

export const getImagePathJG = (imageName) => {
  //return `../partidos/${imageName}.jpg`;
  return `/prep2024/personas_jg/${imageName}.png`;
};

export const nombresJG = (idCandidataCandidato) =>{
  const nombres = [ { id: 6, nombre : 'SALOMON CHERTORIVSKI WOLDENBERG' }, { id: 10, nombre: 'SANTIAGO TABOADA CORTINA' }, { id:14, nombre: 'CLARA MARINA BRUGADA MOLINA' } ];

  const objetoNombre = nombres.find(objeto => objeto.id === idCandidataCandidato);
  
  // Si el objeto es encontrado, regresamos el nombre, de lo contrario regresamos undefined o un mensaje de error
  return objetoNombre ? objetoNombre.nombre : `Sin Nombre para ${idCandidataCandidato}`;
}
// ----------------------

// Función para conseguir nombre de Delegación
export const getDelegacion = (idx) => {

  const delegacion = ["S/D","S/D","Azcapotzalco","Coyoacán","Cuajimalpa de Morelos","Gustavo A. Madero","Iztacalco",
  "Iztapalapa","La Magdalena Contreras","Milpa Alta","Álvaro Obregón","Tláhuac ","Tlalpan","Xochimilco","Benito Juárez",
  "Cuauht&eacute;moc","Miguel Hidalgo","Venustiano Carranza"];

  if(idx<0) return "S/D";
  
  return delegacion[idx];
};

    //MOBILE
export const isMobile=()=>{
      if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        return true
      } else {
        return false
      }
}; 

export const getUrlPrep=()=>{
  const protocol = window.location.protocol;
  const host = window.location.host;
  const pathname = window.location.pathname;
  const search = window.location.search;


  // PARA DIR 2024
  // const newURL = window.location.protocol.toString() + "//" + window.location.host.toString() + "/prep2024/";
 
 
  //const newURL = window.location.protocol.toString() + "//" + window.location.host.toString() + "/";
  
   const newURL = "http://localhost/2024/sicodid/publicador/api/";
  

// const newURL = "http://145.0.40.76/2024/v2-sicodid2024/services/";


  return newURL;
}

export const getUrlAPIPrep_node=()=>{
  const newURLAPI = "http://145.0.40.23:3090/api/";
  return newURLAPI;
}


// Nuevos helpers 19/feb/2024
export const filtrarPorDelegacion=(data, delegacionId)=>{
  return data.filter(item => item.id_delegacion === delegacionId);
}

export const filtrarPorDto=(data, distritoId)=>{
  return data.filter(item => item.distritoId === distritoId);
}


export const agregarCampoValor=(data, votos_del_alc)=>{
  // Recorremos los elementos de data
  for (let i = 0; i < data.length; i++) {
    const id_delegacion = data[i].id_delegacion;
    const campo_votos = data[i].campo_votos;

    // Buscamos en votos_del_alc el objeto con el mismo id_delegacion
    const found = votos_del_alc.find(item => item.id_delegacion === id_delegacion);

    // Si encontramos un objeto que coincida
    if (found) {
      // Extraemos el valor correspondiente al campo_votos del objeto encontrado
      const valor = found[campo_votos];

      // Agregamos el campo "valor" al objeto en data
      data[i].valor = valor;
    } else {
      // Si no se encuentra coincidencia, asignamos null al campo "valor"
      data[i].valor = null;
    }
  }

  return data;
}


// 13/Mayo/2024:
// PARA RECARGAR ELECCION
const zeroPad = (num, places) => String(num).padStart(places, '0');

export const leeEleccion = async (ultima)=> {

      //19/feb/2024
    const dataFiltrada = ref([]);
    const dataSustitucion = ref([]);
    const muestraError = ref("");
    // Pinia Store de la elección

      const eleccion = useEleccionStore();

      eleccion.loadData = true;

      // servidor  26/Feb/2024 : http://nombreserver/prep2024/
      const urlServer = eleccion.urlPrep;
      
      const response = await fetch(urlServer+"api_avance_entidad.php?type="+(eleccion.eleccion>0? eleccion.eleccion: "1")); // Cambia la ruta al archivo JSON o API
 
      //http://localhost/prep2024/
      //alert(response.headers.toString())
      const jsonData = await response.json();

                //15/Abril/2024
    ///alert(urlServer+"api_avance_entidad.php?type="+eleccion.eleccion);  

      // Conteos generales para mostrar en la APLICACIÓN
      // ---- AVANCES
      eleccion.avance_jg = jsonData.avance_jg.length>0? jsonData.avance_jg[0]: [];
      eleccion.avance_alc = jsonData.avance_alc.length>0? jsonData.avance_alc[0]: [];
      eleccion.avance_dmr = jsonData.avance_dmr.length>0? jsonData.avance_dmr[0]: [];
      eleccion.avance_rp = jsonData.avance_dmr.length>0? jsonData.avance_rp[0]: [];

      // ---- Esperadas   19/Marzo/2024
      eleccion.esperadas_jg = jsonData.esperadas_jg.length>0? jsonData.esperadas_jg[0]: [];
      eleccion.esperadas_alc = jsonData.esperadas_alc.length>0? jsonData.esperadas_alc[0]: [];
      eleccion.esperadas_dmr = jsonData.esperadas_dmr.length>0? jsonData.esperadas_dmr[0]: [];
      eleccion.esperadas_rp = jsonData.esperadas_rp.length>0? jsonData.esperadas_rp[0]: [];
      
      // ---- Esperadas   19/Marzo/2024
      eleccion.capturadas_jg = jsonData.capturadas_jg.length>0? jsonData.capturadas_jg[0]: [];
      eleccion.capturadas_alc = jsonData.capturadas_alc.length>0? jsonData.capturadas_alc[0]: [];
      eleccion.capturadas_dmr = jsonData.capturadas_dmr.length>0? jsonData.capturadas_dmr[0]: [];
      eleccion.capturadas_rp = jsonData.capturadas_rp.length>0? jsonData.capturadas_rp[0]: [];
      
      // ------Computadas  12/Abril/2024
      eleccion.computadas_jg = jsonData.computadas_jg.length>0? jsonData.computadas_jg[0]: [];
      eleccion.computadas_alc = jsonData.computadas_alc.length>0? jsonData.computadas_alc[0]: [];
      eleccion.computadas_dmr = jsonData.computadas_dmr.length>0? jsonData.computadas_dmr[0]: [];
      eleccion.computadas_rp = jsonData.computadas_rp.length>0? jsonData.computadas_rp[0]: [];
      
      // ----- VOTOS X ENTIDAD
      eleccion.votos_del_jg = jsonData.votos_del_jg.length>0?  jsonData.votos_del_jg:[];
      eleccion.votos_del_alc = jsonData.votos_del_alc.length>0? jsonData.votos_del_alc: [];
      eleccion.votos_dto_dmr = jsonData.votos_dto_dmr.length>0? jsonData.votos_dto_dmr: [];
      eleccion.votos_dto_rpe = jsonData.votos_dto_rpe.length>0? jsonData.votos_dto_rpe: [];
      // ----- Ranking Ganadores
      const rankJG = jsonData.rank_dto_jg.length>0? jsonData.rank_dto_jg:[];
      const rankDMR = jsonData.rank_dto_dmr.length>0? jsonData.rank_dto_dmr:[];
      //     const rankRP = jsonData.rank_dto_rp.length>0? jsonData.rank_dto_rp:[];
      const rankALC = jsonData.rank_del_alc.length>0? jsonData.rank_del_alc:[];

      // resumen
      eleccion.resumen_jg = jsonData.resumen_jg? jsonData.resumen_jg:[];
      eleccion.resumen_dmr = jsonData.resumen_dmr? jsonData.resumen_dmr:[];
      eleccion.resumen_rp = jsonData.resumen_rpe? jsonData.resumen_rpe:[];
      eleccion.resumen_alc = jsonData.resumen_alc? jsonData.resumen_alc:[];
      
      // Campos a usar x dto/del
      eleccion.fields_vote_jg = jsonData.fields_vote_jg? jsonData.fields_vote_jg:[];
      eleccion.fields_vote_mr = jsonData.fields_vote_mr? jsonData.fields_vote_mr:[];
      eleccion.fields_vote_rp = jsonData.fields_vote_rp? jsonData.fields_vote_rp:[];
      eleccion.fields_vote_alc = jsonData.fields_vote_alc? jsonData.fields_vote_alc:[];
      
      // 21/feb/2024
      eleccion.win_alc_alc = jsonData.win_alc_alc? jsonData.win_alc_alc:[];
      eleccion.win_dto_dmr = jsonData.win_dto_dmr? jsonData.win_dto_dmr:[];

      //13/Marzo/2023
      // Datos para gráficas generales y carrusel
      eleccion.votos_del_jg_total = jsonData.votos_del_jg_total? jsonData.votos_del_jg_total:[];
      eleccion.votos_dto_dmr_total = jsonData.votos_dto_dmr_total? jsonData.votos_dto_dmr_total:[];
      eleccion.votos_dto_rpe_total = jsonData.votos_dto_rpe_total? jsonData.votos_dto_rpe_total:[];
      eleccion.votos_del_alc_total = jsonData.votos_del_alc_total? jsonData.votos_del_alc_total:[];
      
      //22/Marzo/2023
      // Datos para gráficas total extranjero
      eleccion.votos_extranjero_jg_total = jsonData.votos_extranjero_jg_total? jsonData.votos_extranjero_jg_total:[];
      eleccion.votos_extranjero_dmr_total = jsonData.votos_extranjero_dmr_total? jsonData.votos_extranjero_dmr_total:[];
      eleccion.votos_extranjero_rpe_total = jsonData.votos_extranjero_rpe_total? jsonData.votos_extranjero_rpe_total:[];
      eleccion.votos_extranjero_alc_total = jsonData.votos_extranjero_alc_total? jsonData.votos_extranjero_alc_total:[];
      // alert(eleccion.hostactas)
      

       //alert(jsonData.urbanas_nourbanas.urbanas)
       eleccion.urbanas_nourbanas = jsonData.urbanas_nourbanas;
      
       console.log(jsonData);
       // Pongo a falso la votacion_ext  //25/Nov/2023
       //eleccion.cambia_votacion_ext(false);
 
       eleccion.corte = jsonData.corte ? jsonData.corte: [];
      //13/abril/2024

      if(urlServer.includes('prep2024.')){
        eleccion.hostactas = jsonData.hosts[0].hostactas;
      }
      else{
        eleccion.hostactas = jsonData.hosts[0].hostactasext;
      }
      
      // 19/Mayo/2024
      eleccion.horaabre = jsonData.hosts?  jsonData.hosts[0].horaabre: "2024-05-18T08:30:00";

      // AQUI DEFINIR COLORES DE MAPA
      const colores = [
        '#00579c',   //votos_part_1
        'blue',      //votos_part_2
        'green',    //votos_part_3
        '#87c344',    //votos_part_4
        '#ee3d44',    //votos_part_5
        '#fd8204',    //votos_part_6
        '#a53421',    //votos_part_7
        '#e6057e' ,   //votos_part_8
        '#722f8b',    //votos_part_9
        '#4479e1',    //votos_part_10
        'silver',    //votos_part_11
        'silver',     //votos_part_12
        'silver',     //votos_part_13
        '#800040',     //votos_part_14
        'gray',       //votos_part_15
        'gray',       //votos_part_16
        'gray',       //votos_part_17
        'gray', 
        'gray', 
        'gray', 
        'gray', 
        'gray', 
        'gray', 
        'gray', 
        'gray', 
        'gray', 
        'gray', 
        'gray', 
        'navy', 'gray', 'gray', 'gray', 'gray', 'gray', 'gray', 'brown', 'gray', 'gray', 'gray', 'gray']
      // Cargo datos necesarios a Rank DMR /resumen DMR
      let tmp = [];
      for (let index = 0; index < rankJG.length; index++) {
        tmp.push([rankJG[index].item, rankJG[index].number, "#"+Math.floor(Math.random()*16777215).toString(16) ,  rankJG[index].id_participante +'.jpg' ]);
      }
      eleccion.rank_dto_jg =  tmp;


      // Cargo datos necesarios a Rank DMR
      tmp = [];
      for (let index = 0; index < rankDMR.length; index++) {
        const ipar = parseInt(rankDMR[index].id_participante);
        tmp.push([rankDMR[index].item, rankDMR[index].number, colores[ipar] ,  rankDMR[index].id_participante +'.jpg' ]);
      }
      eleccion.rank_dto_dmr =  tmp; //jsonData.rank_dto_dmr.length>0? jsonData.rank_dto_dmr:[];
      /*     
      // Cargo datos necesarios a Rank RPE
      tmp = [];
      for (let index = 0; index < rankRP.length; index++) {
        
        tmp.push([rankRP[index].item, rankRP[index].number, "#"+Math.floor(Math.random()*16777215).toString(16) ,  rankRP[index].id_participante +'.jpg' ]);
      }
      eleccion.rank_dto_rp =  tmp;
      */
      // Cargo datos necesarios a Rank ALC
      tmp = [];
      for (let index = 0; index < rankALC.length; index++) {
        const ipar = parseInt(rankALC[index].id_participante);
        tmp.push([zeroPad(rankALC[index].item, 3), rankALC[index].number, colores[ipar] ,  rankALC[index].id_participante +'.jpg' ]);
      }
      eleccion.rank_del_alc =  tmp;
    /*
      console.log("LONGITUD rank_dto_dmr: ", eleccion.rank_dto_dmr.length);
      console.log("Avance 1: ", eleccion.avance_alc);
    */
      // quito Sppiner
      if( eleccion.eleccion ==0 )  {
          eleccion.eleccion = 1;
          $router.push({ name: 'home' });
          //router.push({ name: 'home' });
      }

      let aString = ""
      if(ultima) aString = ultima.toString();
      eleccion.ultimaEleccion=[aString];
      eleccion.loadData = false;

      //-------------------------------------------------
      // 19/Feb/2024
      // Con este código obtenco los valores de determinada Alcaldia o DTO
      dataFiltrada.value =  filtrarPorDelegacion(eleccion.fields_vote_alc, 2);
      dataSustitucion.value =  filtrarPorDelegacion(eleccion.votos_del_alc, 2);
      // Agregar el campo "valor" a cada objeto en dataFiltrada
      dataFiltrada.value.forEach(item => {
      const correspondiente = dataSustitucion.value.find(sustitucion => sustitucion.id_delegacion === item.id_delegacion);
          if (correspondiente) {
            item.valor = correspondiente[item.campo_votos];
          }
      });
}




