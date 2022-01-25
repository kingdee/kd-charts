export const DefaultOption = {
  tooltip: {}, // 设置显示tooltip，非必选
  legend: {}, // 设置显示图例，非必选
  xAxis: [
    {
      type: 'category',
      data: [
        '1月',
        '2月',
        '3月',
        '4月',
        '5月',
        '6月',
        '7月',
        '8月',
        '9月',
        '10月',
        '11月',
        '12月',
      ],
      axisPointer: {
        type: 'shadow', //坐标轴指示器设置为阴影指示器
      },
    },
  ],
  yAxis: [
    {
      type: 'value',
      min: 0,
      max: 250,
      interval: 50,
      axisLabel: {
        formatter: '{value} ml',
      },
    },
    {
      type: 'value',
      min: 0,
      max: 25,
      interval: 5,
      axisLabel: {
        formatter: '{value} °C',
      },
    },
  ],
  series: [
    {
      name: '蒸发量',
      type: 'bar', // echarts 图表类型， 必选
      data: [
        2.0,
        4.9,
        7.0,
        23.2,
        25.6,
        76.7,
        135.6,
        162.2,
        32.6,
        20.0,
        6.4,
        3.3,
      ],
    },
    {
      name: '降水量',
      type: 'bar',
      data: [
        2.6,
        5.9,
        9.0,
        26.4,
        28.7,
        70.7,
        175.6,
        182.2,
        48.7,
        18.8,
        6.0,
        2.3,
      ],
    },
    {
      name: '平均温度',
      type: 'line', // echarts 图表类型， 必选
      yAxisIndex: 1, // 设置该系列数据使用的 y 轴的index为1，多条y轴时必选
      data: [2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 23.4, 23.0, 16.5, 12.0, 6.2],
    },
  ],
};
