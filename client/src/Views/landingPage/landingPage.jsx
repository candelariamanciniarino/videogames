import styles from '../landingPage/landing.module.css';
import {Link} from 'react-router-dom'
import React from 'react'


const LandingPage=()=>{
    return (
        <div className={styles.fondo}>
            <title>Bienvenidos al mundo de los juego </title>

            <Link to ='/home'>
            <button>comenzemos </button>
            </Link>
        </div>
    );
}
export default LandingPage;