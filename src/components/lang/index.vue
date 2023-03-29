<template>
    <div class="lang">
        <el-dropdown @command="handleCommand">
            <img src="./assets/lang.png" alt="" :class="['langIcon','langIcon-'+size]">
            <template #dropdown>
            <el-dropdown-menu>
                <el-dropdown-item command="zh" :disabled="lang == 'zh'">{{ $t('common.lang.zh') }}</el-dropdown-item>
                <el-dropdown-item command="en" :disabled="lang == 'en'">{{ $t('common.lang.en') }}</el-dropdown-item>
            </el-dropdown-menu>
            </template>
        </el-dropdown>
        
    </div>
</template>

<script lang="ts" setup>
import { inject , defineProps , computed , getCurrentInstance } from 'vue';
const { proxy }:any = getCurrentInstance()
const props = defineProps({
  size:{
    type:String,
    default:"default",
  }
})
const lang = computed(()=>{
    return proxy.$store.state.lang
})
const handleCommand = (e)=>{
    console.log(e)
    localStorage.setItem("lang",e)
    location.reload()
}
</script>

<style lang="scss" scoped>
.lang{
    display: inline-block;
    .langIcon{
        cursor: pointer;
        outline: none;
    }
    .langIcon-default{
        width:40px;
        height: 40px;
    }
    .langIcon-small{
        width:30px;
        height: 30px;
    }
    .langIcon-mini{
        width:20px;
        height: 20px;
    }
    .langIcon-large{
        width:50px;
        height: 50px;
    }
}
</style>