import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector, useParams } from 'react-redux'
import {getById} from '../../Redux/actions/actions';
import Card from '../../Components/Card/Card';




function Details () {
  const params = useParams()
  const dispatch = useDispatch()

  const game =useSelector((state) => state.gameId)
  const [serchId, setSearchId]= useState('')

  function handleChange(event){
    event.preventDefault()
    setSearchId(event.target.value)
  }


  function handleSubmit(event){
    event.preventDefault();
    dispatch(getById(serchId));
  }


useEffect(()=>{
  dispatch(getById())
},[dispatch]);


  return (
    <div> {game?.map(game=>{

      <Card
       id={game.id}
       name={game.name}
       background_image={game.background_image}
       plataforms={game.plataforms}
       releasseData={game.releasseData}
       description={game.description}
       rating={game.rating}
       genres={game.genres}
       handleSubmit={game.handleSubmit}
       handleChange={game.handleChange} />

    })}

    <p>MiDetails</p>
    
    </div>
  );
}

export default Details;