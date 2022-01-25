export default {
  backgroundColor: '#030833',
  title: {
    text: '圈层分布情况',
    left: 12.32,
    top: '.5%',
    textStyle: {
      fontSize: 22,
      color: 'rgba(24, 144, 255, 1)',
      fontWeight: 400,
      lineHeight: 30,
    },
  },
  series: [
    {
      type: 'graph',
      layout: 'force',
      draggable: true,
      roam: false,
      focusNodeAdjacency: false,
      emphasis: { itemStyle: { opacity: 1, shadowBlur: 15 } },
      right: '10%',
      label: { show: true, color: 'rgba(255, 255, 255, 1)', fontSize: 29.3 },
      itemStyle: {
        borderWidth: 3,
        shadowBlur: 10,
        color: 'rgba(5, 14, 64, 1)',
        opacity: 0.8,
      },
      fixed: true,
      // symbolOffset: [-360, -45],
      data: [
        {
          symbolOffset: [-200 + 150, -29],
          name: '航拍摄影圈',
          x: 136,
          y: 215,
          symbolSize: 160,
          label: { fontSize: 25 },
          itemStyle: {
            normal: {
              borderColor: 'rgba(0, 173, 255, 0.32)',
              shadowColor: 'rgba(0, 173, 255, 1)',
            },
          },
        },
        {
          symbolOffset: [-360 + 150, 5],
          name: '乔迁新居',
          x: 135,
          y: 214,
          symbolSize: 160,
          label: { fontSize: 28 },
          itemStyle: {
            normal: {
              borderColor: 'rgba(161, 137, 88, 1)',
              shadowColor: 'rgba(161, 137, 88, 1)',
            },
          },
        },
        {
          symbolOffset: [150, -355],
          name: '自拍控',
          x: 60,
          y: 242,
          symbolSize: 130,
          label: { fontSize: 22 },
          itemStyle: {
            normal: {
              borderColor: 'rgba(255, 151, 148, 1)',
              shadowColor: 'rgba(255, 151, 148, 1)',
            },
          },
        },
        {
          symbolOffset: [-350 + 150, 0],
          name: '宝妈群',
          x: 130,
          y: 140,
          label: { fontSize: 30 },
          symbolSize: 210,
          itemStyle: {
            normal: {
              borderColor: 'rgba(161, 137, 88, 1)',
              shadowColor: 'rgba(161, 137, 88, 1)',
            },
          },
        },
        {
          symbolOffset: [-280 + 50, 10],
          name: '电玩爱好者',
          x: 88,
          y: 192,
          symbolSize: 141.4,
          label: { fontSize: 22 },
          itemStyle: {
            normal: {
              borderColor: 'rgba(96, 178, 177, 1)',
              shadowColor: 'rgba(96, 178, 177, 1)',
              shadowBlur: 10,
            },
          },
        },
        {
          name: '智能穿戴达人',
          x: 86,
          y: 180,
          symbolOffset: [150, 0],
          symbolSize: 230,
          label: { fontSize: 30 },
          itemStyle: {
            normal: {
              borderColor: 'rgba(0, 173, 255, .7)',
              shadowColor: 'rgba(0, 173, 255, .8)',
              shadowBlur: 15,
              color: 'rgba(5, 14, 64, 0.46)',
              opacity: 1,
            },
          },
        },
        {
          symbolOffset: [-600 + 150, 10],
          name: '追星族',
          x: 161,
          y: 147.2,
          symbolSize: 120,
          label: { fontSize: 20 },
          itemStyle: {
            normal: {
              borderColor: 'rgba(0, 173, 255, 0.32)',
              shadowColor: 'rgba(0, 173, 255, 1)',
              color: 'rgba(5, 14, 64, 0.46)',
              shadowBlur: 10,
            },
          },
        },
        {
          symbolOffset: [-266 + 150, 330],
          name: '音乐发烧友',
          x: 78,
          y: 143,
          symbolSize: 190,
          label: { fontSize: 30 },
          itemStyle: {
            normal: {
              borderColor: 'rgba(255, 151, 148, 1)',
              shadowColor: 'rgba(255, 151, 148, 1)',
            },
          },
        },
        {
          symbolOffset: [-380 + 150, -140],
          name: '精英女白领',
          x: 145,
          y: 216,
          symbolSize: 220,
          label: { fontSize: 32 },
          itemStyle: {
            normal: {
              borderColor: 'rgba(254, 102, 137, .8)',
              shadowColor: 'rgba(254, 102, 137, 1)',
              shadowBlur: 15,
              color: 'rgba(5, 14, 64, 1)',
              opacity: 1,
            },
          },
        },
      ],
    },
  ],
};
