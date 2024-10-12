import React from 'react';
import PropTypes from 'prop-types';

import FalconCardHeader from 'components/common/FalconCardHeader';
import { Card } from 'react-bootstrap';
import FalconCardFooterLink from 'components/common/FalconCardFooterLink';
import Event from 'components/app/events/event-list/Event';
import paths from 'routes/paths';

const Events = ({ cardTitle, events, ...rest }) => {
  return (
    <Card {...rest}>
      <FalconCardHeader title={cardTitle} light />
      <Card.Body className="fs-10 border-bottom">
        {events.map((event, index) => (
          <Event
            key={event.id}
            details={event}
            isLast={index === events.length - 1}
          />
        ))}
      </Card.Body>
      <FalconCardFooterLink title="All Events" to={paths.eventList} size="sm" />
    </Card>
  );
};

Events.propTypes = {
  cardTitle: PropTypes.string.isRequired,
  events: PropTypes.arrayOf(PropTypes.shape(Event.propTypes))
};

export default Events;
