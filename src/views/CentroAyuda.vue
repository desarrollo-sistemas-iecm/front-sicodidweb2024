
<template>
    <div>
        <div class="base_datos" style="padding-left: 10%; padding-right: 10%;" :style="{'background-color': eleccion.tema ? 'white' : '#1d1d1d', border: 0, color: eleccion.tema ? 'black' : 'white' }">
            <!--blanco -->
            <p id="definicion"><center><h1>- Centro de ayuda -</h1></center></p>
            <p style="color: #dc3785; text-align: left"><b>¿Qué es el PREP?</b> </p>
            <a-row :gutter="{ xs: 8, sm: 16, md: 24, lg: 32 }"  justify="center" >
                <a-col :xs="24" :sm="24" :md="18" :lg="18" :xl="18">
                    <p style="text-align: justify">
                        Mecanismo de información que, al término de la jornada electoral permite consultar, a través de internet, los resultados preliminares, de carácter informativo y NO DEFINITIVO de las elecciones. (Artículo 219 de la LGIPE)
                        Este programa proporcionará resultados preliminares de la elección, conforme se van capturando, digitalizando, publicando y cotejando los datos asentados en las Actas de Escrutinio y Cómputo   
                    </p>
                </a-col>
            </a-row>
            <p style="text-align: right">¿Cuál es el objetivo del PREP?</p>
            <a-row :gutter="{ xs: 8, sm: 16, md: 24, lg: 32 }"  justify="center" >
                <a-col :xs="24" :sm="24" :md="18" :lg="18" :xl="18">
                    <p style="text-align: justify">
                        Informar oportunamente bajo los principios de seguridad, transparencia, confiabilidad, credibilidad e integridad de los resultados y la información en todas sus fases al Consejo General, los Organismos Públicos Locales, los partidos políticos, coaliciones, personas candidatas, medios de comunicación y a la ciudadanía  
                    </p>
                </a-col>
            </a-row>
            <p style="text-align: left">¿Cuánto dura el PREP?</p>
            <a-row :gutter="{ xs: 8, sm: 16, md: 24, lg: 32 }"  justify="center" >
                <a-col :xs="24" :sm="24" :md="18" :lg="18" :xl="18">
                    <p style="text-align: justify">
                        La publicación de información en PREP inicia el 2 de Junio a partir de las 20:00 horas (tiempo centro), después del cierre de todas las casillas.
                        
                    </p>
                    <p style="text-align: justify">
                        Opera máximo 24 horas. Puede concluir antes, siempre y cuando se logre el 100% del registro de las Actas esperadas o se agoten los recursos de recuperación de estas.  
                    </p>
                </a-col>
            </a-row>
            <p style="text-align: right">¿Qué es un Acta Esperada?</p>
            <a-row :gutter="{ xs: 8, sm: 16, md: 24, lg: 32 }"  justify="center" >
                <a-col :xs="24" :sm="24" :md="18" :lg="18" :xl="18">
                    <p style="text-align: justify">
                        Las Actas esperadas se definen como el número de Actas PREP de todas las casillas aprobadas por los consejos distritales federales, por cada tipo de elección, previendo los mecanismos necesarios para que, a partir del inicio de la operación del PREP, el sistema informático muestre el número de Actas esperadas, con base en la última aprobación que hayan realizado los consejos distritales electorales del Instituto, previo al inicio de la Jornada Electoral.
                        
                    </p>
                    <p style="text-align: justify">
                        Este conjunto de Actas PREP conforma el Catálogo de Actas Esperadas. 
                    </p>
                </a-col>
            </a-row>
            <p style="text-align: left">¿Qué elementos fortalecen al PREP?</p>
            <a-row :gutter="{ xs: 8, sm: 16, md: 24, lg: 32 }"  justify="center" >
                <a-col :xs="24" :sm="24" :md="18" :lg="18" :xl="18">
                    <p style="text-align: justify">
                        Cuenta con dos mecanismos de acompañamiento que lo transparentan, fortalecen y nutren de confianza su funcionamiento.
                    </p>
                    <ul>
                        <li>Comité Técnico Asesor del PREP (COTAPREP).
                            <ul style="list-style-type:circle">
                                <li>Brinda asesoría técnica en materia del PREP.</li>
                                <li>Esta integrado por personas expertas en Estadística y/o Ciencia de datos, Tecnologías de la Información y Comunicaciones, Investigación de Operaciones o Ciencia Política, con conocimientos en materia electoral.</li>
                            </ul>
                        </li>
                        <li>Ente Auditor.
                            <ul style="list-style-type:circle">
                                <li>Audita el sistema informático e infraestructura tecnológica del PREP.</li>
                                <li>Evalúa la integridad en el procesamiento de la información y generación de resultados.</li>
                                <li>Analiza las vulnerabilidades del sistema y tecnología.</li>
                                <li>Para PREP 2024 el ente auditor es el Centro Tecnológico Aragón de la Facultad de Estudios Aragón de la Universidad Nacional Autónoma de México</li>
                            </ul>
                        </li>
                    </ul>
                </a-col>
            </a-row>
            <p style="text-align: right">¿Qué es el acta PREP?</p>
            <a-row :gutter="{ xs: 8, sm: 16, md: 24, lg: 32 }"  justify="center" >
                <a-col :xs="24" :sm="24" :md="18" :lg="18" :xl="18">
                    <p style="text-align: justify">
                        Es la primera copia del Acta de Escrutinio y Cómputo (AEC) destinada para la captura de información del PREP o en ausencia de ésta cualquier copia del Acta.
                    </p>
                </a-col>
            </a-row>
        </div>
    
        <div class="carpeta" style="padding-left: 10%; padding-right: 10%;" :style="{'background-color': eleccion.tema ? '#582d73' : '#000000', border: 0, color: 'white' }">
            <p style="color: white; text-align: left"><b>¿Qué es una candidatura común?</b></p>
            <a-row :gutter="{ xs: 8, sm: 16, md: 24, lg: 32 }"  justify="center" >
                <a-col :xs="24" :sm="24" :md="18" :lg="18" :xl="18">
                    <p style="text-align: justify">
                        Es otra forma de participación conjunta de dos o más partidos políticos en el proceso electoral, por la que, sin mediar Coalición y, por ende, sin plantear compromisos posteriores a los comicios electorales, acuerdan, mediante la celebración de un convenio, postular a la misma persona candidata, lista o fórmula para las elecciones de Jefatura de Gobierno, Alcaldías y Diputaciones del Congreso de la Ciudad de México. 
                    </p>
                    <ul style="list-style-type:circle">
                        <li>Acuerdo del Consejo General del Instituto Electoral de la Ciudad de México, por el que se aprueba la distribución de los porcentajes de votación del Convenio de la Candidatura Común “Seguiremos Haciendo Historia en la Ciudad de México”, suscrito por los partidos políticos MORENA, del Trabajo y Verde Ecologista de México, para el Proceso Electoral Local Ordinario 2023-2024, en acatamiento a la sentencia dictada por la Sala Regional Ciudad de México del Tribunal Electoral del Poder Judicial de la Federación, SCM-JRC-18/2024 y SCM-JRC-19/2024 acumulados. <a href="https://www.iecm.mx/www/taip/cg/acu/2024/IECM-ACU-CG-075-2024.pdf" style="text-decoration: underline;">IECM-ACU-CG-075-202</a></li>
                    </ul>
                </a-col>
            </a-row>
            <p style="text-align: right">¿Qué es una coalición?</p>
            <a-row :gutter="{ xs: 8, sm: 16, md: 24, lg: 32 }"  justify="center" >
                <a-col :xs="24" :sm="24" :md="18" :lg="18" :xl="18">
                    <p style="text-align: justify">
                        Son uniones temporales, transitorias y emergentes de los convenios celebrados entre dos o más partidos políticos en este caso en el orden local, con la finalidad de postular las mismas candidaturas a cargos de elección popular.  
                    </p>
                    <p style="text-align: justify">
                        Los partidos políticos podrán convenir la postulación de candidaturas mediante la figura de coalición, la cual podrá tener las siguientes modalidades:
                    </p>
                    <p style="text-align: justify">
                        a. Coalición flexible: Aquella en la que los partidos políticos coaligados postulan en un mismo proceso electoral, al menos a un veinticinco por ciento de candidaturas a cargos de elección popular bajo una misma plataforma electoral.
                    </p>
                    <p style="text-align: justify">
                        b. Coalición parcial: Aquella en la que los partidos coaligados postulan en un mismo proceso electoral, al menos al cincuenta por ciento de sus candidaturas a cargos de elección popular bajo una misma plataforma electoral.
                    </p>
                    <p style="text-align: justify">
                        c. Coalición total: Aquélla en la que los partidos políticos coaligados postulan en un mismo proceso, a la totalidad de sus candidaturas a cargos de elección popular bajo una misma plataforma electoral.
                    </p>
                    <p style="text-align: justify">
                        En el Instituto Electoral de la Ciudad de México se celebraron los siguientes convenios de coalición:
                    </p>
                    <p style="text-align: justify">
                        - Convenio de Coalición suscrito por los partidos Morena, del Trabajo y Verde Ecologista de México para participar bajo esa modalidad en la elección de Jefatura de Gobierno de la Ciudad de México. <a href="https://www.iecm.mx/www/taip/cg/res/2023/IECM-RS-CG-52-2023.pdf" style="text-decoration: underline;">IECM/RS-CG-/52/2023</a>
                    </p>
                    <p style="text-align: justify">
                        - Convenio suscrito por los partidos Acción Nacional, Revolucionario Institucional y de la Revolución Democrática para participar en Coalición parcial en la elección de Diputaciones por el principio de mayoría relativa al Congreso de la Ciudad de México y Coalición total en la elección de titulares de Alcaldías y Concejalías. <a href="https://www.iecm.mx/www/taip/cg/res/2023/IECM-RS-CG-53-2023.pdf" style="text-decoration: underline;">IECM/RS-CG-/53/2023</a>
                    </p>
                    <p style="text-align: justify">
                        Convenio suscrito por los partidos Acción Nacional, Revolucionario Institucional y de la Revolución Democrática para participar en Coalición parcial en la elección de Diputaciones por el principio de mayoría relativa al Congreso de la Ciudad de México y Coalición total en la elección de titulares de Alcaldías y Concejalías. <a href="https://www.iecm.mx/www/taip/cg/res/2023/IECM-RS-CG-58-2023.pdf" style="text-decoration: underline;">IECM/RS-CG-58/2023</a>
                    </p>
                    <p style="text-align: justify">
                        - Modificación al Convenio de Coalición suscrito por los partidos Acción Nacional, Revolucionario Institucional y de la Revolución Democrática para participar bajo esa modalidad en la elección de Jefatura de Gobierno de la Ciudad de México. <a href="https://www.iecm.mx/www/taip/cg/res/2023/IECM-RS-CG-59-2023.pdf" style="text-decoration: underline;">IECM/RS-CG-59/202</a>
                    </p>
                    <p style="text-align: justify">
                        - Modificación al Convenio de Coalición suscrito por los partidos Morena, del Trabajo y Verde Ecologista de México para participar bajo esa modalidad en la elección de Jefatura de Gobierno de la Ciudad de México. <a href="https://www.iecm.mx/www/taip/cg/res/2023/IECM-RS-CG-60-2023.pdf" style="text-decoration: underline;">IECM/RS-CG-60/202</a>
                    </p>
                </a-col>
            </a-row>
            <p style="text-align: left">¿Qué es una candidatura sin partido? </p>
            <a-row :gutter="{ xs: 8, sm: 16, md: 24, lg: 32 }"  justify="center" >
                <a-col :xs="24" :sm="24" :md="18" :lg="18" :xl="18">
                    <p style="text-align: justify">
                        Una candidata o candidato sin partido es aquel o aquella aspirante a algún cargo de elección popular que no pertenece a un partido político y que tiene permitido, según las disposiciones electorales, participar en las elecciones cubriendo ciertos requisitos, entre los que destaca obtener respaldo por parte de un porcentaje determinado de los electores del ámbito por el que quiera competir (En el caso de la Ciudad de México en estas elecciones, demarcación o distrito), lo cual se hace habitualmente juntando firmas de apoyo.
                    </p>
                </a-col>
            </a-row>
        </div>
    
        <div class="descargas" style="padding-left: 10%; padding-right: 10%;" :style="{'background-color': eleccion.tema ? 'white' : '#1d1d1d', border: 0, color: eleccion.tema ? 'black' : 'white' }">
            <p style="color: #dc3785; text-align: left"><b>¿Qué es un candidato no registrado?</b></p>
            <a-row :gutter="{ xs: 8, sm: 16, md: 24, lg: 32 }"  justify="center" >
                <a-col :xs="24" :sm="24" :md="18" :lg="18" :xl="18">
                    <p style="text-align: justify">
                        Físicamente es un apartado en la boleta electoral donde tradicionalmente el elector podía escribir el nombre de la persona real o ficticia que él consideraba merecía ser candidato al cargo de elección popular en disputa, siendo contabilizado como voto nulo.
                    </p>
                    <p style="text-align: justify">
                        Se considera un ejercicio de libertad de expresión y forma de rechazo hacia las opciones registradas. Actualmente puede ser analizado como un precedente no regulado de los candidatos independientes
                    </p>
                </a-col>
            </a-row>
            <p style="text-align: right">¿Qué hacer al momento de la captura de información en el </p><p style="text-align: right">sistema del PREP, cuando se presenta una inconsistencia?</p>
            <a-row :gutter="{ xs: 8, sm: 16, md: 24, lg: 32 }"  justify="center" >
                <a-col :xs="24" :sm="24" :md="18" :lg="18" :xl="18">
                    <table border="1" style="text-align: center">
                        <tr>
                            <th>Caso</th>
                            <th>Procedimiento</th>
                            <th>Se contabilizan los votos del Campo</th>
                        </tr>
                        <tr>
                            <td>Los números de la cantidad de votos no son claros.</td>
                            <td>Tomar cantidad registrada con Letra</td>
                            <td>Si</td>
                        </tr>
                        <tr>
                            <td>La cantidad registrada con número no coincide con la registrada con letra.</td>
                            <td>Tomar cantidad registrada con Letra</td>
                            <td>Si</td>
                        </tr>
                        <tr>
                            <td>Aparecen dos cantidades con número y una de éstas se encuentra tachada.</td>
                            <td>Tomar cantidad registrada con Letra</td>
                            <td>Si</td>
                        </tr>
                        <tr>
                            <td>La cantidad registrada con número tiene una o varias flechas para indicar que se deben invertir las cantidades.</td>
                            <td>Tomar cantidad registrada con Letra</td>
                            <td>Si</td>
                        </tr>
                        <tr>
                            <td>La cantidad registrada aparece sólo con número y no con letra.</td>
                            <td>Tomar cantidad registrada con Numero</td>
                            <td>Si</td>
                        </tr>
                        <tr>
                            <td>Los espacios para registrar los votos están completamente en blanco.</td>
                            <td>Marcar campo como "Con Incidencia - Sin Dato"</td>
                            <td>No</td>
                        </tr>
                        <tr>
                            <td>Los datos son ilegibles tanto en la cantidad anotada con número como con letra.</td>
                            <td>Marcar campo como "Con Incidencia - Ilegible</td>
                            <td>No</td>
                        </tr>
                    </table>
                </a-col>
            </a-row>
        </div>
    
    
        <div class="descomprimir" style="padding-left: 10%; padding-right: 10%;" :style="{'background-color': eleccion.tema ? '#582d73' : '#000000', border: 0, color: 'white' }">
            <p style="color: white; text-align: left"><b>¿Cómo saber si un Acta se contabiliza o no en el PREP?</b></p>
            <a-row :gutter="{ xs: 8, sm: 16, md: 24, lg: 32 }"  justify="center" >
                <a-col :xs="24" :sm="24" :md="18" :lg="18" :xl="18">
                    <table border="1" style="text-align: center">
                        <tr>
                            <th>Caso</th>
                            <th>Se contabilizan los votos del Campo</th>
                        </tr>
                        <tr>
                            <td>Los números de la cantidad de votos no son claros.Las cantidades correspondientes a los siguientes campos no fueron asentados o fueron ilegibles: - Boletas sobrantes. - Personas que votaron. - Representantes de Partidos Políticos o, (en su caso) candidatos independientes que votaron en la casilla única sin estar incluidos en la lista nominal. - Boletas sacadas de la urna. - Votos para Candidatos no registrados. - Votos nulos</td>
                            <td>Si</td>
                        </tr>
                        <tr>
                            <td>Para un partido o candidatura común, la cantidad de votos asentada en el acta es ilegible, tanto en letra como en número.</td>
                            <td>Si</td>
                        </tr>
                        <tr>
                            <td>Para un partido o candidatura común, la cantidad de votos no fue asentada en el acta.</td>
                            <td>Si</td>
                        </tr>
                        <tr>
                            <td>Alguno de los datos necesarios para la identificación de la casilla, es incorrecto o ilegible en el Acta.</td>
                            <td>No</td>
                        </tr>
                        <tr>
                            <td>La suma de todos los votos asentados en el acta excede el número total de votantes registrados en la Lista Nominal + 2 votantes por cada Partido Político y Candidatos Independientes por cada casilla.</td>
                            <td>No</td>
                        </tr>
                    </table>
                </a-col>
            </a-row>
            <p style="text-align: right">¿Cómo se calcula la participación ciudadana?</p>
            <a-row :gutter="{ xs: 8, sm: 16, md: 24, lg: 32 }"  justify="center" >
                <a-col :xs="24" :sm="24" :md="18" :lg="18" :xl="18">
                    <p style="text-align: justify">
                        El porcentaje de participación ciudadana se obtiene al multiplicar los votos por 100 y dividir el resultado de esta operación entre el número de personas registrado en la lista nominal de actas contabilizadas.
                    </p>
                </a-col>
            </a-row>
            
            <a-row :gutter="{ xs: 8, sm: 16, md: 24, lg: 32 }"  justify="center" >
                <a-col :xs="24" :sm="24" :md="18" :lg="18" :xl="18">
                    <b>Total de votos/lista nominal de actas contabilizadas X 100= % Participación</b>
                </a-col>
                <a-col :xs="24" :sm="24" :md="18" :lg="18" :xl="18">
                    <p style="text-align: justify">
                        *Porcentaje calculado sin considerar la votación en casilla especiales
                    </p>
                </a-col>
            </a-row>
        </div>

        <div class="abrir" id="abrir" style="padding-left: 10%; padding-right: 10%;" :style="{'background-color': eleccion.tema ? 'white' : '#1d1d1d', border: 0, color: eleccion.tema ? 'black' : 'white' }">
            <p style="color: #dc3785; text-align: left"><b>¿Qué cargos se elegirán en la Ciudad de México?</b></p>
            <a-row :gutter="{ xs: 8, sm: 16, md: 24, lg: 32 }"  justify="center" >
                <a-col :xs="24" :sm="24" :md="18" :lg="18" :xl="18">
                    <p style="text-align: justify">
                        El 2 de junio de 2024 tendremos elecciones en la Ciudad de México y elegiremos:
                    </p>
                    <p style="text-align: justify">
                        - 1 Jefatura de Gobierno
                    </p>
                    <p style="text-align: justify">
                        - 66 diputaciones (33 de Mayoría Relativa, 32 de Representación Proporcional y 1 Diputación Migrante) del Congreso de la Ciudad de México
                    </p>
                    <p style="text-align: justify">
                        - 16 alcaldías con sus respectivas concejalías.
                    </p>
                </a-col>
            </a-row>
            <p style="text-align: right">¿Cuáles son las modalidades de votación qué se realizarán para el </p> <p style="text-align: right"> Proceso Electoral Local Ordinario 2023-2024?</p>
            <a-row :gutter="{ xs: 8, sm: 16, md: 24, lg: 32 }"  justify="center" >
                <a-col :xs="24" :sm="24" :md="18" :lg="18" :xl="18">
                    <p style="text-align: justify">
                        Además de la votación en las casillas aprobadas por los Consejos Distritales del INE que se realizará en la Jornada Electoral del 2 de junio, también se podrá votar de forma anticipada por las siguientes modalidades
                    </p>
                    <ul style="list-style-type:circle">
                        <li>
                            <b>Voto de las Personas en estado de postración.</b>
                            <p style="text-align: justify">
                                En coordinación con el INE, el IECM implementará las acciones para recabar el voto de personas que por alguna imposibilidad física no puedan acudir a votar. <a href="https://www.iecm.mx/www/taip/cg/acu/2023/IECM-ACU-CG-069-2023.pdf" style="text-decoration: underline;">(IECM/ACU-CG-069/2023)</a>
                            </p>
                        </li>
                        <li>
                            <b>Voto de las personas en situación de prisión preventiva</b>
                            <p style="text-align: justify">
                                El IECM se coordinará con el INE y el Gobierno de la Ciudad de México, a través de la Secretaría de Seguridad Ciudadana, para implementar acciones que garanticen la votación de personas en prisión preventiva. <a href="https://www.iecm.mx/www/taip/cg/acu/2023/IECM-ACU-CG-067-2023.pdf" style="text-decoration: underline;">(IECM/ACU-CG-067/2023)</a>
                            </p>
                        </li>
                        <li>
                            <b>Voto desde el extranjero</b>
                            <p style="text-align: justify">
                                Por primera vez, la ciudadanía capitalina residente en el exterior votará de manera conjunta por la Jefatura de Gobierno y la Diputación Migrante, y podrá hacerlo mediante tres modalidades: postal, electrónica y presencial a través de consulados mexicanos, para lo cual deberán coordinar esfuerzos el IECM e INE. <a href="http://www.votochilango.mx/" style="text-decoration: underline;">(IECM/ACU-CG-013/2023 - Voto Chilango)</a>
                            </p>
                        </li>
                    </ul>
                </a-col>
            </a-row>
        </div>
    
        <!-- <div class="abrir" id="abrir" style="padding-left: 10%; padding-right: 10%;" :style="{'background-color': eleccion.tema ? 'white' : '#1d1d1d', border: 0, color: eleccion.tema ? 'black' : 'white' }">
            <p style="color: #dc3785; text-align: left"><b>¿Qué es la lista nominal?</b></p>
            <a-row :gutter="{ xs: 8, sm: 16, md: 24, lg: 32 }"  justify="center" >
                <a-col :xs="24" :sm="24" :md="18" :lg="18" :xl="18">
                    <p style="text-align: justify">
                        La Lista Nominal es la relación de personas ciudadanas que contiene el nombre, dirección, distrito y sección de quienes cuentan con su Credencial para Votar vigente y están incluidos en el Padrón Electoral. Adicionalmente, se cuenta con la fotografía impresa idéntica a la de la Credencial para Votar más reciente.
                    </p>
                </a-col>
            </a-row>
            <p style="text-align: right">¿Qué es la lista nominal de electores residentes en el</p> <p style="text-align: right"> extranjeros para los procesos electorales locales 2020-2021?</p>
            <a-row :gutter="{ xs: 8, sm: 16, md: 24, lg: 32 }"  justify="center" >
                <a-col :xs="24" :sm="24" :md="18" :lg="18" :xl="18">
                    <p style="text-align: justify">
                        Es la relación elaborada por la Dirección Ejecutiva del Registro Federal de Electores del Instituto Nacional Electoral que contiene el nombre de las personas que expresaron su interés en participar en el Proceso Electoral Federal y Local 2020-2021, que se encuentran incluidas en el padrón electoral, que cuentan con su credencial para votar, que residen en el extranjero o se encuentran fuera del territorio nacional, y que solicitan su inscripción en dicha lista, la cual es de carácter temporal.
                    </p>
                </a-col>
            </a-row>
        </div> -->
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