<template>
    <div class="user">
        <el-dropdown @command="handleCommand">
            <div class="userIcon">
                <div class="icon">
                    <el-icon size="20" color="#E5EAF3"><User /></el-icon>
                </div>
                <el-icon size="12"><ArrowDown /></el-icon>
            </div>
            <template #dropdown>
            <el-dropdown-menu>
                <el-dropdown-item command="logout">
                    <span style="color:#F56C6C">{{ $t("common.logout") }}</span>
                </el-dropdown-item>
            </el-dropdown-menu>
            </template>
        </el-dropdown>
    </div>
</template>

<script lang="ts" setup>
import { logout } from "@/utils/common.ts"
const handleCommand = (e)=>{
    if(e == "logout"){
        logout()
    }
}
</script>

<style lang="scss" scoped>
.user{
    .userIcon{
        display: flex;
        align-items: center;
        gap:5px;
        cursor: pointer;
        outline: none;
        .icon{
            width: 30px;
            height: 30px;
            border-radius: 4px;
            background-color: #728093;
            display: flex;
            align-items: center;
            justify-content: center;
        }
    }
}
</style>