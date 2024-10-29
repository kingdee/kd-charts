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
        borderColor: '#eee',
      },
      emphasis: {
        areaColor: '#fe994e',
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
        color: '#999999',
      },
    },
    pointer: {
      itemStyle: {
        color: '#666666', // 设置指针颜色
      },
    },
    title: {
      offsetCenter: [0, '30%'],
      color: '#666666',
      fontWeight: 'bold',
    },
    detail: {
      offsetCenter: [0, '50%'],
    },
  },
  title: {
    textStyle: {
      color: '#666666',
      fontSize: 16,
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
      color: '#666666',
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
    itemStyle: {
      borderWidth: 2,
    },
    tooltip: {},
  },
  pie: {
    color: ['#276FF5', '#A571F7', '#2ABEFF', '#17CCC0', '#FF8F0F', '#F5C342'],
    itemStyle: {
      borderColor: '#fff',
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
  },
  categoryAxis: {
    axisLine: {
      show: true,
      lineStyle: {
        color: '#D9D9D9',
      },
    },
    axisTick: {
      alignWithLabel: true,
      lineStyle: {
        color: '#B2B2B2',
      },
    },
    axisLabel: {
      textStyle: {
        color: '#666666',
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
        color: '#666666',
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
        color: '#B2B2B2',
      },
    },
    axisLabel: {
      textStyle: {
        color: '#666666',
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
        color: '#666666',
      },
    },
  },
};
