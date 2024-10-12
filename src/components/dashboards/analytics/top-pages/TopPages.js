import React from 'react';
import PropTypes from 'prop-types';
import { Card, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import AdvanceTable from 'components/common/advance-table/AdvanceTable';
import AdvanceTableSearchBox from 'components/common/advance-table/AdvanceTableSearchBox';
import AdvanceTableFooter from 'components/common/advance-table/AdvanceTableFooter';
import useAdvanceTable from 'hooks/useAdvanceTable';
import AdvanceTableProvider from 'providers/AdvanceTableProvider';

const columns = [
  {
    accessorKey: 'path',
    header: 'Page Path',
    meta: {
      headerProps: {
        className: 'text-900'
      }
    },
    cell: ({ row: { original } }) => {
      const { path } = original;
      return (
        <Link to="#!" className="text-primary fw-semibold">
          {path}
        </Link>
      );
    }
  },
  {
    accessorKey: 'views',
    header: 'Page Views',
    meta: {
      headerProps: {
        className: 'text-end text-900'
      },
      cellProps: {
        className: 'text-end'
      }
    }
  },
  {
    accessorKey: 'time',
    header: 'Avg Time on Page',
    meta: {
      headerProps: {
        className: 'text-end text-900'
      },
      cellProps: {
        className: 'text-end'
      }
    }
  },
  {
    accessorKey: 'exitRate',
    header: 'Exit Rate',
    meta: {
      headerProps: {
        className: 'text-end text-900'
      },
      cellProps: {
        className: 'text-end'
      }
    }
  }
];

const TopPages = ({ tableData, perPage = 8 }) => {
  const table = useAdvanceTable({
    data: tableData,
    columns,
    sortable: true,
    pagination: true,
    perPage
  });

  return (
    <AdvanceTableProvider {...table}>
      <Card className="h-100">
        <Card.Header>
          <Row className="flex-between-center">
            <Col xs="auto" sm={6} lg={7}>
              <h6 className="mb-0 text-nowrap py-2 py-xl-0">
                What are my top pages today?
              </h6>
            </Col>
            <Col xs="auto" sm={6} lg={5}>
              <AdvanceTableSearchBox placeholder="Search..." />
            </Col>
          </Row>
        </Card.Header>
        <Card.Body className="p-0">
          <AdvanceTable
            headerClassName="bg-200 text-nowrap align-middle"
            rowClassName="align-middle white-space-nowrap"
            tableProps={{
              className: 'fs-10 mb-0 overflow-hidden'
            }}
          />
        </Card.Body>
        <Card.Footer>
          <AdvanceTableFooter rowInfo navButtons />
        </Card.Footer>
      </Card>
    </AdvanceTableProvider>
  );
};

TopPages.propTypes = {
  tableData: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      path: PropTypes.string.isRequired,
      views: PropTypes.number.isRequired,
      time: PropTypes.string.isRequired,
      exitRate: PropTypes.string.isRequired
    })
  ).isRequired,
  perPage: PropTypes.number
};

export default TopPages;
