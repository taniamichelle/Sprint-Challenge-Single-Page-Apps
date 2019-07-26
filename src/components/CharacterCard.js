import React from 'react'
import { Card } from 'semantic-ui-react';

export default function CharacterCard(props) {
  //console.log(props);
  return (
    <Card className='character-card'>
      <Card.Content>
        <h2>{props.name}</h2>
        <h3>{props.id}</h3>
        <div className='status'>{props.status}</div>
        <div className='species'>{props.species}</div>
      </Card.Content >
    </Card >
  );
}

//original fxn:
// export default function CharacterCard({ /* add props */ }) {
//   return (<span>todo: location</span>
// }