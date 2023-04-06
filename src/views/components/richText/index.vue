<template>
    <div class="richText elMainPage">
        <el-alert type="success" :closable="false">
            <div class="respect">
                <span name="title">{{ $t("compoents.richText.alert") }}</span>
                <el-link type="primary" href="https://www.tiny.cloud/docs/tinymce/6/" target="_blank">
                    <el-icon size="16">
                        <Refrigerator />
                    </el-icon>
                    {{ $t("common.gateway") }}
                </el-link>
            </div>
        </el-alert>
        <Editor v-model="content" style="margin-top:20px"></Editor>
        <div class="preview" v-html="content"></div>
    </div>
</template>

<script lang="ts">
export default {
    name: "richText"
}
</script>
<script lang="ts" setup>
import { ref } from 'vue';

const content = ref("")
</script>

<style lang="scss" scoped>
.preview {
    width: 100%;
    height: 400px;
}

.respect {
    display: flex;
    align-items: center;
    font-size: 14px;
    gap: 10px;
}
</style>