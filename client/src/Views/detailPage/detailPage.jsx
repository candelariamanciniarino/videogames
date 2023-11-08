import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {useParams} from 'react-router-dom';
import {getById} from '../../Redux/actions/actions'
import Card from '../../Components/Card/Card';
import style from './DetailPage.module.css'

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
    console.log("Game API:",game)
  }, [dispatch]);

  return (
    <div className={style.detailsContainer}>
      <div >
    {game && <div
      >
        <img width={200} src={game.background_image} alt={game.name} />
                <h2>Nombre: {game.name}</h2>
                <h2>rating:{game.rating}</h2>
                <h2>id:{game.id}</h2>
                <h2>released:{game.released}</h2>
                 <p>Description:</p>
                 <div
            dangerouslySetInnerHTML={{ __html: game.description }}
            className=" "
          ></div> {/* Utilizamos esto, debido que la api me entrega en formato HTML, de esta manera puedo leerlo correctamente */}
            <h2>Plataformas: {game ? game.platforms : 'No hay información de plataformas'}</h2>
               <h2>Géneros: {game && game.genres ? game.genres.map(g => g.name).join(", ") : 'No hay información de géneros'}</h2>
        
        </div>}
       </div>
      
   

    </div>
  );
}

export default Details;


