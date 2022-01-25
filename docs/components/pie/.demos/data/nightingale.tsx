export const DefaultOption = {
  legend: {}, // 是否显示图例， 非必选
  tooltip: {
    trigger: 'item', //设置tooltip触发类型为数据项图形
  },
  series: [
    {
      name: '面积模式',
      type: 'pie', // echarts 图表类型， 必选
      roseType: 'area', // 是否展示成南丁格尔图，必选
      clockwise: false, // 是否是顺时针排布，非必选
      startAngle: 135, // 起始角度，非必选
      radius: '50%',
      labelLine: {
        show: false,
      },
      label: {
        show: false,
      },
      data: [
        { value: 40, name: 'rose 1' },
        { value: 38, name: 'rose 2' },
        { value: 32, name: 'rose 3' },
        { value: 30, name: 'rose 4' },
      ],
    },
  ],
};
