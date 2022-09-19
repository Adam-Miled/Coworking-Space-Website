import React from 'react'
import Footer from '../../Components/Footer/Footer'
import VitrineNavbar from '../../Components/VNavbar/VitrineNavbar'
import "./Coming.scss"
import image from "../../Assets/Content/GD.png"


const Coming = () => {
  return (
    <div className='coming' >
        
<VitrineNavbar/>




<h4 className='errorTitle'>Bienvenue au site officiel de " L'espace Culturel "</h4>

<h6 className='midTitle'>La page que vous recherchez est sous construction!</h6>

<div className="mixTitle">
<h6 className='midTitleBot'>Vous pouvez retourner à la page d'</h6>

<a className="errorLinkRight" href="/">Acceuil</a>

<h6 className='midTitleBot'>ou consulter nos</h6>
<a className="errorLink" href="/packs">Services</a>
<h6 className='midTitleBot'>.</h6>


</div>


<img className = "errorImage" src={image} alt="error" />


<Footer/>


    </div>
  )
}

export default Coming