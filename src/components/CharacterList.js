import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CharacterCard from './CharacterCard';

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [character, setCharacter] = useState([]);
  const [error, setError] = useState('');
  useEffect(() => {
    axios.get('https://rickandmortyapi.com/api/character/')
      .then(res => {
        //console.log(res.data.results);
        setCharacter(res.data.results);
      })
      .catch(err => {
        console.log('error occurred', error);
      })
  }, [character, error])

  return <section className='character-list grid-view'>
    <h2>
      {character.map(results => (
        <CharacterCard name={results.name}
          charId={results.id}
          type={results.type}
          dimension={results.dimension}
          residents={results.residents} />
      ))}
    </h2>
  </section>

}
