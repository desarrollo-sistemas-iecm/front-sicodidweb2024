<template>
    <div>
        <h1>
            NIVEL 1
        </h1>
        <h2>
            Lei: {{ id  }}

            lei: {{ key }}

            ESTOY EN: {{ eleccion.eleccion }}
        </h2>
    </div>
</template>

<script setup>
    import { priceProperty } from "../helpers";
    import { useRoute, useRouter  } from 'vue-router';
    import {useEleccionStore} from "../stores/eleccion_actual"
    const eleccion = useEleccionStore();

    const route = useRoute();  
    const router = useRouter();
    const id = route.params.id;
    const key = route.query.key;

    const props = defineProps({
        key: String, // Propiedad para forzar la actualización
    });


</script>
