import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import axios from 'axios';

function App() {
  const [pokemons, setPokemons] = useState([]); 

  const onClickHandler = (event) => {
    event.preventDefault();
    axios.get("https://pokeapi.co/api/v2/pokemon")
      .then(res => {
        console.log(res.data);
        setPokemons(res.data.results);
      })
      .catch(err => console.log(err))
  }

  return (
    <div className="App">
      <h1>Pokemon API</h1>
      <button onClick={onClickHandler}>Click Me</button>
      <ul>
      {
        pokemons.map((pokemon, i) => {
          return <li key={i}>{pokemon.name}</li>
        })
      }
      </ul>
    </div>
  );
}

export default App;