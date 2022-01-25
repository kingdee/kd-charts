# 主题下载

<h2 id="浅色主题">浅色主题</h2>
<div class="gallery-item-box" style="grid-template-columns: repeat(4,25%)" >
  
  <a href="https://kui.kingdee.com/assets/other/theme/echarts-theme-default.js">
    <img src="/charts/主题/常规色板.png" height="257px" />
    <p style="color: #293c55;margin: 0; margin-top: 12px;">常规色板</p>
  </a>
  <a href="https://kui.kingdee.com/assets/other/theme/echarts-theme-red.js">
    <img src="/charts/主题/红火夏日.png" height="257px" />
    <p style="color: #293c55;margin: 0; margin-top: 12px;">红火夏日</p>
  </a>
  <a href="https://kui.kingdee.com/assets/other/theme/echarts-theme-natural.js">
    <img src="/charts/主题/自然舒适.png" height="257px" />
    <p style="color: #293c55;margin: 0; margin-top: 12px;">自然舒适</p>
  </a>
  <a href="https://kui.kingdee.com/assets/other/theme/echarts-theme-science.js">
    <img src="/charts/主题/科技色板.png" height="257px" />
    <p style="color: #293c55;margin: 0; margin-top: 12px;">科技色板</p>
  </a>
  </div>

<h2 id="深色主题">深色主题</h2>
<div class="gallery-item-box" style="grid-template-columns: repeat(4,25%)">
  <a href="https://kui.kingdee.com/assets/other/theme/echarts-theme-default-dark.js">
    <img src="/charts/主题/常规色板_dark.png" height="313px" />
    <p style="color: #293c55;margin: 0; margin-top: 12px;">常规色板</p>
  </a>
  <a href="https://kui.kingdee.com/assets/other/theme/echarts-theme-red-dark.js">
    <img src="/charts/主题/红火夏日_dark.png" height="313px" />
    <p style="color: #293c55;margin: 0; margin-top: 12px;">红火夏日</p>
  </a>
  <a href="https://kui.kingdee.com/assets/other/theme/echarts-theme-natural-dark.js">
    <img src="/charts/主题/自然舒适_dark.png" height="313px" />
    <p style="color: #293c55;margin: 0; margin-top: 12px;">自然舒适</p>
  </a>
  <a href="https://kui.kingdee.com/assets/other/theme/echarts-theme-science-dark.js">
    <img src="/charts/主题/科技色板_dark.png" height="313px" />
    <p style="color: #293c55;margin: 0; margin-top: 12px;">科技色板</p>
  </a>

  </div>

## 主题使用示例

```jsx | pure

<!-- 引入 defaultTheme 主题 -->
// import defaultTheme from '@kdcloudjs/kd-charts/theme/echarts-theme-default.js'


//注册主题
echarts.registerTheme('defaultTheme', defaultTheme);


// 第二个参数可以指定前面引入的主题
var chart = echarts.init(document.getElementById('main'), 'defaultTheme');
chart.setOption({
    ...
});

```

## 配置项说明

```jsx | pure
export default {
  //调色盘颜色列表。如果系列没有设置颜色，则会依次循环从该列表中取颜色作为系列颜色。
  color: [
    '#40a9ff',
    '#45dad1',
    '#73d13d',
    '#ffc53d',
    '#ffa940',
    '#f57582',
    '#9f69e2',
    '#6682f5',
    '#f273b5',
  ],
  //关系图
  graph: {
    color: [
      '#40a9ff',
      '#45dad1',
      '#73d13d',
      '#ffc53d',
      '#ffa940',
      '#f57582',
      '#9f69e2',
      '#6682f5',
      '#f273b5',
    ],
  },
  //热力
  visualMap: {
    color: ['#40a9ff'],
    inRange: {
      //颜色的明暗度
      colorLightness: [0.9, 0.15],
      color: ['#40a9ff'],
    },
  },
  //地图
  geo: {
    itemStyle: {
      normal: {
        areaColor: 'rgba(218,218,218)', //地图区域的颜色
        borderColor: '#fff', //图形的描边颜色
        borderWidth: 1,
      },
      emphasis: {
        //高亮状态下的
        areaColor: '#ffc53d',
        opacity: 1,
      },
    },
    label: {
      //文本标签
      normal: {
        color: '#fff',
      },
      emphasis: {
        color: '#fff',
      },
    },
  },

  //仪表盘
  gauge: {
    axisLine: {
      //线相关设置
      lineStyle: {
        color: [
          [0.1, '#40A9FF'], //语义颜色值：优秀
          [0.5, '#26C9C3'],
          [0.9, '#FFC53D'],
          [1, '#F57582'],
        ],
        width: 15,
      },
    },
    //刻度样式
    axisTick: {
      splitNumber: 1, //分割段数
      length: 15,
      lineStyle: {
        color: '#D9D9D9',
        width: 2,
      },
    },
    //刻度标签
    axisLabel: {
      show: false,
    },
    //分隔线
    splitLine: {
      length: '5%',
      lineStyle: {
        color: '#D9D9D9',
      },
    },
    //展示当前进度
    progress: {
      width: 15,
    },
    title: {
      //标题相对于仪表盘中心的偏移位置
      offsetCenter: [0, '27%'],
      color: '#666666',
      fontWeight: 'bold',
    },
    detail: {
      //详情相对于仪表盘中心的偏移位置
      offsetCenter: [0, '50%'],
      color: '#40a9ff',
      fontWeight: 'normal',
    },
    itemStyle: {
      color: '#40a9ff',
    },
    pointer: {
      itemStyle: {
        color: '#40a9ff',
      },
    },
  },
  backgroundColor: '#333', //背景色，默认无背景。
  textStyle: {}, //全局的字体样式。
  title: {
    textStyle: {
      color: 'rgba(33,33,33,1)',
      fontSize: 14,
      lineHeight: 24,
    },
    subtextStyle: {
      //副标题
      color: '#6E7079',
    },
  },
  //图例图形
  legend: {
    textStyle: {
      color: '#666666',
    },
    icon: 'rect', //图例项的 icon
    itemWidth: 10, //图例项的 icon。
    itemHeight: 10,
    itemStyle: {
      borderWidth: 0,
    },
  },
  grid: {
    containLabel: true, //grid 区域是否包含坐标轴的刻度标签。
    bottom: '3%',
  },
  tooltip: {
    //提示框组件
    trigger: 'axis',
    confine: true, //将 tooltip 框限制在图表的区域内
    axisPointer: {
      type: 'shadow', //指示器类型。
      label: {
        //文本标签。
        show: false,
      },
      lineStyle: {
        //线
        color: 'rgba(204,204,204,1)',
        width: 1,
      },
      crossStyle: {
        //线
        color: 'rgba(204,204,204,1)',
        width: 1,
      },
      shadowStyle: {
        //图形阴影
        color: 'rgba(0, 0, 0, 0.05)',
      },
    },
    show: true,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    textStyle: {
      align: 'left',
      fontSize: 14,
      lineHeight: 18,
      color: '#ffffff',
    },
    borderWidth: 0,
    borderColor: '#3A8DB7',
    padding: 8,
  },
  //条形图
  bar: {
    itemStyle: {
      barBorderWidth: 0,
      barBorderColor: '#ccc',
    },
    tooltip: {},
  },
  //折线图
  line: {
    symbolSize: 2,
    itemStyle: {
      borderWidth: 2,
    },
  },
  //面积图
  areaStyle: {
    opacity: 0.3,
  },
  //扇形图
  pie: {
    label: {
      show: true,
      color: '#212121',
      bleedMargin: 5,
    },
    labelLine: {
      length: '2%',
      length2: '3%',
    },
    labelLayout: {},
    itemStyle: {
      borderColor: '#fff',
      borderWidth: 1,
    },
    emphasis: {},
  },
  //雷达图
  radar: {
    symbolSize: 1, //轴线两边的箭头的大小
    radius: '60%', //外半径
    areaStyle: {
      opacity: 0.3,
    },
    splitArea: {
      areaStyle: {
        color: ['transparent'],
      },
    },
    lineStyle: {
      width: 2,
    },
  },
  //散点图
  scatter: {
    itemStyle: {
      opacity: 0.7,
    },
  },
  //漏斗图
  funnel: {
    color: [
      '#40a9ff',
      '#45dad1',
      '#73d13d',
      '#ffc53d',
      '#ffa940',
      '#f57582',
      '#9f69e2',
      '#6682f5',
      '#f273b5',
    ],
    itemStyle: {
      borderWidth: 0,
    },
    label: {
      show: false,
    },
    emphasis: {
      label: {
        show: false,
      },
    },
  },
  //地图
  map: {
    label: {
      normal: {
        textStyle: {
          color: '#C1232B',
        },
      },
      emphasis: {
        textStyle: {
          color: 'rgb(100,0,0)',
        },
      },
    },
    itemStyle: {
      normal: {
        areaColor: '#ddd',
        borderColor: '#eee',
      },
      emphasis: {
        areaColor: '#fe994e',
      },
    },
  },
  //时间轴
  timeAxis: {
    axisLine: {
      show: true,
      lineStyle: {
        color: '#666666',
      },
    },
    axisTick: {
      alignWithLabel: true,
      lineStyle: {
        color: '#D9D9D9',
      },
    },
    axisLabel: {
      textStyle: {
        color: '#666666',
      },
    },
    splitLine: {
      lineStyle: {
        type: 'dashed',
        color: '#D9D9D9',
      },
    },
    splitArea: {
      areaStyle: {
        color: '#666666',
      },
    },
  },
  //对数轴
  logAxis: {
    axisLine: {
      show: true,
      lineStyle: {
        color: '#666666',
      },
    },
    axisTick: {
      alignWithLabel: true,
      lineStyle: {
        color: '#D9D9D9',
      },
    },
    axisLabel: {
      textStyle: {
        color: '#666666',
      },
    },
    splitLine: {
      lineStyle: {
        type: 'dashed',
        color: '#D9D9D9',
      },
    },
    splitArea: {
      areaStyle: {
        color: '#666666',
      },
    },
  },
  //类目轴
  categoryAxis: {
    axisLine: {
      //坐标轴轴线
      show: true,
      lineStyle: {
        //坐标轴线的颜色。
        color: '#B2B2B2',
      },
    },
    axisTick: {
      //坐标轴刻度
      alignWithLabel: true, //刻度线和标签对齐
      lineStyle: {
        //坐标轴刻度的颜色。
        color: '#B2B2B2',
      },
    },
    axisLabel: {
      //刻度标签
      textStyle: {
        color: '#666666', //文字的颜色
      },
    },
    splitLine: {
      //分隔线
      lineStyle: {
        type: 'dashed', //线的类型
        color: '#D9D9D9',
      },
    },
    splitArea: {
      //分隔区域
      areaStyle: {
        color: '#666666', //分隔区域颜色
      },
    },
  },
  //数值轴
  valueAxis: {
    axisLine: {
      show: false,
    },
    axisTick: {
      alignWithLabel: true,
      lineStyle: {
        color: '#D9D9D9',
      },
    },
    axisLabel: {
      textStyle: {
        color: '#666666',
      },
    },
    splitLine: {
      lineStyle: {
        type: 'dashed',
        color: '#D9D9D9',
      },
    },
    splitArea: {
      areaStyle: {
        color: '#666666',
      },
    },
  },
};
```
