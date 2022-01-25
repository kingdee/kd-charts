export default {
  xAxis: {
    type: 'category',
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
  },
  yAxis: {
    type: 'value',
    name: '单据消息订阅',
  },
  series: [
    {
      data: [120, 200, 150, 80, 70, 110, 130],
      type: 'bar', // echarts 图表类型， 必选
      name: '生活费',
    },
  ],
  tooltip: {
    show: true, // 是否显示tooltip， 非必选
  },
};
