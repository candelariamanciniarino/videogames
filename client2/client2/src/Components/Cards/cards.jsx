import React from 'react'
import Card from '../Card/card'
//import styles from "./CardsModule.css";

function Cards ({videogames}){
  const listgames = videogames;
  return (
    <div className={styles.Cards}> {listgames?.map((game)=> (
    <Card KEY={game.id}
    game={game}/>
  ))}
    </div>
  )
}

export default Cards