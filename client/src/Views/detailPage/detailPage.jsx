import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {useParams} from 'react-router-dom';
import {getById} from '../../Redux/actions/actions'
import Card from '../../Components/Card/Card';

function Details() {
  const {id} = useParams();
  const dispatch = useDispatch();
  const game = useSelector((state) => state.gemeId)

  
  const [searchId, setSearchId] = useState("")

   function handleChange(event){
    event.preventDefault()
    setSearchId(event.target.value)
   }
   function handleSubmit(event){
    dispatch(getById(searchId));
   }

  useEffect(() => {
    dispatch(getById()); 
  }, [dispatch]);

  return (
    <div>
      {game?.map(game=>(
    
       <Card
      id={game.id}
      name={game.name}
      platforms={game.platforms}
      src ={game.background_image}
      released={game.released}
      rating={game.rating}
      géneros={game.genres.map(genero => genero.name).join(", ")}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      />
      ))}
   

    </div>
  );
}

export default Details;


