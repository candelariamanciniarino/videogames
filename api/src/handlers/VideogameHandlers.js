const { getAllVideogames,
     getVideogameByName,
     createNewVideogame,
     deleteVideogame,
     getVideogameById,
    }= require ('../controllers/VideogameControllers');
//trear videojuegos por quert(name)
const getVideogamesByNameHandler = async(req,res) =>{
    try{
        const {name} = req.query;
        if(name){
           const responseWithName = (await getVideogameByName(name))
           res.status(200).json(responseWithName);
        }else {
            const responseWithoutName = await getAllVideogames();
            res. status(200).json(responseWithoutName);
        }

    } catch (error){
    res.status(400).json({error:error.message});
    }
};


//traer todos los videojuegos y manejar errores 

const getVideogameByIdHandler = async (req, res)=>{
    try{
       const {id} = req.params;
        
       const source = isNaN(id) ? "bdd" : "api";
        const  getVideogameId= await getVideogameById (id, source);
        res.status(200).json(getVideogameId);
       

    }catch (error){
        res.status(400).json({
            error:error.message
       });
       
}
}
  

//manejar errores y crear un nuevo videojuego

const createVideogamesHandler = async (req,res) =>{
    const{
        name,
        platforms,
        background_image,
        freleaseds,
        rating,
        genres,
        description
           
    } = req.body;
    try{
            const videogameCreated = await createNewVideogame(
             name,
             platforms,
             background_image,
             freleaseds,
             rating,genres,
             description
        
            );
            return res.status(200).json(videogameCreated);
        

        } catch (error){
            res.status(400).json({error:error});
        }
    };

module.exports={getVideogameByIdHandler,
                getVideogamesByNameHandler,
                createVideogamesHandler,
             
            }
