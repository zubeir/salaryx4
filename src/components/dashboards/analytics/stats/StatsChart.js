import React from 'react';
import PropTypes from 'prop-types';
import * as echarts from 'echarts/core';
import { LineChart } from 'echarts/charts';
import {
  GridComponent,
  TooltipComponent,
  TitleComponent
} from 'echarts/components';
import { CanvasRenderer } from 'echarts/renderers';
import BasicECharts from 'components/common/BasicEChart';
import { useAppContext } from 'providers/AppProvider';

echarts.use([
  TitleComponent,
  TooltipComponent,
  GridComponent,
  LineChart,
  CanvasRenderer
]);

const getOptions = (getThemeColor, data, grid) => ({
  tooltip: {
    show: false
  },
  series: [
    {
      type: 'bar',
      data,
      symbol: 'none',
      itemStyle: {
        color: getThemeColor('primary'),
        borderRadius: [5, 5, 0, 0]
      }
    }
  ],
  grid
});

const StatsChart = ({ data, grid }) => {
  const { getThemeColor } = useAppContext();
  return (
    <BasicECharts
      echarts={echarts}
      options={getOptions(getThemeColor, data, grid)}
      style={{ height: '1.875rem' }}
    />
  );
};

StatsChart.propTypes = {
  data: PropTypes.array.isRequired,
  grid: PropTypes.shape({
    left: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    right: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    top: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    bottom: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
  })
};

export default StatsChart;
