
import SearchBar from "../searchBar/searchBar";
import { Link } from "react-router-dom"
import style from "./navbar.module.css"

function NavBar({ handleChange, handleSubmit, mostrarSearch }) {
    return (
      <div className={style.navbar}>
        <div className={style.logoContainer}>
          <Link to={"/create"}><img  src="https://img.freepik.com/premium-vector/elegant-game-controller-design-sketch-style-esports-mascot-gaming-logo-illustration_196854-609.jpg?w=2000" alt="" />
          <br/>
          crear un juego
          </Link>
        </div>
        <div className={style.links}>
          <Link to={"/home"}>Home</Link>
          <br /> {/*Agrega un salto de línea.
          {/* <Link to={"/create"}>Create a game</Link> */}
          <br />
        </div>
       {mostrarSearch && <div><SearchBar /></div>}
      </div>
    );
  }
  
  export default NavBar;

























// import React from 'react'
// import SearchBar from '../SearchBar/searchBar';
// import { Link } from 'react-router-dom'
// import { filterOrigin } from '../../Redux/actions/actions';



// const navbar = () => {
 
  
//   return (
//     <nav>
//     <div className='navbar-cont' style={{display: "flex",
//      width: "100%",
//     backgroundColor:"black",
//     color:"white",
//     justifyContent:"space-around",
//     alignItems:"center"
//   }}>
//        <Link to={'/home'}>Home</Link>
//        <Link to={'/create'}> crear un videojuego </Link>
      
//        <div className='navbar-search-cont'><SearchBar/></div>
      
//     </div>
//     <div style={{
//       width:"100%",
//       backgroundColor:"gray",
//       padding:"30px",
//       textAlign:"center",
//       display:"flex",
//       justifyContent:"center",
//       gap:"10px"
//     }}>
//         <div>Filtro1
//           <select name="" id="">
//             <option value="" disabled selected>Elija Genero</option>



//           </select>
//         </div>

//         <div>F2</div>

//         <div>Origin
//         <select onChange={(e) => dispatch(filterOrigin(e.target.value))}>
//             {["Selecionar el origen", "Api", "Local"].map((e, i) => (
//               <option value={e} key={i}>
//                 {e}
//               </option>
//             ))}
//           </select>



//         </div>
//       </div>
//     </nav>
  


// //   )
// }

// export default navbar