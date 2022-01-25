# KDesign Charts

KDesign Charts 是基于金蝶的企业级设计系统 KDesign 实现的一套可视化图表库，简单好用。

## 特性

- 提供开箱即用的 丰富的图表类型。
- 基于 ECharts 开发，强劲的渲染引擎。
- 优雅专业的可视化设计。
- 全面的主题化定制。

## 兼容环境

- 现代浏览器和 IE11,移动端

## 安装

### 使用 npm 或 yarn 安装

```bash
$ npm install @kdcloudone/charts --save
# 或者
$ yarn add @kdcloudone/charts
```

## 示例

```js
import React from 'react';
import { DefaultOption } from './data/area';
import * as echarts from 'echarts';
import ReactECharts from 'echarts-for-react';
import defaultTheme from '@kingdee-ui/charts/theme/echarts-theme-default.js';
function kcharts() {
  echarts.registerTheme('defaultTheme', defaultTheme);
  return (
    <div>
      <ReactECharts
        option={DefaultOption}
        theme={'defaultTheme'}
        style={{ height: 320 * 2 + 'px' }}
      />
    </div>
  );
}

export default kcharts;
```

### 浏览器引入

在浏览器中使用 `script` 和 `link` 标签直接引入文件。

使用：

```html
<script src="echarts.js"></script>
<!-- 引入 vintage 主题 -->
<script src="theme/vintage.js"></script>
<script>
  // 第二个参数可以指定前面引入的主题
  var chart = echarts.init(document.getElementById('main'), 'vintage');
  chart.setOption({
      ...
  });
</script>
```

## License

KDesign Charts 使用了 Apache License, Version 2.0. 详细 license 请查看 [LICENSE]()
