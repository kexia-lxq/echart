<template>
  <div>
    <div id="ech1" style="width:500px;height:400px"></div>
  </div>
</template>

<script>
import * as echarts from 'echarts';
export default {
  name: 'echart1',
  data(){
    return{

    }
  },
  //必须要在mounted时期画图表，因为dom必须先准备完成才可以画图表
  mounted(){
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById('ech1'));
    // 绘制图表
    myChart.setOption({
      title: {
        text: 'ECharts 入门示例'
      },
      tooltip: {},
      xAxis: {
        data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
        // data: ['衬衫', '羊毛', '雪纺', '裤子', '高跟', '袜子']
      },
      yAxis: {
      },
      series: [{
        name: '销量',
        type: 'bar',
        data: [5, 20, 36, 10, 10, 20]
      }]
    })
  },
  methods: {

  }
}
</script>

<style >
</style>