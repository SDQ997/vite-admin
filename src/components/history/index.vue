<template>
    <div class="history">
        <div :class="['historyItem' , routeName == item.path ? 'historyItemActive':'']" v-for="(item,index) in historyList" :key="index" @click="toPath(item)">
            <div class="historyItemStatus" v-if="routeName == item.path"></div>
            <span>{{ $t(item.title) }}</span>
        </div>
    </div>
</template>


<script lang="ts">
export default {
    name: "history"
}
</script>
<script lang="ts" setup>
import { ref, getCurrentInstance, watch, onMounted, computed } from "vue"
const routeName = computed(()=>{
    return proxy.$route.name
})
const historyList = ref([{ title: "menu.home", path: "home"}])
const { proxy }: any = getCurrentInstance()
const toPath = (item) => {
    proxy.$router.push({ path: item.path })
}
const initHistory = () => {
    let isExst = historyList.value.filter((item)=>{
        return item.path == proxy.$route.name
    }).length > 0
    if(!isExst){
        historyList.value.push({title:proxy.$route.meta.title,path:proxy.$route.name})
    }
    // let route = proxy.$route
    // if (route.name == "home") {
    //     historyList.value = [{ title: "menu.home", path: "home"}]
    // } else {
    //     historyList.value = [{ title: "menu.home", path: "home"}]
    //     historyList.value.push({
    //         title:route.meta.title,
    //         path:route.path
    //     })
    // }
}
onMounted(()=>{
    console.log(routeName)
    initHistory()
})
watch(() => proxy.$route, newRoute => {
    initHistory()
})
</script>

<style lang="scss" scoped>
.history {
    padding: 0 10px;
    height: 100%;
    color: #636466;
    display: flex;
    align-items: center;
    gap:10px;
    .historyItem{
        padding: 0 10px;
        height: calc(100% - 6px);
        border: 1px solid #d6d7dc;
        display: flex;
        align-items: center;
        justify-content: center;
        gap:5px;
        font-size: 12px;
        cursor: pointer;
        transition: all .2s;
        .historyItemStatus{
            width: 8px;
            height: 8px;
            border-radius: 50%;
            background-color: white;
        }
    }
    .historyItemActive{
        background-color: #409EFF;
        border-color: #409EFF;
        color: white;
    }
}</style>