const  {Router} = require ('express');
const { getVideogameByIdHandler,
    getVideogamesByNameHandler,
    createVideogamesHandler,
  
} = require('../handlers/VideogameHandlers');



const videogameRouter = Router()

videogameRouter.get('/',getVideogamesByNameHandler);
videogameRouter.get('/:id',getVideogameByIdHandler);
videogameRouter.post('/',createVideogamesHandler);




module.exports = videogameRouter