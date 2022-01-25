export const DefaultOption = {
  tooltip: {
    axisPointer: {
      type: 'cross', //坐标轴指示器设置为十字准星指示器
    },
  },
  legend: {}, // 设置显示图例，非必选
  xAxis: {
    type: 'category',
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
  },
  yAxis: {
    type: 'value',
  },
  series: [
    {
      name: 'Step Start',
      type: 'line', // echarts 图表类型， 必选
      step: 'start', // 设置是否为阶梯图，必选，设置成 'start', 'middle', 'end' 分别配置在当前点，当前点与下个点的中间点，下个点拐弯
      data: [120, 132, 101, 134, 90, 230, 210],
    },
    {
      name: 'Step Middle',
      type: 'line',
      step: 'middle',
      data: [220, 282, 201, 234, 290, 430, 410],
    },
    {
      name: 'Step End',
      type: 'line',
      step: 'end',
      data: [450, 432, 401, 454, 590, 530, 510],
    },
  ],
};
