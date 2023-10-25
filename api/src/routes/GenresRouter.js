const {Router} = require('express');
const {getGenresVideogameHandler}= require('../handlers/GenersHandlers');

const genresRouter = Router();

genresRouter.get('/',getGenresVideogameHandler);


module.exports = genresRouter