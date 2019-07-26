import React from 'react'

export default function LocationCard(props) {
  //console.log(props);
  return (
    <div className='location-card' >
      <h2>{props.name}</h2>
      <h3>{props.id}</h3>
      <div className='type'>{props.type}</div>
      <div className='dimension'>{props.dimension}</div>
      {/* residents returns an array... */}
      <div className='residents'>{props.residents}</div>
    </div>
  );
}


//original Code:
// export default function LocationCard({ name, type, dimension, residents }) {
//   // image={image}
//   return (<span>todo: location</span>
//   )}