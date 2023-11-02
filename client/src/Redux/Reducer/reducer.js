

//importa las actions types
import { GET_GAMES, GET_GAME_ID, GET_GENRES, GET_PLATFORMS, PAGINATED } from "../actions/actions";

//estado inicial
let initialState = {
    allVideogames: [],
    videoGameId: [],
    allGenres: [],
    allPlatforms: [],
    allVideogamesBackUp: [],
    currentPage: 0,
}

function rootReducer(state = initialState, action) {
    const ITEMS_PER_PAGE = 15;



    switch (action.type) {
        case GET_GAMES:
            return {
                ...state, //hago una copia del estado para no pisar el original
                allVideogames: [...action.payload].splice(0, ITEMS_PER_PAGE),
                allVideogamesBackUp: action.payload

            };

        case GET_GAME_ID: //dependiendo del tipo va a entrar a un switch statement, en este caso la action es GET_USERS (importada mas arriba)
            return {
                ...state, //hago una copia del estado para no pisar el original
                videoGameId: action.payload // modifica el estado
                /* gamesCopy: action.payload */
            };

        case GET_GENRES:
            return {
                ...state,
                allGenres: action.payload
            };

        case GET_PLATFORMS:
            return {
                ...state,
                allPlatforms: action.payload
            };

        case PAGINATED:
            const next_page = action.payload === "next" ? state.currentPage + 1 : state.currentPage - 1;
            const startIndex = next_page * ITEMS_PER_PAGE;
            const endIndex = startIndex + ITEMS_PER_PAGE;
            return {
                ...state,
                allVideogames: state.allVideogamesBackUp.slice(startIndex, endIndex),
                currentPage: next_page,
            };

        //case SEARCH_GAME:

        



        default:
            return { ...state }
    }
};

export default rootReducer

















// import {GET_VIDEOGAME, GET_VIDEOGAME_BY_ID, GEY_BY_NAME, GET_GENRES} from '../Actions/actions'


// let initialState ={
//     videogames:[],
//     allVideogames:[],
//     tempGames:[],
//     videogameById:{},
//     genres:[],

// };

// const rootReducer= (state = initialState,actions) =>{
//     switch(actions.type){
//         case GET_VIDEOGAME:
//             return{
//                 ...state,
//                 videogames:[...actions.payload],
//                 allVideogames:[...actions.payload],
//                 tempGames:[...actions.payload]
//             };
//             case GEY_BY_NAME:
//                 return{
//                     ...state,
//                     videogames:actions.payload,
//                 };
//              case GET_VIDEOGAME_BY_ID:
//                 return{
//                     ...state,
//                     videogameById:actions.payload,
//                 };
                
//             case GET_GENRES:
//                 return{
//                     ...state,
//                     genres:[...axios.payload],
//                 };   
//     }
// };

// export default rootReducer;