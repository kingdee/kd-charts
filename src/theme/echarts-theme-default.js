export default {
  color: [
    '#276FF5',
    '#17CCC0',
    '#A571F7',
    '#2ABEFF',
    '#FF8F0F',
    '#7ABF13',
    '#F5C342',
    '#F1689A',
  ],
  graph: {
    color: [
      '#276FF5',
      '#17CCC0',
      '#A571F7',
      '#2ABEFF',
      '#FF8F0F',
      '#7ABF13',
      '#F5C342',
      '#F1689A',
    ],
  },
  visualMap: {
    color: ['#40a9ff'],
    inRange: {
      colorLightness: [0.9, 0.15],
      color: ['#40a9ff'],
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
          [0.8, '#A571F7'],
          [1, '#2ABEFF'],
        ],
      },
    },
    title: {
      offsetCenter: [0, '20%'],
      color: '#999999',
      fontWeight: 'bold',
    },
    detail: {
      offsetCenter: [0, '40%'],
    },
  },
  title: {
    textStyle: {
      color: 'rgba(33,33,33,1)',
      fontSize: 14,
    },
    subtextStyle: {
      color: '#6E7079',
    },
  },
  legend: {
    textStyle: {
      color: '#666666',
    },
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
    barMaxWidth: 24,
    tooltip: {},
  },
  line: {
    itemStyle: {
      borderWidth: 2,
    },
    tooltip: {},
  },
  pie: {
    itemStyle: {
      borderColor: '#fff',
      borderWidth: 1,
    },
  },
  radar: {
    areaStyle: {
      opacity: 0.3,
    },
    lineStyle: {
      width: 2,
    },
  },
  scatter: {
    itemStyle: {
      opacity: 0.7,
    },
  },
  funnel: {
    color: [
      '#40a9ff',
      '#45dad1',
      '#73d13d',
      '#ffc53d',
      '#ffa940',
      '#f57582',
      '#9f69e2',
      '#6682f5',
      '#f273b5',
    ],
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
