import axios from 'axios'
export const GET_VIDEOGAME = 'GET_VIDEOGAME';
export const GET_VIDEOGAME_BY_ID =' GET_VIDEOGAME_BY_ID';
export const GEY_BY_NAME = 'GEY_BY_NAME';
export const GET_GENRES = 'GET_GENRES';
export const FILTER_BY_GENRES ='FILTER_BY_GENRES';
export const ORDER_CARDS ='ORDER_CARDS';
export const FILTER_ORIGIN ='FILTER_ORIGIN';
export const ORDER_BY_RATING='ORDER_BY_RATING'

//Action para traer todos los videojuegos
export const getAllVideoGame =()=>{
    return async function (dispatch){
        const URl = 'http://localhost:3001/videogames';
        try{
        const response = axios.get(`${URl}`)
            dispatch({
                type:GET_VIDEOGAME,
                payload:response.data
            });
        } catch (error) {
            console.log(error)
        }
    };
    };

 //Action para traer videojuego por ID


 export const getDetailVideogames = (id) => {
    return async function(dispatch){
     const URl ="http://localhost:3001/videogames";
     try{
            const response = await axios.get (`${URL}/${id}`);
            dispatch({
                type:GET_VIDEOGAME_BY_ID,
                payload: response.data,
            });

        } catch (error){
            console.log(error)
        }
    
 };
 };

 //Action para buscar por nombre 

 export const getVideogameByName=(name)=>{
    return async function (dispatch){
        const URl = "http://localhost:3001/videogames";
        try {
            const response = await axios.get(`${URl}?name=${name}`);
            dispatch ({
                type: GEY_BY_NAME,
                payload: response.data.slice(0,15)
            })
        }catch(error){
            alert(error.response.data.error)
        }
    }
 }

 export const createVideogames = (payload) =>{
 return async(dispatch)=>{
const URL = "http://localhost:3001/videogames";
    try{
        const response = await axios.post(`${URL}`,payload);
        return response.data;
    }catch (error){}
 
 };
}

//Action para traer todos los géneros

export const getGenres = ()=>{
    return async(dispatch)=>{
        const URL = "http://localhost:3001/genres";
       try{
        const response = await axios.get(`${URL}`);
        dispatch({
            type: GET_GENRES,
            payload: response.data,
        });
       }catch (error){
       error
       }
    };
};




export const filterGenres =(status) =>{
    return{
        type: FILTER_BY_GENRES,
        payload:status
    }
};


//Action para ordenar alfabeticamente
export const orderCards = (value) => {
    return { type: ORDER_CARDS,
         payload: value,
        };
  };
  
  export const getGamesOrderRating = (value) => {
    return {
      type: ORDER_BY_RATING,
      payload: value,
    };
  };
  
  export const filterOrigin = (status) => {
    return {
      type: FILTER_ORIGIN,
      payload: status,
    };
  };