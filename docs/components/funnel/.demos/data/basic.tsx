export const DefaultOption = {
  tooltip: {
    trigger: 'item', //设置tooltip触发类型为数据项图形
  },
  legend: {}, // 是否显示图例， 非必选
  series: [
    {
      name: '漏斗图',
      type: 'funnel', // echarts 图表类型， 必选
      data: [
        { value: 100, name: '展现' },
        { value: 80, name: '点击' },
        { value: 60, name: '访问' },
        { value: 30, name: '咨询' },
        { value: 10, name: '订单' },
      ],
    },
  ],
};
