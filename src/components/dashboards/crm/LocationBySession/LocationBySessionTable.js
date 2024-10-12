import React from 'react';
import PropTypes from 'prop-types';
import { ProgressBar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Flex from 'components/common/Flex';
import AdvanceTable from 'components/common/advance-table/AdvanceTable';
import useAdvanceTable from 'hooks/useAdvanceTable';
import AdvanceTableProvider from 'providers/AdvanceTableProvider';

const columns = [
  {
    accessorKey: 'country',
    header: 'Country',
    meta: {
      headerProps: { className: 'text-800' },
      cellProps: {
        className: 'py-3'
      }
    },
    cell: ({ row: { original } }) => {
      const { flag, country } = original;
      return (
        <Link to="#!">
          <Flex alignItems="center">
            <img src={flag} alt="..." />
            <p className="mb-0 ps-3 country text-700">{country}</p>
          </Flex>
        </Link>
      );
    }
  },
  {
    accessorKey: 'sessions',
    header: 'Sessions',
    meta: {
      headerProps: { className: 'text-800' },
      cellProps: {
        className: 'fw-semibold'
      }
    }
  },
  {
    accessorKey: 'users',
    header: 'Users',
    meta: {
      headerProps: { className: 'text-800' }
    }
  },
  {
    accessorKey: 'percentage',
    header: 'Percentage',
    enableSorting: false,
    meta: {
      headerProps: {
        className: 'text-end text-800',
        style: {
          width: '9.625rem'
        }
      }
    },
    cell: ({ row: { original } }) => {
      const { percentage } = original;
      return (
        <Flex alignItems="center" justifyContent="end">
          <p className="mb-0 me-2">{percentage}%</p>
          <ProgressBar
            now={percentage}
            style={{ height: '0.3125rem', width: '3.8rem' }}
          />
        </Flex>
      );
    }
  }
];

const LocationBySessionTable = ({ data }) => {
  const table = useAdvanceTable({
    data,
    columns,
    sortable: true,
    pagination: true,
    perPage: 3
  });

  return (
    <AdvanceTableProvider {...table}>
      <div className="mx-ncard mt-3">
        <AdvanceTable
          headerClassName="bg-200 text-nowrap align-middle"
          rowClassName="align-middle white-space-nowrap"
          tableProps={{
            className: 'fs-10 mb-0'
          }}
        />
      </div>
    </AdvanceTableProvider>
  );
};

LocationBySessionTable.propTypes = {
  data: PropTypes.array.isRequired
};

export default LocationBySessionTable;
