import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'





function searchBar (){
  const dispatch = useDispatch();
  const [game, setGame] = useState('');

  const handleChange =(event)=>{
    setGame(event.target.value)
  }

  const handleSubmit = (event)=>{
    event.preventDefault();
  }
 
  return (
    <div>
      <form >
          <div>
            <div>
              <input className='input' name="input" id="input" type='search' placeholder='Encontrar tu juego favorito' />
            </div>
           </div>
                <button type='submit'>Go!</button>
            </form>
    </div>
  )
}

export default searchBar