export const DefaultOption = {
  legend: {}, // 是否显示图例， 非必选
  xAxis: [
    {
      type: 'category',
      data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
    },
  ],
  yAxis: [
    {
      type: 'value',
    },
  ],
  series: [
    {
      name: '邮件营销',
      type: 'bar', // echarts 图表类型， 必选
      stack: '广告', //设置数据堆叠，必选
      emphasis: {
        focus: 'series',
      },
      data: [120, 132, 101, 134, 90, 230, 210],
    },
    {
      name: '联盟广告',
      type: 'bar',
      stack: '广告',
      emphasis: {
        focus: 'series',
      },
      data: [220, 182, 191, 234, 290, 330, 310],
    },
    {
      name: '视频广告',
      type: 'bar',
      stack: '广告',
      emphasis: {
        focus: 'series',
      },
      data: [150, 232, 201, 154, 190, 330, 410],
    },
  ],
  tooltip: {
    show: true, // 是否显示tooltip， 非必选
  },
};
