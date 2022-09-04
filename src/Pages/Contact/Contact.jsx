import React from 'react'
import { Link } from 'react-router-dom'
import Banner from '../../Components/Banner/Banner'
import VitrineNavbar from '../../Components/VNavbar/VitrineNavbar'
import "./Contact.scss"
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import EmailIcon from '@mui/icons-material/Email';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import LocalPoliceIcon from '@mui/icons-material/LocalPolice';
import Footer from '../../Components/Footer/Footer'
import map from "../../Assets/Content/map.png"

const Contact = () => {




  return (
    <div className='contact'>
<VitrineNavbar/>  
<Banner titre="Contact"/>   



<div className="mid">


<div className="left">
<div className="leftTitles">
    <h3>Formulaire de Contact</h3>

<h1 > Exprimez-vous librement ! </h1>
</div>


<form >



<input type="text" placeholder='  Nom et Prénom' />

<input type="text" placeholder='  Objet' />
<input type="email" placeholder='  Email'  />

<input className='area' type="text" placeholder='  Message' />



<button type='submit'>Envoyer</button>

</form>


</div>

<div className="right">

<div className="leftTitles">
<h3>Information de Contact</h3>

<h1 >Nous vous attendons...
 </h1>

</div>

<div className="lignes">

<div className="ligne">

<FmdGoodIcon className="ic"/>

<div className="texte">Rue Flen Fouleni, Ksar Hellal 5070</div>

</div>

<div className="ligne">
<PhoneInTalkIcon className="ic"/>
<div className="texte">+216 99 100 189</div>

</div>

<div className="ligne">

<EmailIcon className="ic" />
<div className="texte">Contact.apollon@gmail.com</div>

</div>

</div>
<div className="mapImg">

<img src={map} alt="Direction vers Locale Thakafi" />

</div>

</div>



</div>


<div className="urgence">

<div className="titleTxt">

Contact d'Urgence

</div>


<div className="illus">

<div className="cadre">

  <LocalPoliceIcon className='icone'/>
  POLICE - 197 
  </div>
  <div className="cadre">
<LocalFireDepartmentIcon className='icone'/>
Prot Civil - 198
</div>
<div className="cadre">
<LocalHospitalIcon className='icone'/>
SAMU -190
</div>
</div>
<div className="txt">

NB : Veuillez n'utiliser ces numéros qu'en cas d'urgence !

</div>


</div>

<Footer/>



</div>
  )
}

export default Contact