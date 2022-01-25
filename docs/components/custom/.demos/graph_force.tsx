import React from 'react';
import graphOption from './data/graph_force';
import ReactECharts from 'echarts-for-react';
function index() {
  return (
    <div>
      <ReactECharts
        option={graphOption}
        style={{ width: '100%', height: 380 * 2 + 'px' }}
      />
    </div>
  );
}

export default index;
