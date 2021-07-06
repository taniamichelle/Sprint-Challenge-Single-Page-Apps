import React from 'react'
import { Card } from 'semantic-ui-react';

export default function EpisodeCard(props) {
    //console.log(props);
    return (
        <Card className='episode-card'>
            <Card.Content>
                <h2>{props.name}</h2>
                <h3>{props.id}</h3>
                <div className='air-date'>{props.air_date}</div>
                <div className='episode'>{props.episode}</div>
                {/* characters returns an array... */}
                <div className='characters'>{props.characters}</div>
            </Card.Content >
        </Card >
    );
}
