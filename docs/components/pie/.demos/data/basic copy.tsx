export const DefaultOption = {
  legend: {}, // 设置显示图例，非必选
  tooltip: {
    trigger: 'item', //设置tooltip触发类型为数据项图形
  },
  series: [
    {
      name: '访问来源',
      type: 'pie', // echarts 图表类型， 必选
      radius: '50%',
      data: [
        { value: 1048, name: '搜索引擎' },
        { value: 735, name: '直接访问' },
        { value: 580, name: '邮件营销' },
        { value: 484, name: '联盟广告' },
        { value: 300, name: '视频广告' },
        { value: 735, name: '直接访问1' },
        { value: 580, name: '邮件营销2' },
        { value: 484, name: '联盟广告3' },
        { value: 300, name: '视频广告4' },
        { value: 735, name: '直接访问11' },
        { value: 580, name: '邮件营销12' },
        { value: 484, name: '联盟广告13' },
        { value: 300, name: '视频广告14' },
        { value: 735, name: '直接访问21' },
        { value: 580, name: '邮件营销22' },
        { value: 484, name: '联盟广告23' },
        { value: 300, name: '视频广告24' },
      ],
    },
  ],
};
