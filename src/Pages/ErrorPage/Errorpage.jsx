import React from 'react'
import "./Errorpage.scss"
import VitrineNavBar from "../../Components/VNavbar/VitrineNavbar"
import image from "../../Assets/Content/GDe.png"
import Footer from "../../Components/Footer/Footer"


const Errorpage = () => {
  return (
    <div className='errorPage'>
        
<VitrineNavBar/>


<h4 className='errorTitle'>404 -  Page non trouvée</h4>

<h6 className='midTitle'>La page que vous recherchez n'existe pas !</h6>

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

export default Errorpage