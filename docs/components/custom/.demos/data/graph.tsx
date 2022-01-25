export const normal_color = 'rgba(31, 34, 70, 1)';
export const emphasis_color = 'rgba(0, 210, 255, 1)';
export const blur_color = '#ff0000';

export const normal_style = {
  itemStyle: {
    color: normal_color,
  },
};

const lineStarter_style = {
  itemStyle: {
    color: emphasis_color,
    borderWidth: 5,
    borderColor: '#bae7ff',
  },
  label: {
    color: emphasis_color,
  },
};

const emphasis_style = {
  itemStyle: {
    color: emphasis_color,
  },
};

export const all_style = {
  lineStyle: {
    color: emphasis_color,
  },
  itemStyle: {
    color: emphasis_color,
    borderColor: 'rgba(163, 239, 255, 1)',
    borderWidth: 4,
  },
  label: {
    color: 'rgba(249, 249, 249, 1)',
  },
};

/* ---------------------
 * !!! 不同link的样式 !!!
 * --------------------- */
const link_style_large = {
  lineStyle: {
    color: emphasis_color,
    width: 12,
  },
  itemStyle: {
    color: emphasis_color,
  },
};

const link_style_medium = {
  lineStyle: {
    color: emphasis_color,
    width: 6,
  },
  itemStyle: {
    color: emphasis_color,
  },
};

const link_style_small = {
  lineStyle: {
    color: emphasis_color,
    width: 3,
  },
  itemStyle: {
    color: emphasis_color,
  },
};

/* ---------------
 * !!! 商品数据 !!!
 * --------------- */
function returnProductData() {
  const productData = [
    {
      name: 'XX M 40',
      id: 1,
      value: 'XX M 40',
      ...lineStarter_style,
    },
    {
      name: 'XX 12',
      id: 2,
      value: 'XX 12',
      ...emphasis_style,
    },
    {
      name: 'Ipad pro',
      id: 3,
    },
    {
      name: 'XX pro',
      id: 4,
    },
    {
      name: 'XXXX11',
      id: 5,
    },
    {
      name: 'XX手环',
      id: 6,
    },
    {
      name: 'XX手表',
      id: 7,
    },
    {
      name: 'XX手环',
      id: 8,
    },
    {
      name: 'XX手环',
      id: 9,
    },
    {
      name: 'XX手环',
      id: 10,
    },
    {
      name: 'XX手环',
      id: 11,
      ...emphasis_style,
    },
    {
      name: 'XX耳机',
      id: 12,
      ...emphasis_style,
    },
    {
      name: '手机壳',
      id: 13,
      ...emphasis_style,
    },
    {
      name: '无线鼠标',
      id: 14,
      ...emphasis_style,
    },
    {
      name: '无线充电器',
      id: 15,
      ...emphasis_style,
    },
    {
      name: '手持风扇',
      id: 16,
      ...emphasis_style,
    },
    {
      name: 'XX',
      id: 17,
      ...emphasis_style,
    },
    {
      name: '充电线',
      id: 18,
    },
    {
      name: 'XX',
      id: 19,
    },
  ];

  return productData;
}

/* ---------------
 * !!! 连线数据 !!!
 * --------------- */
function returnLinkData() {
  const linkArrayList = [
    {
      emphasis_large: [1],
      emphasis_medium: [8, 9, 10],
      emphasis_small: [11, 12, 13, 14, 15, 16],
      normal: [],
    },
    {
      emphasis_large: [],
      emphasis_medium: [],
      emphasis_small: [],
      normal: [],
    },
    {
      emphasis_large: [],
      emphasis_medium: [],
      emphasis_small: [],
      normal: [17, 8],
    },
    {
      emphasis_large: [],
      emphasis_medium: [],
      emphasis_small: [],
      normal: [17, 8],
    },
    {
      emphasis_large: [],
      emphasis_medium: [],
      emphasis_small: [],
      normal: [6, 7, 9],
    },
    {
      emphasis_large: [],
      emphasis_medium: [],
      emphasis_small: [],
      normal: [12],
    },
    {
      emphasis_large: [],
      emphasis_medium: [],
      emphasis_small: [],
      normal: [4],
    },
    {
      emphasis_large: [],
      emphasis_medium: [],
      emphasis_small: [],
      normal: [4],
    },
    {
      emphasis_large: [],
      emphasis_medium: [],
      emphasis_small: [],
      normal: [2, 3],
    },
    {
      emphasis_large: [],
      emphasis_medium: [],
      emphasis_small: [],
      normal: [4],
    },
    {
      emphasis_large: [],
      emphasis_medium: [],
      emphasis_small: [],
      normal: [8, 15],
    },
    {
      emphasis_large: [],
      emphasis_medium: [],
      emphasis_small: [],
      normal: [6, 9],
    },
    {
      emphasis_large: [],
      emphasis_medium: [],
      emphasis_small: [],
      normal: [9],
    },
    {
      emphasis_large: [],
      emphasis_medium: [],
      emphasis_small: [],
      normal: [],
    },
    {
      emphasis_large: [],
      emphasis_medium: [],
      emphasis_small: [],
      normal: [12],
    },
    {
      emphasis_large: [],
      emphasis_medium: [],
      emphasis_small: [],
      normal: [],
    },
    {
      emphasis_large: [],
      emphasis_medium: [],
      emphasis_small: [],
      normal: [2, 3],
    },
    {
      emphasis_large: [],
      emphasis_medium: [],
      emphasis_small: [],
      normal: [],
    },
    {
      emphasis_large: [],
      emphasis_medium: [],
      emphasis_small: [],
      normal: [17, 8],
    },
  ];

  let linkData: any[] = [];

  for (let i = 0; i < linkArrayList.length; ++i) {
    linkArrayList[i].emphasis_large.forEach(ele => {
      linkData.push({
        source: i,
        target: ele,
        ...link_style_large,
      });
    });
    linkArrayList[i].emphasis_medium.forEach(ele => {
      linkData.push({
        souce: i,
        target: ele,
        ...link_style_medium,
      });
    });
    linkArrayList[i].emphasis_small.forEach(ele => {
      linkData.push({
        source: i,
        target: ele,
        ...link_style_small,
      });
    });
    linkArrayList[i].normal.forEach(ele => {
      linkData.push({
        source: i,
        target: ele,
        ...normal_style,
      });
    });
  }

  /* emphasis-medium导入的时候有点问题（原因不明），现在是手动push到linkData数组 */
  linkData.push({
    source: 0,
    target: 10,
    ...link_style_medium,
  });
  return linkData;
}

/* ECharts配置项 */
export default {
  backgroundColor: '#0c1223',
  legend: {
    show: false,
  },
  tooltip: { show: false },
  series: [
    {
      type: 'graph',
      layout: 'circular',
      circular: {
        rotateLabel: true,
      },
      legendHoverLink: true,
      symbolSize: 35,
      zlevel: 10,
      animationDuration: 500,
      animationEasing: 'quinticInOut',
      animationDurationUpdate: 500,
      animationEasingUpdate: 'quinticInOut',
      data: returnProductData(),
      links: returnLinkData(),
      zoom: 0.65,
      label: {
        show: true,
        fontSize: '2.2rem',
        color: 'rgba(249, 249, 249, 1)',
        position: 'right',
        formatter: '{b}',
        distance: 15,
        rotate: 45,
      },
      itemStyle: {
        color: normal_color,
      },
      lineStyle: {
        show: true,
        width: 2,
        color: normal_color,
        curveness: 0.3,
      },
    },
  ],
};
