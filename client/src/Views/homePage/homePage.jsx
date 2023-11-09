 import {useDispatch} from 'react-redux';
 import { useEffect } from 'react';
 import { useSelector } from 'react-redux';
 import{getGames, getGenres, paginatedGame,goToPage, filterByGenres, filterOrigin, setLoading, orderCards, getGamesOrderRatingAc} from '../../Redux/actions/actions.js';

 import Cards from '../../Components/Cards/cards';

 import styles from '../homePage/homePage.module.css'
import { FiltrosBar } from '../../Components/FiltrosBar/FiltrosBar.jsx';


 function HomePage(){
  const dispatch = useDispatch();
  const allGames = useSelector(state => state.allVideogames);
  const allGenres = useSelector(state => state.allGenres)
  const loadingState = useSelector(state => state.loadingState)
  const currentPage = useSelector(state => state.currentPage)

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
const goToPageFunc=(page)=>{
  dispatch(goToPage(page))
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
          <button name="prev" onClick={paginate} disabled={currentPage ===0}>Prev</button>
          
          {[0,1,2,3,4,5,6].map(page => {return( <button key={page} onClick={()=>goToPageFunc(page)} style={{ backgroundColor: currentPage === page && "red"}} >{page}</button>)})}
          <button name="next" onClick={paginate} disabled={currentPage ===6}>Next</button>
      </div>
      <div className={styles.home}>
          <h2 className={styles.titleone}>WELCOME</h2>
          <div>
            {!loadingState ? (<div>
              {allGames.length === 0 ? <span>No hay elementos...</span>
              :
              <div className={styles.cardcontainer}>
            
                <Cards allGames={allGames} />
              </div>}
            </div>)
            :
            <div style={loadingStyle}>LOADING.....
            <img src="https://i.gifer.com/Ao.gif" width={400} alt="" />
            </div>}
          </div>
          <div className={styles.navbar}>
          <button name="prev" onClick={paginate} disabled={currentPage ===0}>Prev</button>
          
          {[0,1,2,3,4,5,6].map(page => {return( <button key={page} onClick={()=>goToPageFunc(page)} style={{ backgroundColor: currentPage === page && "red"}} >{page}</button>)})}
          <button name="next" onClick={paginate} disabled={currentPage ===6}>Next</button>
      </div>
      </div>
  </div>
);
}

export default HomePage;

const loadingStyle = {
  display: 'flex',  
  flexDirection:"column",           // Utiliza flexbox para alinear y justificar contenido
  justifyContent: 'center',    // Centra horizontalmente en el contenedor flex
  alignItems: 'center',        // Centra verticalmente en el contenedor flex
  height: '100vh',             // 100% de la altura del viewport
  width: '100vw',              // 100% del ancho del viewport
  position: 'fixed',           // Fija en la ventana gráfica, por encima de otros elementos
  top: 0,                      // Alineado con el top del viewport
  left: 0,                     // Alineado con el izquierdo del viewport
  backgroundColor: 'rgba(255, 255, 255, 0.9)', // Fondo ligeramente transparente
  color: '#333',               // Color del texto
  fontSize: '2em',             // Tamaño del texto
  fontWeight: 'bold',          // Grosor de la fuente
  textShadow: '0px 0px 10px rgba(0, 0, 0, 0.5)', // Sombra del texto para mejorar contraste
  zIndex: 1000,                // Asegura que el loading estará sobre otros elementos
};