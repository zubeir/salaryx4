import React from 'react';
import PropTypes from 'prop-types';
import { Card, Col, Row } from 'react-bootstrap';
import Flex from 'components/common/Flex';
import Avatar from 'components/common/Avatar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import FeedDropdown from './FeedDropdown';
import paths from 'routes/paths';

const FeedCardHeader = ({
  status,
  avatarSrc,
  time,
  name,
  share,
  location,
  privacy
}) => {
  return (
    <Card.Header className="bg-body-tertiary">
      <Row className="justify-content-between">
        <Col>
          <Flex>
            <Link className="d-flex" to={paths.userProfile}>
              <Avatar size="2xl" src={avatarSrc} className={status} />
            </Link>
            <div className="flex-1 align-self-center ms-2">
              <p className="mb-1 lh-1">
                <Link className="fw-semibold" to={paths.userProfile}>
                  {name}
                </Link>
                {!!share && (
                  <span className="ms-1">
                    shared {/^[aeiou]/g.test(share.toLowerCase()) ? 'an' : 'a'}{' '}
                    <a href="#!">{share}</a>
                  </span>
                )}
              </p>
              <p className="mb-0 fs-10">
                {time} • {location} •{' '}
                <FontAwesomeIcon
                  icon={classNames({
                    users: privacy === 'friends',
                    lock: privacy === 'private',
                    'globe-americas': privacy === 'public'
                  })}
                />
              </p>
            </div>
          </Flex>
        </Col>
        <Col xs="auto">
          <FeedDropdown />
        </Col>
      </Row>
    </Card.Header>
  );
};

FeedCardHeader.propTypes = {
  status: PropTypes.string,
  avatarSrc: PropTypes.string,
  time: PropTypes.string,
  name: PropTypes.string,
  share: PropTypes.string,
  location: PropTypes.string,
  privacy: PropTypes.string
};

export default FeedCardHeader;
