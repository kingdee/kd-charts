# 可视化脚手架

## 功能介绍

以 px 作为开发单位，适用于各种大屏幕的可视化项目，包括且不限于：

- 1920 x 1080（PC 电脑）
- 3840 x 2160（电视）
- 7680 x 2160（270 大屏）

在等比例屏幕上通过同比例缩放来适配屏幕，  
非等比例屏幕上通过居中缩放来显示所有内容。

## 安装

通过 npm 或 yarn 命令安装

```bash
# npm
$ npm i @kdcloudjs/kd-visualize -g


# yarn
$ yarn global add @kdcloudjs/kd-visualize
```

## 使用

```bash
$  kd-visualize create xxx(项目名称)
```

## 效果展示

<img src="/charts/demo/infor.png" height="257px" />

## 快速上手

### 目录说明

```markdown
├── package.json  
├── .umirc.ts  
├── .env  
├── dist  
├── mock  
├── public  
└── src  
    ├── .umi  
    ├── pages  
    ├── index.less  
    └── index.tsx  
 ├── components  
    └── services
```

### 根目录

### .umirc.ts

配置文件，包含 umi 内置功能和插件的配置。

### .env

环境变量。

比如：

    PORT=8888
    COMPRESS=none

### dist 目录

执行 `umi build` 后，产物默认会存放在这里。

### mock 目录

存储 mock 文件，此目录下所有 js 和 ts 文件会被解析为 mock 文件。

### public 目录

此目录下所有文件会被 copy 到输出路径。

### src 目录

### .umi 目录

临时文件目录，比如入口文件、路由等，都会被临时生成到这里。**不要提交 .umi 目录到 git 仓库，他们会在 umi dev 和 umi build 时被删除并重新生成。**

### services 目录

接口服务

### pages 目录

所有路由组件存放在这里。

### utils 目录

公共方法

### components

公共组件

## echarts 皮肤功能

```bash
<!-- 引入主题 -->
//常规色板
import defaultTheme from '@kdcloudjs/kd-charts/theme/echarts-theme-default.js';
//红火夏日
import redTheme from '@kdcloudjs/kd-charts/theme/echarts-theme-red.js';
//自然舒适
import naturalTheme from '@kdcloudjs/kd-charts/theme/echarts-theme-natural.js';
//科技色板
import scienceTheme from '@kdcloudjs/kd-charts/theme/echarts-theme-science.js';

//注册主题
echarts.registerTheme('defaultTheme', defaultTheme);
echarts.registerTheme('redTheme', redTheme);
echarts.registerTheme('naturalTheme', naturalTheme);
echarts.registerTheme('scienceTheme', scienceTheme);

//引入主题
<ReactECharts theme={'defaultTheme'} />

```

## 相关插件：

## 1、umi 插件

#### 端口设置

在<code>.env</code>文件中配置端口

#### 路由

应用都是单页应用，页面地址的跳转都是在浏览器端完成的，不会重新请求服务端获取 html， html 只在应用初始化时加载一次。所有页面由不同的组件构成，页面的切换其实就是不同组件的切换，你只需要在配置中把不同的路由路径和对应的组件关联上。

#### 配置路由

在<code>.umirc.ts</code>文件中配置，格式为路由信息的数组。
比如：

```bash
export default {
  routes: [
    { exact: true, path: '/', component: 'index' },
    { exact: true, path: '/user', component: 'user' },
  ],
}
```

## 2、react-scale-box

做大屏的数据可视化项目的时候，用此组件包裹可实现同比例缩放

```bash
npm i react-scale-box
or
yarn add react-scale-box
```

使用方式

```bash
import ScaleBox from 'react-scale-box';

...
render() {
    return (
      <ScaleBox width={1920} height={1080}>
        <div className={'screen'}>
          你的页面内容
        </div>
      </ScaleBox>
    )
  }

```

### props

width: 设计的页面宽度，默认 1920  
height: 设计的页面高度，默认 1080  
设定好后，就能保持这个比例展示你的内容

## 3、echarts-for-react

### Install

```bach
$ npm install --save echarts-for-react
$ npm install --save echarts
```

### Usage

```ts
import React from 'react';
import ReactECharts from 'echarts-for-react'; // or var ReactECharts = require('echarts-for-react');
<ReactECharts
  option={this.getOption()}
  notMerge={true}
  lazyUpdate={true}
  theme={'theme_name'}
  onChartReady={this.onChartReadyCallback}
  onEvents={EventsDict}
  opts={}
/>;
```

**With Echarts.js v5:**

```ts
import React from 'react';
import * as echarts from 'echarts';
```

**With Echarts.js v3 or v4:**

```ts
import React from 'react';
import echarts from 'echarts';
```

### Props of Component

- **`option`** (required, object)

the echarts option config, can see [https://echarts.apache.org/option.html#title](https://echarts.apache.org/option.html#title).

- **`notMerge`** (optional, object)

when `setOption`, not merge the data, default is `false`. See [https://echarts.apache.org/api.html#echartsInstance.setOption](https://echarts.apache.org/api.html#echartsInstance.setOption).

- **`lazyUpdate`** (optional, object)

when `setOption`, lazy update the data, default is `false`. See [https://echarts.apache.org/api.html#echartsInstance.setOption](https://echarts.apache.org/api.html#echartsInstance.setOption).

- **`style`** (optional, object)

the `style` of echarts div. `object`, default is {height: '300px'}.

- **`className`** (optional, string)

the `class` of echarts div. you can setting the css style of charts by class name.

- **`theme`** (optional, string)

the `theme` of echarts. `string`, should `registerTheme` before use it (theme object format: [https://github.com/ecomfe/echarts/blob/master/theme/dark.js](https://github.com/ecomfe/echarts/blob/master/theme/dark.js)). e.g.

```ts
// import echarts
import echarts from 'echarts';
...
// register theme object
echarts.registerTheme('my_theme', {
  backgroundColor: '#f4cccc'
});
...
// render the echarts use option `theme`
<ReactECharts
  option={this.getOption()}
  style={{height: '300px', width: '100%'}}
  className='echarts-for-echarts'
  theme='my_theme' />
```
