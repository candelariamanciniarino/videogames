const {Videogame, Genres}= require ('../db');
const axios = require('axios');

const {API_KEY} = process.env;
const {cleaner } = require ('../utils/infoCleaner');



const getAllVideogames = async()=>{
const videogamesDB = await Videogame.findAll()
const response = await axios.get('https://api.rawg.io/api/games?key=75198e41e6ca47b498ef0a9b9d2dfe1f&dates=2019-09-01,2019-09-30&platforms=18,1,7');

    const infoApi = response.data;
    const videogamesApi = cleaner(infoApi);
    return [...videogamesApi,...videogamesDB];
}


//juntamos la info de la base de datos y de la api



// para traer por nombre 
const getVideogameByName = async (name) =>{
   let URL_API_SEARCH = `https://api.rawg.io/api/games?search=${name}&key=${API_KEY}`;
   const videogamesApi = (await axios.get(`${URL_API_SEARCH}`)).data.results;
   const videogameDb = await getVideogamesDb();
   const cleanApiData = cleaner(videogamesApi);

   const AllVideogames =[...cleanApiData, ...videogameDb];
   if(name){
    const filterVideogames = AllVideogames.filter((games) =>
        games.name.toLowerCase().include(name.toLowerCase())
    );
        if(!filterVideogames.length){
            throw new Error ('Este nombre no coincide con ningun videojuego' );
        }
        return filterVideogames;
    }
    return AllVideogames.slice(0, 15);
};

//traer por id

const getVideogameById = async (id,source ) =>{
    
let videogame;

videogame = source === 'api'?(await axios.get (`https://api.rawg.io/api/games/${id}?key=75198e41e6ca47b498ef0a9b9d2dfe1f&dates=2019-09-01,2019-09-30&platforms=18,1,7`)).data: Videogame.findByPk(id)

return  cleaner([videogame])
}


//crear un nuevo videojuego con sus generos
const createNewVideogame = async(
    name,
    descripcion,
    plataformas,
    imagen,
    fechadelanzamiento,
    rating,
    genres
) =>{
    const [newVideogame, created] = await Videogame.findOrCreate({
        where:{name:name},
        defaults:{
          name,
          descripcion,
          plataformas,
          imagen,
          fechadelanzamiento,
          rating,
          createVideoGame:true,
        
        },
    });
    genres.forEach(async(genreFound)=>{
        let genresToAdd = await Genres.findAll ({
             where:{
                name:genreFound
             }
        })
        await newVideogame.addGenres(genresToAdd);
    });
    if(created){
        return newVideogame;
    }else{
        throw Error('El videojuego ya existe');
    }
};

//eliminar un videojuego por id

const deleteVideogame = async (idVideogame) =>{
    const getVideogame = await Videogame.findByPk(idVideogame);
    if(getVideogame){
        getVideogame.destroy();
        return'el videojuego fue eliminado';
    }else{
        throw Error('videojuego no encontrado');
    }
}




module.exports={getAllVideogames,
                getVideogameByName,
                getVideogameById,
                createNewVideogame,
                deleteVideogame,
            };