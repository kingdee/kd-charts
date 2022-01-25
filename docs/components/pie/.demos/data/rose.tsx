export const DefaultOption = {
  legend: {}, // 是否显示图例， 非必选
  tooltip: {
    trigger: 'item', // 设置tooltip触发类型为数据项图形
  },
  visualMap: {
    // 必选
    show: false,
    min: 0,
    max: 70,
  },
  series: [
    {
      name: '面积模式',
      type: 'pie', // echarts 图表类型， 必选
      roseType: 'area', // 是否展示成南丁格尔图，必选
      clockwise: false, // 是否是顺时针排布，非必选
      startAngle: 135, // 起始角度，非必选
      radius: '60%',
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
        { value: 28, name: 'rose 5' },
        { value: 26, name: 'rose 6' },
        { value: 22, name: 'rose 7' },
        { value: 18, name: 'rose 8' },
      ],
    },
  ],
};
