import React from 'react';
import PageHeader from 'components/common/PageHeader';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import OrderInfo from './OrderInfo';
import OrderedProducts from './OrderedProducts';
import SubtleBadge from 'components/common/SubtleBadge';

const OrderDetails = () => {
  return (
    <>
      <PageHeader title="Order Details: #2737" titleTag="h5" className="mb-3">
        <p className="fs-10 mt-1">April 21, 2019, 5:33 PM</p>
        <div>
          <strong className="me-2">Status: </strong>
          <SubtleBadge pill bg="success" className="fs-11">
            {' '}
            Completed
            <FontAwesomeIcon
              icon="check"
              className="ms-1"
              transform="shrink-2"
            />
          </SubtleBadge>
        </div>
      </PageHeader>
      <OrderInfo />
      <OrderedProducts />
    </>
  );
};

export default OrderDetails;
