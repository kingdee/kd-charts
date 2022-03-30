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
    bottom: 0,
    left: 'center',
  },
  tooltip: {},
  xAxis: [
    {
      type: 'value',
      gridIndex: 0,
      max: 250,
      name: '万',
      nameTextStyle: {
        verticalAlign: 'top',
        padding: [8, 0, 0, 0],
      },
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
      max: 75,
      name: '万',
      nameTextStyle: {
        verticalAlign: 'top',
        padding: [8, 0, 0, 0],
      },
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
      max: 500,
      name: '单',
      nameTextStyle: {
        verticalAlign: 'top',
        padding: [8, 0, 0, 0],
      },
      splitArea: {
        show: true,
        areaStyle: {
          color: ['#E5E5E5', '#E5E5E5'],
        },
      },
    },
  ],
  yAxis: [
    {
      type: 'category',
      gridIndex: 0,
      splitArea: {
        show: true,
        areaStyle: {
          color: ['#E5E5E5', 'rgba(250,250,250,0)'],
        },
      },
      data: ['销售额'],
    },
    { type: 'category', gridIndex: 1, data: ['净利润'] },
    { type: 'category', gridIndex: 2, data: ['订单量'] },
  ],
  grid: [
    { top: 20, height: 80 },
    { top: 120, height: 80 },
    { top: 220, height: 80 },
  ],
  series: [
    {
      type: 'bar',
      barHeight: 90,
      xAxisIndex: 0,
      yAxisIndex: 0,
      name: '销售额',
      data: [180],
      label: {
        show: true,
        position: 'insideRight',
        color: '#fff',
        offset: [-5, 0],
      },
    },
    {
      name: '目标值',
      type: 'scatter',
      symbol: 'rect',
      symbolSize: [4, 60],
      data: [230],
      color: '#697480',
      hoverAnimation: false,
      z: 4,
      xAxisIndex: 0,
      yAxisIndex: 0,
      label: {
        show: false,
        position: 'right',
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
      label: {
        show: true,
        position: 'insideRight',
        color: '#fff',
        offset: [-5, 0],
      },
    },
    {
      name: '目标值',
      type: 'scatter',
      symbol: 'rect',
      symbolSize: [4, 60],
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
      label: {
        show: true,
        position: 'insideRight',
        color: '#fff',
        offset: [-5, 0],
      },
    },
    {
      name: '目标值',
      type: 'scatter',
      symbol: 'rect',
      symbolSize: [4, 60],
      data: [460],
      color: '#697480',
      hoverAnimation: false,
      z: 4,
      xAxisIndex: 2,
      yAxisIndex: 2,
    },
  ],
};
