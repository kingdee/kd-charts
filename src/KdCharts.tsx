import React from 'react';
import echarts from 'echarts';
export interface kdChartsProps extends echarts.EChartTitleOption {
  className: string;
}
const InternalKdCharts: React.ForwardRefRenderFunction<
  HTMLElement,
  kdChartsProps
> = (props: kdChartsProps, ref: unknown) => {
  const innerRef = React.useRef(null);
  const chartsRef = (ref as any) || innerRef;

  return <div ref={chartsRef} className={props.className}></div>;
};

const KuiCharts = React.forwardRef<HTMLElement, kdChartsProps>(
  InternalKdCharts,
);
KuiCharts.displayName = 'kui-charts';

export default KuiCharts;
