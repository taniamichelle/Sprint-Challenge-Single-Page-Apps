import React from 'react'
import { Card } from 'semantic-ui-react';

export default function LocationCard(props) {
  //console.log(props);
  return (
    <Card className='location-card'>
      <Card.Content>
        <h2>{props.name}</h2>
        <h3>{props.id}</h3>
        <div className='type'>{props.type}</div>
        <div className='dimension'>{props.dimension}</div>
        {/* residents returns an array... */}
        <div className='residents'>{props.residents}</div>
      </Card.Content >
    </Card >
  );
}


//original Code:
// export default function LocationCard({ name, type, dimension, residents }) {
//   // image={image}
//   return (<span>todo: location</span>
//   )}