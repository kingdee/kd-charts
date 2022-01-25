export const DefaultOption = {
  tooltip: {}, // 是否显示tooltip， 非必选
  legend: {}, // 是否显示图例， 非必选
  xAxis: {
    type: 'value',
  },
  yAxis: {
    type: 'category',
    data: ['巴西', '印尼', '美国', '印度', '中国', '世界人口(万)'],
  },
  series: [
    {
      name: '2012年',
      type: 'bar', // echarts 图表类型， 必选
      data: [19325, 23438, 31000, 121594, 134141, 681807],
    },
  ],
};
