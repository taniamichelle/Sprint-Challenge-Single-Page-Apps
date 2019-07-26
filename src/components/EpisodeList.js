import React, { useEffect, useState } from 'react';
import axios from 'axios';
import EpisodeCard from './EpisodeCard';

export default function EpisodeList() {
    const [episode, setEpisode] = useState([]);
    const [error, setError] = useState('');
    useEffect(() => {
        axios.get('https://rickandmortyapi.com/api/episode/')
            .then(res => {
                //console.log(res.data);
                setEpisode(res.data.results);
            })
            .catch(err => {
                console.log('error occurred', error);
            })
    }, [episode, error])

    return <section className='episode-list grid-view'>
        <h2>
            {episode.map(results => (
                <EpisodeCard name={results.name}
                    episodeId={results.id}
                    airDate={results.air_date}
                    episode={results.episode}
                    epiCharacters={results.characters} />
            ))}
        </h2>
    </section>

}