<template>
    <div class="slide">
        <!-- <el-menu default-active="1" class="el-menu-vertical-demo elMenu" :collapse="slideIsRetract" background-color="#253243" text-color="rgb(191, 203, 217)">
            <template v-for="(item, index) in menuList_" :key="index">
                <el-menu-item :index="item.id" v-if="item.child.length == 0">
                    <el-icon>
                        <setting />
                    </el-icon>
                    <template #title>{{ item.title }}</template>
                </el-menu-item>
                <el-sub-menu :index="item.id" v-if="item.child.length > 0">
                    <template #title>
                        <el-icon>
                            <location />
                        </el-icon>
                        <span>{{ item.title }}</span>
                    </template>
                    <el-menu-item-group v-for="(childItem, childIndex) in item.child" :key="childIndex">
                        <el-menu-item :index="childItem.id">{{ childItem.title }}</el-menu-item>
                    </el-menu-item-group>
                </el-sub-menu>
            </template>
        </el-menu> -->
    </div>
</template>

<script lang="ts" setup>
import { onMounted, ref, computed, getCurrentInstance } from "vue";
const { proxy }: any = getCurrentInstance();
const slideIsRetract = computed(() => {
    return proxy.$store.state.slideIsRetract;
});
const getMenu = () => {
    
}
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