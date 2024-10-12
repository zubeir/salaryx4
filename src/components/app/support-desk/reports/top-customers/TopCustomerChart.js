import React from 'react';
import { LineChart } from 'echarts/charts';
import {
  GridComponent,
  LegendComponent,
  TitleComponent,
  TooltipComponent
} from 'echarts/components';
import * as echarts from 'echarts/core';
import { CanvasRenderer } from 'echarts/renderers';
import { getPosition, rgbaColor } from 'helpers/utils';
import PropTypes from 'prop-types';
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

const getOptions = (getThemeColor, data) => ({
  color: getThemeColor('gray-100'),
  tooltip: {
    trigger: 'item',
    padding: [7, 10],
    backgroundColor: getThemeColor('gray-100'),
    borderColor: getThemeColor('gray-300'),
    textStyle: { color: getThemeColor('gray-1100') },
    borderWidth: 1,
    transitionDuration: 0,
    position(pos, params, dom, rect, size) {
      return getPosition(pos, params, dom, rect, size);
    },
    axisPointer: {
      type: 'none'
    }
  },
  xAxis: {
    type: 'category',
    data: ['1H', '2H', '3H', '4H', '5H', '6H', '7H', '8H', '9H', '10H'],
    axisLabel: {
      color: getThemeColor('gray-600'),
      margin: 15
    },
    axisLine: {
      lineStyle: {
        color: getThemeColor('gray-300'),
        type: 'dashed'
      }
    },
    axisTick: {
      show: false
    },
    boundaryGap: false
  },
  yAxis: {
    type: 'value',
    axisPointer: { show: false },
    splitLine: {
      lineStyle: {
        color: getThemeColor('gray-300'),
        type: 'dashed'
      }
    },
    boundaryGap: false,
    axisLabel: {
      show: true,
      color: getThemeColor('gray-600'),
      margin: 25
    },
    axisTick: { show: false },
    axisLine: { show: false }
  },
  series: [
    {
      type: 'line',
      data: data,
      symbol: 'circle',
      symbolSize: 10,
      itemStyle: {
        borderColor: getThemeColor('primary'),
        borderWidth: 2
      },
      lineStyle: { color: getThemeColor('primary') },
      areaStyle: {
        color: {
          type: 'linear',
          x: 0,
          y: 0,
          x2: 0,
          y2: 1,
          colorStops: [
            {
              offset: 0,
              color: rgbaColor(getThemeColor('primary'), 0.1)
            },
            {
              offset: 1,
              color: rgbaColor(getThemeColor('primary'), 0)
            }
          ]
        }
      }
    }
  ],
  grid: { right: '12px', left: '46px', bottom: '12%', top: '3%' }
});

const TopCustomerChart = ({ data }) => {
  const { getThemeColor } = useAppContext();
  return (
    <ReactEchart
      option={getOptions(getThemeColor, data)}
      echarts={echarts}
      style={{ minHeight: '22rem' }}
    />
  );
};

TopCustomerChart.propTypes = {
  data: PropTypes.array
};

export default TopCustomerChart;
