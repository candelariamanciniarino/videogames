
import styles from'./Card.css?inline'
import {Link} from 'react-router-dom'


const Card = ({id, name, background_image, rating, genres}) =>{
  return(
    <>
    <Link className={styles.link} to={`/detail/${id}`}>
     <div className={styles.card}>
      <div className={styles.poster}>
        <img className={styles.image} src={background_image}
        />
    </div>
    <div className={styles.details}>
      <div className={styles.name.cont}>
        <h2 className={styles.name}>{name}</h2>
      </div>
      <div className={styles.rating_cont}>
              <h2>RATING: {rating}</h2>
            </div>
            <div className={styles.genres_card_cont}>
              {genres.map((g, index) => (
                <ol key={index}>{g}</ol>
              ))}
            </div>

    </div>
   </div>
 </Link>
</>
  );
};
   
export default Card