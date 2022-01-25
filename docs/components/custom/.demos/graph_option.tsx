import React from 'react';
import graphOption from './data/graph_option';
import ReactECharts from 'echarts-for-react';
import 'echarts-liquidfill';
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
