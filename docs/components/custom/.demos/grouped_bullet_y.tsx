import React from 'react';
import DefaultOption from './data/grouped_bullet_y';
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
        style={{ width: '50%', height: 336 * 2 + 'px' }}
      />
    </div>
  );
}

export default index;
