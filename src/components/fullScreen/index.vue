<template>
    <div class="fullScreen" @click="full">
        <el-icon size="25"><FullScreen /></el-icon>
    </div>
</template>

<script lang="ts" setup>
import { fullScreen , outFullScreen , fullScreenState } from "@/utils/fullscreen.ts"
const full = ()=>{
    if(fullScreenState()){
        outFullScreen()
    }else{
        fullScreen()
    }
}
</script>

<style lang="scss" scoped>
.fullScreen{
    cursor: pointer;
}
</style>