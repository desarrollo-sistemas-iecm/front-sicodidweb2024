import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import 'ant-design-vue/dist/reset.css';

import HighchartsVue from 'highcharts-vue'
import Highcharts from "highcharts";
import exportingInit from "highcharts/modules/exporting";
import highchartsMoreInit from "highcharts/highcharts-more";
import solidGaugeInit from "highcharts/modules/solid-gauge";
import MapsModule from "highcharts/modules/map";

import '@fontsource/roboto';

// ------ IMPORTAR PARA SCROLLS
import stockInit from "highcharts/modules/stock";
// In order to use Highcharts Maps we need to
// wrap Highcharts with the correct module:
exportingInit(Highcharts);
highchartsMoreInit(Highcharts);
solidGaugeInit(Highcharts);

MapsModule(Highcharts);

// ------ ACTIVAR PARA SCROLLS
stockInit(Highcharts);

//------------------------------------------------------------------
// ..... HAY QUE IMPORTAR PARA TOUR, TODAS LAS DEMAS SON AUTOMATICAS
        import { Tour } from 'ant-design-vue';
//------------------------------------------------------------------
//------------------------------------------------------------------
// ..... HAY QUE IMPORTAR PARA WATERMARK, TODAS LAS DEMAS SON AUTOMATICAS
        import { Watermark } from 'ant-design-vue';
//------------------------------------------------------------------
//------------------------------------------------------------------
// ..... HAY QUE IMPORTAR PARA WATERMARK, TODAS LAS DEMAS SON AUTOMATICAS
        import { Spin } from 'ant-design-vue';
//------------------------------------------------------------------
// ..... HAY QUE IMPORTAR PARA BACKTOP, TODAS LAS DEMAS SON AUTOMATICAS
import { BackTop } from 'ant-design-vue';
//------------------------------------------------------------------
import { FloatButton, FloatButtonGroup } from 'ant-design-vue';

import { QRCode, Flex, Space } from 'ant-design-vue';

const app = createApp(App)

app.use(createPinia())
app.use(HighchartsVue);
app.use(router)


app.use(Tour);
app.use(Watermark);
app.use(Spin);
app.use(BackTop);
app.use(FloatButton, FloatButtonGroup);
app.use(QRCode);
app.use(Flex);
app.use(Space);
app.mount('#app')
