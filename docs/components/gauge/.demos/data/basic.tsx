export const DefaultOption = {
  series: [
    {
      type: 'gauge', // echarts 图表类型，必选
      progress: {
        show: true,
      },
      min: 0, // 最小的数据值，根据实际数据动态改变
      max: 100, // 最大的数据值，根据实际数据动态改变
      pointer: {
        show: true, // 显示指针
        width: 5, // 可选：调整指针宽度
      },
      data: [
        {
          value: 50,
          name: '错误率',
        },
      ],
    },
  ],
};
