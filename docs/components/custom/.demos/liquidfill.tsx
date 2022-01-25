import React from 'react';
import graphOption from './data/liquidfill';
import ReactECharts from 'echarts-for-react';
import 'echarts-liquidfill';
function index() {
  return (
    <div>
      <ReactECharts
        option={graphOption}
        style={{ width: 820 + 'px', height: 380 + 'px' }}
      />
    </div>
  );
}

export default index;
