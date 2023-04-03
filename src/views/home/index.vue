<template>
  <div class="home elMainPage">
    <el-alert type="success" :closable="false">
      <div class="respect">
        <span name="title">{{ $t("common.respect") }}</span>
        <el-link type="primary" href="https://panjiachen.github.io/vue-element-admin/#/" target="_blank">
          <el-icon size="16">
            <Refrigerator />
          </el-icon>
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
    <div class="charts1">
      <datav-box :options="options1"></datav-box>
    </div>
    <div class="chartsList">
      <div class="chartsListItem">
        <datav-box :options="options2"></datav-box>
      </div>
      <div class="chartsListItem">
        <datav-box :options="options3"></datav-box>
      </div>
      <div class="chartsListItem">
        <datav-box :options="options4"></datav-box>
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
const options1 = {
  tooltip: {
    trigger: 'axis'
  },
  legend: {
    data: ['data1', 'data2']
  },
  xAxis: {
    type: 'category',
    axisTick: { show: false },
    axisLine: { show: false },
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  },
  yAxis: {
    type: 'value'
  },
  series: [
    {
      name: 'data1',
      type: 'line',
      stack: 'Total',
      data: [120, 132, 101, 134, 90, 230, 210]
    },
    {
      name: 'data2',
      type: 'line',
      stack: 'Total',
      data: [220, 182, 191, 234, 290, 330, 310]
    }
  ]
}
const options2 = {
  tooltip: {
    trigger: 'axis'
  },
  radar: [
    {
      indicator: [
        { text: 'skill1', max: 100 },
        { text: 'skill2', max: 100 },
        { text: 'skill3', max: 100 },
        { text: 'skill4', max: 100 },
        { text: 'skill5', max: 100 }
      ]
    }
  ],
  series: [
    {
      type: 'radar',
      tooltip: {
        trigger: 'item'
      },
      areaStyle: {},
      data: [
        {
          value: [60, 73, 85, 40,90],
          name: 'A Software'
        }
      ]
    }
  ]
}
const options3 = {
  series: [
    {
      name: 'Nightingale Chart',
      type: 'pie',
      center: ['50%', '50%'],
      roseType: 'area',
      itemStyle: {
        borderRadius: 0
      },
      data: [
        { value: 40, name: 'rose 1' },
        { value: 38, name: 'rose 2' },
        { value: 32, name: 'rose 3' },
        { value: 30, name: 'rose 4' },
        { value: 28, name: 'rose 5' },
        { value: 26, name: 'rose 6' },
        { value: 22, name: 'rose 7' },
        { value: 18, name: 'rose 8' }
      ]
    }
  ]
}
const options4 = {
  xAxis: {
    type: 'category',
    axisTick:{show:false},
    axisLine:{show:false},
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  },
  yAxis: {
    type: 'value'
  },
  series: [
    {
      data: [120, 200, 150, 80, 70, 110, 130],
      type: 'bar',
      showBackground: true,
      backgroundStyle: {
        color: 'rgba(180, 180, 180, 0.2)'
      }
    }
  ]
}
</script>


<style lang="scss" scoped>
.home {
  width: 100%;
  height: 100;

  .respect {
    display: flex;
    align-items: center;
    font-size: 14px;
    gap: 10px;
  }

  .statistics {
    width: 100%;
    margin-top: 20px;
    display: flex;
    align-items: center;
    gap: 20px;

    .statisticsItem {
      width: calc((100% - 60px) / 4);
      height: 100px;
      background-color: white;
      display: flex;
      justify-content: space-between;
      align-items: center;

      .icon {
        padding: 0 10px;
        display: flex;
        align-items: center;
        justify-content: center;

        img {
          width: 80px;
        }
      }

      .info {
        padding: 0 10px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-end;

        .title {
          font-size: 20px;
          color: #909399;
        }

        .count {
          font-size: 20px;
          color: #6e6e6f;
        }
      }
    }
  }

  .charts1 {
    width: 100%;
    height: 400px;
    background-color: white;
    margin-top: 20px;
  }
  .chartsList{
    width: 100%;
    display: flex;
    align-items: center;
    margin-top: 20px;
    gap:20px;
    .chartsListItem{
      width: calc(( 100% - 40px ) / 3);
      height: 400px;
      background-color: white;
    }
  }
}

@media screen and (min-width: 0) and (max-width:1200px) {
  .statistics {
    flex-wrap: wrap !important;

    .statisticsItem {
      width: calc((100% - 20px) / 2) !important;
    }
  }
  .chartsList{
    flex-wrap: wrap;
    .chartsListItem{
      width: 100% !important;
    }
  }
}</style>