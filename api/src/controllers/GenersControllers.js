const axios = require('axios');
const {genrs} = require('../db');
const Genres = require('../models/Genres');
const {API_KEY } = process.env;

//traer todos los generos de la api

const getAllgenresVideogame= async () =>{
    const URL_API = `https://api.rawg.io/api/games? KEY=${API_KEY}`;


    const genersDb = await Genres.findAll();
    if(!genersDb.lenght){
        const requestApi = (await axios.get(`${URL_API}`)).data.results;
        const genresArray = requestApi.map((genre) => genre.name);

        await Promise.all(
            genresArray.map(async (genre) =>{
                await Genres.findOrCreate({
                    where:{
                        name:genre,
                    },
                });
            })
        );
        return genresArray;
}
return genersDb.map((g)=> g.name);

};
module.exports = {getAllgenresVideogame};