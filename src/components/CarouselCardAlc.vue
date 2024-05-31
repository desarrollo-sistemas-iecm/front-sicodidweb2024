<template>
    <h2>
        <!--
            PARA MOSTRAR TITULO CON CUADRO DE COLOR
        --> 
        <a-row style="align-items: center; text-align: center; justify-content: center" v-if="!isMobile()">
            <a-col :xs="6" :sm="6" :md="6" :lg="6" :xl="5">
                <a-card style="height: 300px; width: 185px; margin-left: 25px; margin-right: 25px;" :bordered="false">
                    <p style="margin-top: 170px"><b>Votos</b></p>
                    <p>Total</p>
                    <p>Porcentaje</p>
                </a-card>
            </a-col>
            <template v-if="catalogo.length > 3">
                <a-col :xs="18" :sm="18" :md="18" :lg="18" :xl="19">
                    <Carousel :items-to-show="3">
                        <Slide v-for="(cat) in catalogo" :key="cat.id_participante">
                            <div class="carousel__item">
                                <a-card style="height: 320px; width: 185px; margin-left: 25px; margin-right: 25px;" :loading="loading" hoverable :style="{'border': eleccion.tema ? '1px solid rgb(88, 45, 115)': '1px solid rgb(255, 255, 255)'}">
                                    <p><a-image style="width: 65px; border-radius: 30px; box-shadow: 8px 8px 24px 8px rgba(208, 216, 243, 0.6);" :src="getImagePath(cat.id_participante)" alt="" 
                                        fallback="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMIAAADDCAYAAADQvc6UAAABRWlDQ1BJQ0MgUHJvZmlsZQAAKJFjYGASSSwoyGFhYGDIzSspCnJ3UoiIjFJgf8LAwSDCIMogwMCcmFxc4BgQ4ANUwgCjUcG3awyMIPqyLsis7PPOq3QdDFcvjV3jOD1boQVTPQrgSkktTgbSf4A4LbmgqISBgTEFyFYuLykAsTuAbJEioKOA7DkgdjqEvQHEToKwj4DVhAQ5A9k3gGyB5IxEoBmML4BsnSQk8XQkNtReEOBxcfXxUQg1Mjc0dyHgXNJBSWpFCYh2zi+oLMpMzyhRcASGUqqCZ16yno6CkYGRAQMDKMwhqj/fAIcloxgHQqxAjIHBEugw5sUIsSQpBobtQPdLciLEVJYzMPBHMDBsayhILEqEO4DxG0txmrERhM29nYGBddr//5/DGRjYNRkY/l7////39v///y4Dmn+LgeHANwDrkl1AuO+pmgAAADhlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAAqACAAQAAAABAAAAwqADAAQAAAABAAAAwwAAAAD9b/HnAAAHlklEQVR4Ae3dP3PTWBSGcbGzM6GCKqlIBRV0dHRJFarQ0eUT8LH4BnRU0NHR0UEFVdIlFRV7TzRksomPY8uykTk/zewQfKw/9znv4yvJynLv4uLiV2dBoDiBf4qP3/ARuCRABEFAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghgg0Aj8i0JO4OzsrPv69Wv+hi2qPHr0qNvf39+iI97soRIh4f3z58/u7du3SXX7Xt7Z2enevHmzfQe+oSN2apSAPj09TSrb+XKI/f379+08+A0cNRE2ANkupk+ACNPvkSPcAAEibACyXUyfABGm3yNHuAECRNgAZLuYPgEirKlHu7u7XdyytGwHAd8jjNyng4OD7vnz51dbPT8/7z58+NB9+/bt6jU/TI+AGWHEnrx48eJ/EsSmHzx40L18+fLyzxF3ZVMjEyDCiEDjMYZZS5wiPXnyZFbJaxMhQIQRGzHvWR7XCyOCXsOmiDAi1HmPMMQjDpbpEiDCiL358eNHurW/5SnWdIBbXiDCiA38/Pnzrce2YyZ4//59F3ePLNMl4PbpiL2J0L979+7yDtHDhw8vtzzvdGnEXdvUigSIsCLAWavHp/+qM0BcXMd/q25n1vF57TYBp0a3mUzilePj4+7k5KSLb6gt6ydAhPUzXnoPR0dHl79WGTNCfBnn1uvSCJdegQhLI1vvCk+fPu2ePXt2tZOYEV6/fn31dz+shwAR1sP1cqvLntbEN9MxA9xcYjsxS1jWR4AIa2Ibzx0tc44fYX/16lV6NDFLXH+YL32jwiACRBiEbf5KcXoTIsQSpzXx4N28Ja4BQoK7rgXiydbHjx/P25TaQAJEGAguWy0+2Q8PD6/Ki4R8EVl+bzBOnZY95fq9rj9zAkTI2SxdidBHqG9+skdw43borCXO/ZcJdraPWdv22uIEiLA4q7nvvCug8WTqzQveOH26fodo7g6uFe/a17W3+nFBAkRYENRdb1vkkz1CH9cPsVy/jrhr27PqMYvENYNlHAIesRiBYwRy0V+8iXP8+/fvX11Mr7L7ECueb/r48eMqm7FuI2BGWDEG8cm+7G3NEOfmdcTQw4h9/55lhm7DekRYKQPZF2ArbXTAyu4kDYB2YxUzwg0gi/41ztHnfQG26HbGel/crVrm7tNY+/1btkOEAZ2M05r4FB7r9GbAIdxaZYrHdOsgJ/wCEQY0J74TmOKnbxxT9n3FgGGWWsVdowHtjt9Nnvf7yQM2aZU/TIAIAxrw6dOnAWtZZcoEnBpNuTuObWMEiLAx1HY0ZQJEmHJ3HNvGCBBhY6jtaMoEiJB0Z29vL6ls58vxPcO8/zfrdo5qvKO+d3Fx8Wu8zf1dW4p/cPzLly/dtv9Ts/EbcvGAHhHyfBIhZ6NSiIBTo0LNNtScABFyNiqFCBChULMNNSdAhJyNSiECRCjUbEPNCRAhZ6NSiAARCjXbUHMCRMjZqBQiQIRCzTbUnAARcjYqhQgQoVCzDTUnQIScjUohAkQo1GxDzQkQIWejUogAEQo121BzAkTI2agUIkCEQs021JwAEXI2KoUIEKFQsw01J0CEnI1KIQJEKNRsQ80JECFno1KIABEKNdtQcwJEyNmoFCJAhELNNtScABFyNiqFCBChULMNNSdAhJyNSiECRCjUbEPNCRAhZ6NSiAARCjXbUHMCRMjZqBQiQIRCzTbUnAARcjYqhQgQoVCzDTUnQIScjUohAkQo1GxDzQkQIWejUogAEQo121BzAkTI2agUIkCEQs021JwAEXI2KoUIEKFQsw01J0CEnI1KIQJEKNRsQ80JECFno1KIABEKNdtQcwJEyNmoFCJAhELNNtScABFyNiqFCBChULMNNSdAhJyNSiECRCjUbEPNCRAhZ6NSiAARCjXbUHMCRMjZqBQiQIRCzTbUnAARcjYqhQgQoVCzDTUnQIScjUohAkQo1GxDzQkQIWejUogAEQo121BzAkTI2agUIkCEQs021JwAEXI2KoUIEKFQsw01J0CEnI1KIQJEKNRsQ80JECFno1KIABEKNdtQcwJEyNmoFCJAhELNNtScABFyNiqFCBChULMNNSdAhJyNSiEC/wGgKKC4YMA4TAAAAABJRU5ErkJggg=="
                                    /></p>
                                    <div style="height: 60px;">
                                        <p style="margin-bottom:10px; padding-left: 0px; padding-right: 0px"> {{ cat.nombre_completo }}</p>
                                    </div>
                                    <template v-if="cat.integrantes != ''">
                                        <img :src="getImagePathPartidoDtto(cat.id_participante)" style='padding: 20px;' alt="">
                                        <p><strong> {{ cifrasMiles(data[0][cat.campo_votos]) }}</strong></p>
                                        <!-- <template v-else>
                                            <img :src="getImagePathPartidoDtto(cat.id_participante)" style='padding: 20px;' alt="">
                                        </template> -->
                                    </template>
                                    <template v-else> 
                                        <img v-if="cat.id_participante >= 10" :src="getImagePathPartidoDtto(cat.id_participante)" style='padding: 20px; width: 15%;' alt="" >
                                        <img v-else :src="getImagePathPartidoDtto(cat.id_participante)" style='padding: 20px;' alt="">
                                        <p><strong > {{ cifrasMiles(data[0][cat.campo_votos]) }}</strong></p>
                                    </template>
                                    <p style="padding-top:9px"><strong>{{ isNaNCero(((data[0][cat.campo_votos] * 100) / data[0]['votacion_total']).toFixed(4)) }} %</strong></p>
                                </a-card>
                            </div>
                        </Slide>
                        <template #addons>
                            <Navigation />
                            <Pagination />
                        </template>
                    </Carousel>
                </a-col>
            </template>
            <template v-for="(cat) in catalogo" :key="cat.id_participante" v-else>
                <a-col :xs="6" :sm="6" :md="6" :lg="6" :xl="5">
                    <a-card style="height: 320px; width: 185px; margin-left: 25px; margin-right: 25px;" :loading="loading" hoverable :style="{'border': eleccion.tema ? '1px solid rgb(88, 45, 115)': '1px solid rgb(255, 255, 255)'}">
                        <p><a-image style="width: 65px; border-radius: 30px; box-shadow: 8px 8px 24px 8px rgba(208, 216, 243, 0.6);" :src="getImagePath(cat.id_participante)" alt="" 
                            fallback="data:image/png;base64,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"
                        /></p>
                        <div style="height: 60px;">
                            <p style="margin-bottom:10px; padding-left: 0px; padding-right: 0px"> {{ cat.nombre_completo }}</p>
                        </div>
                        <template v-if="cat.integrantes != ''">
                            <img :src="getImagePathPartidoDtto(cat.id_participante)" style='padding: 20px;' alt="">
                            <p><strong> {{ cifrasMiles(data[0][cat.campo_votos]) }}</strong></p>
                            <!-- <template v-else>
                                <img :src="getImagePathPartidoDtto(cat.id_participante)" style='padding: 20px;' alt="">
                            </template> -->
                        </template>
                        <template v-else> 
                            <img v-if="cat.id_participante >= 10" :src="getImagePathPartidoDtto(cat.id_participante)" style='padding: 20px; width: 15%;' alt="" >
                            <img v-else :src="getImagePathPartidoDtto(cat.id_participante)" style='padding: 20px;' alt="">
                            <p><strong > {{ cifrasMiles(data[0][cat.campo_votos]) }}</strong></p>
                        </template>
                        <p style="padding-top:9px"><strong>{{ isNaNCero(((data[0][cat.campo_votos] * 100) / data[0]['votacion_total']).toFixed(4)) }} %</strong></p>
                    </a-card>
                </a-col>
            </template>
            <!-- {{ data }} -->
            <!-- <a-col :xs="6" :sm="6" :md="6" :lg="6" :xl="5">
                <a-card style="height: 300px; width: 185px; margin-left: 25px; margin-right: 25px; border: 1px solid rgb(88, 45, 115)" :loading="loading" hoverable >
                    
                </a-card>
            </a-col>
            <a-col :xs="6" :sm="6" :md="6" :lg="6" :xl="5">
                <a-card style="height: 300px; width: 185px; margin-left: 25px; margin-right: 25px; border: 1px solid rgb(88, 45, 115)" :loading="loading" hoverable >
                    
                </a-card>
            </a-col> -->
            <a-col style="width: 90%;" align="middle" :style="{top: catalogo.length <= 3 ? '-80px': '-110px'}">
                <a-divider :style="{'background-color': eleccion.tema ? '' : 'white'}"/>
            </a-col>
        </a-row>
        <a-row style="align-items: center; text-align: center; justify-content: center" v-else>
            <template v-for="(cat) in catalogo" :key="cat.id_participante">
                <a-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                    <a-card hoverable style="margin-top: 4%; margin-bottom: 4%;" :style="{'background-color': eleccion.tema ?  '#eae3e7' : '#2a2a2a'}">
                        <a-card-meta :title="data.descripcion">
                            <template #avatar v-if="data.id != 'no_reg' && data.id != 'nulos'">
                                <a-avatar :size="48" style="box-shadow: 8px 8px 24px 8px rgba(208, 216, 243, 0.6);" :src="getImagePath(cat.id_participante)" />
                                <b style="margin-left:15px"> {{ cat.nombre_completo }}</b>
                            </template>
                        </a-card-meta>
                        <img style="margin-left:10%;" :src="getImagePathPartidoDtto(cat.id_participante)" v-if="data.id != 'no_reg' && data.id != 'nulos'">
                        <a-row style="align-items: center; text-align: center; margin-top: 5%;">
                            <a-col :xs="12" :sm="12" :md="12" :lg="12" :xl="12">
                                <b>Total de votos</b>
                            </a-col>
                            <a-col :xs="12" :sm="12" :md="12" :lg="12" :xl="12">
                                <b>Porcentaje</b>
                            </a-col>
                            <a-col :xs="12" :sm="12" :md="12" :lg="12" :xl="12">
                                <p><strong> {{ cifrasMiles(data[0][cat.campo_votos]) }}</strong></p>
                            </a-col>
                            <a-col :xs="12" :sm="12" :md="12" :lg="12" :xl="12">
                                <p style="padding-top:9px"><strong>{{ isNaNCero(((data[0][cat.campo_votos] * 100) / data[0]['votacion_total']).toFixed(4)) }} %</strong></p>
                            </a-col>
                        </a-row>
                    </a-card>
                </a-col>
            </template>
        </a-row>
    </h2>
    
</template>
<script setup>
    import {useEleccionStore} from "../stores/eleccion_actual"
    import { ref, onMounted } from 'vue';
    import { getImagePath,  getImagePathPartidoDtto, formatNumber, getImagePathJG, nombresJG, cifrasMiles, isNaNCero } from "../helpers";
    import 'vue3-carousel/dist/carousel.css'
    import { Carousel, Slide, Navigation, Pagination} from 'vue3-carousel';
    import { isMobile } from "../helpers";

    const eleccion = useEleccionStore();
    let loading = ref(true);
    let catalogo = ref({});
    let data = ref({});
    let integrantes = ref({});
    let integrantesSplit = ref([]); 


    onMounted(async () => {
        try {  
            const urlServer = eleccion.urlPrep;
            const response2 = await fetch(urlServer+'funciones_distribucion.php?type='+eleccion.eleccion+'&item='+eleccion.cmb1+'&item_2='+eleccion.cmb2+'&item_3='+eleccion.cmb3).then(response => response.json())
            .then(datos => {
                loading.value = !loading.value;
                console.log(datos);
                datos.catalogo_con_candidatos_sirec.sort((a, b) => a.prelacion - b.prelacion);
                let array;
                catalogo.value = datos.catalogo_con_candidatos_sirec;
                data.value = datos.data;
                integrantes.value = datos.split_integrantes;
                catalogo.value.forEach(element => {
                if (element.integrantes != '')
                array = {};
                array = (element.integrantes).split('&');
                console.log(array);
                integrantesSplit.value.push({ id_integrante: element.id_participante, changos: array })
                });
                console.table(integrantesSplit.value);
            }
            )
            .catch(error => {console.error('Error:', error)});
        } catch (error) {
            console.error('Error al cargar los datos:', error);
        }
    });
</script>
<style scoped>    
    .carousel__item {
      /* margin-bottom: 20px; */
      padding-top: 30px;
    }
    .carousel__prev,
    .carousel__next {
    box-sizing: content-box;
    color: rgb(16, 82, 141);
    }

    .carousel__prev--in-active,
    .carousel__next--in-active {
    display: none;
    }
</style>
