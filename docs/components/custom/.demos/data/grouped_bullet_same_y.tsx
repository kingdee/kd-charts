export default {
  legend: {
    data: [
      '实际值',
      {
        name: '目标值',
        icon: 'path://M443.733333 0h145.066667v1024H443.733333z',
      },
    ],
    selectedMode: false,
    bottom: '2%',
    left: 'center',
  },
  tooltip: {
    formatter: function(params) {
      console.log(params);
      var result = `<span>${params[0].name}</span>`;
      for (var i = 0; i < params.length; i++) {
        if (i === 0 || i === 2) {
          let curData = params[i];
          result += `<p style="display: flex;-webkit-box-align: center;align-items: center;margin:4px 0 0 0;padding:0;"><span style="display:inline-block;width:10px;height:10px;background-color:${curData.color};margin-right:5px"></span><span style="display:inline-block;color: #fff;">${curData.seriesName}：</span><span style="display:inline-block;color: #fff;">${curData.value}</span></p>`;
        }
      }
      return result;
    },
  },
  grid: {
    containLabel: true,
    bottom: '8%',
  },
  xAxis: [
    {
      type: 'category',
      gridIndex: 0,
      data: ['04-01', '04-02', '04-03', '04-03'],
      axisPointer: {
        show: true,
        shadowStyle: {
          opacity: 0,
        },
        type: 'shadow',
      },
    },
  ],
  yAxis: [
    {
      type: 'value',
      gridIndex: 0,
      splitLine: { show: false },
      axisTick: { show: false },
      name: '千元',
      nameTextStyle: {
        padding: [0, 40, 0, 0],
      },
    },
    {
      type: 'value',
      gridIndex: 0,
      splitLine: { show: false },
      axisLine: { show: false },
      axisTick: { show: false },
      axisLabel: { show: false },
    },
  ],
  series: [
    {
      name: '实际值',
      type: 'bar',
      xAxisIndex: 0,
      yAxisIndex: 0,
      data: [
        300,
        {
          value: 470,
          label: {
            show: true,
            position: 'insideTop',
            color: '#fff',
            offset: [0, 20],
          },
        },
        490,
        490,
      ],
      label: {
        show: true,
        position: 'insideTop',
        color: '#fff',
        offset: [0, 10],
      },
      barWidth: 36,
      zlevel: 11,
    },
    {
      name: '背景',
      type: 'bar',
      xAxisIndex: 0,
      yAxisIndex: 1,
      barGap: '-135%',
      barWidth: 60,
      data: [600, 600, 600, 600],
      itemStyle: { color: '#E5E5E5' },
      emphasis: { itemStyle: { color: '#E5E5E5' } },
      zlevel: 9,
    },
    {
      name: '目标值',
      type: 'scatter',
      symbol: 'rect',
      symbolSize: [60, 4],
      symbolOffset: [-6, 0],
      data: [460, 460, 460, 460],
      color: '#697480',
      hoverAnimation: false,
      zlevel: 40,
      xAxisIndex: 0,
      yAxisIndex: 0,
      label: {
        show: false,
        position: 'top',
        formatter: function(params) {
          //console.log(params)
          return '目标值';
        },
      },
    },
  ],
};
