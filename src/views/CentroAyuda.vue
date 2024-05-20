
<template>
    <div v-if="!isMobile()">
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
    <div v-else>
        <template v-if="select.type == 'home'">
            <div :style="{'background-color': eleccion.tema ?  '#582d73' : '#9c9c9c', 'margin-left': '-5%', 'margin-right': '-5%', 'margin-top': '-6%', 'padding-top': '9%', 'height': '200px', 'margin-bottom': '240%'}">
                <p style="color: white; font-size: 40px; margin-left: 5%"><b>Base de datos</b></p>
                <a-card hoverable style="margin-left: 5%; margin-right: 5%; " :style="{'background-color': eleccion.tema ?  '#f4f4f4' : '#1d1d1d', 'border-radius': '7px'}">
                    <a-row :gutter="{ xs: 24, sm: 24, md: 24, lg: 32 }"  justify="center">
                        <v-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24" style="align-content: center; text-align: center; width: 100%">
                            <img src="@/assets/imgdb/Grupo43775.svg">
                        </v-col>
                        <v-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24" style="align-content: center; text-align: center; ">
                            <p style="font-size: 20px"><b> Base de Datos PREP</b></p>
                        </v-col>
                        <v-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24" style="align-content: center; text-align: justify;">
                            <p>La Base de Datos se refiere al conjunto de información perteneciente al Programa de Resultados Electorales Preliminares, ordenada de forma sistemática para su descarga y análisis.​ Es actualizada conforme al último corte. Permite realizar distintas operaciones ya que incluye datos numéricos, alfanuméricos y cronológicos. En este documento exponemos la propuesta de estructura y copies para el apartado de base de datos en el sitio del PREP. </p>
                        </v-col>
                        <v-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24" style="align-content: center; text-align: center; width: 100%;">
                            <a-button @click="descargar" style=" font-size:20px; text-align: center; background-color:#C791A8; color: black">Descargar</a-button>
                        </v-col>
                        <v-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24" style="align-content: center; text-align: center; margin-top: 5%">
                            <p style="font-size: 20px" @click="select.type='definicion'"><b> > ¿Qué es el PREP?</b></p>
                            <p style="font-size: 20px" @click="select.type='archivos'"><b> > Carpeta de Archivos </b></p>
                            <p style="font-size: 20px" @click="select.type='consulta'"><b> > Consulta </b></p>
                        </v-col>
                    </a-row>
                </a-card>
                <a-card hoverable style="margin-left: 5%; margin-right: 5%; padding-bottom: 5%; margin-top: 5%" :style="{'background-color': eleccion.tema ?  '#f4f4f4' : '#1d1d1d', 'border-radius': '7px'}">
                    <a-row :gutter="{ xs: 24, sm: 24, md: 24, lg: 32 }"  justify="center">
                        <v-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24" style="align-content: center; text-align: center; width: 100%">
                            <img src="@/assets/imgdb/Grupo43782.svg">
                        </v-col>
                        <v-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24" style="align-content: center; text-align: center; ">
                            <p style="font-size: 20px; margin: 0%"><b>Catálogo de secciones,</b></p>
                            <p style="font-size: 20px; margin: 0%"><b>distritos y municipios</b></p>
                        </v-col>
                        <v-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24" style="align-content: center; text-align: justify; margin-top: 5%">
                            <p>Este Catálogo muestra la lista aprobada de casillas del día previo a la Jornada Electoral, con información actualizada hasta las 20:00. Es importante destacar que no se realizarán actualizaciones posteriores a ese corte de información.  </p>
                        </v-col>
                        <v-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24" style="align-content: center; text-align: center; width: 100%;">
                            <a-button @click="descargar" style=" font-size:20px; text-align: center; background-color:#C791A8; color: black">Descargar</a-button>
                        </v-col>
                        <v-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24" style="align-content: center; text-align: center; margin-top: 5%">
                            <p style="font-size: 20px" @click="select.type='descripcion'"><b> > Descripción del contenido de los archivos</b></p>
                        </v-col>
                    </a-row>
                </a-card>
            </div>
        </template>
        <template v-else-if="select.type=='definicion'">
            <div :style="{'background-color': eleccion.tema ?  '#582d73' : '#9c9c9c', 'margin-left': '-5%', 'margin-right': '-5%', 'margin-top': '-6%', 'padding-top': '9%', 'height': '280px', 'margin-bottom': '100%'}">
                <p style="color: white; font-size: 20px; margin-left: 5%" @click="select.type ='home'"><b>  Regresar </b></p>
                <p style="color: white; font-size: 40px; margin-left: 5%"><b>Base de datos</b></p>
                <a-select
                    v-model:value="select.type"
                    style="width: 100%; margin-bottom: 4%;"
                    >
                    <a-select-option value="definicion">¿Qué es el PREP?</a-select-option>
                    <a-select-option value="candidatura">¿Qué es una Candidatura Común?</a-select-option>
                    <a-select-option value="noRegistrada">¿Qué es una candidatura no registrada?</a-select-option>
                    <a-select-option value="contabilizar">¿Cómo saber si un Acta se contabiliza o no en el PREP?</a-select-option>
                </a-select>
                <a-card hoverable style="margin-left: 5%; margin-right: 5%; " :style="{'background-color': eleccion.tema ?  '#f4f4f4' : '#1d1d1d', 'border-radius': '7px'}">
                    <a-row :gutter="{ xs: 24, sm: 24, md: 24, lg: 32 }"  justify="center">
                        <a-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24" style="text-align: center">
                            <p style="font-size: 30px; margin-left: 5%"><b>-Definición-</b></p>
                        </a-col>
                        <a-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                            <img class="img2" src="@/assets/imgdb/Grupo43970.png" > 
                        </a-col>
                        <a-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12" style="margin-top: 10%">
                            <p>
                                <b>La Base de datos</b> se refiere al conjunto de información perteneciente al <b>	   Programa de Resultados Electorales Preliminares</b> (PREP),
                                ordenada de forma sistematica para su descargay ánalisis. Es actualizada conforme al último corte. 
                                Permite realizar distintas operaciones y que incluye datos númericos, alfánumericos y crónologicos.   
                            </p>
                        </a-col>
                    </a-row>
                </a-card>
            </div>
        </template>
        <template v-else-if="select.type=='archivos'">
            <div :style="{'background-color': eleccion.tema ?  '#582d73' : '#9c9c9c', 'margin-left': '-5%', 'margin-right': '-5%', 'margin-top': '-6%', 'padding-top': '9%', 'height': '280px', 'margin-bottom': '1110%'}">
                <p style="color: white; font-size: 20px; margin-left: 5%" @click="select.type ='home'"><b>  Regresar </b></p>
                <p style="color: white; font-size: 40px; margin-left: 5%"><b>Base de datos</b></p>
                <a-select
                    v-model:value="select.type"
                    style="width: 100%; margin-bottom: 4%;"
                    >
                    <a-select-option value="definicion">¿Qué es el PREP?</a-select-option>
                    <a-select-option value="candidatura">¿Qué es una Candidatura Común?</a-select-option>
                    <a-select-option value="noRegistrada">¿Qué es una candidatura no registrada?</a-select-option>
                    <a-select-option value="contabilizar">¿Cómo saber si un Acta se contabiliza o no en el PREP?</a-select-option>
                </a-select>
                <a-card hoverable style="margin-left: 5%; margin-right: 5%; " :style="{'background-color': eleccion.tema ?  '#f4f4f4' : '#1d1d1d', 'border-radius': '7px'}">
                    <a-row :gutter="{ xs: 24, sm: 24, md: 24, lg: 32 }"  justify="center">
                        <a-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24" style="text-align: center">
                            <p style="font-size: 30px; margin-left: 5%"><b>-Contenido-</b></p>
                        </a-col>
                        <a-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12" >
                            <img class="img3" src="@/assets/imgdb/Grupo43762.svg" >
                        </a-col>
                        <div class="carpeta" style="padding-left: 10%; padding-right: 10%;" :style="{'background-color': eleccion.tema ? '#582d73' : '#000000', border: 0, color: 'white' }">
                            <br>
                        <!-- <div class="cuerpoCarpeta">-->   
                            <a-row :gutter="{ xs: 8, sm: 16, md: 24, lg: 32 }"  justify="center">
                                <a-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                                    <h1 id="carpeta"><center>Carpeta de Archivos </center></h1>
                                </a-col>
                                <a-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                                    <p>Se trata de un archivo comproimido global con una nomenglatura que indica el año, mes, dia, y hora del corte; por ejemplo,<b>20240602_2100_PREP</b> es, de extension .zip y se encuentraorganizado en carpetas por tipo de elección:</p>
                                    <p>. 20240602_2100_PREP_GUB.zip</p>
                                    <p>. 20240602_2100_DIP_LOC:zIp</p>
                                    <p>. 20240602_2100_AYUN.zip</p>
                                    <p>. 20240602_2100_PREP_REG.zip</p>
                    
                                    <p>Cada una de ellas contiene tres tipos de archivos: los resultados el cátalogo de candidaturas ambos en formato csv, por ultimo, el archivo con la descripción de las vraiables en formato .txt </p>
                                        <br> Archivos de resultados:
                                        <p>. GUB_2024.csv</p>
                                        <p>. DIP_LOC_2024.csv</p>
                                        <p>. AYUN_2024.csv</p> 
                                        <p>. REG_2024.csv</p>
                                    
                                    <p>Contiene los resultados de la votacion por acta a nivel federal. <br>
                                        Muestra el número de votos recibidos por cada uno de los</p>
                                        <p>Partidos Politicos, combinaciones de coalición, Candidaturas Independientes, candidaturas no regitradas y votos nulos.</p> 
                                    
                                    <p><b> Catálogos de candidaturas: </b> </p>
                                        <p>. GUB_CANDIDATURAS_2024.csv</p>
                                        <p>. DIP_LOC_CANDIDATURAS_2024.csv</p>
                                        <p>. AYUN_CANDIDATURAS_2024.csv</p> 
                                        <p>. REG_CANDIDATURAS_2024.csv</p>
                                        <p>Estos documentos contiene el listado de candidaturas por Partido Político 
                                            y Candidaturas Independientes que participan en la elección federal en cada uno de los cargos 
                                        </p>
                                        <p><b>Descripción de las variables:</b></p>
                                        <p>. LEEME.txt</p>
                    
                                        <p>Describe a detalle cada uno de los campos que forman los archivos de resultados y candidaturas</p>
                                        
                                </a-col>
                                <a-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12" >
                                    <br><br>
                                    <img class="img3" src="@/assets/imgdb/Grupo43762.svg" >
                                </a-col>
                                <a-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24" justify="center" style="align-content: center; text-align: center;">
                                    <p><small>* Nota: Recuerda, al realizar la descarga, el nombre del archivo .zip se complementara con la fecha, por el año, mes y dia, así como la hora respecto al último corte, conservando siempre estructura: AAAAMMDD_HHMM_PREP.zip</small></p>
                                </a-col>
                            </a-row>
                        </div>
                        <div class="descargas" style="padding-left: 10%; padding-right: 10%;" :style="{'background-color': eleccion.tema ? 'white' : '#1d1d1d', border: 0, color: eleccion.tema ? 'black' : 'white' }">
                            <br><center>
                                <h1 id="descargar">- Descargar -</h1>
                            </center><br>
                            <a-row :gutter="{ xs: 8, sm: 16, md: 24, lg: 32 }"  justify="center">
                                <a-col :xs="24" :sm="24" :md="8" :lg="8" :xl="8">
                                    <a-row :gutter="{ xs: 8, sm: 16, md: 24, lg: 32 }"  justify="center">
                                        <a-col :xs="12" :sm="12" :md="12" :lg="12" :xl="12">
                                            <b><p>1 . Descarga</p></b>
                                            <p>Haz clic en el botón Base de Datos para iniciar la descarga del archivo comprimido.</p>
                                        </a-col>
                                        <a-col :xs="12" :sm="12" :md="12" :lg="12" :xl="12">
                                            <img class="img3" src="@/assets/imgdb/Trazado8388.svg" v-if="eleccion.tema">
                                            <img class="img3" src="@/assets/imgdb/Trazado8394.svg" v-else>
                                        </a-col>
                                    </a-row>
                                </a-col>
                                <a-col :xs="24" :sm="24" :md="10" :lg="10" :xl="10">
                                    <a-row :gutter="{ xs: 8, sm: 16, md: 24, lg: 32 }"  justify="center">
                                        <a-col :xs="12" :sm="12" :md="12" :lg="12" :xl="12">
                                            <b><p>2. Localiza</p></b>
                                            <p>Encuentra el archivo en la carpeta de descargas.</p>
                                        </a-col>
                                        <a-col :xs="12" :sm="12" :md="12" :lg="12" :xl="12">
                                            <img class="img3" src="@/assets/imgdb/Trazado8388.svg" v-if="eleccion.tema">
                                            <img class="img3" src="@/assets/imgdb/Trazado8394.svg" v-else>
                                        </a-col>
                                    </a-row>
                                </a-col>
                                <a-col :xs="24" :sm="24" :md="6" :lg="6" :xl="6">
                                    <a-row :gutter="{ xs: 8, sm: 16, md: 24, lg: 32 }"  justify="center">
                                        <a-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                                            <b><p>3. Selecciona</p></b>
                                            <p>El archivo, haciendo clic sobre él.</p>
                                        </a-col>
                                    </a-row>
                                </a-col>
                                <a-col :xs="24" :sm="24" :md="18" :lg="18" :xl="18">
                                    <img class="img3" src="@/assets/imgdb/Grupo43977.png">
                                </a-col>
                            </a-row>
                    
                            
                            
                            <!--  <img class="img3" src="@/assets/imgdb/Trazado8388.svg"> -->
                        
                            
                            <!-- <img class="img3" src="@/assets/imgdb/Trazado8388.svg"> -->
                        
                        </div>
                        <div class="descomprimir" style="padding-left: 10%; padding-right: 10%;" :style="{'background-color': eleccion.tema ? '#582d73' : '#000000', border: 0, color: 'white' }">
                            <a-row :gutter="{ xs: 8, sm: 16, md: 24, lg: 32 }"  justify="center">
                                <a-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                                    <h1 id="descomprimir"> - Descomprimir - </h1>
                                </a-col>
                                <a-col :xs="24" :sm="24" :md="8" :lg="8" :xl="8">
                                    <a-row :gutter="{ xs: 8, sm: 16, md: 24, lg: 32 }"  justify="center">
                                        <a-col :xs="12" :sm="12" :md="12" :lg="12" :xl="12">
                                            <p>1.- Sobre el archivo seleccionado, da clic derecho en extraer aquí.</p>
                                            <p>En el caso del sistema operativo MacOS, sólo haz doble clic sobre el archivo para descomprimir.</p>
                                        </a-col>
                                        <a-col :xs="12" :sm="12" :md="12" :lg="12" :xl="12">
                                            <img class="img3" src="@/assets/imgdb/Trazado8394.svg" v-if="eleccion.tema">
                                            <img class="img3" src="@/assets/imgdb/Trazado8388.svg" v-else>
                                        </a-col>
                                    </a-row>
                                </a-col>
                                <a-col :xs="24" :sm="24" :md="8" :lg="8" :xl="8">
                                    <a-row :gutter="{ xs: 8, sm: 16, md: 24, lg: 32 }"  justify="center">
                                        <a-col :xs="12" :sm="12" :md="12" :lg="12" :xl="12">
                                            <p>Se abrirá una ventana mostrando el proceso de extracción, los archivos automáticamente te aparecerán en la carpeta de descargas.</p>
                                        </a-col>
                                        <a-col :xs="12" :sm="12" :md="12" :lg="12" :xl="12">
                                            <p>2. Otra forma es dando clic derecho en el archivo, en el menú que se despliega busca la opción extraer ficheros.</p>
                                        </a-col>
                                    </a-row>
                                </a-col>
                                <a-col :xs="24" :sm="24" :md="8" :lg="8" :xl="8">
                                    <a-row :gutter="{ xs: 8, sm: 16, md: 24, lg: 32 }"  justify="center">
                                        <a-col :xs="12" :sm="12" :md="12" :lg="12" :xl="12">
                                            <img class="img3" src="@/assets/imgdb/Trazado8394.svg" v-if="eleccion.tema">
                                            <img class="img3" src="@/assets/imgdb/Trazado8388.svg" v-else>
                                        </a-col>
                                        <a-col :xs="12" :sm="12" :md="12" :lg="12" :xl="12">
                                            <p>Puedes seleccionar una carpeta existente o crear una nueva para organizar el contenido descomprimido. Los archivos aparecerán en la carpeta indicada.</p>
                                        </a-col>
                                    </a-row>
                                </a-col>
                                <a-col :xs="24" :sm="24" :md="18" :lg="18" :xl="18">
                                    <img class="img3" src="@/assets/imgdb/Grupo43976.png">
                                </a-col>
                                <a-col :xs="24" :sm="24" :md="18" :lg="18" :xl="18">
                                    <p>&nbsp;</p>
                                    <!-- <img class="img3" src="@/assets/imgdb/Grupo43976.png"> -->
                                    <p><center>Nota: Los sistemas operativos tienen herramientas integradas para la descompresión de archivos, también puedes utilizar Winrar o 7-Zip en Windows y RAR en MacOS; (Winzip no funciona).</center></p>
                                </a-col>
                            </a-row>
                            <!-- <img class="img3" src="@/assets/imgdb/Trazado8394.svg"> -->
                            <!--<img class="img3" src="@/assets/imgbd/Trazado8394.svg">-->
                        </div>
                        <div class="abrir" id="abrir" style="padding-left: 10%; padding-right: 10%;" :style="{'background-color': eleccion.tema ? 'white' : '#1d1d1d', border: 0, color: eleccion.tema ? 'black' : 'white' }">
                            <a-row :gutter="{ xs: 8, sm: 16, md: 24, lg: 32 }"  justify="center">
                                <a-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                                    <h1> - Abrir - </h1>
                                </a-col>
                                <a-col :xs="24" :sm="24" :md="8" :lg="8" :xl="8">
                                    <a-row :gutter="{ xs: 8, sm: 16, md: 24, lg: 32 }"  justify="center">
                                        <a-col :xs="12" :sm="12" :md="12" :lg="12" :xl="12">
                                            <p><b>Da doble clic</b> sobre el archivo que quieras abrir.</p>
                                        </a-col>
                                        <a-col :xs="12" :sm="12" :md="12" :lg="12" :xl="12">
                                            <img class="img3" src="@/assets/imgdb/Trazado8388.svg" v-if="eleccion.tema">
                                            <img class="img3" src="@/assets/imgdb/Trazado8394.svg" v-else>
                                        </a-col>
                                    </a-row>
                                </a-col>
                                <a-col :xs="24" :sm="24" :md="10" :lg="10" :xl="10">
                                    <a-row :gutter="{ xs: 8, sm: 16, md: 24, lg: 32 }"  justify="center">
                                        <a-col :xs="12" :sm="12" :md="12" :lg="12" :xl="12">
                                            <b><p>Los archivos.csv</p></b>
                                            <p> Contienen información organizada en filas y columnas. Puedes visualizar y trabajar con estos archivos en programas de hojas de cálculo como Excel, Access, Calc Open Office, Smartsheet, entre otros.</p>
                                        </a-col>
                                        <a-col :xs="12" :sm="12" :md="12" :lg="12" :xl="12">
                                            <img class="img3" src="@/assets/imgdb/Trazado8388.svg" v-if="eleccion.tema">
                                            <img class="img3" src="@/assets/imgdb/Trazado8394.svg" v-else>
                                        </a-col>
                                    </a-row>
                                </a-col>
                                <a-col :xs="24" :sm="24" :md="6" :lg="6" :xl="6">
                                    <a-row :gutter="{ xs: 8, sm: 16, md: 24, lg: 32 }"  justify="center">
                                        <a-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                                            <b><p>Archivo leeme.txt</p></b>
                                            <p>Al hacer doble clic o seleccionar abrirlo, en el menú se abrirá la aplicación según el sistema operativo: Bloc de notas en Windows o Notas en Mac.</p>
                                        </a-col>
                                    </a-row>
                                </a-col>
                                <a-col :xs="24" :sm="24" :md="18" :lg="18" :xl="18">
                                    <img class="img3" src="@/assets/imgdb/Grupo12152.svg">
                                </a-col>
                            </a-row>
                        </div>
                    </a-row>
                </a-card>
            </div>
        </template>
        <template v-else-if="select.type=='consulta'">
            <div :style="{'background-color': eleccion.tema ?  '#582d73' : '#9c9c9c', 'margin-left': '-5%', 'margin-right': '-5%', 'margin-top': '-6%', 'padding-top': '9%', 'height': '280px', 'margin-bottom': '1580%'}">
                <p style="color: white; font-size: 20px; margin-left: 5%" @click="select.type ='home'"><b>  Regresar </b></p>
                <p style="color: white; font-size: 40px; margin-left: 5%"><b>Base de datos</b></p>
                <a-select
                    v-model:value="select.type"
                    style="width: 100%; margin-bottom: 4%;"
                    >
                    <a-select-option value="definicion">¿Qué es el PREP?</a-select-option>
                    <a-select-option value="candidatura">¿Qué es una Candidatura Común?</a-select-option>
                    <a-select-option value="noRegistrada">¿Qué es una candidatura no registrada?</a-select-option>
                    <a-select-option value="contabilizar">¿Cómo saber si un Acta se contabiliza o no en el PREP?</a-select-option>
                </a-select>
                <a-card hoverable style="margin-left: 5%; margin-right: 5%; " :style="{'background-color': eleccion.tema ?  '#f4f4f4' : '#1d1d1d', 'border-radius': '7px'}">
                    <a-row :gutter="{ xs: 24, sm: 24, md: 24, lg: 32 }"  justify="center">
                        <a-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24" style="text-align: center">
                            <p style="font-size: 30px; margin-left: 5%"><b>-Estructura de Datos-</b></p>
                        </a-col>
                        <div class="consulta" style="padding-left: 10%; padding-right: 10%;" :style="{'background-color': eleccion.tema ? '#b283b9' : '#000000', border: 0, color: eleccion.tema ? 'black' : 'white' }">
                            <a-row :gutter="{ xs: 8, sm: 16, md: 24, lg: 32 }"  justify="center">
                                <a-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                                    <h1 id="consulta"> Consulta de datos </h1> 
                                </a-col>
                                <a-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                                    <p>Si deseas una revisión detallada de las variables de la Base de Datos, puedes descargar el Manual Interpretación de la Base de Datos PREP, actualizado en junio de 2024. ​</p>
                                </a-col>
                                <a-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                                    <a-row :gutter="{ xs: 8, sm: 16, md: 24, lg: 32 }"  justify="center">
                                        <a-col :xs="12" :sm="12" :md="12" :lg="12" :xl="12" style="align-content: center">
                                            <p>Los elementos que conforman el archivo de la Base de Datos son:</p>
                                            <p><b>Fila 1</b></p>
                                            <p style="padding-left: 5%; padding-right: 5%;">Tipo de elección. Ya sea Gubernatura, Diputaciones, Ayuntamientos y Otros cargos.</p>
                                            <p><b>Fila 2</b></p>
                                            <p style="padding-left: 5%; padding-right: 5%;">Fecha y hora del corte de información con el formato DD/MM/AAAA HH:MM. Se especifica la hora en formato de 24 horas, Tiempo del Centro de México.</p>
                                        </a-col>
                                        <a-col :xs="12" :sm="12" :md="12" :lg="12" :xl="12" style="align-content: center">
                                            <img class="img3" src="@/assets/imgdb/Grupo44097.svg">
                                        </a-col>
                                    </a-row>
                                </a-col>
                                <a-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                                    <a-row :gutter="{ xs: 8, sm: 16, md: 24, lg: 32 }"  justify="center">
                                        <a-col :xs="12" :sm="12" :md="12" :lg="12" :xl="12" style="align-content: center">
                                            <p><b>Fila 3</b></p>
                                            <p style="padding-left: 5%; padding-right: 5%;">Nombre de las variables de las columnas de la Base de Datos</p> 
                                            <img class="img3" src="@/assets/imgdb/Grupo44098.svg">
                                            <p>Conoce más sobre estos términos y su significado en el Centro de Ayuda.</p>
                                        </a-col>
                                        <a-col :xs="12" :sm="12" :md="12" :lg="12" :xl="12" >
                                            <a-row :gutter="{ xs: 8, sm: 16, md: 24, lg: 32 }"  justify="center">
                                                <a-col :xs="12" :sm="12" :md="6" :lg="6" :xl="6" style="align-content: center">
                                                    <img class="img3" src="@/assets/imgdb/Trazado8388.svg" v-if="eleccion.tema">
                                                    <img class="img3" src="@/assets/imgdb/Trazado8394.svg" v-else>
                                                </a-col>
                                                <a-col :xs="12" :sm="12" :md="18" :lg="18" :xl="18">
                                                    <p> . Actas esperadas </p>
                                                    <p> . Actas registradas </p>
                                                    <p> . Actas fuera de catálogo</p>
                                                    <p> . Actas capturadas</p> 
                                                    <p> . Porcentaje de actas capturadas</p>
                                                    <p> . Actas contabilizadas</p>
                                                    <p> . Porcentaje de actas contabilizadas </p>
                                                    <p> . Porcentaje de inconsistencias en actas Actas no contabilizadas</p>
                                                    <p> . Lista Nominal de las Casillas con actas contabilizadas</p>
                                                    <p> . Total de votos con Casillas Especiales</p> 
                                                    <p> . Total de votos sin Casillas Especiales</p>
                                                    <p> . Porcentaje de Participación Ciudadana</p>
                                                </a-col>
                                                
                                            </a-row>
                                        </a-col>
                                    </a-row>
                                </a-col>
                                <a-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                                    <p><b>Fila 4</b></p>
                                    <p style="padding-left: 5%; padding-right: 5%;">Contenido de las variables del resumen de la Base de Datos correspondientes a la fila 3.</p>
                                </a-col>
                                <a-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                                    <p><b>Fila 5</b></p>
                                    <p style="padding-left: 5%; padding-right: 5%;">Vacía para separar las variables de los datos de las Casillas.</p>
                                </a-col>
                                <a-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                                    <a-row :gutter="{ xs: 8, sm: 16, md: 24, lg: 32 }"  justify="center">
                                        <a-col :xs="12" :sm="12" :md="12" :lg="12" :xl="12" style="align-content: center">
                                            <p><b>Fila 6</b></p>
                                            <p  style="padding-left: 5%; padding-right: 5%;">Indica las variables de los resultados de votación, las cuales se pueden agrupar en:</p>
                                            <img class="img3" src="@/assets/imgdb/Grupo43973.svg">   
                                        </a-col>
                                        <a-col :xs="12" :sm="12" :md="12" :lg="12" :xl="12" >
                                            <a-row :gutter="{ xs: 8, sm: 16, md: 24, lg: 32 }"  justify="center">
                                                <a-col :xs="12" :sm="12" :md="6" :lg="6" :xl="6" style="align-content: center">
                                                    <img class="img3" src="@/assets/imgdb/Trazado8388.svg" v-if="eleccion.tema">
                                                    <img class="img3" src="@/assets/imgdb/Trazado8394.svg" v-else>
                                                </a-col>
                                                <a-col :xs="12" :sm="12" :md="18" :lg="18" :xl="18">
                                                    <p> . Clave Casilla </p>
                                                    <p> . Clave acta</p>     
                                                    <p> . ID Entidad</p>     
                                                    <p> . Entidad </p>    
                                                    <p> . ID Distrito Federal</p>    
                                                    <p> . Distrito Federal</p>     
                                                    <p> . Sección</p>     
                                                    <p> . ID Casilla</p>     
                                                    <p> . Tipo Casilla</p>     
                                                    <p> . Ext contigua</p>     
                                                    <p> . Ubicación de la Casilla</p>     
                                                    <p> . Totales derivados de la votación</p>     
                                                    <p> . Resultados de la votación</p>     
                                                    <p> . Estatus, traslado y seguridad de las actas</p>     
                                                    <p> . Procesamiento de las actas</p>     
                                                    <p> . Proceso de digitalización</p>   
                                                </a-col>
                                                
                                            </a-row>
                                        </a-col>
                                    </a-row>
                                </a-col>
                                <a-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                                    <p><b>Fila 7</b></p>
                                    <p style="padding-left: 5%; padding-right: 5%;">A partir de esta fila se indican los datos correspondientes a cada acta</p>
                                    <img class="img3" src="@/assets/imgdb/Grupo43972.svg"> 
                                </a-col>
                            </a-row>
                            <!-- <div class="cuerpoConsulta"> -->
                        </div>
                        <div class="autenticidad" style="padding-left: 10%; padding-right: 10%;" :style="{'background-color': eleccion.tema ? '#582d73' : '#000000', border: 0, color: 'white' }">
                            <a-row :gutter="{ xs: 8, sm: 16, md: 24, lg: 32 }"  justify="center">
                                <a-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                                    <h1 id="autenticidad">- Autenticidad -</h1>
                                    <p>Para validar la autenticidad de la imagen del acta de tu Casilla, puedes utilizar un programa informático de lector de código único de imagen de la siguiente forma.</p>
                    
                                </a-col>
                                <a-col :xs="24" :sm="24" :md="8" :lg="8" :xl="8">
                                    <a-row :gutter="{ xs: 8, sm: 16, md: 24, lg: 32 }"  justify="center">
                                        <a-col :xs="12" :sm="12" :md="12" :lg="12" :xl="12">
                                            <p><b>Código HASH</b></p>
                                            <p>Es una serie de caracteres únicos asociada al archivo de la imagen digitalizada del Acta de Escrutinio y Cómputo (AEC).</p>
                                        </a-col>
                                        <a-col :xs="12" :sm="12" :md="12" :lg="12" :xl="12">
                                            <img class="img3" src="@/assets/imgdb/Trazado8394.svg" v-if="eleccion.tema">
                                            <img class="img3" src="@/assets/imgdb/Trazado8388.svg" v-else>
                                        </a-col>
                                    </a-row>
                                </a-col>
                                <a-col :xs="24" :sm="24" :md="10" :lg="10" :xl="10">
                                    <a-row :gutter="{ xs: 8, sm: 16, md: 24, lg: 32 }"  justify="center">
                                        <a-col :xs="14" :sm="14" :md="14" :lg="14" :xl="14">
                                            <p><b>Verifica</b></p>
                                            <p>Busca en internet algún lector de códigos para comprobar si la imagen del AEC fue manipulada con editores de imágenes, o si se intentó alterar el archivo y la legitimidad de la información.</p>
                                        </a-col>
                                        <a-col :xs="10" :sm="10" :md="10" :lg="10" :xl="10">
                                            <img class="img3" src="@/assets/imgdb/Trazado8394.svg" v-if="eleccion.tema">
                                            <img class="img3" src="@/assets/imgdb/Trazado8388.svg" v-else>
                                        </a-col>
                                    </a-row>
                                </a-col>
                                <a-col :xs="24" :sm="24" :md="6" :lg="6" :xl="6">
                                    <a-row :gutter="{ xs: 8, sm: 16, md: 24, lg: 32 }"  justify="center">
                                        <a-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                                            <p><b>Valida</b></p>
                                            <p>Una vez localizado o descargado el lector de código de integridad, selecciona la opción de lectura HASH 256, ya que es el utilizado por el PREP para validar que el archivo no fue alterado.</p>
                                        </a-col>
                                    </a-row>
                                </a-col>
                                <a-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24" justify="center" style="text-align: center; margin-bottom: 5%">
                                    <img class="img3" src="@/assets/imgdb/Grupo11219.svg">
                                </a-col>
                                <a-col :xs="24" :sm="24" :md="8" :lg="8" :xl="8">
                                    <a-row :gutter="{ xs: 8, sm: 16, md: 24, lg: 32 }"  justify="center">
                                        <a-col :xs="12" :sm="12" :md="12" :lg="12" :xl="12">
                                            <p><b>Ubica el Acta</b></p>    
                                            <p>Encuentra y descarga el acta de la Casilla que deseas verificar desde el PREP a tu computadora.</p>
                                        </a-col>
                                        <a-col :xs="12" :sm="12" :md="12" :lg="12" :xl="12">
                                            <img class="img3" src="@/assets/imgdb/Trazado8394.svg" v-if="eleccion.tema">
                                            <img class="img3" src="@/assets/imgdb/Trazado8388.svg" v-else>
                                        </a-col>
                                    </a-row>
                                </a-col>
                                <a-col :xs="24" :sm="24" :md="10" :lg="10" :xl="10">
                                    <a-row :gutter="{ xs: 8, sm: 16, md: 24, lg: 32 }"  justify="center">
                                        <a-col :xs="14" :sm="16" :md="16" :lg="16" :xl="16">
                                            <p><b>Genera el Código HASH</b></p>   
                                            <p>Abre el lector del código de integridad HASH 256 de tu preferencia y sube el archivo de la imagen del acta. </p>
                                            <p>Eigue la secuencia: File-Select File (Archivo-Seleccionar Archivo). </p>
                                            <p>Selecciona la opción SHA256. </p>
                                            <p>Elige el archivo y presiona abrir</p> 
                                        </a-col>
                                        <a-col :xs="8" :sm="8" :md="8" :lg="8" :xl="8">
                                            <img class="img3" src="@/assets/imgdb/Trazado8394.svg" v-if="eleccion.tema">
                                            <img class="img3" src="@/assets/imgdb/Trazado8388.svg" v-else>
                                        </a-col>
                                    </a-row>
                                </a-col>
                                <a-col :xs="24" :sm="24" :md="6" :lg="6" :xl="6">
                                    <a-row :gutter="{ xs: 8, sm: 16, md: 24, lg: 32 }"  justify="center">
                                        <a-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                                            <p><b>Copia del código</b></p>
                                            <p>Copia y pega el código que arroja el lector de código SHA y pégalo en la Base de Datos del PREP al lado de la columna Código_integridad.</p>
                                        </a-col>
                                    </a-row>
                                </a-col>
                                <a-col :xs="12" :sm="12" :md="12" :lg="12" :xl="12" justify="center" style="text-align: center; margin-bottom: 5%; margin-top: 5%;">
                                    <img class="img3" src="@/assets/imgdb/Grupo43971.svg">
                                </a-col>
                                <a-col :xs="12" :sm="12" :md="12" :lg="12" :xl="12" justify="center" style="text-align: center; margin-bottom: 5%; margin-top: 5%;">
                                    <img class="img3" src="@/assets/imgdb/Grupo10687.svg">
                                </a-col>
                                <a-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                                    <a-row :gutter="{ xs: 8, sm: 16, md: 24, lg: 32 }"  justify="center">
                                        <a-col :xs="18" :sm="18" :md="18" :lg="18" :xl="18">
                                            <p><b>Compara</b></p>
                                            <p>Compara el código de la imagen del acta con el proporcionado por el lector de código HASH 256. </p>
                                            <p>Asegúrate de que todos los caracteres coincidan, independientemente de las mayúsculas o minúsculas.</p>
                                        </a-col>
                                        <a-col :xs="6" :sm="6" :md="6" :lg="6" :xl="6">
                                            <img class="img3" src="@/assets/imgdb/Trazado8394.svg" v-if="eleccion.tema">
                                            <img class="img3" src="@/assets/imgdb/Trazado8388.svg" v-else>
                                        </a-col>
                                    </a-row>
                                </a-col>
                                <a-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                                    <a-row :gutter="{ xs: 8, sm: 16, md: 24, lg: 32 }"  justify="center">
                                        <a-col :xs="14" :sm="14" :md="14" :lg="14" :xl="14">
                                            <p>Compara el código de la imagen del acta con el proporcionado por el lector de código HASH 256. Asegúrate de que todos los caracteres coincidan, independientemente de las mayúsculas o minúsculas.</p>
                                        </a-col>
                                    </a-row>
                                </a-col>
                                <a-col :xs="12" :sm="12" :md="12" :lg="12" :xl="12" justify="center" style="text-align: center; margin-bottom: 5%; margin-top: 5%;">
                                    <img class="img3" src="@/assets/imgdb/Grupo43968.svg">
                                </a-col>
                                <a-col :xs="12" :sm="12" :md="12" :lg="12" :xl="12" justify="center" style="text-align: center; margin-bottom: 5%; margin-top: 5%;">
                                    <img class="img3" src="@/assets/imgdb/Grupo43967.svg">
                                </a-col>
                                <a-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                                    <p> Este proceso asegura que la imagen del acta de tu Casilla no haya sido modificada y garantiza la autenticidad de la información contenida en ella. Sigue estos pasos para asegurarte de la integridad de los resultados electorales.</p>
                                </a-col>
                            </a-row>
                        <!--<div class="cuerpoAutenticidad"> -->
                        </div>
                    </a-row>
                </a-card>
            </div>
        </template>
        <template v-else-if="select.type=='descripcion'">
            <div :style="{'background-color': eleccion.tema ?  '#582d73' : '#9c9c9c', 'margin-left': '-5%', 'margin-right': '-5%', 'margin-top': '-6%', 'padding-top': '9%', 'height': '280px', 'margin-bottom': '400%'}">
                <p style="color: white; font-size: 20px; margin-left: 5%" @click="select.type ='home'"><b>  Regresar </b></p>
                <p style="color: white; font-size: 40px; margin-left: 5%"><b>Base de datos</b></p>
                <a-select
                    v-model:value="select.type"
                    style="width: 100%; margin-bottom: 4%;"
                    >
                    <a-select-option value="definicion">¿Qué es el PREP?</a-select-option>
                    <a-select-option value="candidatura">¿Qué es una Candidatura Común?</a-select-option>
                    <a-select-option value="noRegistrada">¿Qué es una candidatura no registrada?</a-select-option>
                    <a-select-option value="contabilizar">¿Cómo saber si un Acta se contabiliza o no en el PREP?</a-select-option>
                </a-select>
                <a-card hoverable style="margin-left: 5%; margin-right: 5%; " :style="{'background-color': eleccion.tema ?  '#f4f4f4' : '#1d1d1d', 'border-radius': '7px'}">
                    <a-row :gutter="{ xs: 24, sm: 24, md: 24, lg: 32 }"  justify="center">
                        <a-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24" style="text-align: center">
                            <p style="font-size: 30px; margin-left: 5%"><b>-Descripción del contenido de los archivos-</b></p>
                        </a-col>
                        <a-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12" >
                            <img class="img3" src="@/assets/imgdb/Grupo43762.svg">
                        </a-col>
                        <div class="descripcion" style="padding-left: 10%; padding-right: 10%;" :style="{'background-color': eleccion.tema ? '#582d73' : '#000000', border: 0, color: 'white' }">
                            <a-row :gutter="{ xs: 8, sm: 16, md: 24, lg: 32 }"  justify="center">
                                <a-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                                </a-col>
                                <a-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                                    <br><br>
                                    <p>Dentro de este archivo .zip, encontrarás dos documentos:</p>
                                    <p><b>GUB.csv</b></p>
                                    <p>Corresponde a los datos de identificación de las casillas aprobadas, 
                                        extraídos de la base de datos; cada línea corresponde a una casilla, están separados por comas. </p>
                                    <p>En él se muestra la clave de cada casilla, junto con la información clave de su ubicación. Incluye datos de la entidad, el distrito local, el municipio y la sección correspondiente.</p>
                                    <p>Los datos son los siguientes:</p>   
                                    
                                    <p>CLAVE_CASILLA | CLAVE_ACTA|</p>
                                    <p>ID_ENTIDAD | ENTIDAD |</p>
                                    <p>ID_DISTRITO_LOCAL | DISTRITO_LOCAL |</p>
                                    <p>SECCION | ID_CASILLA |   TIPO_CASILLA |</p>
                                    <p>EXT_CONTIGUA | UBICACION_CASILLA |</p>
                                    <p>LISTA_NOMINAL</p>
                    
                                    <p><b>LEEME.txt</b></p>
                                    <p>Describe a detalle cada uno de los campos que forman el archivo del catálogo.</p>
                                </a-col>
                                <a-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24" justify="center" style="align-content: center; text-align: left;">
                                    <br>
                                    <p>Puedes seguir las mismas instrucciones de descarga, descompresión y apertura del archivo que para la base de datos. Si no las recuerdas, regresa a ellas. </p>
                                    <p>Este archivo se convierte en una herramienta para realizar análisis cruzados entre datos locales y federales, lo que permite una comprensión más completa de la ubicación y contexto de tu casilla en el contexto político y geográfico.</p>
                                    <p>Descarga el archivo .zip del Catálogo de secciones, distritos y municipios </p>
                                </a-col>
                                <a-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24" justify="center" style="align-content: center; text-align: center;">
                                    <p>Descarga el archivo .zip del Catálogo de secciones, distritos y municipios </p>
                                </a-col>
                            </a-row>
                            <!--<div class="cuerpoDescripcion">-->
                        </div>
                    </a-row>
                </a-card>
            </div>
        </template>
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