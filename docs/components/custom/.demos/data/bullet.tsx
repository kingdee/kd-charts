export default {
  yAxis: [
    {
      type: 'category',
      data: ['利润'],
      axisLine: {
        show: false,
      },
      axisTick: {
        show: false,
      },
    },
    {
      type: 'category',
      data: [''],
      axisLine: {
        show: false,
      },
      axisTick: {
        show: false,
      },
    },
  ],
  xAxis: {
    type: 'value',
    axisLine: {
      show: false,
    },
    axisTick: {
      show: false,
    },
  },
  tooltip: {
    formatter: function(params) {
      let _params = params[4];
      return _params.marker + ' ' + _params.seriesName + ' : ' + _params.data;
    },
  },
  legend: {
    data: [
      '差',
      '良',
      '优',
      '实际值',
      {
        name: '目标值',
        icon: 'path://M443.733333 0h145.066667v1024H443.733333z',
      },
    ],
    selectedMode: false,
    bottom: '0%',
    left: 'center',
  },
  grid: {
    containLabel: true,
    width: '99%',
    height: 100,
    left: 0,
    bottom: 30,
  },
  series: [
    {
      name: '差',
      data: [60],
      type: 'bar',
      yAxisIndex: 0,
      stack: 'range',
      silent: true,
      barWidth: 90,
      color: '#FFDDDB',
    },
    {
      name: '良',
      data: [30],
      type: 'bar',
      yAxisIndex: 0,
      stack: 'range',
      silent: true,
      barWidth: 90,
      color: '#FFF1D4',
    },
    {
      name: '优',
      data: [10],
      type: 'bar',
      yAxisIndex: 0,
      stack: 'range',
      silent: true,
      barWidth: 90,
      color: '#DCFAE4',
    },
    {
      name: '实际值',
      data: [75],
      type: 'bar',
      yAxisIndex: 1,
      barWidth: 60,
      z: 3,
      color: '#1B90FF',
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
      symbolSize: [4, 80],
      data: [85],
      color: '#697480',
      hoverAnimation: false,
      z: 4,
    },
  ],
};
