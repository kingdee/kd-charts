export default {
  color: [
    '#276FF5',
    '#A571F7',
    '#2ABEFF',
    '#17CCC0',
    '#7ABF13',
    '#F5C342',
    '#FF8F0F',
    '#F1689A',
    '#F2606B',
  ],
  graph: {
    color: [
      '#276FF5',
      '#A571F7',
      '#2ABEFF',
      '#17CCC0',
      '#7ABF13',
      '#F5C342',
      '#FF8F0F',
      '#F1689A',
      '#F2606B',
    ],
  },
  visualMap: {
    itemWidth: 10,
    itemHeight: 10,
    color: ['#40a9ff'],
    inRange: {
      colorLightness: [0.9, 0.15],
      color: ['#276FF5'],
    },
  },
  geo: {
    label: {
      normal: {
        textStyle: {
          color: '#ffffff',
        },
      },
      emphasis: {
        textStyle: {
          color: '#ffffff',
        },
      },
    },
    itemStyle: {
      normal: {
        borderColor: 'rgba(255, 255, 255, 0.6)',
        areaColor: 'rgba(255, 255, 255, 0.1)',
      },
      emphasis: {
        borderColor: 'rgba(255, 197, 61, 0.6)',
        areaColor: 'rgba(255, 197, 61, 0.1)',
      },
    },
  },
  gauge: {
    axisLine: {
      lineStyle: {
        color: [
          [0.2, '#276FF5'],
          [0.5, '#17CCC0'],
          [0.8, '#FF8F0F'],
          [1, '#F2606B'],
        ],
      },
    },
    axisTick: {
      lineStyle: {
        color: '#FFFFFF',
      },
    },
    axisLabel: {
      color: '#FFFFFF', // 修改刻度值颜色为白色
    },
    pointer: {
      itemStyle: {
        color: '#666666',
      },
    },
    title: {
      offsetCenter: [0, '30%'],
      color: '#FFFFFF',
      fontWeight: 'bold',
    },
    detail: {
      offsetCenter: [0, '50%'],
      color: '#FFFFFF', // 修改指标值颜色为白色
    },
  },
  backgroundColor: '#333',
  title: {
    textStyle: {
      color: 'rgba(33,33,33,1)',
      fontSize: 14,
    },
    subtextStyle: {
      color: '#6E7079',
    },
    top: '15%',
    itemGap: 10,
  },
  legend: {
    itemWidth: 10,
    itemHeight: 10,
    textStyle: {
      color: 'rgba(255, 255, 255, 0.65)',
    },
    itemStyle: {
      borderColor: '#333', // 设置图例项的外边框颜色为 #333
      borderWidth: 1, // 设置外边框宽度
    },
  },
  grid: {
    left: '3%',
    right: '8%',
    bottom: '3%',
    containLabel: true,
  },
  tooltip: {
    trigger: 'axis',
    confine: true,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    textStyle: {
      align: 'left',
      fontSize: 14,
      lineHeight: 18,
      color: '#ffffff',
    },
    padding: 8,
  },
  bar: {
    barMaxWidth: 16,
    tooltip: {},
  },
  line: {
    // symbol: 'circle',
    // symbolSize: 2,
    itemStyle: {
      // color: 'rgba(208, 211, 232, 1)',
      borderColor: '#333',
      borderWidth: 2,
    },
    tooltip: {},
  },
  pie: {
    color: ['#276FF5', '#A571F7', '#2ABEFF', '#17CCC0', '#FF8F0F', '#F5C342'],
    itemStyle: {
      borderColor: '#333',
      borderWidth: 1,
    },
  },
  radar: {
    center: ['50%', '50%'],
    radius: '50%',
    color: ['#276FF5', '#A571F7'],
    areaStyle: {
      opacity: 0.3,
    },
    lineStyle: {
      width: 2,
    },
  },
  scatter: {
    itemStyle: {
      opacity: 0.8,
    },
  },
  funnel: {
    color: ['#276FF5', '#A571F7', '#2ABEFF', '#F5C342', '#FF8F0F'],
    itemStyle: {
      borderColor: '#333', // 设置漏斗图的边框颜色为 #333
      borderWidth: 1, // 设置边框宽度
    },
  },
  categoryAxis: {
    axisLine: {
      show: true,
      lineStyle: {
        color: 'rgba(255, 255, 255, 0.65)',
      },
    },
    axisTick: {
      alignWithLabel: true,
      lineStyle: {
        color: '#D9D9D9',
      },
    },
    axisLabel: {
      textStyle: {
        color: 'rgba(255, 255, 255, 0.4)',
      },
    },
    splitLine: {
      lineStyle: {
        type: 'dashed',
        color: '#D9D9D9',
      },
    },
    splitArea: {
      areaStyle: {
        color: 'rgba(255, 255, 255, 0.65)',
      },
    },
  },
  valueAxis: {
    axisLine: {
      show: false,
    },
    axisTick: {
      alignWithLabel: true,
      lineStyle: {
        color: '#D9D9D9',
      },
    },
    axisLabel: {
      textStyle: {
        color: 'rgba(255, 255, 255, 0.4)',
      },
    },
    splitLine: {
      lineStyle: {
        type: 'dashed',
        color: 'rgba(255, 255, 255, 0.16)',
      },
    },
    splitArea: {
      areaStyle: {
        color: 'rgba(255, 255, 255, 0.65)',
      },
    },
  },
};
