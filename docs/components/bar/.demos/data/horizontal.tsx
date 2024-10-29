export const DefaultOption = {
  tooltip: {}, // 是否显示tooltip， 非必选
  legend: {}, // 是否显示图例， 非必选
  xAxis: {
    type: 'value',
  },
  yAxis: {
    type: 'category',
    data: ['巴西', '印尼', '美国', '印度', '中国'],
  },
  series: [
    {
      name: '2012年',
      type: 'bar', // echarts 图表类型， 必选
      data: [193, 234, 310, 1215, 1341],
    },
  ],
};
