import React from 'react';
import { DefaultOption } from './data/biDirectional';
import * as echarts from 'echarts';
import ReactECharts from 'echarts-for-react';
import defaultTheme from '@kdcloudjs/kd-charts/dist/echarts-theme-default.js';
function index() {
  echarts.registerTheme('defaultTheme', defaultTheme);
  return (
    <div>
      <ReactECharts
        option={DefaultOption}
        theme={'defaultTheme'}
        style={{ height: '500px' }}
      />
    </div>
  );
}

export default index;
