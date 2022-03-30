import React from 'react';
import { DefaultOption } from './data/donut';
import * as echarts from 'echarts';
import ReactECharts from 'echarts-for-react';
import defaultTheme from '@kdcloudjs/kd-charts/theme/echarts-theme-default.js';
function index() {
  echarts.registerTheme('defaultTheme', defaultTheme);
  return (
    <div>
      <ReactECharts
        option={DefaultOption}
        theme={'defaultTheme'}
        style={{ width: 375 + 'px', height: 320 * 2 + 'px' }}
      />
    </div>
  );
}

export default index;
