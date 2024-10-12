import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import IconButton from 'components/common/IconButton';
import { logs } from 'data/ecommerce/customerDetailsData';
import classNames from 'classnames';

const CustomerLog = () => {
  return (
    <Card>
      <Card.Header>
        <h5 className="mb-0">Logs</h5>
      </Card.Header>
      <Card.Body className="border-top p-0">
        {logs.map(log => (
          <Row
            key={log.id}
            className="g-0 align-items-center border-bottom py-2 px-3"
          >
            <Col md="auto" className="pe-3">
              <span
                className={classNames('badge rounded-pill', {
                  'badge-subtle-success': log.status === 200,
                  'badge-subtle-danger': log.status === 404,
                  'badge-subtle-warning': log.status === 400
                })}
              >
                {log.status}
              </span>
            </Col>
            <Col md className="mt-1 mt-md-0">
              <code>
                {log.reqType} {log.path}
              </code>
            </Col>
            <Col md="auto">
              <p className="mb-0">
                {log.date} {log.time}
              </p>
            </Col>
          </Row>
        ))}
      </Card.Body>
      <Card.Footer className="bg-body-tertiary p-0">
        <IconButton
          variant="link"
          iconClassName="fs-11 ms-1"
          icon="chevron-right"
          className="d-block w-100"
          iconAlign="right"
          as={Link}
          to="#!"
        >
          View more logs
        </IconButton>
      </Card.Footer>
    </Card>
  );
};

export default CustomerLog;
