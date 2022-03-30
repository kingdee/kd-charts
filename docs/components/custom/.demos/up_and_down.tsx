import React from 'react';
import DefaultOption from './data/up_and_down';
import * as echarts from 'echarts';
import defaultTheme from '@kdcloudjs/kd-charts/dist/echarts-theme-default.js';
import ReactECharts from 'echarts-for-react';
function index() {
  echarts.registerTheme('defaultTheme', defaultTheme);
  return (
    <div>
      <ReactECharts
        option={DefaultOption}
        theme={'defaultTheme'}
        style={{ width: '100%', height: 320 * 2 + 'px' }}
      />
    </div>
  );
}

export default index;
