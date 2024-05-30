// src/auth.js

import { ref, nextTick } from 'vue';
import { useEleccionStore } from './stores/eleccion_actual';
import { leeEleccion } from './helpers';

const showSplash = ref(true);
const isAuthenticated = ref(false);

export const handleLoginSuccess = async () => {
  const eleccion = useEleccionStore();
  const muestraError = ref("");
  try {
    console.log('handleLoginSuccess called');
    await leeEleccion(1);
    await nextTick();
    showSplash.value = true;
    setTimeout(() => {
      showSplash.value = false;
      isAuthenticated.value = true;
    }, 2000);
  } catch (error) {
    eleccion.loadData = false;
    console.error('Error al cargar los datos:', error);
    muestraError.value = error;
  }
};

export const getShowSplash = () => showSplash.value;
