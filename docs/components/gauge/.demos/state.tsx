import React from 'react';
import { DefaultOption } from './data/state';
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
        style={{ height: 320 * 2 + 'px' }}
      />

      <ReactECharts
        option={DefaultOption}
        theme={'defaultTheme'}
        style={{ width: 250 + 'px', height: 250 + 'px' }}
      />
    </div>
  );
}
export default index;
