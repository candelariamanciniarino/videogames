import React from 'react'
import SearchBar from '../SearchBar/searchBar';
import { Link } from 'react-router-dom'



const navbar = () => {
  return (
    <nav>
    <div className='navbar-cont'>
       <Link to={'/home'}>Home</Link>
       <Link to={'/create'}> crear un videojuego </Link>
       <div className='navbar-search-cont'><SearchBar/></div>

    </div>
    </nav>
  


  )
}

export default navbar