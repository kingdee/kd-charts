let dataList = [
  {
    name: '澳门',
    value: 10,
  },
  {
    name: '香港',
    value: 114,
  },
  {
    name: '台湾',
    value: 45,
  },
  {
    name: '新疆',
    value: 76,
  },
  {
    name: '宁夏',
    value: 75,
  },
  {
    name: '青海',
    value: 18,
  },
  {
    name: '甘肃',
    value: 124,
  },
  {
    name: '陕西',
    value: 245,
  },
  {
    name: '西藏',
    value: 35,
  },
  {
    name: '云南',
    value: 174,
  },
  {
    name: '贵州',
    value: 146,
  },
  {
    name: '四川',
    value: 539,
  },
  {
    name: '重庆',
    value: 576,
  },
  {
    name: '海南',
    value: 168,
  },
  {
    name: '广西',
    value: 252,
  },
  {
    name: '广东',
    value: 1352,
  },
  {
    name: '湖南',
    value: 1018,
  },
  {
    name: '湖北',
    value: 67743,
  },
  {
    name: '河南',
    value: 1272,
  },
  {
    name: '山东',
    value: 758,
  },
  {
    name: '江西',
    value: 935,
  },
  {
    name: '福建',
    value: 296,
  },
  {
    name: '安徽',
    value: 990,
  },
  {
    name: '浙江',
    value: 1215,
  },
  {
    name: '江苏',
    value: 631,
  },
  {
    name: '上海',
    value: 342,
  },
  {
    name: '黑龙江',
    value: 481,
  },
  {
    name: '吉林',
    value: 93,
  },
  {
    name: '辽宁',
    value: 125,
  },
  {
    name: '内蒙古',
    value: 75,
  },
  {
    name: '山西',
    value: 133,
  },
  {
    name: '河北',
    value: 318,
  },
  {
    name: '天津',
    value: 136,
  },
  {
    name: '北京',
    value: 428,
  },
];

export const DefaultOption = {
  visualMap: {
    //视觉映射组件， 必选
    min: 0,
    max: 100000,
    pieces: [
      {
        gt: 10000,
        label: '> 10000人',
      },
      {
        gte: 1000,
        lte: 10000,
        label: '1000 - 10000人',
      },
      {
        gte: 100,
        lt: 1000,
        label: '100 - 1000人',
      },
      {
        gt: 1,
        lt: 100,
        label: '1 - 100人',
      },
      {
        value: 0,
      },
    ],
    show: true, //设置是否显示分级图例，非必选
  },
  geo: {
    map: 'china', // 地图类型 ，必选
  },
  tooltip: {
    trigger: 'item', // 设置tooltip触发类型为数据项图形
  },
  series: [
    {
      name: '确诊病例',
      type: 'map', // echarts 图表类型， 必选
      geoIndex: 0, //指定 geo 组件，必选
      data: dataList,
    },
  ],
};
