<template>
    <div class="home elMainPage">
      <el-alert type="success" :closable="false">
        <div class="respect">
          <span name="title">{{ $t("common.respect") }}</span>
          <el-link type="primary" href="https://panjiachen.github.io/vue-element-admin/#/" target="_blank">
            <el-icon size="16"><Refrigerator /></el-icon>
            {{ $t("common.gateway") }}
          </el-link>
        </div>
      </el-alert>
      <div class="statistics">
        <div class="statisticsItem">
          <div class="icon">
            <img src="@/assets/home/visitor.png" alt="">
          </div>
          <div class="info">
            <div class="title">{{ $t("home.visitor") }}</div>
            <div class="count">
              <el-statistic :value="268500" />
            </div>
          </div>
        </div>
        <div class="statisticsItem">
          <div class="icon">
            <img src="@/assets/home/message.png" alt="">
          </div>
          <div class="info">
            <div class="title">{{ $t("home.message") }}</div>
            <div class="count">
              <el-statistic :value="12312" />
            </div>
          </div>
        </div>
        <div class="statisticsItem">
          <div class="icon">
            <img src="@/assets/home/pay.png" alt="" style="width:60px">
          </div>
          <div class="info">
            <div class="title">{{ $t("home.pay") }}</div>
            <div class="count">
              <el-statistic :value="12312312" />
            </div>
          </div>
        </div>
        <div class="statisticsItem">
          <div class="icon">
            <img src="@/assets/home/order.png" alt="" style="width:60px;">
          </div>
          <div class="info">
            <div class="title">{{ $t("home.order") }}</div>
            <div class="count">
              <el-statistic :value="12219" />
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script lang="ts">
    export default {
      name: 'home',
    }
</script>
<script lang="ts" setup>
</script>
<style lang="scss">
</style>
<style lang="scss" scoped>
.home{
  width: 100%;
  height: 100;
  .respect{
    display: flex;
    align-items: center;
    font-size: 14px;
    gap:10px;
  }
  .statistics{
    width: 100%;
    margin-top: 20px;
    display: flex;
    align-items: center;
    gap:20px;
    .statisticsItem{
      width: calc(( 100% - 60px ) / 4);
      height: 100px;
      background-color: white;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .icon{
        padding: 0 10px;
        display: flex;
        align-items: center;
        justify-content: center;
        img{
          width: 80px;
        }
      }
      .info{
        padding: 0 10px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-end;
        .title{
          font-size: 20px;
          color: #909399;
        }
        .count{
          font-size: 20px;
          color: #6e6e6f;
        }
      }
    }
  }
}

@media screen and (min-width: 0) and (max-width:1200px) {
  .statistics{
    flex-wrap: wrap !important;
    .statisticsItem{
      width: calc(( 100% - 20px ) / 2) !important;
    }
  }
}
</style>