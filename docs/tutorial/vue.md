# 在 vue 中如何使用

## 快速上手

搭配 vue-echarts 使用我们的组件库

```bash
<style>
    .echarts {
        width: 100%;
        height: 100%;
    }
</style>

<template>
  <v-chart theme="defaultTheme" :options="polar"/>
</template>

<script>
import ECharts from 'vue-echarts/components/ECharts'
import defaultTheme from '@kingdee-ui/charts/theme/echarts-theme-default.js';
ECharts.registerTheme('defaultTheme', defaultTheme); //引入主题
export default {
  components: {
    'v-chart': ECharts
  },
  data () {
    return {
      polar: {
        title : {
            text: '会员数据统计',
            subtext: '动态数据',
            x:'center'
        },
        series : [
            {
                name: '访问来源',
                type: 'pie',
                radius : '55%',
                center: ['50%', '60%'],
                data:[
                    {value:335, name:'微信访问'},
                    {value:310, name:'公众号访问'},
                    {value:234, name:'扫码进入'},
                    {value:135, name:'分享进入'},
                    {value:1548, name:'搜索访问'}
                ],
            }
         ]
       }
    }
  }
}
</script>
```
