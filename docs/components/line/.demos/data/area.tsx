export const DefaultOption = {
  xAxis: {
    type: 'category',
    boundaryGap: false,
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
  },
  yAxis: {
    type: 'value',
  },
  tooltip: {
    axisPointer: {
      type: 'cross', //坐标轴指示器设置为十字准星指示器
    },
  },
  series: [
    {
      data: [820, 932, 901, 934, 1290, 1330, 1320],
      type: 'line', // echarts 图表类型， 必选
      areaStyle: {}, // 设置后显示成区域面积图，必选
    },
  ],
};
