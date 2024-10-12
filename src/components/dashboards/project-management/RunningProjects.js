import React from 'react';
import PropTypes from 'prop-types';
import { Card, ProgressBar } from 'react-bootstrap';
import Flex from 'components/common/Flex';
import Avatar, { AvatarGroup } from 'components/common/Avatar';
import { Link } from 'react-router-dom';
import FalconCardFooterLink from 'components/common/FalconCardFooterLink';
import FalconCardHeader from 'components/common/FalconCardHeader';
import AdvanceTable from 'components/common/advance-table/AdvanceTable';
import useAdvanceTable from 'hooks/useAdvanceTable';
import AdvanceTableProvider from 'providers/AdvanceTableProvider';

const columns = [
  {
    accessorKey: 'title',
    header: 'Projects',
    meta: {
      headerProps: { className: 'text-800' }
    },
    cell: ({ row: { original } }) => {
      const { avatar, color, title, projectName } = original;
      return (
        <Flex alignItems="center" className="position-relative">
          <Avatar
            name={avatar.name}
            width="60"
            alt=""
            mediaClass={`text-${color}-emphasis bg-${color}-subtle fs-9`}
          />
          <div className="flex-1 ms-3">
            <h6 className="mb-0 fw-semibold">
              <Link className="text-1100 stretched-link" to="#!">
                {title}
              </Link>
            </h6>
            <p className="fs-11 mb-0 text-500">{projectName}</p>
          </div>
        </Flex>
      );
    }
  },
  {
    accessorKey: 'progress',
    header: 'Worked',
    meta: {
      headerProps: {
        className: 'text-center text-800'
      },
      cellProps: {
        className: 'text-center'
      }
    },
    cell: ({ row: { original } }) => {
      const { progress } = original;
      return (
        <ProgressBar
          now={progress}
          style={{ height: 5 }}
          className="rounded-pill align-middle"
          variant="progress-gradient"
        />
      );
    }
  },
  {
    accessorKey: 'duration',
    header: 'Progress',
    meta: {
      cellProps: {
        className: 'text-center fw-semibold fs-10'
      },
      headerProps: {
        className: 'text-center text-800'
      }
    }
  },
  {
    accessorKey: 'date',
    header: 'Due Date',
    meta: {
      cellProps: {
        className: 'text-center fw-semibold fs-10'
      },
      headerProps: {
        className: 'text-center text-800'
      }
    }
  },
  {
    accessorKey: 'members',
    header: 'Members',
    enableSorting: false,
    meta: {
      headerProps: {
        className: 'text-end text-800'
      }
    },
    cell: ({ row: { original } }) => {
      const { members } = original;
      return (
        <AvatarGroup className="justify-content-end">
          {members.map(({ img, name, id }) => {
            return (
              <Avatar
                src={img && img}
                key={id}
                name={name && name}
                isExact
                className="border border-3 rounded-circle border-200"
              />
            );
          })}
        </AvatarGroup>
      );
    }
  }
];

const RunningProjects = ({ data }) => {
  const table = useAdvanceTable({
    data,
    columns,
    sortable: true,
    pagination: true,
    perPage: 10
  });

  return (
    <AdvanceTableProvider {...table}>
      <Card className="h-100">
        <FalconCardHeader title="Running Projects" titleTag="h6" />
        <Card.Body className="p-0">
          <AdvanceTable
            headerClassName="bg-body-tertiary text-nowrap align-middle"
            rowClassName="align-middle white-space-nowrap"
            tableProps={{
              borderless: true,
              className: 'fs-11 mb-0 overflow-hidden'
            }}
          />
        </Card.Body>
        <FalconCardFooterLink title="Show all projects" size="sm" />
      </Card>
    </AdvanceTableProvider>
  );
};

RunningProjects.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      color: PropTypes.string.isRequired,
      progress: PropTypes.number.isRequired,
      duration: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      avatar: PropTypes.shape({
        name: PropTypes.string.isRequired,
        size: PropTypes.string
      }),
      projectName: PropTypes.string.isRequired,
      members: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.string,
          img: PropTypes.string,
          size: PropTypes.string
        })
      ),
      date: PropTypes.string.isRequired,
      isLast: PropTypes.bool
    })
  )
};

export default RunningProjects;
