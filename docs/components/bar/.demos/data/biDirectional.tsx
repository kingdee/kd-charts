export const DefaultOption = {
  xAxis: {
    type: 'category',
    splitLine: { show: false },
    data: ['总费用', '房租', '水电费', '交通费', '伙食费', '日用品数'],
  },
  yAxis: {
    type: 'value',
  },
  series: [
    {
      // 底部的透明柱状图， 必选
      name: '辅助',
      type: 'bar',
      stack: '总量',
      itemStyle: {
        barBorderColor: 'rgba(0,0,0,0)',
        color: 'rgba(0,0,0,0)',
      },
      emphasis: {
        itemStyle: {
          barBorderColor: 'rgba(0,0,0,0)',
          color: 'rgba(0,0,0,0)',
        },
      },
      data: [0, 1700, 1400, 1200, 300, 0],
    },
    {
      // 实际展示的数据
      name: '生活费',
      type: 'bar', // echarts 图表类型， 必选
      stack: '总量', //数据堆叠，必选
      data: [2900, 1200, 300, 200, 900, 300],
    },
  ],
  tooltip: {
    show: true,
    formatter: function(params) {
      // 隐藏底部的透明柱状图tooltip信息， 必选
      var tar = params[1];
      if (tar && !tar.name && !tar.value) {
        return tar.name + ' : ' + tar.value;
      }
    },
  },
};
