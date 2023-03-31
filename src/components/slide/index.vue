<template>
    <div class="slide">
        <el-menu @select="selectMenu" :default-active="defaultActive" class="el-menu-vertical-demo elMenu" :collapse="slideIsRetract" background-color="#253243" text-color="rgb(191, 203, 217)">
            <template v-for="(item, index) in menuList" :key="index">
                <el-menu-item :index="item.meta.id" v-if="item.meta.children.length == 0">
                    <component :is="$icon[item.meta.icon]" style="width: 18px;"></component>
                    <template #title>{{ $t(item.meta.title) }}</template>
                </el-menu-item>
                <el-sub-menu :index="item.meta.id" v-if="item.meta.children.length > 0">
                    <template #title>
                        <component :is="$icon[item.meta.icon]" style="width: 18px;"></component>
                        <span>{{ $t(item.meta.title) }}</span>
                    </template>
                    <el-menu-item-group v-for="(childItem, childIndex) in item.meta.children" :key="childIndex">
                        <el-menu-item :index="childItem.id">{{ childItem.title }}</el-menu-item>
                    </el-menu-item-group>
                </el-sub-menu>
            </template>
        </el-menu>
    </div>
</template>
<script lang="ts">
    export default {
      name: 'slide',
    };
</script>
<script lang="ts" setup>
import { onMounted, ref, computed, getCurrentInstance , watch} from "vue";
const { proxy }: any = getCurrentInstance();
const slideIsRetract = computed(() => {
    return proxy.$store.state.slideIsRetract;
});
const menuList = ref([])
const defaultActive = ref(null)
let keepAliveList = []
const getMenu = () => {
    let routes = proxy.$router.getRoutes()
    routes.forEach((item)=>{
        if(item.meta.keepAlive){
            keepAliveList.push(item.name)
        }
        if(item.meta.title){
            if(proxy.$route.name == item.name){
                defaultActive.value = item.meta.id
            }
            menuList.value.push(item)
        }
    })
    proxy.$store.commit("changeState",{key:"keepAlive",value:keepAliveList})
    console.log(proxy.$store.state.keepAlive)
}
const selectMenu = (e)=>{
    const menuInfo = getMenuInfo(menuList.value,e)
    proxy.$router.push(menuInfo.name)
}
const getMenuInfo = (array,id)=>{
    let result = null
    if (!array) return // return; 中断执行
    for (let i in array) {
        if (result !== null) break
        let item = array[i];
        if (item.meta.id === id) {
            result = item;
            break;
        } else if (!!item.meta?.children?.length) {
            result = getMenuInfo(item.meta.children, id);
        }
    }
    return result;
}
watch(() => proxy.$route,newRoute=> {
    defaultActive.value = newRoute.meta.id
})
onMounted(() => {
    getMenu()
})
</script>

<style lang="scss" scoped>
.slide {
    width: 100%;
    height: 100%;
    background-color: #2a394c;
}
.elMenu{
    border: none;
}
</style>