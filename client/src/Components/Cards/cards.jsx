import { useSelector } from 'react-redux';
import Card from '../Card/card'
import styles from '../Cards/cards.module.css'

function Cards ({allGames}){
  
  return (
    <div className={styles.Cards}> 
    {allGames.map((game)=> (
    <Card 
    key={game.id}
    name={game.name}
    background_image={game.background_image}
  genres={game.genres}
  />
  ))}
    </div>
  )
}

export default Cards