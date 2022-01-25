import React from 'react';
import DefaultOption from './data/pictorialBar';
import ReactECharts from 'echarts-for-react';
function index() {
  return (
    <div>
      <ReactECharts
        option={DefaultOption}
        style={{ width: 800 + 'px', height: 400 + 'px' }}
      />
    </div>
  );
}

export default index;
