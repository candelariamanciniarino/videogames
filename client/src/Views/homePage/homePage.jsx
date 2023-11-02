 import {useDispatch} from 'react-redux';
 import { useEffect } from 'react';
 import { useSelector } from 'react-redux';
 import{getGames, getGenres, paginatedGame } from '../../Redux/actions/actions.js';

 import Cards from '../../Components/Cards/cards';

 import styles from '../homePage/homePage.module.css'


 function HomePage(){
  const dispatch = useDispatch();
  const allGames = useSelector(state => state.allVideogames);


useEffect(() =>{
  dispatch(getGames());
  dispatch(getGenres());
  
}, [dispatch])

const paginate=(event) => {
  dispatch(paginatedGame(event.target.name))
  event.preventDefault()
}

return (
  <div className={styles.background}>
      <div className={styles.navbar}>
          <button name="prev" onClick={paginate}>Prev</button>
          <button name="next" onClick={paginate}>Next</button>
      </div>
      <div className={styles.home}>
          <h2 className={styles.titleone}>WELCOME!</h2>
          <div> 
            {allGames.lenght > 0 ? <span>Loading...</span>
            :
            <div className={styles.cardcontainer}>
              
              <Cards allGames={allGames} />
            </div>}
          </div>
      </div>
  </div>
);
}

export default HomePage;

