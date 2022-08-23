import React from 'react'
import "./VitrineNavbar.scss"
import { Link } from 'react-router-dom'
import log from "../../Assets/log.png"

const VitrineNavbar = () => {
  return (
    <div className='vitrineNavbar'>
        <div className="left">
        <Link to="/" style={{textDecoration: "none"}}>
            <img src={log} alt="logo" />
            </Link>
        </div>

        <div className="center">
             <h4>Services</h4>
             <h5>Actualités</h5>
             <h5>A propos</h5>

             <Link to="/contact" style={{textDecoration: "none"}}>
             <h5>Contact</h5>
            </Link>
        
        
        </div>

        <div className="right"> 
        <Link to="/login" style={{textDecoration: "none"}}>
        <button className='buttonBlue'>Se Connecter</button>
        </Link>
        <Link to="/signup" style={{textDecoration: "none"}}>
        <button className='buttonRed'>S'inscrire</button>
        </Link>
        </div>

    </div>
  )
}

export default VitrineNavbar