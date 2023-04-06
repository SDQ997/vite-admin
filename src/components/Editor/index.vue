<template>
    <div class="Editor">
        <textarea id="mytextarea" v-model="myValue"></textarea>
    </div>
</template>

<script lang="ts">
export default {
    name: "Editor"
}
</script >
<script lang="ts" setup>
import { defineProps, watch, ref , computed , getCurrentInstance, onUnmounted } from "vue"
import tinymce from 'tinymce';
import "tinymce/themes/silver/theme"
import "tinymce/models/dom/model"
import "tinymce/icons/default/icons"
import "tinymce/plugins/image"
import "tinymce/plugins/preview"
import "tinymce/plugins/table"
import "tinymce/plugins/code"
import "tinymce/plugins/wordcount"
import "tinymce/plugins/media"

import { onMounted } from 'vue';
const emits = defineEmits(["update:modelValue"])
const props = defineProps({
    value: {
        type: String,
        default: () => {
            return ""
        },
    }
})
const myValue = ref(props.value || "")
let editor_ = ref<any>(null)
const { proxy }:any = getCurrentInstance()
const lang = computed(()=>{
    return proxy.$store.state.lang
})
onMounted(() => {
    tinymce.init({
        skin_url: "/src/static/tinymce/skins/ui/oxide",
        content_css: "/src/static/tinymce/skins/content/default/content.css",
        language_url: lang.value =='zh' ? "/src/static/tinymce/lang/zh-Hans.js" : "",
        language: lang.value =='zh' ? "zh-Hans" : '',
        height: 400,
        // branding: false,
        selector: '#mytextarea',
        toolbar: "undo redo | fontselect fontsizeselect bold italic table | forecolor backcol | media image | preview",
        menubar: "edit insert view format table media",
        plugins: "image preview table media wordcount",
        images_upload_handler:(blobInfo, progress)=>{
            return new Promise((resolve,reject)=>{
                let file = blobInfo.blob()
                // 
                resolve("data:image/jpg;base64,"+blobInfo.base64())
            })
        },
        setup: (editor) => {
            editor_ = editor
            editor_.on('init', (e) => {
                console.log('init')
            });
        },
        init_instance_callback: (editor) => {
            editor_ = editor
            editor_.on('input', (e) => {
                var content = tinymce.activeEditor.getContent();
                emits("update:modelValue", content)
            });
            editor_.on('ExecCommand', (e) => {
                var content = tinymce.activeEditor.getContent();
                emits("update:modelValue", content)
            })
            editor_.on('paste', (e) => {
                var content = tinymce.activeEditor.getContent();
                emits("update:modelValue", content)
            })
        }

    })
})
onUnmounted(()=>{
    editor_.destroy()
})
watch(
    () => props.value,
    () => {
        editor_.setContent(props.value)
        // emits("getContent", myValue.value)
    }
)
</script>

<style lang="scss" scoped></style>