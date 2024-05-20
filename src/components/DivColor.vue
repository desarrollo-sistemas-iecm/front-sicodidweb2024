<template>
    <!--
       <div style="
    left: 389px;
    width: 8px;
    height: 29px;
    text-align: left;
    justify-content: center;
    opacity: 1;" 
    
    :style="{backgroundColor:props.color}"
    >
    </div>     
    -->


    <a-row>
        <a-col>
            <div style="
            left: 389px;
            width: 8px;
            height: 29px;
            text-align: left;
            justify-content: center;
            opacity: 1;" 
            
            :style="{backgroundColor:props.color}"
            >
            </div>  
        </a-col>
        <a-col>
          <div style="padding: 5px; color: #333333;  font-weight: bold;"
                :style="{fontSize:fontsize? fontsize: '18px'}">
                {{ props.text }}
          </div>
        </a-col>
      </a-row>
</template>

<script setup>

    const props = defineProps({
        color: String, 
        text: String,
        fontsize: String
    });
</script>

<style lang="scss" scoped>

</style>