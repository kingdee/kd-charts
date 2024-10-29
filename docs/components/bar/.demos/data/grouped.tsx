export const DefaultOption = {
  title: {
    // text: '深圳月最低生活费组成（单位:元）',
  },
  legend: {}, // 是否显示图例， 非必选
  xAxis: {
    type: 'category',
    data: ['Mon', 'Tue', 'Wed', 'Thu'],
  },
  yAxis: {
    type: 'value',
  },
  series: [
    {
      data: [120, 200, 150, 30, 70, 110, 130],
      type: 'bar', // echarts 图表类型， 必选
      name: '邮件营销', //数据项名称，非必选
    },
    {
      data: [60, 100, 120, 60, 30, 150, 120],
      type: 'bar',
      name: '联盟广告',
    },
    {
      data: [110, 150, 130, 80, 70, 110, 230],
      type: 'bar',
      name: '视频广告',
    },
  ],
  tooltip: {
    show: true,
  },
};
