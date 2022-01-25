export const DefaultOption = {
  series: [
    {
      type: 'gauge', // echarts 图表类型， 必选
      progress: {
        show: true,
      },
      min: 0, //最小的数据值，需要根据实际数据动态改变
      max: 100, //最大的数据值，需要根据实际数据动态改变
      axisLine: {
        // lineStyle: {
        //   //进度条样式，echarts4版本必选
        //   color: [
        //     [50 / 100, '#40a9ff'], //适配echarts4，需要根据实际数据动态改变
        //     [1, 'rgba(229,229,229)'],
        //   ],
        // },
      },
      data: [
        {
          value: 50,
          name: '完成率',
        },
      ],
    },
  ],
};
