export function echartTEMP(value){
    let arr = [];
    arr = value;
    console.log(value);
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
                bGMvaW1ndmlldzJfOV8xNjIzOTExOTk1NTA2NDA4NF80MV9bMF13zg9eAAAAAElFTkSuQmCCrect`;
    arr.forEach((child, index) => {
        child.eName = `name${index}`;
        child.randomId = `id${index}`;
        child.option = {
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
            grid: {
                left: 95,    //组件距离容器的距离
                top: 70,
                bottom: 90
            }
        }
        let yarr  = [];
            child.value.y.forEach(item => {
                yarr.push({
                    name: item.cutlineName,
                    type: 'bar',
                    symbol: item.showNew ? 'emptyCircle' : 'none',    //是否在折线上的显示折点
                    // label: {    //是否显示最新值
                    //     show: item.showNew ? true : false,
                    //     position: 'right',
                    // },
                    stack: '堆叠',
                    lineStyle:{
                        width: 1.5,
                        color: item.color,
                    },
                    data: item.values,
                })
            })
            child.option.xAxis.data = child.value.x.values;
            child.option.series = yarr;
        })
        console.log(arr)
        return arr
    // let option = 
    
    
    // option.xAxis.data = this.value.x.values;
    // option.series = yarr;
}


export function random(){
    var date = new Date();
    console.log(date.getTime())
    return date.getTime();
}