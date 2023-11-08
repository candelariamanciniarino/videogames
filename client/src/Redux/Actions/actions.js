 import axios, {all } from 'axios';


export const GET_GENRES= 'GET_GENRES'
export const GET_GAMES ='GET_GAMES'
export const GET_GAME_ID ='GET_GAME_ID'
export const GET_PLATFORMS = 'GET_PLATFORMS'
export const PAGINATED = 'PAGINATED'
export const SEARCH_GAME ='SEARCH_GAME'
export const FILTER_BY_GENRES = 'FILTER_BY_GENRES'
export const FILTER_ORIGIN='FILTER_ORIGIN'
export const ORDER_BY_RATING='ORDER_BY_RATING,'
export const ORDER_CARDS='ORDER_CARDS'
      


 export function getById(id){
    return async function (dispatch){
        try{
            const response =  await axios.get(`http://localhost:3001/videogame/${id}`);
            const videoGameID = response.data;
            return dispatch({
                type: GET_GAME_ID,
                payload:videoGameID
            });
        } catch (error){console.log (error)
        
        }
 };
 }

export function setLoading(){
  return ({
    type: 'SET_LOADING',
    payload: true,
  })
}

export function getGames(){
    return async function (dispatch){
        try{
            const response = await axios.get("http://localhost:3001/videogame");
      const videoGames = response.data
      console.log(videoGames)
      return dispatch({
        type: GET_GAMES,
        payload: videoGames
      })
        }catch (error){
            console.log(error)
        }
    } 

}
export function getGenres() {
    return async function (dispatch) {
      try {
        const response = await axios.get("http://localhost:3001/genre");
        const allGenres = response.data
        return dispatch({
          type: GET_GENRES,
          payload: allGenres
        })
      } catch (error) {
        console.log(error)
      }
  
    }
  }
  
  export function postGame(state) {
    return async function (dispatch) {
      console.log(state,"state antes del post")
      try {
         await axios.post("http://localhost:3001/videogame", state)
        console.log("Juego creado con exito!")
      } catch (error) {
        console.log(error.response.data.error,"ERROR AL CREAR JUEGO")
      }
  
    }
  }
  
  export function getPlatforms() {
    return async function (dispatch) {
      try {
        const response = await axios.get("http://localhost:3001/platforms");
        const allPlatforms = response.data
        return dispatch({
          type: GET_PLATFORMS,
          payload: allPlatforms
        })
      } catch (error) {
        console.log(error.response.data.error)
      }
  
    }
  }

  export function paginatedGame(order) {
    return (dispatch) => {
      try {
        dispatch({
          type: PAGINATED,
          payload: order
        });
      } catch (error) {
        console.log(error.response.data.error);
      }
    };
  }
  

  export function searchGames(name) {
    return async function (dispatch){
      try {
       
        dispatch({
          type: SEARCH_GAME,
          payload: name
        });
      } catch (error) {
        console.log("error al buscar");
      }
    };
  }

  export const filterByGenres = (payload) => {
    return ({
      type: FILTER_BY_GENRES,
      payload,
    })
  }


  export const filterOrigin = (status) => {
    return {
      type: FILTER_ORIGIN,
      payload: status,
    };
  };



  export const getGamesOrderRatingAc =(value)=>{
    return{
      type:ORDER_BY_RATING,
      payload:value,
    };
  };



  export const orderCards = (value)=>{
    return{
      type: ORDER_CARDS,
      payload:value,
    };
  };
















