const axios = require('axios');
const {genres} = require('../db');
const {API_KEY } = process.env;

const getAllGenresVideogame= async () =>{
    const genresFromDB = await getAllGeners();

    if (genresFromDB.length > 0) {
    
        return genresFromDB;
    }

    const URL_API = `https://api.rawg.io/api/genres?key=${API_KEY}`;
    const response = await axios.get(URL_API);

    if (response.status === 200) {
        const data = response.data;
        if (data.results && data.results.length > 0) {
            const genres = data.results.map(genre => genre.name);
            await saveGeners(genres); 
            return genres;
        }
    }
  };

const getAllGeners = async () => {
    try {
      const gen = await genres.findAll({
        attributes: ["name"],
      });
      return gen.map((gener) => gener.name);
    } catch (error) {
      throw new Error(error.message);
    }
  };


const saveGeners = async (geners) => {
    try {
      await Promise.all(
        geners.map(async (typeName) => {
          await genres.create({
            name: typeName,
          });
        })
      );
    } catch (error) {
      throw new Error(error.message);
    }
  };


module.exports = {getAllGenresVideogame};