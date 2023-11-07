import React from 'react'
import style from '../FiltrosBar/filter.module.css'


export const FiltrosBar = ({allGenres, handleFilter, handleFilterOrigin, getGamesOrderRating, gamesOrderAll}) => {
       


  return (
    <div className={style.filter}>
          <div> Genero
            <select name="" id="" onChange={(e)=> handleFilter(e)}>
              <option value="Default" >Elija Genero</option>
                {allGenres?.map((genre,index) => {
                    return(
                        <option key={index} value={genre.name}>{genre.name}</option>
                    )
                })}
  
  
            </select>
          </div>
          
          <div>Origin
        <select onChange={(e) => handleFilterOrigin(e)}>
            {["All", "Api", "Local"].map((e, i) => (
              <option value={e} key={i}>
                {e}
              </option>
            ))}
          </select>

           </div>

          <div>Order By Rating 
            <select onChange={(e)=>getGamesOrderRating(e)}>
              <option value="Default">Default</option>
            <option value="Ascendente">Ascendente</option>
            <option value="Descendente">Descendente</option>
            </select>
           </div>


           <div> Ordenar:
           <select onChange={(e)=>gamesOrderAll(e)}>
            <option value="Default">
              A-Z / Z-A
            </option>
            <option value="Ascendente">Ascendent</option>
            <option value="Descendente">Descendent</option>
          </select> 

           </div>
       </div>
  )
}
