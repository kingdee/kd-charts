export const DefaultOption = {
  legend: {}, // 是否显示图例， 非必选
  tooltip: {
    trigger: 'item', // 设置tooltip触发类型为数据项图形
  },
  radar: {
    indicator: [
      // 指示器设置，必选
      { name: '销售', max: 6500 },
      { name: '管理', max: 16000 },
      { name: '信息技术', max: 30000 },
      { name: '客服', max: 38000 },
    ],
    startAngle: 45,
    shape: 'circle', // 雷达图绘制类型为圆形，必选
  },
  series: [
    {
      type: 'radar', // echarts 图表类型， 必选
      data: [
        {
          value: [4300, 10000, 28000, 35000, 50000, 19000],
          name: '预算分配',
        },
        {
          value: [5000, 14000, 28000, 31000, 42000, 21000],
          name: '实际开销',
        },
      ],
    },
  ],
};
