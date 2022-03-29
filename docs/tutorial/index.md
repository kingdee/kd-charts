# 快速上手

## 简介

基于 echarts 皮肤功能开发，同步最新的 KDesign 可视化设计规范，目前拥有四套主题可供选择。

## 兼容性

我们对主题文件做了兼容处理，echarts4.X 和 echarts5.X 使用方法一样，效果一样。

## 安装

通过 npm 或 yarn 命令安装

```bash
# npm
$ npm install @kdcloudjs/kd-charts -S --registry=http://npm.kingdee.com


# yarn
$ yarn add @kdcloudjs/kd-charts -S --registry=http://npm.kingdee.com
```

## 快速上手

```bash
import React from 'react';
import * as echarts from 'echarts';
import ReactECharts from 'echarts-for-react';
import defaultTheme from '@kdcloudjs/kd-charts/theme/echarts-theme-default.js';//引入主题
const DefaultOption = {
    xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    },
    yAxis: {
        type: 'value',
        name: '单据消息订阅',
    },
    series: [
        {
            data: [120, 200, 150, 80, 70, 110, 130],
            type: 'bar',
            name: '生活费',
        },
    ]
};

function kcharts() {
  echarts.registerTheme('defaultTheme', defaultTheme);
  return (
    <div>
      <ReactECharts
        option={DefaultOption}
        theme={'defaultTheme'}
        style={{height: 320 * 2 + 'px' }}
      />
    </div>
  );
}

export default kcharts;
```
