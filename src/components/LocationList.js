import React, { useEffect, useState } from 'react';
import axios from 'axios';
import LocationCard from './LocationCard';

export default function LocationList() {
    const [location, setLocation] = useState([]);
    const [error, setError] = useState('');
    useEffect(() => {
        axios.get('https://rickandmortyapi.com/api/location/')
            .then(res => {
                //console.log(res.data);
                setLocation(res.data.results);
            })
            .catch(err => {
                console.log('error occurred', error);
            })
    }, [location, error])

    return <section className='location-list grid-view'>
        <h2>
            {location.map(results => (
                <LocationCard name={results.name}
                    id={results.id}
                    type={results.type}
                    dimension={results.dimension}
                    residents={results.residents} />
            ))}
        </h2>
    </section>
}