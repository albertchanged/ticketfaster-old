import React from 'react';

const Event = (props) => (
  <div>
    <p>{props.event.name}</p>
    <p>at {props.event._embedded.venues[0].name}</p>
  </div>
)
// events[0]._embedded.venues[0].name
export default Event;