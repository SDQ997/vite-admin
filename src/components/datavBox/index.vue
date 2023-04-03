<template>
    <div class="datavBox" :id="chartId"></div>
</template>

<script lang="ts">
export default {
    name:"datavBox"
}
</script>
<script lang="ts" setup>
import * as echarts from 'echarts'
import { inject , defineProps , computed , getCurrentInstance, onMounted , ref , nextTick } from 'vue';
const { proxy }:any = getCurrentInstance()
const props = defineProps({
    options:{},
    id:{
        default:""
    }
})
let chartId = ref("")
let myChart = <any>null
const initId = ()=>{
    chartId.value = props.id || Math.random().toString(36).substr(2)
    nextTick(()=>{
        initChart()
    })
}
const initChart = ()=>{
    if(!props.options){
        return
    }
    let dom = document.getElementById(chartId.value)
    if(!dom){
        console.warn("the id "+chartId.value+" dom is not defind")
        return
    }
    myChart = echarts.init(dom);
    myChart.setOption(props.options);
    window.onresize = ()=>{
        myChart.resize()
    }
}
onMounted(()=>{
    initId()
})
</script>

<style lang="scss" scoped>
.datavBox{
    width: 100%;
    height: 100%;
}
</style>