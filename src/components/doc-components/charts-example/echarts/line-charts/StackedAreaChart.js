import React from 'react';
import FalconComponentCard from 'components/common/FalconComponentCard';
import { LineChart } from 'echarts/charts';
import {
  GridComponent,
  LegendComponent,
  TitleComponent,
  TooltipComponent
} from 'echarts/components';
import * as echarts from 'echarts/core';
import { CanvasRenderer } from 'echarts/renderers';
import { tooltipFormatter } from 'helpers/echart-utils';
import { rgbaColor } from 'helpers/utils';
import { useAppContext } from 'providers/AppProvider';
import ReactEchart from 'components/common/ReactEchart';

echarts.use([
  TitleComponent,
  TooltipComponent,
  GridComponent,
  LineChart,
  CanvasRenderer,
  LegendComponent
]);

const chartCode = `function ChartOptions() {
  const { getThemeColor } = useAppContext();
  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

  const getOption = () => ({
    tooltip: {
      trigger: 'axis',
      padding: [7, 10],
      backgroundColor: getThemeColor('gray-100'),
      borderColor: getThemeColor('gray-300'),
      textStyle: getThemeColor('gray-1100'),
      borderWidth: 1,
      formatter: tooltipFormatter,
      transitionDuration: 0,
      axisPointer: {
        type: 'none'
      }
    },
    xAxis: {
      type: 'category',
      data: days,
      boundaryGap: false,
      axisLine: {
        lineStyle: {
          color: getThemeColor('gray-300')
        }
      },
      axisTick: { show: false },
      axisLabel: {
        color: getThemeColor('gray-400'),
        formatter: value => value.substring(0, 3),
        margin: 15
      },
      splitLine: {
        show: false
      }
    },
    yAxis: {
      type: 'value',
      splitLine: {
        lineStyle: {
          type: 'dashed',
          color: getThemeColor('gray-200')
        }
      },
      boundaryGap: false,
      axisLabel: {
        show: true,
        color: getThemeColor('gray-400'),
        margin: 15
      },
      axisTick: { show: false },
      axisLine: { show: false }
    },
    series: [
      {
        name: 'Matcha Latte',
        type: 'line',
        symbolSize: 6,
        itemStyle: {
          color: getThemeColor('white'),
          borderColor: getThemeColor('info'),
          borderWidth: 2
        },
        lineStyle: {
          color: getThemeColor('info')
        },
        symbol: 'circle',
        stack: 'product',
        data: [120, 132, 101, 134, 90, 230, 210],
        areaStyle: {
          color: rgbaColor(getThemeColor('info'), 0.3)
        }
      },
      {
        name: 'Milk Tea',
        type: 'line',
        symbolSize: 10,
        itemStyle: {
          color: getThemeColor('white'),
          borderColor: getThemeColor('success'),
          borderWidth: 2
        },
        lineStyle: {
          color: getThemeColor('success')
        },
        symbol: 'circle',
        stack: 'product',
        data: [220, 182, 191, 234, 290, 330, 310],
        areaStyle: {
          color: rgbaColor(getThemeColor('success'), 0.3)
        }
      },
      {
        name: 'Cheese Cocoa',
        type: 'line',
        symbolSize: 10,
        itemStyle: {
          color: getThemeColor('white'),
          borderColor: getThemeColor('danger'),
          borderWidth: 2
        },
        lineStyle: {
          color: getThemeColor('danger')
        },
        symbol: 'circle',
        stack: 'product',
        data: [150, 232, 201, 154, 190, 330, 410],
        areaStyle: {
          color: rgbaColor(getThemeColor('danger'), 0.3)
        }
      },
      {
        name: 'Cheese Brownie',
        type: 'line',
        symbolSize: 10,
        itemStyle: {
          color: getThemeColor('white'),
          borderColor: getThemeColor('warning'),
          borderWidth: 2
        },
        lineStyle: {
          color: getThemeColor('warning')
        },
        symbol: 'circle',
        stack: 'product',
        data: [320, 332, 301, 334, 390, 330, 320],
        areaStyle: {
          color: rgbaColor(getThemeColor('warning'), 0.3)
        }
      },
      {
        name: 'Matcha Cocoa',
        type: 'line',
        symbolSize: 10,
        itemStyle: {
          color: getThemeColor('white'),
          borderColor: getThemeColor('primary'),
          borderWidth: 2
        },
        lineStyle: {
          color: getThemeColor('primary')
        },
        symbol: 'circle',
        stack: 'product',
        data: [820, 932, 901, 934, 1290, 1330, 1320],
        areaStyle: {
          color: rgbaColor(getThemeColor('primary'), 0.3)
        }
      }
    ],
    grid: { right: 10, left: 5, bottom: 5, top: 8, containLabel: true }
  });
  return (
    <ReactEchart
      echarts={echarts}
      option={getOption()}
      style={{ height: '18.75rem' }}
    />
  );
}
`;

const StackedAreaChart = () => {
  return (
    <FalconComponentCard>
      <FalconComponentCard.Header
        title="Stacked area line chart"
        light={false}
      />
      <FalconComponentCard.Body
        code={chartCode}
        language="jsx"
        scope={{
          ReactEchart,
          echarts,
          useAppContext,
          rgbaColor,
          tooltipFormatter
        }}
      />
    </FalconComponentCard>
  );
};

export default StackedAreaChart;
