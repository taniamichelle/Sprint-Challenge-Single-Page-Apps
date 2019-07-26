import React from 'react'

export default function CharCard(props) {
  //console.log(props);
  return (
    <div className='character-card' >
      <h2>{props.name}</h2>
      <h3>{props.id}</h3>
      <div className='status'>{props.status}</div>
      <div className='species'>{props.species}</div>
    </div>
  );
}

//original fxn:
// export default function CharacterCard({ /* add props */ }) {
//   return (<span>todo: location</span>
// }