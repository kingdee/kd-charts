import React from 'react';
import graphOption from './data/graph';
import ReactECharts from 'echarts-for-react';
function index() {
  return (
    <div>
      <ReactECharts option={graphOption} style={{ height: 320 * 3 + 'px' }} />
    </div>
  );
}

export default index;
