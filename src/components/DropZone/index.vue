<template>
    <div :class="['DropZone',customClass,dropState == 1 ? 'DropZoneCover':'']" :style="{'width':width,'height':height}" id="DropZone">
        <slot></slot>
        <div class="uploadButton" v-show="!isSlotDefault">
            <el-icon size="60"><Plus /></el-icon>
            <span>{{ $t("compoents.dropZone.dropText") }}</span>
        </div>
        <input type="file" :accept="accept_" id="fileInput" v-if="showInput" @change="changeFile">
    </div>
</template>

<script lang="ts">
export default {
    name: "DropZone"
}
</script>
<script lang="ts" setup>
import { ref , defineProps , getCurrentInstance , onMounted , useSlots } from 'vue';
const props = defineProps({
    customClass:{
        type:String,
        default:""
    },
    width:{
        type:[Number,String],
        default:300
    },
    height:{
        type:[Number,String],
        default:300
    },
    accept_:{
        type:String,
        default:"image/*"
    },
    uploadHandler:{
        type:Function,
        default:null
    }
})
const customClass = ref(props.customClass)
const width = ref(typeof props.width == "number" ? props.width+'px' : props.width)
const height = ref(typeof props.height == "number" ? props.height+'px' : props.height)
const isSlotDefault = ref(useSlots().default != undefined)
const showInput = ref(true)
const dropState = ref(0)
const emits = defineEmits(["change"])
const changeFile = (e)=>{
    const file = e.target.files[0]
    emits("change",file)
    upload(file)
    reSetInput()
}
const reSetInput = ()=>{
    showInput.value = false
    setTimeout(()=>{
        showInput.value = true
    },10)
}
const upload = (file)=>{
    if(props.uploadHandler != null){
        props.uploadHandler(file)
    }
}
onMounted(()=>{
    let dropZone = document.getElementById("DropZone")
    dropZone.addEventListener("dragenter",  (e)=> {
        e.preventDefault();
        e.stopPropagation();
        dropState.value = 1
    }, false);

    dropZone.addEventListener("dragover",  (e)=> {
        e.preventDefault();
        e.stopPropagation();
        dropState.value = 1
    }, false);

    dropZone.addEventListener("dragleave",  (e)=> {
        e.preventDefault();
        e.stopPropagation();
        dropState.value = 0
    }, false);
    dropZone.addEventListener("drop",  (e)=> {
        e.preventDefault();
        e.stopPropagation();
        dropState.value = 0
        // 处理拖拽文件的逻辑
        const files = e.dataTransfer.files
        if (!files.length) return
        emits_sendFile("change",files[0])
        upload(file)
    })
})
</script>

<style lang="scss" scoped>
.DropZone{
    border: 1px dashed rgb(176, 174, 174);
    border-radius: 2px;
    cursor: pointer;
    background-color: white;
    position: relative;
    display: inline-block;
    overflow: hidden;
    .uploadButton{
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap:10px;
        color: grey;
        pointer-events: none;
    }
    #fileInput{
        width: 100%;
        height:100%;
        position: absolute;
        opacity: 0;
        cursor: pointer;
        left: 0;
        top: 0;
    }
}
.DropZone:hover{
    border-color: #409EFF;
    background-color: rgba(64,158,255,.2);
}
.DropZoneCover{
    border-color: #409EFF;
    background-color: rgba(64,158,255,.2);
}
</style>