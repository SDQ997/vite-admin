<template>
    <div class="slide">
        <el-menu @select="selectMenu" :default-active="defaultActive" class="el-menu-vertical-demo elMenu" :collapse="slideIsRetract" background-color="#253243" text-color="rgb(191, 203, 217)">
            <template v-for="(item, index) in menuList_" :key="index">
                <el-menu-item :index="item.meta.id" v-if="item.children.length == 0">
                    <component :is="$icon[item.meta.icon]" style="width: 18px;"></component>
                    <template #title>{{ $t(item.meta.title) }}</template>
                </el-menu-item>
                <el-sub-menu :index="item.meta.id" v-if="item.children.length > 0">
                    <template #title>
                        <component :is="$icon[item.meta.icon]" style="width: 18px;"></component>
                        <span>{{ $t(item.meta.title) }}</span>
                    </template>
                    <el-menu-item-group v-for="(childItem, childIndex) in item.children" :key="childIndex">
                        <el-menu-item :index="childItem.meta.id">{{  $t(childItem.meta.title) }}</el-menu-item>
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
import { menuList } from "@/api/menu/menu.ts"
const { proxy }: any = getCurrentInstance();
const slideIsRetract = computed(() => {
    return proxy.$store.state.slideIsRetract;
});
const menuList_ = ref([])
const defaultActive = ref(null)
let keepAliveList = []
const getRecursionList = (source, id="id", parentId="parentId", children="children", firstId=null)=>{
    // 深拷贝 
    // 利用JSON.stringify 将js对象序列化（JSON字符串），再使用JSON.parse来反序列化(还原)js对象；
    // 序列化的作用是存储和传输
    let cloneData = JSON.parse(JSON.stringify(source))
    // filter() 方法创建一个新的数组，新数组中的元素是通过检查指定数组中符合条件的所有元素
    let newArray = cloneData.filter(father => {
        let branchArr = cloneData.filter(child => father.meta[id] == child.meta[parentId]);
        branchArr.length > 0 ? father[children] = [...branchArr] : ''
        return father.meta[parentId] == firstId // 表示第一层的parentId是0
    })
    return newArray
}
const getMenu = () => {
    menuList().then((res)=>{
        res.forEach((item)=>{
            if(item.meta.keepAlive){
                keepAliveList.push(item.name)
            }
            if(item.meta.title){
                if(proxy.$route.name == item.name){
                    defaultActive.value = item.meta.id
                }
            }
        })
        let list = getRecursionList(res)
        menuList_.value = [...list]
        proxy.$store.commit("changeState",{key:"keepAlive",value:keepAliveList})
    })
}
const selectMenu = (e)=>{
    const menuInfo = getMenuInfo(menuList_.value,e)
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
        } else {
            if(item.children.length > 0){
                result = getMenuInfo(item.children, id);
            }
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