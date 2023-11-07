const axios = require('axios');
const {Genres} = require('../db');
const {API_KEY } = process.env;


const getAllGenresVideogame = async (req, res) => {
  const URL_API = `https://api.rawg.io/api/genres?key=${API_KEY}`;
  try {
   
      const { data } = await axios.get(URL_API);
      if (data.results && data.results.length > 0){
        data.results.forEach((g) => {
          Genres.findOrCreate({
              where: { name: g.name },
          });
      });
      
      }
      const genresDB = await Genres.findAll();
      
      return genresDB
  } catch (err) {
      res.status(404).json(err);
  }}
module.exports = {getAllGenresVideogame};


// const getAllGenresVideogame= async () =>{
//     const genresFromDB = await getAllGeners();

//     if (genresFromDB.length > 0) {
    
//         return genresFromDB;
//     }

//     const URL_API = `https://api.rawg.io/api/genres?key=${API_KEY}`;
//     const response = await axios.get(URL_API);

//     if (response.status === 200) {
//         const data = response.data;
//         v {
//             const genres = data.results.map(genre => genre.name);
//             await saveGeners(genres); 
//             return genres;
//         }
//     }
//   };

// const getAllGeners = async () => {
//     try {
//       const gen = await genres.findAll({
//         attributes: ["name"],
//       });
//       return gen.map((gener) => gener.name);
//     } catch (error) {
//       throw new Error(error.message);
//     }
//   };


// const saveGeners = async (geners) => {
//     try {
//       await Promise.all(
//         geners.map(async (typeName) => {
//           await genres.create({
//             name: typeName,
//           });
//         })
//       );
//     } catch (error) {
//       throw new Error(error.message);
//     }
//   };

