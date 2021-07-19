<template>
  <div>
    <div id="ech2" style="width:500px;height:400px"></div>
  </div>
</template>

<script>
import * as echarts from 'echarts';
export default {
  name: 'echart2',
  data(){
    return{

    }
  },
  mounted(){
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById('ech2'));
    // 绘制图表
    myChart.setOption({
      title: {
        text: 'ECharts图表'
      },
      legend: {    //图例组件，可以通过点击图例控制哪些系列不显示
        show: true,
        top: 30
      },
      tooltip: {    //提示框
        trigger: 'axis',
        axisPointer: {
          type : 'cross',   //十字准星指示器
          label: {    //坐标指示器的文本标签
            color: 'red'
          },
          crossStyle: {
            color: '#111'
          }
        },
        textStyle: {    //提示框浮层的文本样式
          color:'black'
        }
      },
      xAxis: {
        name: 'X轴',
        data: ['1月', '3月', '5月', '7月', '9月', '11月'],
        nameTextStyle: {    //坐标名称相关设置
          color: '#333',     //坐标名称的颜色
          fontWeight: 500,
          fontSize: 14,
          align: 'left',
          // lineHeight: 60    //坐标名称与轴线之间的距离
        },
        axisLabel: {    //坐标轴刻度标签相关设置
          show: true,
          margin: 8,    //刻度标签与轴线之间的距离
          color: '#111',
          rotate: 90
        },
      },
      yAxis: {
        // type: 'value',
        name: '销量',    //坐标名称
        // data: [5, 20, 36, 10, 10, 20],    //Y轴的data就是y轴的刻度
        nameTextStyle: {    //坐标名称相关设置
          color: '#333',     //坐标名称的颜色
          fontWeight: 500,
          fontSize: 14,
          align: 'left',
          // lineHeight: 60    //坐标名称与轴线之间的距离
        },
        nameRotate: 90,    //坐标名称旋转90度，数据类型是number
        position: 'left',    //Y轴的位置（左、右）
        nameLocation: 'center',    //坐标名称的位置（上、中、下）
        nameGap: 70,    //坐标名称与轴线之间的距离

        axisLine: {    //坐标轴线相关设置
          show: true,
          lineStyle: {
            color: 'rgba(128, 128, 128, 0.5)',    //坐标轴线的颜色
            type: 'solid',    //坐标轴线的类型
            width: 3,
          }
        },

        axisTick: {    //坐标轴刻度相关设置
          show: true,
          inside: false,
          length: 5,
        },

        axisLabel: {    //坐标轴刻度标签相关设置
          show: true,
          margin: 8,    //刻度标签与轴线之间的距离
          formatter:'{value}G',    //刻度标签的内容格式，使用字符串模板，模板变量为刻度默认标签 {value}
          color: '#111'
        },

        splitLine: {    //坐标轴在grid区域中的分割线
          show: true,
          interval: 2,
          lineStyle: {
            // color: '#ccc',
            color: ['#ccc','#ddd']
          }
        },
      },
      dataZoom: [    //缩放组件
        {
          type: 'slider',    //滑动条型区域缩放
          backgroundColor: '#ececec',    //组件的背景颜色
          dataBackground: {    //数据阴影样式
            lineStyle: {
              color: "red",
            },
            areaStyle: {
              color: 'pink'
            }
          },
          selectedDataBackground: {    //选中部分数据阴影样式
            lineStyle: {
              color: "blue",
            },
            areaStyle: {
              color:'skyblue'
            }
          },
          bottom: 5
        }
      ],
      series: [{
        name: '销量',    //用于tooltip的展示
        type: 'bar',
        data: [500000, 200000, 360000, 100000, 100000, 200000],    //当数值过大，刻度显示不全的时候，可以通过grid来调整组件距离容器的距离
      }],
      grid: {
        left: 95,    //组件距离容器的距离
        top: 70
      }
    })
  },
  methods: {

  }
}
</script>

<style >
#ech2{
  margin: 100px;
}
</style>