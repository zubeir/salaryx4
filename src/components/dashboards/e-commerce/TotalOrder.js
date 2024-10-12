import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Badge, Card } from 'react-bootstrap';
import Flex from 'components/common/Flex';
import { rgbaColor } from 'helpers/utils';
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

const getOptions = (getThemeColor, data) => ({
  tooltip: {
    trigger: 'axis'
  },
  series: [
    {
      type: 'line',
      data,
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
              color: rgbaColor(getThemeColor('primary'), 0.25)
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
  xAxis: {
    type: 'category',
    data: [
      'June 01',
      'June 02',
      'June 03',
      'June 04',
      'June 05',
      'June 06',
      'June 07'
    ]
  },
  grid: { bottom: '-10px' }
});

const TotalOrder = ({ data }) => {
  const { getThemeColor } = useAppContext();
  return (
    <Card className="h-md-100">
      <Card.Header className="pb-0">
        <h6 className="mb-0 mt-2">Total Order</h6>
      </Card.Header>

      <Card.Body
        as={Flex}
        alignItems="end"
        justifyContent="between"
        className="pt-0"
      >
        <div>
          <h2 className="fw-normal text-700 mb-1 lh-1 fs-7">58.4K</h2>
          <Badge pill bg="200" className="text-primary fs-11">
            <FontAwesomeIcon icon="caret-up" className="me-1" />
            13.6%
          </Badge>
        </div>
        <div className="ps-0">
          <BasicECharts
            echarts={echarts}
            options={getOptions(getThemeColor, data)}
            style={{ width: '8.5rem', height: 87 }}
          />
        </div>
      </Card.Body>
    </Card>
  );
};

TotalOrder.propTypes = { data: PropTypes.array.isRequired };

export default TotalOrder;
