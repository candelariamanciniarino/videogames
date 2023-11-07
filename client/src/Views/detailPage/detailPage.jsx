import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {useParams} from 'react-router-dom';
import {getById} from '../../Redux/actions/actions'
import Card from '../../Components/Card/Card';

function Details() {
  const {id} = useParams();
  const dispatch = useDispatch();
  const game = useSelector((state) => state.videoGameId)

  
  const [searchId, setSearchId] = useState("")

   function handleChange(event){
    // event.preventDefault()
    setSearchId(event.target.value)
   }
   function handleSubmit(event){
    dispatch(getById(searchId));
   }

  useEffect(() => {
    dispatch(getById(id)); 
  }, [dispatch]);

  return (
    <div>
      
    {game && <div
      >
        <img width={500} src={game.background_image} alt={game.name} />
                <h2>Nombre: {game.name}</h2>
                <h2>rating:{game.rating}</h2>
                <h2>released:{game.released}</h2>
                <h2>description:{game.description}</h2>
               <h2>Plataformas: {game && game.platforms.map(platform => platform.platform.name).join(', ')}</h2>
               <h2>Géneros: {game && game.genres ? game.genres.map(g => g.name).join(", ") : 'No hay información de géneros'}</h2>
        
        </div>}
       
      
   

    </div>
  );
}

export default Details;


