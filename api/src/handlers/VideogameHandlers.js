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
           .filter((videogame) =>
           videogame.name.toLowerCase().includes(name.toLowerCase())
           ) 
           .slice(0,15);
           res.statys(200).json(responseWithName);
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
    try{
        const{
            name,
            descripcion,
            plataformas,
            imagen,
            fechadelanzamiento,
            rating,
            genres,
        } = req.body;
        if(!name || !descripcion ||!plataformas ||!imagen ||!fechadelanzamiento || !rating){
            res.status(404).sed('la informacion no esta completa');
        }else {
            const videogameCreated = await createNewVideogame(
             name,
            descripcion,
            plataformas,
            imagen,
            fechadelanzamiento,
            rating,
            genres

            );
            return res.status(201).json(videogameCreated);
        }

        } catch (error){
            res.status(404).json({error:error.message});
        }
    };



//Borra el videojuego por ir 

const deleteVideogameByIdHandler = async(req,res) =>{
    try{
        const {idVideogames} = req.params;
        const deletedVideogame = await deleteVideogame (idVideogames);
        return res.status(200).json(deletedVideogame)
    }catch(error) {
        res.status(500).json({error:error.message})

    }
};
module.exports={getVideogameByIdHandler,
                getVideogamesByNameHandler,
                createVideogamesHandler,
                deleteVideogameByIdHandler,
             
            }
