<template>
  <div>
    <div id="ech4" style="width:500px;height:400px"></div>
  </div>
</template>

<script>
import * as echarts from 'echarts';
import { color } from 'echarts';
export default {
  name: 'echart4',
  data(){
    return{
      value:{
        "leftUnit":null,
        "titleShow":true,
        "lowList":null,
        "xshowType":0,
        "unit":"亿",
        "chartName":"信贷的季节性",
        "chartTitle":"<b>图1</b><b>：</b>1<b></b><b>月信贷增量表现情况</b>",
        "chartType":4,
        "skipType":-1,
        "sourceShow":true,
        "x":{
            "values":[
                "01",
                "02",
                "03",
                "04",
                "05",
                "06",
                "07",
                "08",
                "09",
                "10",
                "11",
                "12"
            ]
        },
        "rightUnit":null,
        "y":[
            {
                "stack":0,
                "color":"#B2B2B2",
                "pos":null,
                "lineType":1,
                "values":[
                    "14700",
                    "10200",
                    "11800",
                    "7079",
                    "9008",
                    "12806",
                    "14800",
                    "8096",
                    "10500",
                    "5136",
                    "7089",
                    "5978"
                ],
                "cutlineName":"2015",
                "id":8,
                "showNew":false,
                "formatList":null,
                "cutlineShow":0
            },
            {
                "stack":0,
                "color":"#B2B2B2",
                "pos":null,
                "lineType":1,
                "values":[
                    "25100",
                    "7266",
                    "13700",
                    "5556",
                    "9855",
                    "13800",
                    "4636",
                    "9487",
                    "12200",
                    "6513",
                    "7946",
                    "10400"
                ],
                "cutlineName":"2016",
                "id":8,
                "showNew":false,
                "formatList":null,
                "cutlineShow":0
            },
            {
                "stack":0,
                "color":"#B2B2B2",
                "pos":null,
                "lineType":1,
                "values":[
                    "20300",
                    "11700",
                    "10200",
                    "11000",
                    "11100",
                    "15400",
                    "8255",
                    "10900",
                    "12700",
                    "6632",
                    "11200",
                    "5844"
                ],
                "cutlineName":"2017",
                "id":8,
                "showNew":false,
                "formatList":null,
                "cutlineShow":0
            },
            {
                "stack":0,
                "color":"#B2B2B2",
                "pos":null,
                "lineType":1,
                "values":[
                    "29000",
                    "8393",
                    "11200",
                    "11800",
                    "11500",
                    "18400",
                    "14500",
                    "12800",
                    "13800",
                    "6970",
                    "12500",
                    "10800"
                ],
                "cutlineName":"2018",
                "id":8,
                "showNew":false,
                "formatList":null,
                "cutlineShow":0
            },
            {
                "stack":0,
                "color":"#B2B2B2",
                "pos":null,
                "lineType":1,
                "values":[
                    "32300",
                    "8858",
                    "16900",
                    "10200",
                    "11800",
                    "16600",
                    "10600",
                    "12100",
                    "16900",
                    "6613",
                    "13900",
                    "11400"
                ],
                "cutlineName":"2019",
                "id":8,
                "showNew":false,
                "formatList":null,
                "cutlineShow":0
            },
            {
                "stack":0,
                "color":"#1362B0",
                "pos":null,
                "lineType":1,
                "values":[
                    "33400",
                    "9057",
                    "28500",
                    "17000",
                    "14800",
                    "18100",
                    "9927",
                    "12800",
                    "19000",
                    "6898",
                    "14300",
                    "12600"
                ],
                "cutlineName":"2020",
                "id":8,
                "showNew":false,
                "formatList":null,
                "cutlineShow":1
            },
            {
                "stack":0,
                "color":"#A60922",
                "pos":null,
                "lineType":1,
                "values":[
                    "35800"
                ],
                "cutlineName":"2021",
                "id":8,
                "showNew":true,
                "formatList":null,
                "cutlineShow":1
            }
        ],
        "chartSource":"资料来源：<font face=\"Arial\">WIND</font>、招商银行研究院"
      }
    }
  },
  mounted(){
    // 基于准备好的dom，初始化echarts实例
    this.draw()
  },
  methods: {
    draw(){
      var myChart = echarts.init(document.getElementById('ech4'));
      const line = `image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAQAAAAAYLlVAAAABGdBTUEAALGPC/xhBQAAACBjSFJN
              AAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QA/4ePzL8AAAAHdElN
              RQflBh4CESGp7xK9AAAAZUlEQVRo3u3XIRKAUAgFwI/jGT2kHhKzGExIWRqUtzNQiFyztQ3nAwAA
              AAAAAAAAAAAAAMwD9jqIszcwj5JXv+Nofpcznv34CgBeR7iufwHdN/dZ4ysAAAAAAAAAAAAAAAAA
              GAfch/UIKt0nrOsAAAAldEVYdGRhdGU6Y3JlYXRlADIwMjEtMDYtMjlUMTg6MTc6MzMrMDg6MDAR
              olQLAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDIxLTA2LTI5VDE4OjE3OjMzKzA4OjAwYP/stwAAACB0
              RVh0c29mdHdhcmUAaHR0cHM6Ly9pbWFnZW1hZ2ljay5vcme8zx2dAAAAGHRFWHRUaHVtYjo6RG9j
              dW1lbnQ6OlBhZ2VzADGn/7svAAAAF3RFWHRUaHVtYjo6SW1hZ2U6OkhlaWdodAA2NLzgqYQAAAAW
              dEVYdFRodW1iOjpJbWFnZTo6V2lkdGgANjRET2kJAAAAGXRFWHRUaHVtYjo6TWltZXR5cGUAaW1h
              Z2UvcG5nP7JWTgAAABd0RVh0VGh1bWI6Ok1UaW1lADE2MjQ5NjE4NTNO+2tHAAAAEXRFWHRUaHVt
              Yjo6U2l6ZQAyNjRCQuYPWmQAAABGdEVYdFRodW1iOjpVUkkAZmlsZTovLy9hcHAvdG1wL2ltYWdl
              bGMvaW1ndmlldzJfOV8xNjIzOTExOTk1NTA2NDA4NF80MV9bMF13zg9eAAAAAElFTkSuQmCCrect`
      let option = {
        title: {
          text: 'ECharts图表'
        },
        legend: {    //图例组件，可以通过点击图例控制哪些系列不显示
          show: true,
          top: 30,
          //控制某些系列的展示
          // selected: {
          //   '2015': false,
          //   '2016': false,
          //   '2017': false,
          //   '2018': false,
          // },
          //控制某些系列的legend默认不显示，注意：data里面对象的name值必须和要展示的系列名一样
          data:[{
            name: '2019',
            icon: line,
          },{
            name: '2020',
            icon: line,
          },{
            name: '2021',
            icon: 'emptycircle',
          },]
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
        // series: [{
        //   name: '销量1',    //用于tooltip的展示
        //   type: 'bar',
        //   stack:'one',    //数据堆叠   stack的值是字符串类型就可以，只要需要堆叠的系列stack值保持一样就可以。
        //   data: [-50000, 200000, 360000, 100000, 320000, 160000, 220000, 410000, 190000, 270000, 100000, 230000, 410000, 320000, 190000, 270000, -35000, 490000, 350000, 320000, 190000, 270000, 180000,],
        // },{
        //   name: '销量2',
        //   type: 'bar',
        //   stack:'one',
        //   data: [510000, 400000, 160000, 220000, 410000, 330000, -100000, 100000, 230000, 440000, -41000, 320000, 220000, 410000, 190000, 270000, 190000, 270000, 350000, 320000, 190000, 270000, 210000],
        // },{
        //   name: '销量3',
        //   type: 'bar',
        //   stack:'one',
        //   data: [450000, 560000, 330000, 470000, 220000, 350000, 320000, -190000, 270000, 180000, -29000, 330000, 330000, 100000, 100000, 230000, 440000, 410000, 320000, 220000, 450000, 390000, 280000],
        //   // barGap: '-100%',    //柱子重叠，如果前面的数据小于后面的数据，则前面的柱子会被完全覆盖。（例如本例中销量1的数据小于销量2的数据时，则销量1的柱子会被销量2的柱子完全覆盖）
        // }],
        grid: {
          left: 95,    //组件距离容器的距离
          top: 70,
          bottom: 90
        }
      }
      let yarr  = [];
      this.value.y.forEach(item => {
        yarr.push({
          name: item.cutlineName,
          type: 'line',
          symbol: item.showNew ? 'emptyCircle' : 'none',    //是否在折线上的显示折点
          label: {    //是否显示最新值
            show: item.showNew ? true : false,
            position: 'right',
          },
          lineStyle:{
            width: 1.5,
            color: item.color,
          },
          data: item.values,
        })
      })
      option.xAxis.data = this.value.x.values;
      option.series = yarr;
      // 绘制图表
      myChart.setOption(option)
    }
  }
}
</script>

<style >
#ech4{
  margin: 100px;
}
</style>