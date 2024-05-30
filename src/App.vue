<template>
  <div>
    <template v-if="(!protegerRutas) || isAuthenticated">
      <Splash v-if="dispositivo.despliega_splash"></Splash>
      <MainComponent :key="eleccion.mainKey" v-if="!dispositivo.despliega_splash"></MainComponent>
    </template>
    <template v-else>
      <!-- <Splash v-if="!isAuthenticated && !isLoginRoute"></Splash> -->
      <router-view></router-view>
      <!-- <MainComponent :key="eleccion.mainKey" v-if="getShowSplash()"></MainComponent> -->
    </template>
  </div>
</template>

<script setup>
import { ref, onBeforeMount, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import Splash from './components/Splash.vue';
import MainComponent from './components/MainComponent.vue';
import { useEleccionStore } from './stores/eleccion_actual';
import { useDispositivoStore } from './stores/dispositivo.js';
import { handleLoginSuccess, getShowSplash } from './auth.js';

import '@fontsource/roboto';

const muestraError = ref("");
const isAuthenticated = ref(false);
const isLoginRoute = ref(false);
const protegerRutas = ref(false);
const eleccion = useEleccionStore();
const dispositivo = useDispositivoStore();
const router = useRouter();
const route = useRoute();

const checkSystem = async () => {
  try {
    const response = await fetch('http://localhost:3025/api/system');
    const data = await response.json();
    console.log('System check:', data);
    protegerRutas.value = data.proteger_rutas;
    if (protegerRutas.value) {
      const token = localStorage.getItem('token');
      if (token) {
        const renewResponse = await fetch('http://localhost:3025/api/login/renew', {
          method: 'GET',
          headers: {
            'x-token-sicodid': token
          }
        });
        if (renewResponse.ok) {
          const renewData = await renewResponse.json();
          console.log('Token renewed:', renewData);
          localStorage.setItem('token', renewData.token);
          isAuthenticated.value = true;
          await handleLoginSuccess();
        } else {
          console.log('Token renewal failed');
          router.push('/login');
        }
      } else {
        console.log('No token found');
        router.push('/login');
      }
    } else {
      await handleLoginSuccess();
    }
  } catch (error) {
    console.error('Error al verificar el sistema:', error);
  }
};

watch(route, (newRoute) => {
  isLoginRoute.value = newRoute.name === 'login';
});

onBeforeMount(() => {
  checkSystem();
});
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Roboto+Condensed");

html, body {
  font-family: 'Roboto', sans-serif;
}

#app {
  font-family: 'Roboto', sans-serif;
}

p, div, a, h1, h2, h3, h4, h5, tag {
  font-family: 'Roboto', sans-serif;
}
</style>
