export const axisCommon = ({ textcolor = [''], axisObj = {} }) => {
  let _axis = {
    axisLine: {
      //坐标轴线
      show: true,
      lineStyle: {
        color: '#D9D9D9',
      },
    },
    axisTick: {
      //坐标轴刻度线
      alignWithLabel: true,
      lineStyle: {
        color: '#B2B2B2',
      },
    },
    axisLabel: {
      //坐标轴刻度标签
      textStyle: {
        color: '#666666',
      },
    },
    splitLine: {
      //分隔线
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
  };
  return { ..._axis, ...axisObj };
};

export const commonOption = ({
  COLORLIST = [''],
  textcolor = [''],
  backgroundColor = 'rgba(0, 0, 0, 0)',
}) => {
  return {
    color: COLORLIST,
    graph: {
      color: COLORLIST,
    },
    //热力
    visualMap: {
      color: [COLORLIST[0]],
      inRange: {
        colorLightness: [0.9, 0.15],
        color: [COLORLIST[0]], //适配echarts4
      },
    },
    geo: {
      //地图
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
          areaColor: COLORLIST[3], //鼠标放上去的颜色
        },
      },
    },
    gauge: {
      //仪表盘
      axisLine: {
        lineStyle: {
          color: [
            [0.2, '#40A9FF'], //语义颜色值：优秀
            [0.5, '#26C9C3'], //语义颜色值：良好
            [0.8, '#FFC53D'], //语义颜色值：中等
            [1, '#F57582'], //语义颜色值：严重
          ],
        },
      },
      title: {
        offsetCenter: [0, '20%'], //标题相对于仪表盘中心的偏移位置
        color: textcolor[2],
        fontWeight: 'bold',
      },
      detail: {
        offsetCenter: [0, '40%'], //标题相对于仪表盘中心的偏移位置
      },
    },
    backgroundColor: backgroundColor,
    textStyle: {},
    title: {
      textStyle: {
        color: textcolor[4],
        fontSize: 14,
      },
      subtextStyle: {
        color: textcolor[2],
      },
    },
    legend: {
      textStyle: {
        color: textcolor[1],
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
      // formatter: function(params: string | any[]) {
      //   var result = `<span>${params[0].name}</span>`;
      //   for (var i = 0; i < params.length; i++) {
      //     let curData = params[i];
      //     result += `<p style="display: flex;-webkit-box-align: center;align-items: center;margin:0px 0 0 0;padding:0;"><span style="display:inline-block;width:8px;height:8px;background-color:${
      //       curData.color
      //     };margin-right:5px"></span><span style="display:inline-block;color: #fff;">${
      //       curData.seriesName
      //     }：</span><span style="display:inline-block;color: #fff;text-align: right;">${curData
      //       .data[i + 1] || curData.value}</span></p>`;
      //   }
      //   return result;
      // },
    },
    bar: {
      tooltip: {},
      barMaxWidth: 24, // 设置柱状图柱体最大宽度为 24px
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
      //散点图
      itemStyle: {
        opacity: 0.7,
      },
    },
    funnel: {
      //漏斗图
      color: COLORLIST,
    },

    categoryAxis: axisCommon({
      //类目轴
      textcolor,
      axisObj: {
        axisLine: {
          show: true,
          lineStyle: {
            color: '#D9D9D9',
          },
        },
      },
    }),
    valueAxis: axisCommon({
      //数值轴
      textcolor,
      axisObj: {
        axisLine: {
          show: false,
        },
      },
    }),
  };
};
