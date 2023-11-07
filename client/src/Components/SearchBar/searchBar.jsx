

import React from 'react'
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {searchGames} from '../../Redux/actions/actions'


function SearchBar (){
  const dispatch = useDispatch();
  const [game, setGame] = useState('');
  const videoGame = useSelector((state)=> state.allVideogames)

  const handleChange =(event)=>{
    setGame(event.target.value)
  }

  const handleSubmit = (event)=>{
    dispatch(searchGames(game))
    setGame('')
  }
 useEffect(()=>{

 }, [videoGame])

return (
  <div>
      <div>
        <div>
          <input
            
           name="search"
            id="search"
            type='search'
            placeholder='Encontrar tu juego favorito'
            value={game}
            onChange={handleChange}
          />
        </div>
      </div>
      <button type='submit' onClick={handleSubmit}>Go!</button>
   
  </div>
);
}

export default SearchBar