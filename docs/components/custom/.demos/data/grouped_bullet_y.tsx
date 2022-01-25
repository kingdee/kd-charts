export default {
  legend: {
    data: [
      '销售额',
      '净利润',
      '订单量',
      {
        name: '目标值',
        icon: 'path://M443.733333 0h145.066667v1024H443.733333z',
      },
    ],
    selectedMode: false,
    bottom: '1%',
    left: 'center',
  },
  tooltip: {},
  xAxis: [
    {
      type: 'category',
      gridIndex: 0,
      data: ['销售额'],
      axisTick: {
        show: false,
        alignWithLabel: true,
      },
    },
    {
      type: 'category',
      data: ['净利润'],
      gridIndex: 1,
      axisTick: {
        show: false,
        alignWithLabel: true,
      },
    },
    {
      type: 'category',
      data: ['订单量'],
      gridIndex: 2,
      axisTick: {
        show: false,
        alignWithLabel: true,
      },
    },
  ],
  yAxis: [
    {
      type: 'value',
      gridIndex: 0,
      name: '万',
      nameTextStyle: {
        padding: [0, 30, 0, 0],
      },
      max: 250,
      splitArea: {
        show: true,
        areaStyle: {
          color: ['#E5E5E5', '#E5E5E5'],
        },
      },
    },
    {
      type: 'value',
      gridIndex: 1,
      name: '万',
      nameTextStyle: {
        padding: [0, 30, 0, 0],
      },
      max: 75,
      splitArea: {
        show: true,
        areaStyle: {
          color: ['#E5E5E5', '#E5E5E5'],
        },
      },
    },
    {
      type: 'value',
      gridIndex: 2,
      name: '单',
      max: 500,
      nameTextStyle: {
        padding: [0, 30, 0, 0],
      },
      splitArea: {
        show: true,
        areaStyle: {
          color: ['#E5E5E5', '#E5E5E5'],
        },
      },
    },
  ],
  grid: [
    { left: '25%', width: 90, bottom: '8%' },
    { left: '45%', width: 90, bottom: '8%' },
    { left: '65%', width: 90, bottom: '8%' },
  ],
  series: [
    {
      type: 'bar',
      xAxisIndex: 0,
      yAxisIndex: 0,
      name: '销售额',
      data: [180],
      barWidth: 40,
      label: {
        show: true,
        position: 'insideTop',
        color: '#fff',
        offset: [0, 0],
      },
    },
    {
      name: '目标值',
      type: 'scatter',
      symbol: 'rect',
      symbolSize: [60, 4],
      data: [230],
      color: '#697480',
      hoverAnimation: false,
      z: 4,
      xAxisIndex: 0,
      yAxisIndex: 0,
      label: {
        show: false,
        position: 'top',
        formatter: function(params) {
          return '目标值';
        },
      },
    },
    {
      type: 'bar',
      xAxisIndex: 1,
      yAxisIndex: 1,
      name: '净利润',
      data: [56],
      barWidth: 40,
      label: {
        show: true,
        position: 'insideTop',
        color: '#fff',
        offset: [0, 0],
      },
    },
    {
      name: '目标值',
      type: 'scatter',
      symbol: 'rect',
      symbolSize: [60, 4],
      data: [56],
      color: '#697480',
      hoverAnimation: false,
      z: 4,
      xAxisIndex: 1,
      yAxisIndex: 1,
    },
    {
      type: 'bar',
      xAxisIndex: 2,
      yAxisIndex: 2,
      name: '订单量',
      data: [480],
      barWidth: 40,
      label: {
        show: true,
        position: 'insideTop',
        color: '#fff',
        offset: [0, 0],
      },
    },
    {
      name: '目标值',
      type: 'scatter',
      symbol: 'rect',
      symbolSize: [60, 4],
      data: [460],
      color: '#697480',
      hoverAnimation: false,
      z: 4,
      xAxisIndex: 2,
      yAxisIndex: 2,
    },
  ],
};
