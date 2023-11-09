
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getGenres, postGame } from '../../Redux/actions/actions';
import style from './createPage.module.css';

const Create = () => {
  const dispatch = useDispatch();
  const allGenres = useSelector((state) => state.allGenres);
  const [generosSelec, setGenerosSelec] = useState([])
  const [disableSub, setDisableSub]=useState(true)
  useEffect(() => {
    dispatch(getGenres());
  }, [dispatch]);

  const platforms = [
    "PC",
    "PlayStation 5",
    "Xbox One",
    "PlayStation 4",
    "Xbox Series S/X",
    "Nintendo Switch",
    "iOS",
    "Android",
    "Nintendo 3DS",
    "Nintendo DS",
    "Nintendo DSi",
    "macOS",
  ];

  const [state, setState] = useState({
    name: '',
    platforms: '',
    background_image: '',
    freleaseds: '',
    rating: '',
    description: '',
    genres: [],
  });

  const [error, setErrors] = useState({
    name: 'Campo requerido',
    background_image: 'Campo requerido',
   description: 'Descripción no válida',
    freleaseds: 'Fecha no válida',
    platforms: 'Plataformas no válidas',
    rating: 'Rating no válido',
  });

  const validate = (state, name) => {
    switch (name) {
      case 'name':
        if (state.name === '') setErrors({ ...error, name: 'El campo es requerido' });
        else if (state.name.length > 20) setErrors({ ...error, name: 'Es muy largo' });
        else setErrors({ ...error, name: '' });
        break;
      case 'description':
        if (state.description.length === 0)
          setErrors({ ...error, description: 'Campo requerido' });
        else setErrors({ ...error, description: '' });
        break;
      case 'freleaseds':
        if (!state.freleaseds) setErrors({ ...error, freleaseds: 'Fecha no válida' });
        else setErrors({ ...error, freleaseds: '' });
        break;
      case 'platforms':
        if (!state.platforms) setErrors({ ...error, platforms: 'Plataformas no válidas' });
        else setErrors({ ...error, platforms: '' });
        break;
      case 'rating':
        if (isNaN(state.rating) || state.rating < 0) setErrors({ ...error, rating: 'Rating no válido' });
        else setErrors({ ...error, rating: '' });
        break;
    
      default:
        break;
    }
  };

  const disableSubmit = () => {
    console.log(state,"state")
    const isFormValid = state.name &&
                         state.description.length > 0 &&
                        
                        state.background_image.length > 0 &&
                        state.freleaseds.length > 0 &&
                        state.platforms.length > 0 && 
                        state.rating > 0 &&
                        generosSelec.length > 0


    return !isFormValid;
  };

  const handleChange = (event) => {
    const { name, value, type } = event.target;

    if (name === 'genres') {
      if (type === 'select-multiple') {
        const selectedOptions = Array.from(event.target.options)
          .filter((option) => option.selected)
          .map((option) => option.value);
        setState({
          ...state,
          genres: selectedOptions,
        });
      }
    } else {
      setState({
        ...state,
        [name]: value,
      });
    }
    validate({ ...state, [name]: value }, name);
    disableSubmit()
  };
  const handleGenres = (e) => {
    console.log(e.target.value)
    const genreValue = e.target.value
    setGenerosSelec((prevGenerosSelec) => {
      // Verificar si el género ya está en el array para evitar duplicados
      if (prevGenerosSelec.includes(genreValue)) {
        return prevGenerosSelec;
      }
      // Devolver un nuevo array con el valor añadido
      return [...prevGenerosSelec, genreValue];
    });
  }
  const eliminarGenero = (gen) => {
    setGenerosSelec((prevGenerosSelec) => prevGenerosSelec.filter(g => g !== gen));
  };




  function handleSubmit(e) {
    e.preventDefault();
     let state2= {...state,genres:generosSelec, platforms: [state.platforms]}
     console.log(state2,"state2 antes de post")
          dispatch(postGame(state2));
         
          setState({
            name: "",
            image: "",
            description: "",
            freleaseds: "",
            rating: "",
            platforms: [],
            genres: [],
          });
       
        
      
    
  }
  

  return (
    <div style={{width:"100%", display:"flex", justifyContent:"center"}} >
    <form className={style.form} onSubmit={handleSubmit}>
        <label>Name:</label>
        <input name="name" onChange={handleChange} type="text" value={state.name} />
        {error.name && <p>{error.name}</p>}

        <br />
 
        <label>Background Image:</label>
        <input name="background_image" onChange={handleChange} type="text" value={state.background_image} />

        <br />

  <label>Description:</label>
        <input name="description" onChange={handleChange} type="text" value={state.description} />
        {error.description && <p>{error.description}</p>} 

        <br />

        <label>freleaseds:</label>
        <input name="freleaseds" onChange={handleChange} type="text" value={state.freleaseds} />
        {error.freleaseds && <p>{error.freleaseds}</p>}


        <br />

        <label>Rating:</label>
        <input name="rating" onChange={handleChange} type="text" value={state.rating} />
        {error.rating && <p>{error.rating}</p>}

        <br />

        <label>Platforms:</label>
        <select name="platforms" onChange={handleChange} value={state.platforms}>
          <option value="">Selecciona una plataforma</option>
          {platforms.map((platform, index) => (
            <option key={index} value={platform}>
              {platform}
            </option>
          ))}
        </select>

        <br />

        <label>Genres:</label>
        <select name="genres" onChange={(e)=>handleGenres(e)}>
          {allGenres.map((genre, index) => (
            <option key={index} value={genre.name}>
              {genre.name}
            </option>
          ))}
        </select>{/* */}
          <div>
            Generos seleccionados:
            <div>{generosSelec.length > 0 && generosSelec.map(gen =>{
 return(<span>{gen} <button 
  type='button'
  onClick={()=>eliminarGenero(gen)}
  style={{width:"20px", height:"30px", margin:"auto 10px"}}>X</button></span>)
            })}</div>
          </div>

        <button disabled={disableSubmit()} type="submit">
          Entregar
        </button>
          </form>
    </div>
  );
};




export default Create;






