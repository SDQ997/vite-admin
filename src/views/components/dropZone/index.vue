<template>
    <div class="dropZone elMainPage">
        <DropZone @change="change"></DropZone>
        <div class="fileList">
            <div class="fileItem" v-for="(item, index) in fileList" :key="index">
                {{ item.name }}
            </div>
        </div>
        <div class="tipTitle">
            <span>{{ $t("common.param") }}</span>
        </div>
        <div class="propsTable">
            <el-table :data="tableData">
                <el-table-column prop="name" :label="$t('common.paramTable.name')" />
                <el-table-column :label="$t('common.paramTable.description')" width="200">
                    <template #default="scope">
                        <span>{{ $t(scope.row.description) }}</span>
                    </template>
                </el-table-column>
                <el-table-column :label="$t('common.paramTable.options')">
                    <template #default="scope">
                        <el-link :href="scope.row.options" target="_blank" type="primary"
                            v-if="scope.row.optionsType == 'link'">{{ scope.row.name }}</el-link>
                        <span v-else>{{ scope.row.options }}</span>
                    </template>
                </el-table-column>
                <el-table-column prop="type" :label="$t('common.paramTable.type')" />
                <el-table-column prop="default" :label="$t('common.paramTable.default')" />
            </el-table>
        </div>
    </div>
</template>

<script lang="ts">
export default {
    name: "dropZone"
}
</script>
<script lang="ts" setup>
import { ref } from 'vue';
const fileList = ref([])
const change = (file) => {
    fileList.value.push(file)
}
const tableData = ref([
    { 
        name: "accept_", 
        description: "compoents.dropZone.paramDescription.accept_", 
        options: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file#accept", 
        optionsType: 'link',
        type:"String",
        default:"image/*"
    },
    { 
        name: "customClass", 
        description: "compoents.dropZone.paramDescription.customClass", 
        options: "/", 
        type:"String",
        default:"/"
    },
    { 
        name: "width", 
        description: "compoents.dropZone.paramDescription.width", 
        options: "/", 
        type:"String,Number",
        default:"300"
    },
    { 
        name: "height", 
        description: "compoents.dropZone.paramDescription.height", 
        options: "/", 
        type:"String,Number",
        default:"300"
    },
    { 
        name: "uploadHandler", 
        description: "compoents.dropZone.paramDescription.uploadHandler", 
        options: "/", 
        type:"Function",
        default:"null"
    },
])
</script>

<style lang="scss" scoped>
.fileList {
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    background-color: white;
    border-radius: 6px;
    padding: 10px;
    height: 200px;
    overflow-y: auto;

    .fileItem {
        padding: 10px;
        border-radius: 4px;
        background-color: rgba(103, 194, 58, .4);
        color: #409EFF;
    }
}
</style>