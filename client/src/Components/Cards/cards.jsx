import { useSelector } from 'react-redux';
import Card from '../Card/Card'
import styles from '../Cards/cards.module.css'

function Cards ({allGames}){
  
  return (
    <div className={styles.cards}> 
    {allGames.map((game)=> (
    <Card 
    key={game.id}
    id={game.id}
    name={game.name}
    background_image={game.background_image}
    genres={game.genres}
    rating={game.rating}
    released={game.released}
  />
  ))}
    </div>
  )
}

export default Cards

