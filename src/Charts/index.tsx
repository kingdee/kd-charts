import React, { useEffect, useRef } from 'react';
import * as echarts from 'echarts';
import defaultTheme from '../theme/src/echarts-theme-default';
import { default as neutralTheme } from '../theme/src/echarts-theme-neutral';
import { default as redTheme } from '../theme/src/echarts-theme-red';
import { default as naturalTheme } from '../theme/src/echarts-theme-natural';
import { default as scienceTheme } from '../theme/src/echarts-theme-science';
import { default as winterTheme } from '../theme/src/echarts-theme-winter';
import { default as macaroonTheme } from '../theme/src/echarts-theme-macaroon';
// import chinaJson from './../../theme/src/common/map/json/china.json'; //引入地图数据...

import { useReactive } from 'ahooks';
import ReactECharts from 'echarts-for-react';

export default (props: {
  option: any;
  notMerge: any;
  lazyUpdate: any;
  theme: any;
  onChartReadyCallback: any;
  EventsDict: any;
  opts: any;
  className: any;
  style: any;
}) => {
  const {
    option,
    notMerge,
    lazyUpdate,
    theme,
    onChartReadyCallback,
    EventsDict,
    opts,
    className,
    style,
  } = props;

  const state = useReactive({
    option: option,
  });
  const instance = useRef(null);

  echarts.registerTheme('defaultTheme', defaultTheme());
  echarts.registerTheme('neutralTheme', neutralTheme());
  echarts.registerTheme('redTheme', redTheme());
  echarts.registerTheme('naturalTheme', naturalTheme());
  echarts.registerTheme('scienceTheme', scienceTheme());
  echarts.registerTheme('winterTheme', winterTheme());
  echarts.registerTheme('macaroonTheme', macaroonTheme());
  echarts.registerMap(
    'china',
    require('../theme/src/common/map/json/china.json'),
  ); //将地图数据注册到echart对象上

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     option.animation = true;
  //     instance.current.getEchartsInstance().setOption(option, true);
  //     // console.log('option', instance.current.getEchartsInstance.setOption);
  //     // instance.current.setOption(option);
  //     state.option = option;
  //   }, 1000);
  //   return () => clearInterval(timer);
  // }, []);

  return (
    <ReactECharts
      ref={instance}
      className={className}
      option={option}
      notMerge={notMerge}
      lazyUpdate={lazyUpdate}
      theme={theme || 'defaultTheme'}
      onChartReady={onChartReadyCallback}
      onEvents={EventsDict}
      opts={opts}
      style={style}
    />
  );
};
