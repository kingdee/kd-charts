const nestedParentData = [
  //父级数据
  { value: 1548, name: '搜索引擎' },
  { value: 775, name: '直达' },
  { value: 679, name: '营销广告' },
];
const nestedChildData = [
  //子级数据
  { value: 1048, type: '百度', name: '搜索引擎' },
  { value: 775, type: '直达', name: '直达' },
  { value: 310, type: '邮件营销', name: '营销广告' },
  { value: 353, type: '谷歌', name: '搜索引擎' },
  { value: 234, type: '联盟广告', name: '营销广告' },
  { value: 147, type: '必应', name: '搜索引擎' },
  { value: 135, type: '视频广告', name: '营销广告' },
];
/**
 * 数据转换：将父子级数据对应起来，返回按父级顺序分类好的子级数据
 * @param childData 子级数据
 * @param parentData 父级数据
 */
const convertData = (childData, parentData) => {
  let res = [];
  let location = new Array(parentData.length);
  location.fill(0);
  childData.map(item => {
    let getParentindex = parentData.findIndex(parentItem => {
      return parentItem.name == item.name;
    });
    if (getParentindex == 0 && location[0] == 0) {
      res.push(item);
    } else if (location[getParentindex] == 0) {
      res.splice(
        location.reduce((total, num, index) => {
          if (index < getParentindex) {
            return total + num;
          } else {
            return total;
          }
        }) + 1,
        0,
        item,
      );
    } else {
      res.splice(
        location.reduce((total, num, index) => {
          if (index <= getParentindex) {
            return total + num;
          } else {
            return total;
          }
        }),
        0,
        item,
      );
    }
    location[getParentindex]++;
  });
  return res;
};
export const DefaultOption = {
  legend: {
    data: nestedParentData, // 设置显示图例为父级数据，非必选
  },
  tooltip: {
    trigger: 'item',
    formatter: function(params) {
      // 设置显示tooltip为父级或子级数据，必选
      return (
        (params.data.type ? params.data.type : params.data.name) +
        '&nbsp;&nbsp;' +
        params.value
      );
    },
  },
  series: [
    {
      name: '访问来源',
      type: 'pie', // echarts 图表类型， 必选
      selectedMode: 'single',
      radius: [0, '35%'],
      label: {
        position: 'inner', // 父级label在内部显示， 必选
      },
      labelLine: {
        show: false,
      },
      data: nestedParentData,
    },
    {
      name: '访问来源',
      type: 'pie',
      radius: ['40%', '50%'],
      data: convertData(nestedChildData, nestedParentData), // 子级数据格式转换，必选
      label: {
        normal: {
          formatter: function(params) {
            // 子级label正确显示， 必选
            return params.data.type;
          },
        },
      },
    },
  ],
};
