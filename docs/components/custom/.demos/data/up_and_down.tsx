const zengjia = 'image://http://show.kingdee.com/images/zengjia.svg';
const jianshao = 'image://http://show.kingdee.com/images/jianshao.svg';
export default {
  backgroundColor: '#0c1223',
  tooltip: {
    trigger: 'axis',
    axisPointer: { type: 'shadow', shadowStyle: { color: 'rgba(0, 0, 0, 0)' } },
    backgroundColor: 'rgba(1, 1, 22, 0.7)',
    borderWidth: 1,
    borderColor: '#45DAD1',
    borderRadius: 2,
    padding: [11.5, 14, 0, 12],
    textStyle: { lineHeight: 2.5037037037037035, color: '#fff' },
  },
  xAxis: {
    type: 'category',
    data: [
      '特殊设备',
      '通用仪器',
      '打印部件',
      '健康管理',
      '柜机组件',
      '塑胶部件',
      '无线仪器',
      '电子配件',
    ],
    show: true,
    axisTick: { show: false },
    axisLabel: { show: false },
  },
  yAxis: {
    type: 'value',
    data: [-107, -53, -29, -17, 154, 74, 26, 5],
    show: false,
    splitLine: { show: false },
  },
  series: [
    {
      name: '供应商账龄',
      type: 'bar',
      barWidth: 1,
      itemStyle: { opacity: 0.6, normal: {} },
      label: { show: false },
      emphasis: { itemStyle: { opacity: 1 } },
      data: [-107, -53, -29, -17, 154, 74, 26, 5],
    },
    {
      type: 'scatter',
      symbolSize: 0,
      data: [
        [0, 30],
        [1, 30],
        [2, 30],
        [3, 30],
        [4, -30],
        [5, -30],
        [6, -30],
        [7, -30],
      ],
      itemStyle: { color: 'transparent' },
      label: {
        show: true,
        fontSize: 16,
        color: 'rgba(255, 255, 255, 0.6)',
      },
      emphasis: { label: { color: '#fff' } },
    },
    {
      type: 'scatter',
      itemStyle: { opacity: 0.6 },
      emphasis: { itemStyle: { opacity: 1 } },
      label: {
        show: true,
        fontSize: 16,
        color: '#fff',
        offset: [-5, -4],
      },
      symbolSize: [126, 90],
      symbol: value => {
        if (value[1] > 0) {
          return zengjia;
        } else {
          return jianshao;
        }
      },
      data: [
        [4, 202],
        [5, 122],
        [6, 74],
        [7, 53],
      ],
    },
    {
      type: 'scatter',
      itemStyle: { opacity: 0.6 },
      emphasis: { itemStyle: { opacity: 1 } },
      label: {
        show: true,
        fontSize: 16,
        color: '#fff',
        offset: [-5, 4],
      },
      symbolSize: [126, 90],
      symbol: value => {
        if (value[1] > 0) {
          return zengjia;
        } else {
          return jianshao;
        }
      },
      data: [
        [0, -149],
        [1, -95],
        [2, -71],
        [3, -59],
      ],
    },
  ],
};
