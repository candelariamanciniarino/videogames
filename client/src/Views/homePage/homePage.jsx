 import {useDispatch} from 'react-redux';
 import { useEffect } from 'react';
 import { useSelector } from 'react-redux';
 import{getGames, getGenres, paginatedGame, filterByGenres, filterOrigin, setLoading, orderCards, getGamesOrderRatingAc} from '../../Redux/actions/actions.js';

 import Cards from '../../Components/Cards/cards';

 import styles from '../homePage/homePage.module.css'
import { FiltrosBar } from '../../Components/FiltrosBar/FiltrosBar.jsx';


 function HomePage(){
  const dispatch = useDispatch();
  const allGames = useSelector(state => state.allVideogames);
  const allGenres = useSelector(state => state.allGenres)
  const loadingState = useSelector(state => state.loadingState)

 const handleFilter = (e) => {
    console.log(e.target.value)
    e.preventDefault()
    if(event.target.value === 'Default'){
      dispatch(setLoading());
    dispatch(getGames());
    }
    dispatch(filterByGenres(e.target.value))
 }

 const handleFilterOrigin = (e) => {
  e.preventDefault()
  dispatch(setLoading());
  dispatch(filterOrigin(e.target.value))
 }

 const gamesOrderAll=(event)=>{
  event.preventDefault()
  if(event.target.value === 'Default'){
    dispatch(setLoading());
  dispatch(getGames());
  }
  dispatch(orderCards(event.target.value));
}


useEffect(() =>{
  dispatch(setLoading());
  dispatch(getGames());
  dispatch(getGenres());
  console.log("allGames", allGames)
  
}, [dispatch])

const paginate=(event) => {
  dispatch(paginatedGame(event.target.name))
  
}

const getGamesOrderRating=(event)=>{
  if(event.target.value === 'Default'){
    dispatch(setLoading());
  dispatch(getGames());
  }
  dispatch(getGamesOrderRatingAc(event.target.value));
}



return (
  <div className={styles.background}>
    <FiltrosBar 
    allGenres={allGenres} 
    handleFilter={handleFilter} 
    handleFilterOrigin={handleFilterOrigin} 
    getGamesOrderRating={getGamesOrderRating}
    gamesOrderAll = {gamesOrderAll}
    />
      <div className={styles.navbar}>
          <button name="prev" onClick={paginate}>Prev</button>
          <button name="next" onClick={paginate}>Next</button>
      </div>
      <div className={styles.home}>
          <h2 className={styles.titleone}>WELCOME!</h2>
          <div>
            {!loadingState ? (<div>
              {allGames.length === 0 ? <span>No hay elementos...</span>
              :
              <div className={styles.cardcontainer}>
            
                <Cards allGames={allGames} />
              </div>}
            </div>)
            :
            <div>LOADING.....</div>}
          </div>
          
      </div>
  </div>
);
}

export default HomePage;

