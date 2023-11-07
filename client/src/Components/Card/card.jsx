


import { Link } from "react-router-dom";
import style from "../card/card.module.css";

function Card({ id, background_image, name, genres }) {
    return (
        <div className={style.cardcontainer}>
            <Link to={`/detail/${id}`}>
                <img className={style.img} src={background_image} alt={name} />
                <h2>Nombre: {name}</h2>
              <h2>Géneros: {genres}</h2> 
            </Link>
        </div>
    );
}

export default Card;
