
<template>
    <div>
        <div class="base_datos" style="padding-left: 10%; padding-right: 10%;" :style="{'background-color': eleccion.tema ? 'white' : '#1d1d1d', border: 0, color: eleccion.tema ? 'black' : 'white' }">
            <!--blanco -->
            <p id="definicion"><center><h1>- Centro de ayuda -</h1></center></p>
            <p style="color: #dc3785; text-align: left"><b>¿Qué es el PREP?</b> </p>
            <a-row :gutter="{ xs: 8, sm: 16, md: 24, lg: 32 }"  justify="center" >
                <a-col :xs="24" :sm="24" :md="18" :lg="18" :xl="18">
                    <p>
                        Es <b>un mecanismo de información</b> que recabará los resultados preliminares y <b>NO DEFINITIVOS</b> de la elección local de este <b>6 de junio de alcaldías y diputaciones.</b>
                        Este programa proporcionará resultados preliminares de la elección, conforme se van computando las Actas de Escrutinio y Cómputo de Casilla.   
                    </p>
                </a-col>
            </a-row>
            <p style="text-align: right">¿Cuál es el objetivo del PREP?</p>
            <a-row :gutter="{ xs: 8, sm: 16, md: 24, lg: 32 }"  justify="center" >
                <a-col :xs="24" :sm="24" :md="18" :lg="18" :xl="18">
                    <p>
                        La publicación de los resultados preliminares de la elección en un tiempo muy breve después de que cierran las casillas, es de interés para el ciudadano que busca conocer el resultado del proceso electoral. Asimismo, esto evita cualquier sospecha sobre una posible manipulación de la información.
                        El PREP garantiza la seguridad, transparencia, confiabilidad, credibilidad e integridad de la información de las elecciones del 6 de junio.   
                    </p>
                </a-col>
            </a-row>
        </div>
    
        <div class="carpeta" style="padding-left: 10%; padding-right: 10%;" :style="{'background-color': eleccion.tema ? '#582d73' : '#000000', border: 0, color: 'white' }">
            <p style="color: white; text-align: left"><b>¿Qué es una candidatura común?</b></p>
            <a-row :gutter="{ xs: 8, sm: 16, md: 24, lg: 32 }"  justify="center" >
                <a-col :xs="24" :sm="24" :md="18" :lg="18" :xl="18">
                    <p>
                        En las candidaturas comunes, dos o más partidos políticos, podrán postular al mismo candidato/a, lista o fórmula, para las elecciones de Alcaldias y Diputados y Diputadas a las Asamblea Legislativa por el principio de mayoría relativa y de representación proporcional; sin embargo, estos partidos NO comparten plataforma electoral.  
                    </p>
                </a-col>
            </a-row>
            <p style="text-align: right">¿Qué es un candidato independiente? </p>
            <a-row :gutter="{ xs: 8, sm: 16, md: 24, lg: 32 }"  justify="center" >
                <a-col :xs="24" :sm="24" :md="18" :lg="18" :xl="18">
                    <p>
                        Una candidata o candidato independiente es aquel o aquella aspirante a algún cargo de elección popular que no pertenece a un partido político y que tiene permitido, según las disposiciones electorales, participar en las elecciones cubriendo ciertos requisitos, entre los que destaca obtener respaldo por parte de un porcentaje determinado de los electores del ámbito por el que quiera competir (En el caso del DF en estas elecciones, delegación o distrito), lo cual se hace habitualmente juntando firmas de apoyo.  
                    </p>
                </a-col>
            </a-row>
        </div>
    
        <div class="descargas" style="padding-left: 10%; padding-right: 10%;" :style="{'background-color': eleccion.tema ? 'white' : '#1d1d1d', border: 0, color: eleccion.tema ? 'black' : 'white' }">
            <p style="color: #dc3785; text-align: left"><b>¿Qué es un candidato no registrado?</b></p>
            <a-row :gutter="{ xs: 8, sm: 16, md: 24, lg: 32 }"  justify="center" >
                <a-col :xs="24" :sm="24" :md="18" :lg="18" :xl="18">
                    <p>
                        Físicamente es un apartado en la boleta electoral donde tradicionalmente el elector podía escribir el nombre de la persona real o ficticia que él consideraba merecía ser candidato al cargo de elección popular en disputa, siendo contabilizado como voto nulo. Se considera un ejercicio de libertad de expresión y forma de rechazo hacia las opciones registradas. Actualmente puede ser analizado como un precedente no regulado de los candidatos independientes.
                    </p>
                </a-col>
            </a-row>
            <p style="text-align: right">¿Qué hacer al momento de la captura de información en el </p><p style="text-align: right">sistema del PREP, cuando se presenta una inconsistencia?</p>
            <a-row :gutter="{ xs: 8, sm: 16, md: 24, lg: 32 }"  justify="center" >
                <a-col :xs="24" :sm="24" :md="18" :lg="18" :xl="18">
                    <p>
                        Una candidata o candidato independiente es aquel o aquella aspirante a algún cargo de elección popular que no pertenece a un partido político y que tiene permitido, según las disposiciones electorales, participar en las elecciones cubriendo ciertos requisitos, entre los que destaca obtener respaldo por parte de un porcentaje determinado de los electores del ámbito por el que quiera competir (En el caso del DF en estas elecciones, delegación o distrito), lo cual se hace habitualmente juntando firmas de apoyo.  
                    </p>
                </a-col>
            </a-row>
        </div>
    
    
        <div class="descomprimir" style="padding-left: 10%; padding-right: 10%;" :style="{'background-color': eleccion.tema ? '#582d73' : '#000000', border: 0, color: 'white' }">
            <p style="color: white; text-align: left"><b>¿Cómo saber si un Acta se contabiliza o no en el PREP?</b></p>
            <a-row :gutter="{ xs: 8, sm: 16, md: 24, lg: 32 }"  justify="center" >
                <a-col :xs="24" :sm="24" :md="18" :lg="18" :xl="18">
                    <p>
                        Físicamente es un apartado en la boleta electoral donde tradicionalmente el elector podía escribir el nombre de la persona real o ficticia que él consideraba merecía ser candidato al cargo de elección popular en disputa, siendo contabilizado como voto nulo. Se considera un ejercicio de libertad de expresión y forma de rechazo hacia las opciones registradas. Actualmente puede ser analizado como un precedente no regulado de los candidatos independientes.
                    </p>
                </a-col>
            </a-row>
            <p style="text-align: right">¿Cómo se calcula la participación ciudadana?</p>
            <a-row :gutter="{ xs: 8, sm: 16, md: 24, lg: 32 }"  justify="center" >
                <a-col :xs="24" :sm="24" :md="18" :lg="18" :xl="18">
                    <p>
                        El porcentaje de participación ciudadana se obtiene al multiplicar los votos por 100 y dividir el resultado de esta operación entre el número de personas registrado en la lista nominal de actas contabilizadas
                    </p>
                </a-col>
            </a-row>
            
            <a-row :gutter="{ xs: 8, sm: 16, md: 24, lg: 32 }"  justify="center" >
                <a-col :xs="24" :sm="24" :md="18" :lg="18" :xl="18">
                    <b>Total de votos/lista nominal de actas contabilizadas X 100= % Participación</b>
                </a-col>
                <a-col :xs="24" :sm="24" :md="18" :lg="18" :xl="18">
                    <p>
                        *Porcentaje calculado sin considerar la votación en casilla especiales
                    </p>
                </a-col>
            </a-row>
        </div>
    
        <div class="abrir" id="abrir" style="padding-left: 10%; padding-right: 10%;" :style="{'background-color': eleccion.tema ? 'white' : '#1d1d1d', border: 0, color: eleccion.tema ? 'black' : 'white' }">
            <p style="color: #dc3785; text-align: left"><b>¿Qué es la lista nominal?</b></p>
            <a-row :gutter="{ xs: 8, sm: 16, md: 24, lg: 32 }"  justify="center" >
                <a-col :xs="24" :sm="24" :md="18" :lg="18" :xl="18">
                    <p>
                        La Lista Nominal es la relación de ciudadanos que contiene el nombre, dirección, distrito y sección de quienes cuentan con su Credencial para Votar vigente y están incluidos en el Padrón Electoral. También cuenta con una fotografía impresa idéntica a la de la Credencial para Votar más reciente.
                        El día de la votación, los funcionarios de casilla contaron con listas nominales impresas con los nombres de los ciudadanos con derecho a votar. Dichos funcionarios son los encargados de verificar la identidad del votante.
                    </p>
                </a-col>
            </a-row>
            <p style="text-align: right">¿Qué es la lista nominal de electores residentes en el</p> <p style="text-align: right"> extranjeros para los procesos electorales locales 2020-2021?</p>
            <a-row :gutter="{ xs: 8, sm: 16, md: 24, lg: 32 }"  justify="center" >
                <a-col :xs="24" :sm="24" :md="18" :lg="18" :xl="18">
                    <p>
                        Es la relación elaborada por la Dirección Ejecutiva del Registro Federal de Electores del Instituto Nacional Electoral que contiene el nombre de las personas que expresaron su interés en participar en el Proceso Electoral Federal y Local 2020-2021, que se encuentran incluidas en el padrón electoral, que cuentan con su credencial para votar, que residen en el extranjero o se encuentran fuera del territorio nacional, y que solicitan su inscripción en dicha lista, la cual es de carácter temporal.
                    </p>
                </a-col>
            </a-row>
        </div>
    </div>
    </template>
    <script setup>
        import { onUnmounted, ref } from 'vue';
        // Pinia Store de la elección
        import {useEleccionStore} from "../stores/eleccion_actual";
        const eleccion = useEleccionStore();
        import { isMobile } from "../helpers";
        let select = ref({type : 'home'});
    
        onUnmounted(() => {
            // text content should be the same as current `count.value`
            console.log("UNMOUNTED!!!!!!!!!!!!");
            eleccion.es_bd = false;
        })
    </script>
    
    <style>
    
        .base_datos
        {
        padding: 20px;
        font: normal normal normal 25px/29px Roboto;
        color:#000;
        
        /*top: 476px;
        left: 258px;
        width: 1663px;
        height: 720px;
        /* UI Properties */
        background: var(--blanco) 0% 0% ;
        background: #FFFFFF 0% 0% ;
        opacity: 1;
        
        }
        
        .img2 {
            width: 100%;
        }
        
        .img3 {
            max-width: 100%;
            height: auto;
        }
        
        .descargas
        {
        padding: 20px;
        font: normal normal normal 25px/29px Roboto;
        color:#000;
        /* UI Properties */
        background: var(--blanco) 0% 0% ;
        background: #FFFFFF 0% 0% ;
        opacity: 1;
        
        }
        
        .descomprimir
        {
        padding: 20px;
        background: #582D73 0% 0% ;
        text-align: left;
        /*font: normal normal medium 50px/58px Roboto;*/
        opacity: 1;
        color: #FFFFFF;
        font: normal normal normal 25px/29px Roboto;
        letter-spacing: 0px;
        
        }
        
        .carpeta
        {
        /*top: 1196px;
        left: 258px;
        width: 1663px;
        height: 2307px;
        /* UI Properties */
        padding: 20px;
        background: #582D73 0% 0%;
        opacity: 1;
        font: normal normal normal 20px/25px Roboto;
        letter-spacing: 0px;
        color: #FFFFFF;
        }
        .cuerpoCarpeta
        {
            /*top: 0px;
            left: 0px;
            width: 1920px;
            height: 13820px;
            /* UI Properties */
            font: normal normal normal 20px/25px Roboto;
            letter-spacing: 0px;
            color: #FFFFFF;
        }
        
        .cuerpoBD
        {
            top: 695px;
            left: 396px;
            width: 1372px;
            height: 406px;
            /* UI Properties */
            background: transparent url('assets/imgdb/Grupo43970.png') 0% 0% no-repeat padding-box;
            opacity: 1;
        }
        
        
        .avance{
        top: 643px;
        left: 229px;
        width: 1691px;
        height: 1160px;
        color: var(--blanco);
        text-align: left;
        font: normal normal bold 50px/58px Roboto;
        letter-spacing: 0px;
        color: #FFFFFF;
        opacity: 1;    
        background: var(--primario) 0% 0% no-repeat padding-box;
        background: #582D73 0% 0% no-repeat padding-box;
        }
        
        .cuerpoAvance{
        top: 886px;
        left: 487px;
        width: 447px;
        height: 35px;
        color: var(--blanco);
        text-align: left;
        font: normal normal normal 25px/29px Roboto;
        letter-spacing: 0px;
        color: #FFFFFF;
        opacity: 1;   
        }
        
        .consulta
        {
            padding: 20px;
            transform: matrix(1, 0, 0, 1, 0, 0);
            background: var(--secundario) 0% 0%;
            background: #B283B9 0% 0% ;
        
            font: normal normal normal 25px/29px Roboto;
            letter-spacing: 0px;
            color: #000000;
            opacity: 1;
        }
        .cuerpoConsulta
        {
            top: 7471px;
            left: 496px;
            width: 874px;
            height: 59px;
            transform: matrix(1, 0, 0, 1, 0, 0);
            /* UI Properties */
            color: var(--negro);
            text-align: left;
            font: normal normal medium 25px/30px Roboto;
            letter-spacing: 0px;
            color: #000000;
            opacity: 1;
        }
        
        .conoceResult
        {
        top: 4852px;
        left: 229px;
        width: 1691px;
        height: 794px;
        background: var(--primario) 0% 0% no-repeat padding-box;
        background: #582D73 0% 0% no-repeat padding-box;
        opacity: 1;
        }
        .cuerpoResult
        {
        color: var(--blanco);
        text-align: left;
        font: normal normal bold 25px/29px Roboto;
        letter-spacing: 0px;
        color: #FFFFFF;
        opacity: 1;
        }
        .urna
        {
        top: 1800px;
        left: 71px;
        width: 1849px;
        height: 14342px;
        /* UI Properties */
        background: var(--blanco) 0% 0% no-repeat padding-box;
        background: #FFFFFF 0% 0% no-repeat padding-box;
        box-shadow: 0px 3px 6px #00000029;
        border-radius: 8px;
        opacity: 1;
        
        }
        
        .cuerpoUrna
        {
        top: 8946px;
        left: 487px;
        width: 976px;
        height: 273px;
        /* UI Properties */
        text-align: left;
        font: normal normal normal 25px/29px Roboto;
        letter-spacing: 0px;
        color: #34344E;
        opacity: 1;
        }
        
        .observaciones
        {
            top: 1800px;
        left: 71px;
        width: 1849px;
        height: 14342px;
        background: var(--blanco) 0% 0% no-repeat padding-box;
        background: #FFFFFF 0% 0% no-repeat padding-box;
        box-shadow: 0px 3px 6px #00000029;
        border-radius: 8px;
        opacity: 1;
        }
        
        
        
        .cuerpodescomprimir
        {
            top: 4897px;
            left: 566px;
            width: 1016px;
            height: 263px;
        /* UI Properties */
        color: var(--blanco);
        text-align: left;
        font: normal normal normal 25px/29px Roboto;
        letter-spacing: 0px;
        color: #FFFFFF;
        
        opacity: 1;
        
        }
        
        
        .cuerpoObservaciones
        {
        top: 14707px;
        left: 487px;
        width: 997px;
        height: 129px;
        /* UI Properties */
        text-align: left;
        font: normal normal normal 25px/29px Roboto;
        letter-spacing: 0px;
        color: #34344E;
        opacity: 1; 
        }
        .elementos
        {
        top: 14950px;
        left: 229px;
        width: 1691px;
        height: 1192px;
        /* UI Properties */
        background: var(--primario) 0% 0% ;
        background: #582D73 0% 0% ;
        opacity: 1;
        }
        .cuerpoelementos
        {
        top: 15213px;
        left: 487px;
        width: 1012px;
        height: 99px;
        /* UI Properties */
        color: var(--blanco);
        text-align: left;
        font: normal normal normal 25px/29px Roboto;
        letter-spacing: 0px;
        color: #FFFFFF;
        opacity: 1;
        }
        
        .abrir
        {
        padding: 20px;
        /* UI Properties */
        font: normal normal normal 25px/29px Roboto;
        background: var(--blanco) 0% 0% ;
        background: #FFFFFF 0% 0%;
        opacity: 1;
        }
        
        .cuerpoabrir
        {
        top: 5844px;
        left: 714px;
        width: 731px;
        height: 243px;
        /* UI Properties */
        background: transparent url('assets/imgdb/Grupo12152.png') 0% 0% ;
        opacity: 1;
        }
        
        
        .autenticidad
        {
        padding: 20px;
        background: #582D73 0% 0% ;
        opacity: 1;
        text-align: left;
        font: normal normal normal 25px/29px Roboto;
        letter-spacing: 0px;
        color: #FFFFFF;
        }
        
        .cuerpoAutenticidad
        {
        top: 8781px;
        left: 387px;
        width: 1184px;
        height: 83px;
        color: var(--blanco);
        text-align: left;
        font: normal normal normal 25px/29px Roboto;
        letter-spacing: 0px;
        color: #FFFFFF;
        opacity: 1;
        }
        
        
        .consulta
        {
        
        padding: 20px;
        /* UI Properties */
        background: var(--secundario) 0% 0% no-repeat padding-box;
        background: #B283B9 0% 0% no-repeat padding-box;
        opacity: 1;
        }
        .catalogo
        {
        padding: 20px;
        font: normal normal normal 25px/29px Roboto;
        background: var(--blanco) 0% 0% no-repeat padding-box;
        background: #FFFFFF 0% 0% no-repeat padding-box;
        opacity: 1;
        }
        
        .descripcion
        {
        padding: 20px;
        background: var(--primario) 0% 0% no-repeat padding-box;
        background: #582D73 0% 0% no-repeat padding-box;
        opacity: 1;
        text-align: left;
        font: normal normal normal 20px/25px Roboto;
        letter-spacing: 0px;
        color: #FFFFFF;
        }
    
    </style>