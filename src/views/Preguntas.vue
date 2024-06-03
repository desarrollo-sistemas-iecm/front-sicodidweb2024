<template>
  <a-row :gutter="{ xs: 8, sm: 16, md: 24, lg: 32 }" style="display: flex; flex-wrap: wrap; justify-content: space-around;">
    <a-col :span="24">
      <DivColor :fontsize="'22px'" :color="'#582D73'" text="Preguntas Frecuentes"/>
    </a-col>
    <a-col :span="24" style="padding-left:0%; padding-right: 0%;">
      <a-card title="- Avance -" :bordered="false" :headStyle="{'background-color': eleccion.tema ? '#582d73' : '#1d1d1d', border: 0, fontSize:'25px', color: 'white', 'margin-left': '10%' }" :style="{'background-color': eleccion.tema ? '#582d73' : '#1d1d1d', border: 0, color: 'white', width: '100%' }" size="small" >
        <div style="padding-left: 10%; padding-right: 30%; text-align: justify; text-justify: inter-word;">
          <h3>¿Qué muestra el Avance</h3>
          <p>Muestra el número y porcentaje de Actas capturadas al momento; el porcentaje de la participación ciudadana que hasta el momento ha votado; y la hora del último corte, éste se actualiza aproximadamente cada 20 minutos.</p>
          <h3>¿Qué indica el apartado de las Actas capturadas?</h3>
          <p>Indica el número de actas y el porcentaje que hasta el momento se han ingresado al PREP, se calcula con respecto del total de Actas esperadas.</p>
          <h3>¿Qué indica el porcentaje de las Actas capturadas?</h3>
          <p>Indica los votos que hasta el momento se han registrado con base en la Lista Nominal de personas con derecho a votar.</p>
          <h3>¿Qué indica el Último corte y cada cuando se realiza?</h3>
          <p>Indica el corte que realiza el PREP para presentar la información, éste se actualiza aproximadamente cada 20 minutos. La hora se muestra en formato de 24 horas y de acuerdo con el uso horario de la Ciudad de México, de conformidad con la hora oficial en los Estados Unidos Mexicanos y los usos horarios establecidos por el centro nacional de metrología.</p>
        </div>
      </a-card>
    </a-col>
    <a-col :span="24" style="padding-left:0%; padding-right: 0%;">
      <a-card title="- Consulta de la votación -" :bordered="false" :headStyle="{'background-color': eleccion.tema ? 'white' : '#000000', border: 0, fontSize:'25px', color: eleccion.tema ? 'black' : 'white', 'margin-left': '10%' }" :style="{'background-color': eleccion.tema ? 'white' : '#000000', border: 0, color: eleccion.tema ? 'black':'white', width: '100%' }" size="small" >
        <div style="padding-left: 10%; padding-right: 30%; text-align: justify; text-justify: inter-word;">
          <h3>¿Cómo puedo buscar los resultados en el PREP?</h3>
          <p>Los reportes de resultados puedes consultarlos a través de las opciones: “Votos por Candidatura” y “Votos por Partido Político y Candidatura Independiente”. Asimismo, tendrás la opción de detallar tu búsqueda a través de las opciones: Distrito o Alcaldía, y Sección.</p>
          
          <h3>¿Por qué algunas veces las opciones de búsqueda están deshabilitadas?</h3>
          <p> Sólo se activarán estas opciones cuando hayas seleccionado un nivel más alto, cuando lo hagas te permitirá escoger la información. Por ejemplo: Si seleccionas la Sección 821 del Distrito 1 se habilitará la opción para selección Casillas</p>

          <h3>¿Qué resultados se muestran en Detalle por Distrito (para Jefatura de Gobierno y Diputaciones)?</h3>
          <p> Se muestra la distribución de votos por candidatura o por partido político a nivel Distrito, indicando el porcentaje, total de votos y avance de votación al momento del último corte.</p>
          
          <h3>¿Qué resultados se muestran en Detalle por Alcaldía (para Alcaldías)?</h3>
          <p> Se muestra la distribución de votos por candidatura o por partido político a nivel Alcaldía, indicando el porcentaje, total de votos y avance de votación al momento del último corte.</p>

          <h3>¿Qué resultados se muestran en Detalle por Sección?</h3>
          <p> Se muestra el total de votos y porcentaje por Partido Político, Candidatura Independiente, Candidatura Común, Coalición, Candidatura no registrada y Votos Nulos de todas las secciones. Asimismo, se puede elegir una sección en específico, donde se indican el listado de casillas, la imagen del Acta digitalizada, los votos por actor político, votos nulos, el total y observaciones de la sección elegida. También podrás observar el origen del Acta: Acta en proceso, Escáner, Dispositivo móvil y Urna electrónica. </p>
          
          <h3>¿Qué resultados se muestran en Votos por Casilla?</h3>
          <p>Puedes ver el resultado de votación en todas las casillas o por tipo de casilla. Se mostrará el total de votos por Partido Político, Candidatura Independiente, Candidatura Común, Coalición, Candidatura no registrada y Votos Nulos. Tienes la opción de visualizar el Acta y su origen.</p>

        </div>
      </a-card>
    </a-col>

    <a-col :span="24" style="padding-left:0%; padding-right: 0%;">
      <a-card title="- Conoce los resultados de tu Casilla -" :bordered="false" :headStyle="{'background-color': eleccion.tema ? '#582d73' : '#1d1d1d', border: 0, fontSize:'25px', color: 'white', 'margin-left': '10%' }" :style="{'background-color': eleccion.tema ? '#582d73' : '#1d1d1d', border: 0, color: 'white', width: '100%' }" size="small" >
        <div style="padding-left: 10%; padding-right: 30%; text-align: justify; text-justify: inter-word;">
          <h3>¿Cómo encuentro los resultados de mi casilla?</h3>
          <p> Ingresa tu Sección, que se encuentran en tu identificación oficial y realiza la consulta. En escritorio encuentras esta búsqueda en la parte superior de la derecha con el nombre de “Mi sección”.

            En móvil, ingresa a Menú, selecciona la opción “Mi Sección” y mete tus datos.</p>
          
          <h3>¿Cuál es mi sección?</h3>
          <p> La sección que te corresponde se encuentra especificada en el frente de tu credencial de elector, ejemplo: SECCIÓN 0610 </p>

          <h3>¿Cuál es mi clave de elector?</h3>
          <p> Tu clave de elector está especificada en el frente de tu credencial de elector, ejemplo: CLAVE DE ELECTOR GMVLMR8007501M100. </p>

          <h3>¿Se guardará mi información en alguna base de datos?</h3>
          <p> Los datos que nos proporciones son exclusivos para visualizar el detalle de votación de tu casilla, no se guardarán en ninguna base de datos. </p>
          
          <div class="pregunta">
            <h3>¿Si no quiero ingresar mis datos cómo puedo buscar los resultados de mi casilla?</h3>
            <p> Selecciona Distrito, Sección y Casilla desde las opciones de navegación. </p>
          </div>
        </div>
      </a-card>
    </a-col>

    <a-col :span="24" style="padding-left:0%; padding-right: 0%;">
      <a-card title="- Votos en Actas Contabilizadas -" :bordered="false" :headStyle="{'background-color': eleccion.tema ? 'white' : '#000000', border: 0, fontSize:'25px', color: eleccion.tema ? 'black' : 'white', 'margin-left': '10%' }" :style="{'background-color': eleccion.tema ? 'white' : '#000000', border: 0, color: eleccion.tema ? 'black':'white', width: '100%' }" size="small" >
        <div style="padding-left: 10%; padding-right: 30%; text-align: justify; text-justify: inter-word;">
          <div class="pregunta">
            <h3>¿Qué muestra el Total de votos?</h3>
            <p> Muestra el número de votos que hasta el momento se han contabilizado de acuerdo con el reporte y detalle solicitados. </p>
          </div>
          <div class="pregunta">
            <h3>¿Cómo puedo ver el detalle de votación de los Partidos Políticos y/o por Candidatura Independiente?</h3>
            <p>En cada una de las Candidaturas se encuentra la sección Votos por Partido Político y Candidatura Independiente, se muestra el resumen de votación para cada uno. Puedes detallar tu búsqueda al seleccionar un distrito en específico. </p>
          </div>
          <div class="pregunta">
            <h3>¿Cómo consulto el detalle de votación por Coalición?</h3>
            <p> A través los reportes de Votos por Partido Político y Candidatura Independiente / Detalle por Distrito, se visualiza el resumen del total de votos y porcentaje obtenidos hasta el momento, pero también se desglosa el total de votos recibido por partido político y/o coalición. </p>
          </div>
          <div class="pregunta">
            <h3>¿Cómo consulto el Detalle de votos por Casilla?</h3>
            <p> A través de los reportes Votos por Distritos y Votos por Partido Político y Candidatura Independiente, selecciona Distrito, Sección y Casilla, se mostrará el desglose de la votación de una casilla en particular. Sin embargo, también se muestra un reporte con el listado de las casillas de algún distrito en particular. </p>
          </div>
          <div class="pregunta">
            <h3>¿Cómo consulto el Detalle de votos por Casillas Especiales?</h3>
            <p> A través de los reportes Votos por Distritos y Votos por Partido Político y Candidatura Independiente, selecciona Distrito, Sección y el tipo de Casilla Especial, se mostrará el desglose de la votación. Esta información sólo se mostrará en secciones donde se hayan aprobado casillas especiales. </p>
          </div>
          <div class="pregunta">
            <h3>¿Cómo consulto la Distribución de votos por Candidatura a nivel Distrito?</h3>
            <p> Para las candidaturas de “Jefatura de Gobierno” y Diputaciones, a través del reporte Detalle por Distritos. En el modo “Votos por Candidato”, selecciona el Distrito que quieres visualizar. Se mostrará la sección resumen de la votación y en seguida la sección Distribución de votos por candidatura a nivel Distrito. Aquí podrás observar el nombre del candidato y el total de votos que lleva cada uno. </p>
          </div>
          <div class="pregunta">
            <h3>¿Cómo consulto la Distribución de votos por Candidatura a nivel Alcaldía?</h3>
            <p> Para la candidatura de “Alcaldías”, a través del reporte Detalle por Alcaldía. En el modo “Votos por Candidato”, selecciona la Alcaldía que quieres visualizar. Se mostrará la sección resumen de la votación y en seguida la sección Distribución de votos por candidatura a nivel Alcaldía. Aquí podrás observar el nombre del candidato y el total de votos que lleva cada uno. </p>
          </div>
          <div class="pregunta">
            <h3>¿Dónde se indican los votos nulos?</h3>
            <p> Se indican en todos los resultados de búsqueda de las opciones para visualizar el detalle: Distrito, Sección y Casilla. </p>
          </div>
          <div class="pregunta">
            <h3>¿Cómo consulto las Actas RP?</h3>
            <p> Para la candidatura de “Diputaciones”, ingresa al reporte Votos por Partido Político y Candidatura Independiente, luego selecciona la se mostrará la sección Representación Proporcional, da clic en “Ver Actas” y podrás ver el resumen de la votación. </p>
          </div>
          <div class="pregunta">
            <h3>¿Qué indica el estatus Actas en proceso?</h3>
            <p> Indica que el Acta aún no se ha digitalizado hasta el momento. </p>
          </div>
          <div class="pregunta">
            <h3>¿Cómo puedo saber la procedencia de la imagen del Acta y qué indica su origen?</h3>
            <p> Desde el resumen de votación por Casilla, se indicará por cuál medio se digitalizó el Acta: escáner, dispositivo móvil o urna electrónica. </p>
          </div>
          <div class="pregunta">
            <h3>¿Cuáles son las dos vistas en que puedo visualizar el resumen de votación?</h3>
            <p> Desde la versión móvil, puedes visualizar el reporte en tabla o gráfica, dando clic en los íconos que están al inicio de la sección Resumen de la votación.</p>
          </div>
        </div>
      </a-card>
    </a-col>

    <a-col :span="24" style="padding-left:0%; padding-right: 0%;">
      <a-card title="- Visualización tarjetas -" :bordered="false" :headStyle="{'background-color': eleccion.tema ? '#582d73' : '#1d1d1d', border: 0, fontSize:'25px', color: 'white', 'margin-left': '10%' }" :style="{'background-color': eleccion.tema ? '#582d73' : '#1d1d1d', border: 0, color: 'white', width: '100%' }" size="small" >
        <div style="padding-left: 10%; padding-right: 30%; text-align: justify; text-justify: inter-word;">
          <div class="pregunta">
            <h3>¿Cuáles son los resultados que muestra el mapa electoral?</h3>
            <p> Para las candidaturas de Diputaciones se muestra un mapa con la división geográfica por distritos y muestra el Partido Político o Candidatura Independiente que aventaja hasta el momento en cada distrito. Para las candidaturas de Alcaldías se muestra un mapa con la división geográfica por demarcaciones, que muestra el Partido Político o Candidatura Independiente que aventaja hasta el momento en cada alcaldía. </p>
          </div>
          <div class="pregunta">
            <h3>¿Cómo puedo navegar en el mapa electoral?</h3>
            <p> Desde escritorio puedes dar clic sobre el Distrito o Alcaldía que quieras revisar y en móvil puedes presionar sobre éste. </p>
          </div>
          <div class="pregunta">
            <h3>¿Cómo puedo ver el detalle por Circunscripción?</h3>
            <p> En el mapa electoral se encuentran las Circunscripciones, Entidades y Distritos Federales. Da clic sobre la Circunscripción que desees y se mostrará el Partido Político que aventaja, los votos, el número de
              Circunscripción, la Entidad y el Distrito. </p>
          </div>
        </div>
      </a-card>
    </a-col>

    <a-col :span="24" style="padding-left:0%; padding-right: 0%;">
      <a-card title="- Visualización gráficos -" :bordered="false" :headStyle="{'background-color': eleccion.tema ? 'white' : '#000000', border: 0, fontSize:'25px', color: eleccion.tema ? 'black' : 'white', 'margin-left': '10%' }" :style="{'background-color': eleccion.tema ? 'white' : '#000000', border: 0, color: eleccion.tema ? 'black':'white', width: '100%' }" size="small" >
        <div style="padding-left: 10%; padding-right: 30%; text-align: justify; text-justify: inter-word;">
          <div class="pregunta">
            <h3>¿Cuáles son los resultados que muestra el mapa electoral?</h3>
            <p> Te muestra el total de votos y porcentaje por Partido Político o Candidatura Independiente que aventaja hasta el momento en cada división geográfica. Por ejemplo, en Circunscripción te permite ver quién
              aventaja en cada Entidad y dentro de ésta, quién va adelante en cada Distrito. </p>
          </div>
          <div class="pregunta">
            <h3>¿Cómo puedo navegar en el mapa electoral?</h3>
            <p> Desde escritorio puedes dar clic sobre el Distrito que quieras revisar y en móvil puedes presionar sobre éste. </p>
          </div>
          <div class="pregunta">
            <h3>¿Cómo puedo ver el detalle por Circunscripción?</h3>
            <p> En el mapa electoral se encuentran las Circunscripciones, Entidades y Distritos Federales. Da clic sobre la Circunscripción que desees y se mostrará el Partido Político que aventaja, los votos, el número de
              Circunscripción, la Entidad y el Distrito. </p>
          </div>
          <div class="pregunta">
            <h3>¿Cómo puedo ver el detalle por Entidad?</h3>
            <p> Al seleccionar la Entidad, se mostrará el mapa correspondiente a ésta y se mostrará el resumen de la votación. </p>
          </div>
          <div class="pregunta">
            <h3>¿Cuáles son los resultados que muestra el gráfico de la Cámara?</h3>
            <p> Se muestra el porcentaje de votos por Partido Político, Coalición y Candidatura Independiente. </p>
          </div>
        </div>
      </a-card>
    </a-col>

    <a-col :span="24" style="padding-left:0%; padding-right: 0%;">
      <a-card title="- Resumen de la votación -" :bordered="false" :headStyle="{'background-color': eleccion.tema ? '#582d73' : '#1d1d1d', border: 0, fontSize:'25px', color: 'white', 'margin-left': '10%' }" :style="{'background-color': eleccion.tema ? '#582d73' : '#1d1d1d', border: 0, color: 'white', width: '100%' }" size="small" >
        <div style="padding-left: 10%; padding-right: 30%; text-align: justify; text-justify: inter-word;">
          <div class="pregunta">
            <h3>¿Cómo encuentro los resultados de mi casilla?</h3>
            <p> Ingresa tu Entidad, Sección y tu Clave de elector, que se encuentran en tu identificación oficial y realiza la consulta. En escritorio encuentras esta búsqueda en la parte superior de la derecha con el nombre de Conocer los resultados de tu casilla. En móvil, ingresa a Menú, selecciona la opción Mi Casilla y mete tus datos. </p>
          </div>
          <div class="pregunta">
            <h3>¿Cuál es mi sección?</h3>
            <p> La sección que te corresponde se encuentra especificada en el frente de tu credencial de elector, ejemplo: SECCIÓN 0610.. </p>
          </div>
          <div class="pregunta">
            <h3>¿Cuál es mi clave de elector?</h3>
            <p> Tu clave de elector está especificada en el frente de tu credencial de elector, ejemplo: CLAVE DE ELECTOR GMVLMR8007501M100. </p>
          </div>
          <div class="pregunta">
            <h3>¿Se guardará mi información en alguna base de datos?</h3>
            <p> Los datos que nos proporciones son exclusivos para visualizar el detalle de votación de tu casilla, no se guardarán en ninguna base de datos. </p>
          </div>
          <div class="pregunta">
            <h3>¿Si no quiero ingresar mis datos cómo puedo buscar los resultados de mi casilla?</h3>
            <p> Selecciona la Circunscripción, Entidad, Distrito, Sección y Casilla desde las opciones de navegación. </p>
          </div>
        </div>
      </a-card>
    </a-col>

    <a-col :span="24" style="padding-left:0%; padding-right: 0%;">
      <a-card title="- Estadística -" :bordered="false" :headStyle="{'background-color': eleccion.tema ? 'white' : '#000000', border: 0, fontSize:'25px', color: eleccion.tema ? 'black' : 'white', 'margin-left': '10%' }" :style="{'background-color': eleccion.tema ? 'white' : '#000000', border: 0, color: eleccion.tema ? 'black':'white', width: '100%' }" size="small">
        <div style="padding-left: 10%; padding-right: 30%; text-align: justify; text-justify: inter-word;">
          <div class="pregunta">
            <h3>¿Qué datos se muestran en la sección Estadística por Entidad?</h3>
            <p> Se mostrarán los datos específicos de la Entidad seleccionada: gráfico del porcentaje de Actas Esperadas, Capturadas y Contabilizadas, Porcentaje de Participación ciudadana conforme a las Actas Contabilizadas sin considerar la votación en las Casillas Especiales y el gráfico del Total de votos de la Lista Nominal. </p>
          </div>
          <div class="pregunta">
            <h3>¿Qué datos se muestran en la sección Estadística por Distrito?</h3>
            <p> Se mostrarán los datos específicos del Distrito seleccionado: gráfico del porcentaje de Actas Esperadas, Capturadas y Contabilizadas, Porcentaje de Participación ciudadana conforme a las Actas Contabilizadas sin considerar la votación en las Casillas Especiales y el gráfico del Total de votos de la Lista Nominal. </p>
          </div>
          <div class="pregunta">
            <h3>¿Qué datos se muestran en la sección Estadística de Casillas?</h3>
            <p> Se mostrarán los datos específicos de la Sección seleccionada: gráfico de la Participación ciudadana conforme a las Actas Contabilizadas, indicando el porcentaje de la votación en las casillas de esa sección en contraste con el Total de la Lista Nominal. </p>
          </div>
          <div class="pregunta">
            <h3>¿Qué datos se muestran en la sección Estadística de Casilla?</h3>
            <p> Se mostrarán los datos específicos de la Casilla seleccionada: gráfico de la Participación ciudadana conforme a las Actas Contabilizadas, indicando el porcentaje de la votación en la casilla en contraste con el Total de la Lista Nominal.</p>
          </div>
          <div class="pregunta">
            <h3>¿Qué resultados se reportan en Actas Contabilizadas por Casillas Urbanas y No Urbanas?</h3>
            <p> Se refiere a las Actas que se han capturado en las casillas ubicadas en la ciudad y en las zonas rurales. </p>
          </div>
          <div class="pregunta">
            <h3>¿Qué indica el porcentaje de Participación Ciudadana conforme a las Actas Contabilizadas?</h3>
            <p> Indica el porcentaje de personas que han participado en la votación con relación a las Actas que se han contabilizado en una casilla. </p>
          </div>
          <div class="pregunta">
            <h3>¿Qué indica el resultado de Votos en Casillas Básicas, Contiguas y Extraordinarias?</h3>
            <p> Indica los votos que se han capturado y contabilizado hasta el momento del corte en este tipo de casilla.</p>
          </div>
          <div class="pregunta">
            <h3>¿Cuál es el resultado que se reporta en el gráfico de la Lista nominal?</h3>
            <p> El resultado es el número de votantes que han ejercido su voto, en contraste con la Lista Nominal oficial esperada, es decir, todas las personas que están registradas y tienen derecho a votar. </p>
          </div>
          <div class="pregunta">
            <h3>¿Cómo descargo la base de datos?</h3>
            <p> Al ingresar a la opción de Base de Datos, podrás consultar una guía para realizar la descarga e interpretación de la Base de datos.</p>
          </div>
          <div class="pregunta">
            <h3>¿Qué implican las Actas con inconsistencias?</h3>
            <p> Implican una revisión detallada para determinar cuál es la inconsistencia que presentan, con base en esto determinar si son contabilizadas, no contabilizadas o fuera de catálogo. </p>
          </div>
        </div>
      </a-card>
    </a-col>

    <a-col :span="24" style="padding-left:0%; padding-right: 0%;">
      <a-card title="- Observaciones en Actas -" :bordered="false" :headStyle="{'background-color': eleccion.tema ? 'white' : '#000000', border: 0, fontSize:'25px', color: eleccion.tema ? 'black' : 'white', 'margin-left': '10%' }" :style="{'background-color': eleccion.tema ? 'white' : '#000000', border: 0, color: eleccion.tema ? 'black':'white', width: '100%' }" size="small" >
        <div style="padding-left: 10%; padding-right: 30%; text-align: justify; text-justify: inter-word;">
          <div class="pregunta">
            <h3>¿Cuál es la información que se puede compartir y en dónde?</h3>
            <p> Se puede compartir la página del PREP en redes sociales. </p>
          </div>
          <div class="pregunta">
            <h3>¿Cómo cambiar a versión escritorio o versión móvil?</h3>
            <p> Desde la computadora puedes seleccionar la opción minimizar, ubicada en la parte superior derecha de tu pantalla y podrás visualizar la versión móvil. Para regresar a versión escritorio, selecciona la opción maximizar. </p>
          </div>
        </div>
      </a-card>
    </a-col>
    
    <a-col :span="24" style="padding-left:0%; padding-right: 0%;">
      <a-card title="- Elementos de apoyo -" :bordered="false" :headStyle="{'background-color': eleccion.tema ? '#582d73' : '#1d1d1d', border: 0, fontSize:'25px', color: 'white', 'margin-left': '10%' }" :style="{'background-color': eleccion.tema ? '#582d73' : '#1d1d1d', border: 0, color: 'white', width: '100%' }" size="small" >
        <div style="padding-left: 10%; padding-right: 30%; text-align: justify; text-justify: inter-word;">
          <div class="pregunta">
            <h3>¿Cómo poner modo nocturno?</h3>
            <p> Solo debes dar clic en la opción superior derecha el tema Oscuro. </p>
          </div>
          <div class="pregunta">
            <h3>¿Es necesario actualizar en cada momento?</h3>
            <p> No es necesario actualizar todo el tiempo, ya que la información en el PREP se actualiza cada 20 minutos. Sin embargo, puedes dar clic en el botón Actualizar para refrescar la página. </p>
          </div>
          <div class="pregunta">
            <h3>¿En las versiones móvil y escritorio puedo encontrar la misma información?</h3>
            <p> Desde luego, tanto en la versión móvil como en la de escritorio encontrarás la misma información de los resultados publicados en el PREP. </p>
          </div>
          <div class="pregunta">
            <h3>¿Qué información encontraré en la sección Centro de Ayuda?</h3>
            <p> Al ingresar al Centro de ayuda, encontrarás la explicación detallada de los elementos comprendidos en el proceso de votación: Qué es el PREP, Elecciones Locales, Voto y Tipos de Actas. </p>
          </div>
        </div>
      </a-card>
    </a-col>
  </a-row>
</template>

<script setup>
  import {useEleccionStore} from "../stores/eleccion_actual"
  import DivColor from '../components/DivColor.vue';
  const eleccion = useEleccionStore();

</script>

<style  scoped>
.lista-menu li {
  list-style: none;
  margin: 0.75em 0;
}

@media (min-width: 1200px){
.container-xl, .container-lg, .container-md, .container-sm, .container {
  max-width: 1140px;
  }
}

.pregunta-buscador .card {
  box-shadow: 0px 3px 6px #34344e;
}

.preguntas-frecuentes p {
  font-size: 14px;
}

.sub {
  opacity: 0.5;
  border: none;
  border-bottom: 1px solid transparent;
  outline: none;
  transition: 0.3s;
  width: auto;
}

.preguntas-frecuentes {
  padding: 15px;
}

.txBlanco {
  color: #fff;
}

.bgAzul {
  background: #48487c;
}

.container-fluid, .container-xl, .container-lg, .container-md, .container-sm {
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
}
</style>