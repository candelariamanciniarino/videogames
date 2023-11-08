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


