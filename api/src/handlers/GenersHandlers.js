const {getAllGenresVideogame} = require ('../controllers/GenersControllers');

//para traer todos los generos de la API

const getGenresVideogameHandler = async(req,res) => {
    try {
        const response = await getAllGenresVideogame();
        return res.status(200).json(response);
    }catch (error) {
        res.status(400).json({error: error.message});
    }
};

module.exports ={getGenresVideogameHandler};