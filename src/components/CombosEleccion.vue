<template>
  <!--
      DENTRO COMPONENT COMBO:
            Lei: {{ id  }}

            lei: {{ key }}

            eleccion : {{ eleccion.eleccion==4? 'Alcaldía': 'Distrito'}}

            ESTOY EN: {{ eleccion.eleccion }}
            <br> <br>   
            COMBOS:<br>

            cmb1: {{ eleccion.cmb1 }} <br>
            cmb2: {{ eleccion.cmb2 }} <br>
            cmb3: {{ eleccion.cmb3 }} <br>
  -->


    <div>
      <!--
          DELEGACIÓN O DISTRITO
      -->
      {{ eleccion.eleccion==4? 'Alcaldía': 'Distrito'}}

      <a-select v-model:value="selectedCategory" 
            @change="updateSubcategories" style="padding:5px; width: 100%">
        <a-select-option disabled value="">Seleccione opción</a-select-option>
        <a-select-option v-for="category in categories" :key="category.id" :value="category.id">{{ category.name }}</a-select-option>
      </a-select>
      <br>

      <!--
          SECCIONES
          <a-select v-if="selectedCategory" v-model:value="selectedSubcategory" 
      -->
      Sección
      <a-select v-model:value="selectedSubcategory" 
        @change="updateItems" style="padding:5px; width: 100%">
        <a-select-option disabled value="">Seleccione una sección</a-select-option>
        <a-select-option value="-1">Todas</a-select-option>
        <a-select-option v-for="subcategory in subcategories" :key="subcategory.id" :value="subcategory.id">{{ subcategory.name }}</a-select-option>
      </a-select>
      <br>
      <!--
          MESAS
          <a-select v-if="selectedSubcategory"  v-model:value="selectedItem" 
      -->
      {{ selectedSubcategory ? 'Casilla' : '' }}
      <a-select v-if="selectedSubcategory" v-model:value="selectedItem" 
        style="width: 100%; padding:5px;" @change="itemSelected">
        <a-select-option disabled value="">Seleccione una Casilla</a-select-option>
        <a-select-option v-for="item in items" :key="item.id" :value="item.id">{{ item.name }}</a-select-option>
      </a-select>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted, watch } from 'vue';
  //--------- USO DE RUTEO
  import { useRoute, useRouter } from "vue-router";
  import {useEleccionStore} from "../stores/eleccion_actual"

    const eleccion = useEleccionStore();

    const urlServer = eleccion.urlPrep;

    const route = useRoute();   // La url
    const router = useRouter();
  //----------
  const categories = ref([]);
  const subcategories = ref([]);
  const items = ref([]);
  const selectedCategory = ref('');
  const selectedSubcategory = ref('');
  const selectedItem = ref('');

  const loadCategories = () => {
  
    //fetch('../../src/assets/data/categories.json')
    fetch(`${urlServer}api_categories.php?type=${eleccion.eleccion}`)
      .then(response => response.json())
      .then(data => {
          categories.value = data.categories;
      })
      .catch(error => {
        console.error('Error al cargar las categorías:', error);
      });
  };

  const updateSubcategories = () => {

    selectedSubcategory.value = '';
    selectedItem.value = '';

    if(selectedCategory.value=='' || !selectedCategory.value) return;
    if(eleccion.readData===false) return;
    //alert(`${urlServer}api_subcategories.php?type=${eleccion.eleccion}&seleccion=${selectedCategory.value}`)  
    fetch(`${urlServer}api_subcategories.php?type=${eleccion.eleccion}&seleccion=${selectedCategory.value}`)  
      .then(response => response.json())
      .then(data => {
        subcategories.value = data.subcategories;
        eleccion.combosActualesValidos(selectedCategory.value ,"","");
        //eleccion.combosActualesValidos("",subcategories.value,"");
      })
      .finally(() => {
        //router.push({name: "nivel1", params:{id: selectedCategory.value}})
        if(eleccion.readData!=false){
           // router.push({name: "nivel1", params:{id: selectedCategory.value}, query:{ key: Date.now() }})
            router.push({name: "cadidatos", params:{id: 'Candidatos!!!'}, query:{ key: Date.now() }})
            console.log("DENTRO ALCALDIA: ",eleccion.keyCmb.toString());
        }
      })
      .catch(error => {
        console.error('Error al cargar las subcategorías:', error);
      });
  };
  

  // AQUI CONTROLAMOS LAS SECCIONES
  const updateItems = () => {

    selectedItem.value = '';
    //alert("TRAE!!!: "+selectedSubcategory.value);
    
    if(selectedSubcategory.value ==='' || selectedSubcategory.value===null) return;
    ///////if(selectedSubcategory.value=='') return;
    //alert("TRAE 2: "+selectedSubcategory.value);
    if(eleccion.readData===false) return;
    //alert("TRAE 3: "+selectedSubcategory.value);
    if(selectedSubcategory.value=='-1') {
       //alert("Secciones!!!"+selectedSubcategory.value);

        // 15/ENERO/2024    LIMPIO CASILLAS SI SELECCIONA "TODAS" LAS SECCIONES
        items.value = [];

        if(selectedCategory.value=='' || !selectedCategory.value) return;

        router.push({name: "todo_secc"});
        return;
    };
    //alert("CERO!!!!!"+selectedSubcategory.value);
       

   //alert(`${urlServer}api_items.php?type=${eleccion.eleccion}&seleccion=${selectedCategory.value}&seccion=${selectedSubcategory.value}`);
    fetch(`${urlServer}api_items.php?type=${eleccion.eleccion}&seleccion=${selectedCategory.value}&seccion=${selectedSubcategory.value}`)  
      .then(response => response.json())
      .then(data => {
        items.value = data.items;
        eleccion.combosActualesValidos(selectedCategory.value, selectedSubcategory.value,"")
      })
      .finally(() => {
        //////alert("FINALLY")
        if(eleccion.readData!=false){
            //router.push({name: "nivel2", params:{id: selectedSubcategory.value}})
            router.push({name: "seccion", params:{id: selectedSubcategory.value, cas:'_' }})
        } 
      })
      .catch(error => {
        console.error('Error al cargar los items:', error);
      });
  };

  const itemSelected = () => {
        eleccion.combosActualesValidos(selectedCategory.value, selectedSubcategory.value ,selectedItem.value);
    //fetch(`../../src/assets//data/items_${selectedSubcategory.value}.json`)
        router.push({name: "seccion", params:{id: selectedItem.value, cas:selectedItem.value }})

  };
  
  onMounted(() => {
    loadCategories();
    
    if(eleccion.keyCmb) {
        selectedCategory.value = eleccion.cmb1;
        // ERROR!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
        // ERROR!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
        // ERROR!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
        // ERROR!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

        /// 07/noviembre --------------------------------------------------------
        // COMENTE LA SIGUIENTE LINEA PORQUE HABIA ERROR AL CARGAR DATOS DE BUSQUEDA SECCION
       /////// updateSubcategories();
        /// 07/noviembre --------------------------------------------------------

        // ERROR!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
        // ERROR!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
        // ERROR!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
        
        selectedSubcategory.value = eleccion.cmb2;
        updateItems();
        //selectedItem.value = eleccion.cmb3;   
        //itemSelected();
        eleccion.combosActuales(
            selectedCategory.value, 
            selectedSubcategory.value, 
            '',
            'llave',
            true
        );
        //itemSelected();
    }
    
  });
  </script>

<style scoped>
select{
    color: black
}
</style>
  