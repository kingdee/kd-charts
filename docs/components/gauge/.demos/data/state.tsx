export const DefaultOption = {
  series: [
    {
      type: 'gauge', // echarts 图表类型， 必选
      data: [
        {
          value: 50,
          name: '错误率',
        },
      ],
      title: {
        fontSize: 15, // 标题字号大小
      },
      detail: {
        fontSize: 30, // 详情数据字号大小
      },
    },
  ],
};
