import React from 'react';
import basicBarOption from './data/basicBarOption';
import * as echarts from 'echarts';
import ReactECharts from 'echarts-for-react';
import defaultTheme from '@kingdee-ui/charts/theme/echarts-theme-default.js';

function charts() {
  echarts.registerTheme('defaultTheme', defaultTheme);
  return (
    <ReactECharts
      option={basicBarOption}
      theme={'defaultTheme'}
      style={{ height: '500px' }}
    />
  );
}

export default charts;
