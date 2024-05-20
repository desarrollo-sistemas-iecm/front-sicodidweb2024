# app-ant-desing

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

### Nota:
- Instalar Ant Desig
```sh
    npm install ant-design-vue@next --save
```

- Instalar unplugin components
```sh
    npm i unplugin-vue-components -D
```
- Configurar VITE (vite.config.js)

```sh
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

import Components from "unplugin-vue-components/vite";
import { AntDesignVueResolver } from "unplugin-vue-components/resolvers";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue(),
        Components({
            resolvers: [AntDesignVueResolver()],
        }),
    ],
});
```

### Últimas modificaciones:
- Instalaciones y pruebas a: 
- Framework Vue 3 
- UI Framework Ant Desing 
- Librería Higtchart 
- Librería Higtchart Vue 
- Librería Higtchart Vue – Chart 
- Librería Higtchart Vue – Gauge 
- Librería Higtchart Vue - Map (geoJson) 
- Compativilidad VUE 3/Art Desing/HigthChart/HigthChart-vue/geoJSON 
- Flex y Grid  
- pruebas de cambio de prop :style en diferentes componentes 
- prueba a modificador de tema a-config-provider 
- pruebas a componentes de "notification" y "message" 
- prueba de uso de a-icons 
- prueba de a-cards 
- prueba de radiobuttons con estilo de botones (cambio de pantalla de grafico a mapa) 
- prueba de progress-bar para mostrar gráfica de votación vertical (1er pantalla) 
- prototipo de <a-select> (combos) en cascada simulando lectura de base de datos enlazados con archivos JSON 
- pruebas a componente <a-menu>  
- pruebas componente(4) prototipo creado a partir de <a-menu> para despliegue dependiendo de - estados de componente y elección 
- Pruebas a VUE / Pinia: 
- Pruebas a la gestión de estado de componentes a partir de componentes <a-menú> , variables - reactivas y selección de ítems en combos. 
- Pruebas de acceso a datos vía JSON para Alcaldías/Distritos Api/PHP/Array 
- Pruebas de acceso a datos vía JSON para Secciones Api/PHP/SQLITE 
- Pruebas de acceso a datos vía JSON para Casillas Api/PHP/SQLITE 
- Pruebas de despliegue en componentes dependiendo la carga y selección de datos obtenidos vía APIS 

- Pruebas de backend para determinar ganador (carga de datos en variables reactivas)
- Pruebas de backend para carga de ganadores por DTO y Alc (carga de datos en variables reactivas)
- Paso de variables reactivas y colores a mapas para verificación de despliegue
- Se corrige componente de "Avance Entidad" para mostrar "0" en caso de venir vacía la variable reactiva correspondiente

- Se implementa componente con Vue-Carousel, en sustitución de <a-carousel> de Ant desing
- Se crean apis(variables json) en php para de prueba carga de datos en grid de ant-desing

- se adecua frontend en lo referente a cards (a-card) en el componente de "candidatos" y en las vistas que lo utilizan
- se adecua frontend en lo referente a cards (a-card) en el componente de "partidos" y en las vistas que lo utilizan
- se corrige error en lectura de logos de partidos
- se corrigen vistas que acceden a componente de "Estadisticas" (no se mostraban)
- se agregan css a a-message en vista principal (se cambia a un mayot tamaño)
- se extraen las funciones de lectura de jpg y png a un "helper" para reutilizar en cualquier componente
- se crea función en "helpers" para la detección de tipo de dispositivo
- se realizan pruebas de funcionamiento con "Flex" nativo e "I-Flex" de "Ant Desing" y se aplica la prueba a componente "AvancesEntidad.vue"
- se modifica frontend de los componente "DistribucionCategoria.vue" y "DistribucionCategoriaPartido.vue" para contener la estrucura de vista correspondiente 
- se eliminan mensajes de seguimiento de apis
- se modifica vista principal "App.vue" y se transforma en componente "MainComponent" ("frontend" y "backend"), para facilitar entrada con splash
- se configura una intalación en el servidor de desarrollo para pruebas

- se  crea componente con accesos (menú) a las votaciones en el extranjero, en postración y en reclusión.  Así mismo se integra a Jefe de Gobierno, Diputados y Alcaldías,  
- se agrega el dibujo de rectángulo sobre la serie que se desee en la gráfica de Candidatos en Jefe de Gobierno  y por Partido
- se agregan la línea de datos(leyendas) en yAxis en el componente de gráfica de Candidatos en Jefe de Gobierno y por Partido
- se quitan leyendas de yAxis así como líneas del grid en la gráfica HightChart del componente ChartMini.vue
- se aplica css y flex-box a pantalla de Splash para alinear textos
- se corrigen textos de menú superior 
- se aplica estilos a componentes de Estadística Entidad con flex-box y Ant Desing
- se crea nuevo componente para información de Participación Ciudadana
- se cambian iconos de personas y se aplican en los cambas de las gráficas de HigtChart

- se agrega header al componente "GridCasillas" con los iconos descargados de la liga proporcionada por en INE y aplicando el css corrspondiente
- Se eliminan campos del mismo componente y se modifica el api de lectura de datos en lo relativo a los campos en el header 
- se modifica el header del componente <a-table> dandole formato con css y ocultando campos y cambiando nombres de acuerdo al formato del INE
- se modifica desplegado de datos el componente <a-table> dando formato css, agregando iconos y objetos gráficos
- se da formato con CSS al componente "GridCasillasParticipa" 
también se agregan los "tooltips" correspondientes.
- Se modifican y ajustan los textos del componente "ObservacionesActa"

- se elimina componente "Voto_ext.vue" de las vista de "Alcaldes" y "Diputados" ya que no lo solicita el INE
- se modifican los css de las vistas correspondientes a "Alcaldes" y "Diputados" así como textos
- se modifica el componente "ActasContabilizadas": se eliminan progressbar y etiquetas no solicitadas
- se agrega recuadro de ganador con su respectivo color css al componente "Ant Desing"
- se crea nueva api php para carga de datos de prueba referente a "Votos en actas contabilizadas" en los apartados de datos para Alcaldías y Diputaciones
- se crea nuevo componente "GridCasillasVotos.vue" para mostrar la consulta del API anteriormente mencionada

- Se aplicaron observaciones remitidas
- Se realizó la corrección ortográfica en los textos de Gubernatura  
- Se adecuan componentes para lo referente a Voto Anticipado, Voto en Prisión Preventiva, Voto en el - extranjero y Voto Diputado Migrante.
- Se realizan correcciones de lectura de tipo de Elección y se aplican cambios de Textos dependiendo el acceso a Vistas

- se crea nueva api en php(actas_grid_data_seccion.php) para la lectura de datos y cabeceras de campos a usar el <a-grid> de todas las secciones solicitadas en la opción de "todas" de los combos de selección.
- se adecua la lectura de los datos del api anteriormente citada en el archivo vue correspondiente (GridSecciones.vue)
- Se elimina llamado a componte "ObservacionesActa.vue" y se agrega el componente "EstadisticaCategoria.vue"  (de acuerdo a la documentación del INI), de la vista de consulta "VotosSeccionTODO.vue"

- Se aplican observaciones según 1er Documento del INE

- Se inicia con el backend de nueva estructura de BD

- Se aplican observaciones según 2o Documento del INE

- Se continua con el backend de BD

- Se inicia enlace de backend y frontend: Carrousel, Chats, Alcaldias obtenidas(alcaldes), Distritos obtenidos(diputados)

- Se aplican estilos de theme con a-config-provider (claro/oscuro) en componentes ant desig y componentes estandar del dom

- se crean nuevos accesos a datos (apis) en php para Participacion (estadisticas) así como su corrspondiete componente y se integra en las vistas correspondientes

- Se modifican y agregan variables reactibas al store de pinia

- se realizan las adecuacines correspondientes en las vistas(rontend) para enlazar el backend con los cambios y nuevas apis.

- se corrige defase en lectura de datos(api) y renderizado de componentes con gráficas

- se corrigen valores nulos e divisones por cero en componentes de gráficas 

- se enlazan datos de backend contra frontend de gráficas y se corrigen divisiones por cero

- se agrega tabla de control de fecha y hora de corte SQlite

- Se crea estructura temporal para datos de localidades urbanas y no urbanas a partir de estructura de 2021

- se crea tabla de configuración temporal de sitio