export default {
  backgroundColor: '#030833',
  series: [
    {
      type: 'tree',
      data: [
        {
          name: 'root',
          children: [
            {
              name: 'Child A',
              children: [
                {
                  name: 'Leaf C',
                },
                {
                  name: 'Leaf D',
                },
                {
                  name: 'Leaf E',
                },
                {
                  name: 'Leaf F',
                },
              ],
            },
            {
              name: 'Child B',
              children: [
                {
                  name: 'Leaf G',
                },
                {
                  name: 'Leaf H',
                },
              ],
            },
            {
              name: 'Child D',
            },
            {
              name: 'Child F',
              children: [
                {
                  name: 'Leaf J',
                },
                {
                  name: 'Leaf K',
                },
              ],
            },
          ],
        },
      ],
      label: {
        color: '#1365e5',
        position: ['50%', '50%'],
        distance: 0,
        align: 'center',
        verticalAlign: 'bottom',
      },
      orient: 'TB',
      symbol: 'rect',
      symbolSize: 75,
      edgeShape: 'polyline',
      itemStyle: {
        color: '#0a0f40',
        borderColor: '#11296f',
      },
      lineStyle: {
        color: '#244ba1',
      },
    },
  ],
};
