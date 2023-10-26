const {Videogame, Genres}= require ('../db');
const axios = require('axios');

const {API_KEY} = process.env;
const {cleaner } = require ('../utils/infoCleaner');
const { infoCleaner } = require('../utils/cleaner');



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
   const videogameDb = await Videogame.findAll({ 
    where:{
        name:name
    },
 include:[Genres],
   })
   

   const AllVideogames =[...videogamesApi, ...videogameDb];
   
        if(!AllVideogames.length){
            throw new Error ('Este nombre no coincide con ningun videojuego' );
        }
    

    return infoCleaner(AllVideogames.slice(0, 15));
}

//traer por id

const getVideogameById = async (id,source ) =>{
    
let videogame;

videogame = source === 'api'?(await axios.get (`https://api.rawg.io/api/games/${id}?key=75198e41e6ca47b498ef0a9b9d2dfe1f&dates=2019-09-01,2019-09-30&platforms=18,1,7`)).data: Videogame.findByPk(id)

return videogame
}


//crear un nuevo videojuego con sus generos
const createNewVideogame = async(
    name,
    platforms,
    background_image,
    freleaseds,
    rating,
    genres
) =>{
    const newVideogame = await Videogame.create({ name,
        platforms,
        background_image,
        freleaseds,
        rating,
        genres})
    return newVideogame
};





module.exports={getAllVideogames,
                getVideogameByName,
                getVideogameById,
                createNewVideogame,
            };