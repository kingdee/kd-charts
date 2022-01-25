import React from 'react';
import DefaultOption from './data/grouped_bullet';
import * as echarts from 'echarts';
import defaultTheme from '@kingdee-ui/charts/theme/echarts-theme-default.js';
import ReactECharts from 'echarts-for-react';
function index() {
  echarts.registerTheme('defaultTheme', defaultTheme);
  return (
    <div>
      <ReactECharts
        option={DefaultOption}
        theme={'defaultTheme'}
        style={{ width: '100%', height: 336 + 'px' }}
      />
    </div>
  );
}

export default index;
