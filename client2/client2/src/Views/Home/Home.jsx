import React from'react';
import Cards from '../../Components/Cards/cards/'
import styles from './Home.module.css';
import { useEffect, useState } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getGenres,
        getAllVideoGame,
        orderCards,
        filterOrigin,
        getGamesOrderRating,
        filterGenres,
} from '../../Redux/Actions/actions';


//paginado (component paginado)

export const Home = () => {
  
const dispatch = useDispatch();
const videogame =useSelector((state)=> state.videogame);
const genres = useSelector((state) => state.genres);

useEffect(()=>{
  dispatch(getAllVideoGame());
  dispatch(getGenres());
},[dispatch]);

//paginado

const[currentePage, setCurrentPage] = useState(1);
const [gamesPerPage] = useState(15);
const indexofLastCard = currentePage *15
const indexofFirsCard = indexofLastCard - gamesPerPage;
const currentecards = videogame.slice(indexofFirsCard,indexofLastCard);


const paginate =(pageNumero)=>{
  setCurrentPage(pageNumero)
}


//ordenar alfabeticamente 
const gemeOrderAl=(event) =>{
  dispatch(orderCards(event.target.value))
}


//ordenar por rating
const getGamesOrderRating=(event) =>{
  dispatch(orderCards(event.target.value));
}

  return (
    <div>
      <div className={styles.filterContainer}>
        <lebel>Genres</lebel>
        <select onChange={(e)=>dispatch(filterGenres(e.target.value))}>
          <option>Seleccionar la opcion </option>
          {genres.map((e, i)=>(
            <option value={e.name} key={i}> {e.name}

            </option>
          ))}

        </select>
      </div>

      <div className={styles.filter}>
        <label>Origen</label>
        <select onChange={(e)=> dispatch(filterOrigin(e.target.value))}>
        {["Select Option", "Api", "Local"].map((e, i) => (
              <option value={e} key={i}>
                {e}
              </option>
            ))}
        </select>
      </div>


      <div className={styles.filter}>
        <label>Ordenar</label>
        <select onChange={gemeOrderAl}>
         <option value="AZ">A-Z</option>
          <option value="ZA">Z-A</option>
        </select>

      </div>



      <div className={styles.filter}>
         <label>Ordenar por rating :</label>
         <select onChange={getGamesOrderRating}>
         <option value="" disabled selected> Select Order </option>
        <option value="Ascendente">Ascendente</option>
        <option value="Descendente">Descendente</option>
        </select>
     </div>


     <div>     
      <Cards videogames={currentecards} /> 
      <paginate gamesPerPage={gamesPerPage}
      videogames={videogame.length}
      paginado={paginate} />
    
      </div> 


    </div>
  );
};

export default Home