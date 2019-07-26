import { useEffect, useState } from 'react';
import axios from 'axios';
import EpisodeCard from './EpisodeCard';


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
}, [episode])