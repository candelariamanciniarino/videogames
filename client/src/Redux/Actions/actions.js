 import axios, {all } from 'axios';


export const GET_GENRES= 'GET_GENRES'
export const GET_GAMES ='GET_GAMES'
export const GET_GAME_ID ='GET_GAME_ID'
export const GET_PLATFORMS = 'GET_PLATFORMS'
export const PAGINATED = 'PAGINATED'
export const SEARCH_GAME ='SEARCH_GAME'


 export function getById(id){
    return async function (dispatch){
        try{
            const response =  await axios.get(`http://localhost:3001/videogames/${id}`);
            const videoGameID = response.data;
            return dispatch({
                type: GET_GAME_ID,
                payload:videoGameID
            });
        } catch (error){console.log (error.response.data.error)
        
        }
 };
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
            console.log(error.response.data.error)
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
        console.log(error.response.data.error)
      }
  
    }
  }
  
  export function postGame(state) {
    return async function (dispatch) {
      try {
         await axios.post("http://localhost:3001/games", state)
        console.log("Juego creado con exito!")
      } catch (error) {
        console.log(error.response.data.error)
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
        const response=await axios.get(`http://localhost:3001/games/${name}`)
        dispatch({
          type: SEARCH_GAME,
          payload: search
        });
      } catch (error) {
        console.log(error.response.data.error);
      }
    };
  }

















// import axios from 'axios'
// export const GET_VIDEOGAME = 'GET_VIDEOGAME';
// export const GET_VIDEOGAME_BY_ID =' GET_VIDEOGAME_BY_ID';
// export const GEY_BY_NAME = 'GEY_BY_NAME';
// export const GET_GENRES = 'GET_GENRES';
// export const FILTER_BY_GENRES ='FILTER_BY_GENRES';
// export const ORDER_CARDS ='ORDER_CARDS';
// export const FILTER_ORIGIN ='FILTER_ORIGIN';
// export const ORDER_BY_RATING='ORDER_BY_RATING'

// //Action para traer todos los videojuegos
// export const getAllVideoGame =()=>{
//     return async function (dispatch){
//         const URl = 'http://localhost:3001/videogames';
//         try{
//         const response = axios.get(`${URl}`)
//             dispatch({
//                 type:GET_VIDEOGAME,
//                 payload:response.data
//             });
//         } catch (error) {
//             console.log(error)
//         }
//     };
//     };

//  //Action para traer videojuego por ID


//  export const getDetailVideogames = (id) => {
//     return async function(dispatch){
//      const URl ="http://localhost:3001/videogames";
//      try{
//             const response = await axios.get (`${URL}/${id}`);
//             dispatch({
//                 type:GET_VIDEOGAME_BY_ID,
//                 payload: response.data,
//             });

//         } catch (error){
//             console.log(error)
//         }
    
//  };
//  };

//  //Action para buscar por nombre 

//  export const getVideogameByName=(name)=>{
//     return async function (dispatch){
//         const URl = "http://localhost:3001/videogames";
//         try {
//             const response = await axios.get(`${URl}?name=${name}`);
//             dispatch ({
//                 type: GEY_BY_NAME,
//                 payload: response.data.slice(0,15)
//             })
//         }catch(error){
//             console.log(error.response.data.error)
//         }
//     }
//  }

//  export const createVideogames = (payload) =>{
//  return async(dispatch)=>{
// const URL = "http://localhost:3001/videogames";
//     try{
//         const response = await axios.post(`${URL}`,payload);
//         return response.data;
//     }catch (error){}
 
//  };
// }

// //Action para traer todos los géneros

// export const getGenres = ()=>{
//     return async(dispatch)=>{
//         const URL = "http://localhost:3001/genres";
//        try{
//         const response = await axios.get(`${URL}`);
//         dispatch({
//             type: GET_GENRES,
//             payload: response.data,
//         });
//        }catch (error){
//        error
//        }
//     };
// };




// export const filterGenres =(status) =>{
//     return{
//         type: FILTER_BY_GENRES,
//         payload:status
//     }
// };


// //Action para ordenar alfabeticamente
// export const orderCards = (value) => {
//     return { type: ORDER_CARDS,
//          payload: value,
//         };
//   };
  
//   export const getGamesOrderRating = (value) => {
//     return {
//       type: ORDER_BY_RATING,
//       payload: value,
//     };
//   };
  
//   export const filterOrigin = (status) => {
//     return {
//       type: FILTER_ORIGIN,
//       payload: status,
//     };
//   };