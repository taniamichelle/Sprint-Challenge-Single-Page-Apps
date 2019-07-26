import React from 'react'

export default function EpisodeCard(props) {
    //console.log(props);
    return (
        <div className='episode-card' >
            <h2>{props.name}</h2>
            <h3>{props.id}</h3>
            <div className='air-date'>{props.air_date}</div>
            <div className='episode'>{props.episode}</div>
            {/* characters returns an array... */}
            <div className='characters'>{props.characters}</div>
        </div>
    );
}
