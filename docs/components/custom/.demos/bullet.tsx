import React from 'react';
import DefaultOption from './data/bullet';
import ReactECharts from 'echarts-for-react';
function index() {
  return (
    <div>
      <ReactECharts option={DefaultOption} style={{ height: 150 + 'px' }} />
    </div>
  );
}

export default index;
