var img1 = {
  a: 'https://kui.kingdee.com/assets/image/data-1556957097230-ADWAaIDQo.png',
  b: 'https://kui.kingdee.com/assets/image/data-1556957110633-e0E-XOKQZ.png',
};

var img2 = {
  a: 'https://kui.kingdee.com/assets/image/data-1556957293615-JIhIQhaPm.png',
  b: 'https://kui.kingdee.com/assets/image/data-1556957298923-zs-dG6589.png',
};

var img3 = {
  a: 'https://kui.kingdee.com/assets/image/data-1556957304463-XMTLBr6Xp.png',
  b: 'https://kui.kingdee.com/assets/image/data-1556957309017-j1b8R1TfZ.png',
};

var img4 = {
  a: 'https://kui.kingdee.com/assets/image/data-1556957315287-hnSZOcwgo.png',
  b: 'https://kui.kingdee.com/assets/image/data-1556957320508-i5PMKDggE.png',
};

var img5 = {
  a: 'https://kui.kingdee.com/assets/image/data-1556957325987-F3qlbohCv.png',
  b: 'https://kui.kingdee.com/assets/image/data-1556957331282-3Vh8GdsQb.png',
};

var value = 1; // >0

export default {
  backgroundColor: '#0c1223',
  grid: {
    left: '20%',
    right: '20%',
    top: '10%',
    bottom: '10%',

    containLabel: true,
  },
  tooltip: {
    trigger: 'item',
  },
  xAxis: {
    splitLine: {
      show: false,
    },
    axisLine: {
      show: false,
    },
    axisLabel: {
      show: false,
    },
    axisTick: {
      show: false,
    },
  },
  yAxis: [
    {
      type: 'category',
      inverse: false,
      data: ['城区A', '城区B', '城区C', '城区D', '城区E'],
      axisLine: {
        show: false,
      },
      axisTick: {
        show: false,
      },
      splitLine: {
        show: false,
        lineStyle: {
          type: 'dashed',
          color: '#3e86dd',
        },
      },
      axisLabel: {
        margin: 35,
        textStyle: {
          color: '#fff',
          fontSize: 14,
        },
      },
    },
  ],
  series: [
    {
      tooltip: {
        show: false,
      },
      z: 4,
      type: 'pictorialBar',
      symbolSize: ['30', '30'],
      symbolRepeat: 'fixed',
      data: [
        {
          value: value,
          symbol: 'image://' + img1.b,
        },
        {
          value: value,
          symbol: 'image://' + img2.b,
        },
        {
          value: value,
          symbol: 'image://' + img3.b,
        },
        {
          value: value,
          symbol: 'image://' + img4.b,
        },
        {
          value: value,
          symbol: 'image://' + img5.b,
        },
      ],
    },
    {
      z: 6,
      type: 'pictorialBar',

      symbolSize: ['30', '30'],

      animation: true,
      symbolRepeat: 'fixed',
      symbolClip: true,
      symbolPosition: 'start',
      symbolOffset: [0, 0],
      data: [
        {
          value: 60,
          symbol: 'image://' + img1.a,
        },
        {
          value: 85,
          symbol: 'image://' + img2.a,
        },
        {
          value: 105,
          symbol: 'image://' + img3.a,
        },
        {
          value: 130,
          symbol: 'image://' + img4.a,
        },
        {
          value: 185,
          symbol: 'image://' + img5.a,
        },
      ],
      label: {
        normal: {
          show: true,
          textStyle: {
            color: '#18fcff',
            fontSize: 14,
          },
          position: 'right',
          offset: [35, 0],
        },
      },
    },
    {
      type: 'bar',
    },
  ],
};
