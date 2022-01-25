# 所有图表

```jsx
/**
 * inline: true
 */

import { useReactive } from 'ahooks';
import React, { useState, useEffect, useCallback } from 'react';
import basicBarOption from '../components/bar/.demos/data/basicBarOption';
import { DefaultOption as BiDirectional } from '../components/bar/.demos/data/biDirectional';
import { DefaultOption as grouped } from '../components/bar/.demos/data/grouped';
import { DefaultOption as horizontal } from '../components/bar/.demos/data/horizontal';
import { DefaultOption as stacked } from '../components/bar/.demos/data/stacked';

import { DefaultOption as area } from '../components/line/.demos/data/area';
import { DefaultOption as area_basic } from '../components/line/.demos/data/basic';
import { DefaultOption as smooth } from '../components/line/.demos/data/smooth';
import { DefaultOption as stacked_area } from '../components/line/.demos/data/stacked-area';
import { DefaultOption as stacked_line } from '../components/line/.demos/data/stacked-line';
import { DefaultOption as step } from '../components/line/.demos/data/step';

import { DefaultOption as linebar_basic } from '../components/linebar/.demos/data/basic';
import { DefaultOption as stepbar } from '../components/linebar/.demos/data/stepbar';

import { DefaultOption as donut } from '../components/pie/.demos/data/donut';
import { DefaultOption as donut_basic } from '../components/pie/.demos/data/basic';
import { DefaultOption as nested } from '../components/pie/.demos/data/nested';
import { DefaultOption as nightingale } from '../components/pie/.demos/data/nightingale';
import { DefaultOption as rose } from '../components/pie/.demos/data/rose';

import { DefaultOption as state_basic } from '../components/gauge/.demos/data/basic';
import { DefaultOption as statetOption } from '../components/gauge/.demos/data/state';

import { DefaultOption as radar_basic } from '../components/radar/.demos/data/basic';
import { DefaultOption as circle } from '../components/radar/.demos/data/circle';

import { DefaultOption as scatter_basic } from '../components/scatter/.demos/data/basic';
import { DefaultOption as scatter_bubble } from '../components/scatter/.demos/data/bubble';

import { DefaultOption as funnel_basic } from '../components/funnel/.demos/data/basic';

import { DefaultOption as bubble } from '../components/map/.demos/data/bubble';
import { DefaultOption as choropleth } from '../components/map/.demos/data/choropleth';

import * as echarts from 'echarts';
import ReactECharts from 'echarts-for-react';
import { Radio, Switch } from '@kingdee-ui/kui';
import '@kingdee-ui/kui/dist/kui.css';
import defaultTheme from '@kingdee-ui/charts/theme/echarts-theme-default.js';
import redTheme from '@kingdee-ui/charts/theme/echarts-theme-red.js';
import naturalTheme from '@kingdee-ui/charts/theme/echarts-theme-natural.js';
import scienceTheme from '@kingdee-ui/charts/theme/echarts-theme-science.js';
import defaultThemeDark from '@kingdee-ui/charts/theme/echarts-theme-default-dark.js';
import redThemeDark from '@kingdee-ui/charts/theme/echarts-theme-red-dark.js';
import naturalThemeDark from '@kingdee-ui/charts/theme/echarts-theme-natural-dark.js';
import scienceThemeDark from '@kingdee-ui/charts/theme/echarts-theme-science-dark.js';

export default function() {
  let defaultThemeList = [
    { theme: 'defaultTheme', name: '常规色板' },
    { theme: 'redTheme', name: '红火夏日' },
    { theme: 'naturalTheme', name: '自然舒适' },
    { theme: 'scienceTheme', name: '科技色板' },
  ];
  let darkThemeList = [
    { theme: 'defaultThemeDark', name: '常规色板' },
    { theme: 'redThemeDark', name: '红火夏日' },
    { theme: 'naturalThemeDark', name: '自然舒适' },
    { theme: 'scienceThemeDark', name: '科技色板' },
  ];
  const state = useReactive({
    Theme: 'defaultTheme',
    checked: false,
    ThemeList: defaultThemeList,
  });

  const onChange = function(e) {
    state.Theme = e.target.value;
  };

  const switchOnChange = useCallback(
    checked => {
      state.checked = checked;
      state.ThemeList = checked ? darkThemeList : defaultThemeList;
      state.Theme = checked
        ? darkThemeList[0].theme
        : defaultThemeList[0].theme;
    },
    [state.checked],
  );

  echarts.registerTheme('defaultTheme', defaultTheme);
  echarts.registerTheme('redTheme', redTheme);
  echarts.registerTheme('naturalTheme', naturalTheme);
  echarts.registerTheme('scienceTheme', scienceTheme);

  echarts.registerTheme('defaultThemeDark', defaultThemeDark);
  echarts.registerTheme('redThemeDark', redThemeDark);
  echarts.registerTheme('naturalThemeDark', naturalThemeDark);
  echarts.registerTheme('scienceThemeDark', scienceThemeDark);
  echarts.registerMap(
    'china',
    require('../../src/theme/src/common/map/json/china.json'),
  ); //将地图数据注册到echart对象上
  return (
    <>
      <div className="markdown" style={{ padding: '20px' }}>
        <Switch
          onChange={switchOnChange}
          checkedChildren="深色模式"
          unCheckedChildren="浅色模式"
          size={'large'}
          style={{ marginRight: '20px' }}
        />

        <Radio.Group
          onChange={onChange}
          value={state.Theme}
          style={{ display: 'inline-block' }}
        >
          {state.ThemeList.map(number => (
            <Radio value={number.theme} radioType="square" key={number.name}>
              {number.name}
            </Radio>
          ))}
        </Radio.Group>

        <h2 id="柱状图">柱状图</h2>

        <div
          class="gallery-item-box"
          style={{
            gridTemplateColumns: 'repeat(3,33.3333%)',
            marginTop: '20px',
          }}
        >
          <div className="gallery-item-box-li">
            <ReactECharts
              option={basicBarOption}
              theme={state.Theme}
              style={{ height: 320 + 'px' }}
            />
            <p style={{ color: '#293c55', margin: '0', marginTop: '12px' }}>
              <a href="/charts/components/bar/basic">基础柱状图</a>
            </p>
          </div>
          <div className="gallery-item-box-li">
            <ReactECharts
              option={BiDirectional}
              theme={state.Theme}
              style={{ height: 320 + 'px' }}
            />
            <p style={{ color: '#293c55', margin: '0', marginTop: '12px' }}>
              <a href="/charts/components/bar/bi-directional">区间柱状图</a>
            </p>
          </div>
          <div className="gallery-item-box-li">
            <ReactECharts
              option={grouped}
              theme={state.Theme}
              style={{ height: 320 + 'px' }}
            />
            <p style={{ color: '#293c55', margin: '0', marginTop: '12px' }}>
              <a href="/charts/components/bar/grouped">分组柱状图</a>
            </p>
          </div>
          <div className="gallery-item-box-li">
            <ReactECharts
              option={horizontal}
              theme={state.Theme}
              style={{ height: 320 + 'px' }}
            />
            <p style={{ color: '#293c55', margin: '0', marginTop: '12px' }}>
              <a href="/charts/components/bar/horizontal">横向柱状图</a>
            </p>
          </div>
          <div className="gallery-item-box-li">
            <ReactECharts
              option={stacked}
              theme={state.Theme}
              style={{ height: 320 + 'px' }}
            />
            <p style={{ color: '#293c55', margin: '0', marginTop: '12px' }}>
              <a href="/charts/components/bar/stacked">堆叠柱状图</a>
            </p>
          </div>
        </div>

        <h2 id="折线图">折线图</h2>

        <div
          class="gallery-item-box"
          style={{ gridTemplateColumns: 'repeat(3,33.3333%)' }}
        >
          <div className="gallery-item-box-li">
            <ReactECharts
              option={area_basic}
              theme={state.Theme}
              style={{ height: 320 + 'px' }}
            />
            <p style={{ color: '#293c55', margin: '0', marginTop: '12px' }}>
              <a href="/charts/components/line/basic">基础折线图</a>
            </p>
          </div>
          <div className="gallery-item-box-li">
            <ReactECharts
              option={smooth}
              theme={state.Theme}
              style={{ height: 320 + 'px' }}
            />
            <p style={{ color: '#293c55', margin: '0', marginTop: '12px' }}>
              <a href="/charts/components/line/smooth">曲线图</a>
            </p>
          </div>
          <div className="gallery-item-box-li">
            <ReactECharts
              option={area}
              theme={state.Theme}
              style={{ height: 320 + 'px' }}
            />
            <p style={{ color: '#293c55', margin: '0', marginTop: '12px' }}>
              <a href="/charts/components/line/area">面积图</a>
            </p>
          </div>
          <div className="gallery-item-box-li">
            <ReactECharts
              option={stacked_area}
              theme={state.Theme}
              style={{ height: 320 + 'px' }}
            />
            <p style={{ color: '#293c55', margin: '0', marginTop: '12px' }}>
              <a href="/charts/components/line/stacked-area">堆叠面积图</a>
            </p>
          </div>
          <div className="gallery-item-box-li">
            <ReactECharts
              option={stacked_line}
              theme={state.Theme}
              style={{ height: 320 + 'px' }}
            />
            <p style={{ color: '#293c55', margin: '0', marginTop: '12px' }}>
              <a href="/charts/components/line/stacked-line">堆叠折线图</a>
            </p>
          </div>
          <div className="gallery-item-box-li">
            <ReactECharts
              option={step}
              theme={state.Theme}
              style={{ height: 320 + 'px' }}
            />
            <p style={{ color: '#293c55', margin: '0', marginTop: '12px' }}>
              <a href="/charts/components/line/step">阶梯图</a>
            </p>
          </div>
        </div>

        <div className="markdown">
          <h2 id="折线柱状图">折线柱状图</h2>
        </div>
        <div
          class="gallery-item-box"
          style={{ gridTemplateColumns: 'repeat(3,33.3333%)' }}
        >
          <div className="gallery-item-box-li">
            <ReactECharts
              option={linebar_basic}
              theme={state.Theme}
              style={{ height: 320 + 'px' }}
            />
            <p style={{ color: '#293c55', margin: '0', marginTop: '12px' }}>
              <a href="/charts/components/linebar/basic">基础折线柱状图</a>
            </p>
          </div>
          <div className="gallery-item-box-li">
            <ReactECharts
              option={stepbar}
              theme={state.Theme}
              style={{ height: 320 + 'px' }}
            />
            <p style={{ color: '#293c55', margin: '0', marginTop: '12px' }}>
              <a href="/charts/components/linebar/stepbar">阶梯柱状图</a>
            </p>
          </div>
        </div>

        <h2 id="饼图">饼图</h2>

        <div
          class="gallery-item-box"
          style={{ gridTemplateColumns: 'repeat(3,33.3333%)' }}
        >
          <div className="gallery-item-box-li">
            <ReactECharts
              option={donut_basic}
              theme={state.Theme}
              style={{ height: 320 + 'px' }}
            />
            <p style={{ color: '#293c55', margin: '0', marginTop: '12px' }}>
              <a href="/charts/components/pie/basic">饼图</a>
            </p>
          </div>
          <div className="gallery-item-box-li">
            <ReactECharts
              option={donut}
              theme={state.Theme}
              style={{ height: 320 + 'px' }}
            />
            <p style={{ color: '#293c55', margin: '0', marginTop: '12px' }}>
              <a href="/charts/components/pie/donut">环形图</a>
            </p>
          </div>
          <div className="gallery-item-box-li">
            <ReactECharts
              option={nested}
              theme={state.Theme}
              style={{ height: 320 + 'px' }}
            />
            <p style={{ color: '#293c55', margin: '0', marginTop: '12px' }}>
              <a href="/charts/components/pie/nested">嵌套饼图</a>
            </p>
          </div>
          <div className="gallery-item-box-li">
            <ReactECharts
              option={nightingale}
              theme={state.Theme}
              style={{ height: 320 + 'px' }}
            />
            <p style={{ color: '#293c55', margin: '0', marginTop: '12px' }}>
              <a href="/charts/components/pie/nightingale">南丁格尔玫瑰图</a>
            </p>
          </div>
        </div>
        <div
          class="gallery-item-box"
          style={{ gridTemplateColumns: 'repeat(3,33.3333%)' }}
        >
          <div className="gallery-item-box-li">
            <ReactECharts
              option={rose}
              theme={state.Theme}
              style={{ height: 320 + 'px' }}
            />
            <p style={{ color: '#293c55', margin: '0', marginTop: '12px' }}>
              <a href="/charts/components/pie/rose">同色系玫瑰图</a>
            </p>
          </div>
        </div>

        <h2 id="仪表盘">仪表盘</h2>

        <div
          class="gallery-item-box"
          style={{ gridTemplateColumns: 'repeat(3,33.3333%)' }}
        >
          <div className="gallery-item-box-li">
            <ReactECharts
              option={state_basic}
              theme={state.Theme}
              style={{ height: 320 + 'px' }}
            />
            <p style={{ color: '#293c55', margin: '0', marginTop: '12px' }}>
              <a href="/charts/components/gauge/basic">基础仪表盘</a>
            </p>
          </div>
          <div className="gallery-item-box-li">
            <ReactECharts
              option={statetOption}
              theme={state.Theme}
              style={{ height: 320 + 'px' }}
            />
            <p style={{ color: '#293c55', margin: '0', marginTop: '12px' }}>
              <a href="/charts/components/gauge/state">状态仪表盘</a>
            </p>
          </div>
        </div>

        <h2 id="雷达图">雷达图</h2>

        <div
          class="gallery-item-box"
          style={{ gridTemplateColumns: 'repeat(3,33.3333%)' }}
        >
          <div className="gallery-item-box-li">
            <ReactECharts
              option={radar_basic}
              theme={state.Theme}
              style={{ height: 320 + 'px' }}
            />
            <p style={{ color: '#293c55', margin: '0', marginTop: '12px' }}>
              <a href="/charts/components/radar/basic">基础雷达图</a>
            </p>
          </div>
          <div className="gallery-item-box-li">
            <ReactECharts
              option={circle}
              theme={state.Theme}
              style={{ height: 320 + 'px' }}
            />
            <p style={{ color: '#293c55', margin: '0', marginTop: '12px' }}>
              <a href="/charts/components/radar/circle">圆形雷达图</a>
            </p>
          </div>
        </div>

        <h2 id="散点图">散点图</h2>

        <div
          class="gallery-item-box"
          style={{ gridTemplateColumns: 'repeat(3,33.3333%)' }}
        >
          <div className="gallery-item-box-li">
            <ReactECharts
              option={scatter_basic}
              theme={state.Theme}
              style={{ height: 320 + 'px' }}
            />
            <p style={{ color: '#293c55', margin: '0', marginTop: '12px' }}>
              <a href="/charts/components/scatter/basic">散点图</a>
            </p>
          </div>
          <div className="gallery-item-box-li">
            <ReactECharts
              option={scatter_bubble}
              theme={state.Theme}
              style={{ height: 320 + 'px' }}
            />
            <p style={{ color: '#293c55', margin: '0', marginTop: '12px' }}>
              <a href="/charts/components/scatter/bubble">气泡图</a>
            </p>
          </div>
        </div>

        <h2 id="漏斗图">漏斗图</h2>

        <div
          class="gallery-item-box"
          style={{ gridTemplateColumns: 'repeat(3,33.3333%)' }}
        >
          <div className="gallery-item-box-li">
            <ReactECharts
              option={funnel_basic}
              theme={state.Theme}
              style={{ height: 320 + 'px' }}
            />
            <p style={{ color: '#293c55', margin: '0', marginTop: '12px' }}>
              <a href="/charts/components/funnel/basic">基础漏斗图</a>
            </p>
          </div>
        </div>

        <h2 id="地图">地图</h2>

        <div
          class="gallery-item-box"
          style={{ gridTemplateColumns: 'repeat(3,33.3333%)' }}
        >
          <div className="gallery-item-box-li">
            <ReactECharts
              option={bubble}
              theme={state.Theme}
              style={{ height: 320 + 'px' }}
            />
            <p style={{ color: '#293c55', margin: '0', marginTop: '12px' }}>
              <a href="/charts/components/map/bubble">气泡地图</a>
            </p>
          </div>
          <div className="gallery-item-box-li">
            <ReactECharts
              option={choropleth}
              theme={state.Theme}
              style={{ height: 320 + 'px' }}
            />
            <p style={{ color: '#293c55', margin: '0', marginTop: '12px' }}>
              <a href="/charts/components/map/choropleth">分级统计地图</a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
```
