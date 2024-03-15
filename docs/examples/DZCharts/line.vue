<template>
    <div class="charts-panel" id="main"></div>
</template>
<script setup lang="ts">
import { ref,onMounted,getCurrentInstance } from 'vue'

const properties: any = getCurrentInstance()?.appContext.config.globalProperties;

const options = ref({
  xAxis: {
    type: 'category',
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  },
  yAxis: {
    type: 'value'
  },
  series: [
    {
      data: [150, 230, 224, 218, 135, 147, 260],
      type: 'line'
    }
  ]
});

onMounted(()=>{
  let chs = properties.$echarts.init(document.getElementById('main'));
  chs.setOption(options.value);
})
</script>
<style lang="scss" scoped>
  .charts-panel{
    width:100%;
    height: 300px;
  }
</style>