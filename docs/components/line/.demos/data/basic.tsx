export const DefaultOption = {
  legend: {}, // 是否显示图例， 非必选
  tooltip: {
    axisPointer: {
      type: 'cross', //坐标轴指示器设置为十字准星指示器
    },
  },
  xAxis: {
    type: 'category',
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
  },
  yAxis: {
    type: 'value',
  },
  series: [
    {
      data: [150, 230, 224, 218, 135, 147, 260],
      type: 'line', // echarts 图表类型， 必选
    },
  ],
};
