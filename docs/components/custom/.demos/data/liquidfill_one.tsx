let angle = 0; //角度，用来做简单的动画效果的

function getCirlPoint(x0, y0, r, angle) {
  let x1 = x0 + r * Math.cos((angle * Math.PI) / 180);
  let y1 = y0 + r * Math.sin((angle * Math.PI) / 180);
  return {
    x: x1,
    y: y1,
  };
}
export default {
  backgroundColor: '#020f18',
  series: [
    {
      name: '内线',
      type: 'custom',
      coordinateSystem: 'none',
      renderItem: function(params, api) {
        console.log(Math.min(api.getWidth(), api.getHeight()) / 2.3);
        return {
          type: 'arc',
          shape: {
            cx: api.getWidth() / 2,
            cy: api.getHeight() / 2,
            r: Math.min(api.getWidth(), api.getHeight()) / 2.3,
            startAngle: ((0 + angle) * Math.PI) / 180,
            endAngle: ((90 + angle) * Math.PI) / 180,
          },
          style: {
            stroke: '#0ff',
            fill: 'transparent',
            lineWidth: 3.5,
          },
          silent: true,
        };
      },
      data: [0],
    },
    {
      name: '内线',
      type: 'custom',
      coordinateSystem: 'none',
      renderItem: function(params, api) {
        return {
          type: 'arc',
          shape: {
            cx: api.getWidth() / 2,
            cy: api.getHeight() / 2,
            r: Math.min(api.getWidth(), api.getHeight()) / 2.3,
            startAngle: ((180 + angle) * Math.PI) / 180,
            endAngle: ((270 + angle) * Math.PI) / 180,
          },
          style: {
            stroke: '#0ff',
            fill: 'transparent',
            lineWidth: 3.5,
          },
          silent: true,
        };
      },
      data: [0],
    },
    {
      name: '外线',
      type: 'custom',
      coordinateSystem: 'none',
      renderItem: function(params, api) {
        return {
          type: 'arc',
          shape: {
            cx: api.getWidth() / 2,
            cy: api.getHeight() / 2,
            r: Math.min(api.getWidth(), api.getHeight()) / 2.1,
            startAngle: ((270 + -angle) * Math.PI) / 180,
            endAngle: ((40 + -angle) * Math.PI) / 180,
          },
          style: {
            stroke: '#0ff',
            fill: 'transparent',
            lineWidth: 3.5,
          },
          silent: true,
        };
      },
      data: [0],
    },
    {
      name: '外线',
      type: 'custom',
      coordinateSystem: 'none',
      renderItem: function(params, api) {
        return {
          type: 'arc',
          shape: {
            cx: api.getWidth() / 2,
            cy: api.getHeight() / 2,
            r: Math.min(api.getWidth(), api.getHeight()) / 2.1,
            startAngle: ((90 + -angle) * Math.PI) / 180,
            endAngle: ((220 + -angle) * Math.PI) / 180,
          },
          style: {
            stroke: '#0ff',
            fill: 'transparent',
            lineWidth: 3.5,
          },
          silent: true,
        };
      },
      data: [0],
    },
    {
      name: '线头点',
      type: 'custom',
      coordinateSystem: 'none',
      renderItem: function(params, api) {
        let x0 = api.getWidth() / 2;
        let y0 = api.getHeight() / 2;
        let r = Math.min(api.getWidth(), api.getHeight()) / 2.1;
        let point = getCirlPoint(x0, y0, r, 90 + -angle);
        return {
          type: 'circle',
          shape: {
            cx: point.x,
            cy: point.y,
            r: 5,
          },
          style: {
            stroke: '#0ff', //绿
            fill: '#0ff',
          },
          silent: true,
        };
      },
      data: [0],
    },
    {
      name: '线头点',
      type: 'custom',
      coordinateSystem: 'none',
      renderItem: function(params, api) {
        let x0 = api.getWidth() / 2;
        let y0 = api.getHeight() / 2;
        let r = Math.min(api.getWidth(), api.getHeight()) / 2.1;
        let point = getCirlPoint(x0, y0, r, 270 + -angle);
        return {
          type: 'circle',
          shape: {
            cx: point.x,
            cy: point.y,
            r: 5,
          },
          style: {
            stroke: '#0ff', //绿
            fill: '#0ff',
          },
          silent: true,
        };
      },
      data: [0],
    },
    {
      type: 'liquidFill',
      radius: '78%',
      center: ['50%', '50%'],
      color: ['#0ff', '#0ff', '#0ff'], //水波
      data: [0.5, 0.5, 0.5], // data个数代表波浪数
      label: {
        normal: {
          show: false,
        },
      },
      backgroundStyle: {
        borderWidth: 1,
        color: 'transparent',
      },

      outline: {
        show: true,
        itemStyle: {
          borderColor: '#0ff',
          borderWidth: 2,
        },
        borderDistance: 3,
      },
    },
  ],
};
