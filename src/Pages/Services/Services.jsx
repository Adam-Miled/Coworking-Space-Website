import React from 'react'
import VitrineNavbar from '../../Components/VNavbar/VitrineNavbar'
import "./Services.scss"
import Footer from '../../Components/Footer/Footer'
import SmokingRoomsIcon from '@mui/icons-material/SmokingRooms';
import FastfoodIcon from '@mui/icons-material/Fastfood';  
import LocalPrintshopIcon from '@mui/icons-material/LocalPrintshop';
import BorderColorIcon from '@mui/icons-material/BorderColor';

const Services = () => {
  return (
    <div className='service'>
      
<VitrineNavbar/>

<div className="zone">
  
<h2>Zone A</h2>

<h4>Lorem Ipvacib ciev fvf jpka aklceç ckrtngbpis ofin, cvro, cipd ckfnvofv,f
vfinvfo,vofva okla foklv facy.</h4>

</div>


<div className="interLigne">

 
</div>


<div className="zone">
  
<h2>Zone B</h2>

<h4>Lorem Ipvacib ciev fvf jpka aklceç ckrtngbpis ofin, cvro, cipd ckfnvofv,f
vfinvfo,vofva okla foklv facy.</h4>

</div>


<div className="interLigne">

 
</div>

<div className="of">

<h3>Nous offrons également</h3>

<div className="illus">

<div className="cadre">

  <SmokingRoomsIcon className='icone'/>
  Zone Fumeur 
  </div>
  <div className="cadre">
<FastfoodIcon className='icone'/>
Buvette
</div>
<div className="cadre">
<LocalPrintshopIcon className='icone'/>
Outils
bureautique
</div>

<div className="cadre">
<BorderColorIcon className='icone'/>
Formations
</div>

</div>



</div>



<div className="interLigne">

 
</div>


<Footer/>

    </div>
  )
}

export default Services