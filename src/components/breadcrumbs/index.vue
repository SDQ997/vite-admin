<template>
    <div class="breadcrumbs">
        <span :class="[item.path ? 'path' : '', index + 1 == breadList.length ? 'pathActive' : '']"
            v-for="(item, index) in breadList" :key="index" @click="toPath(item)">
            {{ $t(item.title) }}
            {{ index+1 == breadList.length ? '' : '/' }}&nbsp;
        </span>
    </div>
</template>


<script lang="ts">
export default {
    name: "Breadcrumbs"
}
</script>
<script lang="ts" setup>
import { ref, getCurrentInstance, watch, onMounted } from "vue"
const breadList = ref([{ title: "menu.home", path: "home"}])
const { proxy }: any = getCurrentInstance()
const toPath = (item) => {
    proxy.$router.push({ path: item.path })
}
const initBread = () => {
    let route = proxy.$route
    if (route.name == "home") {
        breadList.value = [{ title: "menu.home", path: "home"}]
    } else {
        breadList.value = [{ title: "menu.home", path: "home"}]
        breadList.value.push({
            title:route.meta.title,
            path:route.path
        })
    }
}
onMounted(()=>{
    initBread()
})
watch(() => proxy.$route, newRoute => {
    initBread()
})
</script>

<style lang="scss" scoped>
.breadcrumbs {
    color: #A3A6AD;
    font-size: 14px;

    .path {
        cursor: pointer;
        transition: all .2s;
    }

    .path:hover {
        color: #424243;
    }

    .pathActive {
        color: #424243;
    }
}</style>