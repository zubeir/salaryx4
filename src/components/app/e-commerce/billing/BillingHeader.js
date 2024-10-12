import React from 'react';
import PageHeader from 'components/common/PageHeader';
import { Dropdown } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { useAppContext } from 'providers/AppProvider';

const BillingHeader = ({ ...rest }) => {
  const {
    config: { isRTL }
  } = useAppContext();

  return (
    <PageHeader
      title="Get started with your free trial"
      description="Premium team - 5 Seats. Free for 30 days, cancel at any time. <br class='d-none.d-sm-block' /> $6.25 / seat month after a trial"
      // className="mb-3"
      {...rest}
    >
      <Dropdown>
        <Dropdown.Toggle
          variant="link"
          size="sm"
          className="ps-0"
          id="#change-plan"
        >
          Change plan
        </Dropdown.Toggle>
        <Dropdown.Menu
          className="py-3"
          align={isRTL ? 'end' : 'start'}
          style={{ minWidth: '15rem' }}
        >
          <Dropdown.Item as="div" className="px-3 py-2">
            <span className="d-flex justify-content-between fs-10 text-black">
              <span className="fw-semibold">Standard License</span>
              <span>$59.00</span>
            </span>
            <ul className="list-unstyled ps-1 my-2 fs-10">
              <li>
                <FontAwesomeIcon icon="circle" transform="shrink-11" />
                <span className="ms-1">Use for a single product</span>
              </li>
              <li>
                <FontAwesomeIcon icon="circle" transform="shrink-11" />
                <span className="ms-1">Non-paying users only</span>
              </li>
            </ul>
            <p className="fs-11 mb-0">
              Read the full <Link to="#!">Standard License</Link>
            </p>
          </Dropdown.Item>
          <Dropdown.Divider className="my-0" />
          <Dropdown.Item as="div" className="px-3 py-2">
            <span className="d-flex justify-content-between fs-10 text-black">
              <span className="fw-semibold">Extended License</span>
              <span>$99.00</span>
            </span>
            <ul className="list-unstyled ps-1 my-2 fs-10">
              <li>
                <FontAwesomeIcon icon="circle" transform="shrink-11" />
                <span className="ms-1">Unlimited websites</span>
              </li>
              <li>
                <FontAwesomeIcon icon="circle" transform="shrink-11" />
                <span className="ms-1">Paying users allowed</span>
              </li>
            </ul>
            <p className="fs-11 mb-0">
              Read the full <Link to="#!">Extended License</Link>
            </p>
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </PageHeader>
  );
};

export default BillingHeader;
