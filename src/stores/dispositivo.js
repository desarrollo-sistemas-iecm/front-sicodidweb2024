import { ref, computed, onBeforeMount } from 'vue'
import { defineStore } from 'pinia'

export const useDispositivoStore = defineStore('dispositivo', () => {
    
    const despliega_splash = ref(true);

    return { despliega_splash };
})