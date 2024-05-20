<template>
    <div>
        <h1>
       

                <!--
                    OJO! Esté componente debe ir vacio para reemplazo de los demas.
                    MENU BD
                    MENU BD
                    MENU BD
                    MENU BD
                    MENU BD
                        
                -->
                <div style="width: 100%;">
                    <label style="font-size: 22px; padding-left: 10px; padding-top: 10px;">
                        Base de datos
                    </label>

                    <a-button @click="descargar" style="width:90%; margin-left: 10px; margin-top: 10px;margin-right: auto; font-size:15px; hyphens: 'auto', text-align: center;  line-height : 20px; color: white;  background-color:#C791A8">Descargar</a-button>
   
                    <br><br>
                </div> 
                <div style="width: 100%;">
                    <a style="font-size: 17px; padding-left: 10px; padding-top: 10px;" @click="jump('definicion')">
                        Definición
                    </a>
                    <br>
                    <a style="font-size: 12px; padding-left: 20px; padding-top: 10px;" @click="jump('bdutilidad')">
                        Base de datos y utilidad
                    </a>
                </div>   
                <div style="width: 100%; margin-top: 10px;">
                    <a style="font-size: 17px; padding-left: 10px; padding-top: 10px;" @click="jump('carpeta')">
                        Carpeta de archivos
                    </a>
                    <br>
                    <a style="font-size: 12px; padding-left: 20px; padding-top: 10px;" @click="jump('contenido')">
                        Contenido
                    </a>
                    <br>
                    <a style="font-size: 12px; padding-left: 20px; padding-top: 10px;" @click="jump('descargar')">
                        Descargar
                    </a>
                    <br>
                    <a style="font-size: 12px; padding-left: 20px; padding-top: 10px;" @click="jump('descomprimir')">
                        Descomprimir
                    </a>
                    <br>
                    <a style="font-size: 12px; padding-left: 20px; padding-top: 10px;" @click="jump('abrir')">
                        Abrir
                    </a>
                </div>   
                <br>
                <div style="width: 100%;">
                    <a style="font-size: 17px; padding-left: 10px; padding-top: 10px;" @click="jump('consulta')">
                        Consulta
                    </a>
                    <br>
                    <a style="font-size: 12px; padding-left: 20px; padding-top: 10px;" @click="jump('estructura')">
                        Estructura de datos
                    </a>
                    <br>
                    <a style="font-size: 12px; padding-left: 20px; padding-top: 10px;" @click="jump('autenticidad')">
                        Autenticidad
                    </a>
                </div>   
           
        </h1>
        
    </div>
</template>

<script setup>
    import { useEleccionStore} from "../../stores/eleccion_actual"
    const eleccion = useEleccionStore();

    function jump(h){
        var top = document.getElementById(h).offsetTop;
        window.scrollTo(0, top);
    }

    function descargar() {
       // window.open("descargas/20240602_2000_PREP_CDMX.zip", "_blank", "toolbar=yes,scrollbars=yes,resizable=yes,top=500,left=500,width=400,height=400");
        // eleccion.urlPrep
        //alert(eleccion.urlPrep); return;
        //window.open(eleccion.urlPrep+"generador_zip.php", "_blank", "toolbar=yes,scrollbars=yes,resizable=yes,top=500,left=500,width=400,height=400");
        window.open(eleccion.urlPrep + "zipDB/generador_zip.php", "_blank", "toolbar=yes,scrollbars=yes,resizable=yes,top=500,left=500,width=400,height=400");
        setTimeout(function() {
            window.close();
        }, 5000);
    }
</script>

<style scoped>
/* unvisited link */
    a {
        color: white;
    }

  
  /* mouse over link */
  a:hover {
    color: hotpink;
  }
  
  /* selected link */
  a:active {
    color: #ce95f1;
  }
</style>