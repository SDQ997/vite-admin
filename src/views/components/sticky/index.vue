<template>
    <div class="sticky elMainPage">
        <el-affix :offset="95">
            <el-button type="primary">{{ $t("compoents.sticky.stickyButton") }}</el-button>
        </el-affix>
        <div class="placeholder" v-for="i in 25">{{ $t("compoents.sticky.placeholder") }}</div>
    </div>
</template>

<script lang="ts">
export default {
    name: "sticky"
}
</script>
<script lang="ts" setup>
import { ref } from 'vue';
</script>

<style lang="scss" scoped>
.placeholder{
    padding: 0 10px;
    height: 10%;
    display: flex;
    align-items: center;
    background-color: white;
    border-radius: 4px;
    margin-top: 10px;
    color: grey;
}
</style>