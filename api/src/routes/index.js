const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const videogameRouter = require('./VideogameRouter')
const genresRouter = require('./GenresRouter.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use('/videogame', videogameRouter);
router.use('/genres', genresRouter);


module.exports = router;
