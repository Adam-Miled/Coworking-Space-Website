import React from 'react'
import "./Footer.scss"
import log from "../../Assets/logow.png"
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import EmailIcon from '@mui/icons-material/Email';
import {Link} from "react-router-dom"

const Footer = () => {
  return (
    <div className='footer'>
        
        <div className="container">

    
<div className="left">


<div className="lignes">
<h3>Association Apollon
</h3>
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

<div className="lignes">
<h3>Association Apollon
</h3>
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

</div>

<div className="right">

<img src={log} alt="" />

<div className="icones">
<a href="https://www.facebook.com/ApollonAssociation" target="_blank">
<FacebookIcon className='sns'/>
</a>
 <a href="https://www.instagram.com/apollonassociation/" target="_blank">
<InstagramIcon className='sns'/>
</a>

 <a href="https://www.youtube.com/c/ApollonAssociation" target="_blank">
<YouTubeIcon className='snsp'/>
</a>

</div>

</div>





    </div>

<h6>Copyright © 2022 Association Apollon. All rights reserved</h6>
    </div>
  )
}

export default Footer