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
  grid: { right: '8%', bottom: '8%', top: '8%', containLabel: true },
  xAxis: [
    {
      type: 'value',
      name: '千元',
      splitLine: { show: true },
      axisLine: { show: false },
      axisTick: { show: false },
      nameTextStyle: {
        verticalAlign: 'top',
        padding: [7, 0, 0, 0],
      },
    },
  ],
  yAxis: [
    {
      type: 'category',
      axisLine: { show: false },
      axisTick: { show: false },
      data: ['04-01', '04-02', '04-03', '04-03', '04-05', '04-06'],
      axisPointer: {
        show: true,
        shadowStyle: {
          opacity: 0,
        },
        type: 'shadow',
      },
    },
    {
      type: 'value',
      axisLine: { show: false },
      axisTick: { show: false },
    },
  ],
  series: [
    {
      name: '实际值',
      type: 'bar',
      data: [
        300,
        {
          value: 470,
          label: {
            show: true,
            position: 'insideRight',
            color: '#fff',
            offset: [-20, 0],
          },
        },
        490,
        190,
        290,
        390,
      ],
      label: {
        show: true,
        position: 'insideRight',
        color: '#fff',
        offset: [0, 0],
      },
      barWidth: 36,
      zlevel: 11,
    },
    {
      name: '背景',
      type: 'bar',
      xAxisIndex: 0,
      yAxisIndex: 0,
      barGap: '-135%',
      barWidth: 60,
      data: [600, 600, 600, 600, 600, 600],
      itemStyle: { color: '#E5E5E5' },
      emphasis: { itemStyle: { color: '#E5E5E5' } },
      zlevel: 9,
    },

    {
      name: '目标值',
      type: 'scatter',
      symbol: 'rect',
      symbolSize: [4, 60],
      symbolOffset: [0, -6],
      data: [460, 460, 460, 460, 460, 460],
      color: '#697480',
      zlevel: 40,
      hoverAnimation: false,
    },
  ],
};
