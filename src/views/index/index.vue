<template>
  <div class="index">
    <el-container class="elContainer">
      <el-aside
        class="elAside"
        :width="slideIsRetract ? 64 + 'px' : 200 + 'px'"
      >
      <slide></slide>
      </el-aside>
      <el-container>
        <el-header style="padding: 0">
          <div class="indexHeader">
            <div class="menu leftMenu">
              <div class="retractButton" @click="changeSlide">
                <el-icon v-show="!slideIsRetract" size="25"><Fold /></el-icon>
                <el-icon v-show="slideIsRetract" size="25"><Expand /></el-icon>
              </div>
            </div>
            <div class="menu rightMenu">
              <fullScreen></fullScreen>
              <lang size="small"></lang>
              <user></user>
            </div>
          </div>
        </el-header>
        <el-header style="padding: 0; height: 32px">
          <div class="indexHistory"></div>
        </el-header>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, getCurrentInstance, ref, computed } from "vue";
import user from "@/components/user/index.vue";
import lang from "@/components/lang/index.vue";
import fullScreen from "@/components/fullScreen/index.vue";
import slide from "@/components/slide/index.vue"

const { proxy }: any = getCurrentInstance();
const slideIsRetract = computed(() => {
  return proxy.$store.state.slideIsRetract;
});
const changeSlide = () => {
  proxy.$store.commit("changeState", {
    key: "slideIsRetract",
    value: !slideIsRetract.value,
  });
};
</script>

<style lang="scss" scoped>
.index {
  width: 100%;
  height: 100%;
  .elContainer {
    width: 100%;
    height: 100%;
    .elAside {
      transition: all 0.2s;
    }
    .indexHeader {
      width: 100%;
      height: 100%;
      box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
      display: flex;
      align-items: center;
      justify-content: space-between;
      .menu {
        height: 100%;
      }
      .leftMenu {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        .retractButton {
          width: 60px;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 4px;
          cursor: pointer;
        }
        .retractButton:hover {
          background-color: rgba(0, 21, 41, 0.05);
        }
      }
      .rightMenu {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        gap: 15px;
        padding-right: 10px;
      }
    }
    .indexHistory {
      width: 100%;
      height: 100%;
      box-shadow: 0 1px 4px rgba(0, 21, 41, 0.2);
    }
  }
}
</style>