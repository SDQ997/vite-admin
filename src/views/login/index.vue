<template>
  <div class="login">
    <div class="title">
      <span>{{ $t("login.title") }}</span>
      <div class="langIcon">
        <lang size="small"></lang>
      </div>
    </div>
    <div class="form">
      <el-form :model="form" label-width="120px">
        <el-form-item :label="$t('login.account')">
          <el-input v-model="form.account" :placeholder="$t('common.pleaseInput')+$t('login.account')"/>
        </el-form-item>
        <el-form-item :label="$t('login.password')">
          <el-input v-model="form.password" :placeholder="$t('common.pleaseInput')+$t('login.password')"/>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" style="width:100%" @click="login">{{ $t('login.loginButton') }}</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref , getCurrentInstance } from "vue";
import { createToken } from "@/utils/token"
const { proxy }:any = getCurrentInstance()
const form = ref({
    account:"",
    password:""
})
const login = ()=>{
    if(!form.value.account){
        proxy.$message.warning(proxy.$t('common.pleaseInput')+proxy.$t('login.account'))
        return
    }
    if(!form.value.password){
        proxy.$message.warning(proxy.$t('common.pleaseInput')+proxy.$t('login.password'))
        return
    }
    let token = createToken()
    localStorage.setItem("token",token)
    proxy.$router.push("index")
}
</script>

<style lang="scss" scoped>
.login {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .title {
    font-size: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    width: 400px;
    .langIcon {
      position: absolute;
      right: 0;
      top: 10px;
    }
  }
  .form {
    width: 400px;
    margin-top: 20px;
  }
}
</style>