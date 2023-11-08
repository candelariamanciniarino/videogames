const {Videogame, Genres}= require ('../db');
const axios = require('axios');

const {API_KEY} = process.env;
const {cleaner } = require ('../utils/infoCleaner');
const { infoCleaner } = require('../utils/cleaner');



const getAllVideogames = async()=>{
const videogamesDB = await Videogame.findAll({
    include: [
      {
        model: Genres,
        attributes: ["name"],
        through: {
          attributes: [],
        },
      }]})
 
      const dbGame = videogamesDB.map((game) => ({
        id: game.id,
        name: game.name,
        background_image: game.background_image,
        released: game.freleaseds,
        rating: game.rating,
        genres:game.genres.map(genero => genero.name).join(", ")
      }));
      console.log("prueba:", dbGame)
     

const response = await axios.get('https://api.rawg.io/api/games?key=75198e41e6ca47b498ef0a9b9d2dfe1f');
const response2 = await axios.get('https://api.rawg.io/api/games?key=75198e41e6ca47b498ef0a9b9d2dfe1f&page=2');
const response3 = await axios.get('https://api.rawg.io/api/games?key=75198e41e6ca47b498ef0a9b9d2dfe1f&page=3');
const response4 = await axios.get('https://api.rawg.io/api/games?key=75198e41e6ca47b498ef0a9b9d2dfe1f&page=4');

const response5 = await axios.get('https://api.rawg.io/api/games?key=75198e41e6ca47b498ef0a9b9d2dfe1f&page=5');
    const infoApi = response.data;
    


    const videogamesApi = cleaner(infoApi);
    return [...videogamesApi,...cleaner(response2.data),...cleaner(response3.data),...cleaner(response4.data),...cleaner(response5.data),...dbGame];
    //...videogamesApi,
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



// const getVideogameByName = async (name) => {
//   let gamesDb = [];
//   let gamesApi = [];

//   if (name) {
//       gamesDb = await Videogame.findAll({
//           include: Genres,
//           where: { name: { [Op.iLike]: `%${name}%` } },
//           limit: 15
//       });

//       let URL_API_SEARCH = `https://api.rawg.io/api/games?search=${name}&key=${API_KEY}`;
//       const response = await axios.get(URL_API_SEARCH);
//       gamesApi = response.data.results;
//   } else {
//       gamesDb = await Videogame.findAll({ include: Genres });

//       const gamesToFetch = 100; // Número de juegos que deseas obtener
//       let page = 1; // Número de página inicial
//       let gamesFetched = 0; // Contador de juegos obtenidos

//       while (gamesFetched < gamesToFetch) {
//           const URL_API_SEARCH = `https://api.rawg.io/api/games?key=${API_KEY}&page=${page}&page_size=40`; // URL para obtener 40 juegos por página
//           const response = await axios.get(URL_API_SEARCH);
//           const fetchedGames = response.data.results;
//           gamesApi = gamesApi.concat(fetchedGames);
//           gamesFetched += 40; // Incrementa el contador

//           if (!response.data.next || gamesFetched >= gamesToFetch) {
//               break; // Detener si no hay más páginas o ya tienes suficientes juegos
//           }

//           page++; // Pasa a la siguiente página
//       }
//   }

//   const AllVideogames = [...gamesApi, ...gamesDb];

//   if (!AllVideogames.length) {
//       throw new Error('Este nombre no coincide con ningún videojuego');
//   }

//   return infoCleaner(AllVideogames.slice(0, 15));
// }
//traer por id

const getVideogameById = async (id,source ) =>{
    
let videogame;

videogame = source === 'api'?(await axios.get (`https://api.rawg.io/api/games/${id}?key=75198e41e6ca47b498ef0a9b9d2dfe1f&dates=2019-09-01,2019-09-30&platforms=18,1,7`)).data: Videogame.findOne({
    where: { id: id },
    include: {
        model: Genres,
        attributes: ["name"],
        through: { attributes: [] },
    },
});
const finalVideoGame = {...videogame,
  platforms:videogame.platforms.map(platform => platform.platform.name).join(', '),
};
//findByPk(id,include:{[Genres]})

return finalVideoGame
}


//crear un nuevo videojuego con sus generos
const createNewVideogame = async(
    name,
    platforms,
    background_image,
    freleaseds,
    rating,
    genres,
    description
) =>{
    const newVideogame = await Videogame.create({ name,
        platforms,
        background_image,
        freleaseds,
        rating,
        description
        })
console.log("generos en create, ",genres)
        genres.forEach(async (g) => {
            const generoDB = await Genres.findOne({
              where: { name: g },
            });
            await newVideogame.addGenres(generoDB);
          });

        // for (const genre of genres) {
        //     const genresGame = await Genres.findOne({
        //         where: { name: genre}
        //     });
        //     await newVideogame.addGenres(genresGame)

        // }
        // newVideogame = {
        //     ...newVideogame.dataValues,
        //     genres: genres
        //         .map((g) => g)
        //         .join(", "),
        // };
        

    return newVideogame
};





module.exports={getAllVideogames,
                getVideogameByName,
                getVideogameById,
                createNewVideogame,
            };