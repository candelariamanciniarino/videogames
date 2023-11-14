import styles from '../landingPage/landing.module.css';
import {Link} from 'react-router-dom'
import React from 'react'


const LandingPage=()=>{
    return (
        <div className={styles.fondo}>
            <title>comenzemos </title>

            <Link to ='/home'>
            <button> Bienvenidos al mundo de los Video juego </button>
            </Link>
        </div>
    );
}
export default LandingPage;