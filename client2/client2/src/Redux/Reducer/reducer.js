
import {GET_VIDEOGAME, GET_VIDEOGAME_BY_ID, GEY_BY_NAME, GET_GENRES} from '../Actions/actions'


let initialState ={
    videogames:[],
    allVideogames:[],
    tempGames:[],
    videogameById:{},
    genres:[],

};

const rootReducer= (state = initialState,actions) =>{
    switch(actions.type){
        case GET_VIDEOGAME:
            return{
                ...state,
                videogames:[...actions.payload],
                allVideogames:[...actions.payload],
                tempGames:[...actions.payload]
            };
            case GEY_BY_NAME:
                return{
                    ...state,
                    videogames:actions.payload,
                };
             case GET_VIDEOGAME_BY_ID:
                return{
                    ...state,
                    videogameById:actions.payload,
                };
                
            case GET_GENRES:
                return{
                    ...state,
                    genres:[...axios.payload],
                };   
    }
};

export default rootReducer;