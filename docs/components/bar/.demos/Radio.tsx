import React from 'react';
import { Radio } from 'antd';
import { DefaultOption } from './data/biDirectional';
import 'antd/dist/antd.css';
import * as echarts from 'echarts';
import ReactECharts from 'echarts-for-react';
import { useReactive } from 'ahooks';

function RadioIndex(props) {
  const { data } = props;
  const state = useReactive({
    theme: 'defaultTheme',
  });
  const onChange = e => {
    state.theme = e.target.value;
  };
  return (
    <div>
      <Radio.Group
        onChange={onChange}
        defaultValue="defaultTheme"
        buttonStyle="solid"
      >
        <Radio.Button value="defaultTheme">常规色板</Radio.Button>
        <Radio.Button value="redTheme">红火夏日</Radio.Button>
        <Radio.Button value="naturalTheme">自然舒适</Radio.Button>
        <Radio.Button value="scienceTheme">科技色板</Radio.Button>
        {/* <Radio.Button value="winterTheme">冰霜冬季</Radio.Button>
        <Radio.Button value="macaroonTheme">马卡龙</Radio.Button> */}
      </Radio.Group>
      <ReactECharts
        option={data}
        theme={state.theme}
        style={{ height: 320 * 2 + 'px' }}
      />
    </div>
  );
}

export default RadioIndex;
