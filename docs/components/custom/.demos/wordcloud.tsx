import React from 'react';
import DefaultOption from './data/wordcloud';
import ReactECharts from 'echarts-for-react';
require('echarts-wordcloud');
function index() {
  return (
    <div>
      <ReactECharts
        option={DefaultOption}
        style={{ width: '100%', height: 650 + 'px' }}
      />
    </div>
  );
}

export default index;
