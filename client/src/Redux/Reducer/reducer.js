

//importa las actions types
import { GET_GAMES, GET_GAME_ID, GET_GENRES, GET_PLATFORMS, PAGINATED, FILTER_BY_GENRES,FILTER_ORIGIN,ORDER_BY_RATING, ORDER_CARDS,  filterOrigin} from "../actions/actions";

//estado inicial
let initialState = {
    allVideogames: [],
    videoGameId: [],
    allGenres: [],
    allPlatforms: [],
    allVideogamesBackUp: [],
    allVideogamesBackUp2: [],
    currentPage: 0,
    loadingState:true,
}

function rootReducer(state = initialState, action) {
    const ITEMS_PER_PAGE = 15;



    switch (action.type) {
        case GET_GAMES:
            console.log(action.payload)
            return {
                ...state, //hago una copia del estado para no pisar el original
                allVideogames: [...action.payload].splice(0, ITEMS_PER_PAGE),
                allVideogamesBackUp:action.payload,
                allVideogamesBackUp2: action.payload,
                loadingState: false,

            };

        case GET_GAME_ID: //dependiendo del tipo va a entrar a un switch statement, en este caso la action es GET_USERS (importada mas arriba)
            return {
                ...state, //hago una copia del estado para no pisar el original
                videoGameId: action.payload // modifica el estado
                /* gamesCopy: action.payload */,
                loadingState: false,
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
                const next_page = state.currentPage + 1;
                const prev_page = state.currentPage - 1;
                const firstIndex = action.payload === "next" ? next_page * ITEMS_PER_PAGE : prev_page * ITEMS_PER_PAGE;
        
                return {
                  ...state,
                  allVideogames: [...state.allVideogamesBackUp].slice(firstIndex,firstIndex + ITEMS_PER_PAGE),
                  currentPage: action.payload === "next" ? next_page : prev_page 
                };


        case FILTER_BY_GENRES:
                const allGames = state.allVideogamesBackUp
                const gamesFiltered = allGames.filter(game => game.genres.includes(action.payload))
                console.log(gamesFiltered)
                return {
                    ...state,
                    allVideogames: gamesFiltered
                };


        case FILTER_ORIGIN: 
              let filterorigin;
                console.log((action.payload),"filtros")
              if(action.payload === 'All'){
                filterorigin = state.allVideogamesBackUp;
              }

              if(action.payload === 'Local'){
                filterorigin= state.allVideogamesBackUp.filter(
                (allVideogamese) => typeof allVideogamese.id ==='string'
                );  
            }

           if(action.payload === 'Api'){
            filterorigin= state.allVideogamesBackUp.filter(
                (allVideogames)=>typeof allVideogames.id === 'number'
            );
           } 
           return {
            ...state,
            allVideogames: filterorigin,
            loadingState: false
        };

          


    case ORDER_BY_RATING:
        if(action.payload ==='Ascendente'){
            return{
                ...state,
                allVideogames:[...state.allVideogames.sort((a, b) =>a.rating - b.rating)],
            };
        } else {
            return{
                ...state,
                allVideogames:[...state.allVideogames.sort((a,b)=>b.rating - a.rating)],
            };
        }
        



    
        case ORDER_CARDS:
            console.log("payload Name", action.payload)
            if (action.payload === "Ascendente") {
                console.log("Chau xd")
              return {
                ...state,
                allVideogames: [
                  ...state.allVideogames.sort((a, b) => a.name.localeCompare(b.name)),
                ],
              };
            } else {
                console.log("hola kei")
              return {
                ...state,
            allVideogames: [
                  ...state.allVideogames.sort((a, b) => b.name.localeCompare(a.name)),
                ],
              };
            }
      case 'SET_LOADING':
        return{
            ...state,
            loadingState: true
        }


        default:
            return { ...state }
    }
};




export default rootReducer


