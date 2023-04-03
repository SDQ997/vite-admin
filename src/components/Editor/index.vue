<template>
    <div class="Editor">
        <Editor_ v-model="myValue" :init="init" :disabled="disabled" :id="tinymceId"></Editor_>
    </div>
</template>

<script lang="ts">
export default {
    name: "Editor"
}
</script>
<script lang="ts" setup>
//在js中引入所需的主题和组件
import tinymce from 'tinymce/tinymce'
import 'tinymce/skins/content/default/content.css'
import Editor_ from '@tinymce/tinymce-vue'
import 'tinymce/themes/silver'
import 'tinymce/themes/silver/theme'
import 'tinymce/icons/default'; //引入编辑器图标icon，不引入则不显示对应图标
import 'tinymce/models/dom' // 这里是个坑 一定要引入


//在TinyMce.vue中接着引入相关插件
import "tinymce/icons/default/icons"
// import "tinymce/plugins/image" // 插入上传图片插件
// import "tinymce/plugins/media" // 插入视频插件
import "tinymce/plugins/table" // 插入表格插件
import "tinymce/plugins/lists" // 列表插件
import "tinymce/plugins/wordcount" // 字数统计插件
import "tinymce/plugins/code" // 源码

import { reactive, ref } from "vue"
import { onMounted, defineEmits, watch } from "@vue/runtime-core"
import { getAssetsFile } from "@/utils/common.ts"
// import { updateImg } from '@/api/order/order'
const emits = defineEmits(["getContent"])
const props = defineProps({
    value: {
        type: String,
        default: () => {
            return ""
        },
    },
    baseUrl: {
        type: String,
        default: "",
    },
    disabled: {
        type: Boolean,
        default: false,
    },
    plugins: {
        type: [String, Array],
        default: "lists  table",
    },//必填
    toolbar: {
        type: [String, Array],
        default:
            "codesample bold italic underline alignleft aligncenter alignright alignjustify | undo redo | formatselect | fontselect | fontsizeselect | forecolor backcolor | bullist numlist outdent indent | lists link table code | removeformat ",
    },//必填
})
const myValue = ref(props.value)
const tinymceId = ref("vue-tinymce-" + +new Date() + ((Math.random() * 1000).toFixed(0) + ""))
const zhCN = getAssetsFile("/src/static/tinymce/lang/zh-CN.js")
const skin_url = getAssetsFile("/src/static/tinymce/skins/ui/oxide")
const content_css = getAssetsFile("/src/static/tinymce/skins/content/default/content.css")
//定义一个对象 init初始化
const init = reactive({
    selector: '#' + tinymceId.value, //富文本编辑器的id,
    language_url:zhCN,
    skin_url: skin_url, // skin路径，具体路径看自己的项目
    height: 400, //编辑器高度
    branding: false, //是否禁用“Powered by TinyMCE”
    menubar: true, //顶部菜单栏显示
    image_dimensions: false, //去除宽高属性
    plugins: props.plugins,  //这里的数据是在props里面就定义好了的
    toolbar: props.toolbar, //这里的数据是在props里面就定义好了的
    font_formats: 'Arial=arial,helvetica,sans-serif; 宋体=SimSun; 微软雅黑=Microsoft Yahei; Impact=impact,chicago;', //字体
    fontsize_formats: '11px 12px 14px 16px 18px 24px 36px 48px 64px 72px', //文字大小
    // paste_convert_word_fake_lists: false, // 插入word文档需要该属性
    paste_webkit_styles: "all",
    paste_merge_formats: true,
    nonbreaking_force_tab: false,
    paste_auto_cleanup_on_paste: false,
    file_picker_types: 'file',
    content_css: content_css, //以css文件方式自定义可编辑区域的css样式，css文件需自己创建并引入
    // content_css: '/public/tinymce/skins/content/default/content.css', //以css文件方式自定义可编辑区域的css样式，css文件需自己创建并引入
    //图片上传
    images_upload_handler: (blobInfo, progress) => new Promise((resolve, reject) => {


    }),

    // 文件上传
    file_picker_callback: (callback, value, meta) => {

    }

})
watch(
    () => props.value,
    () => {
        myValue.value = props.value
        emits("getContent", myValue.value)
    }
)
//监听富文本中的数据变化
watch(
    () => myValue.value,
    () => {
        emits("getContent", myValue.value)
    }
)
//在onMounted中初始化编辑器
onMounted(() => {
    tinymce.init({})
})
</script>

<style lang="scss" scoped>
.Editor {
}
</style>