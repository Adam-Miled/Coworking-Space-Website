import StarIcon from '@mui/icons-material/Star';
import React from 'react'
import Banner from '../../Components/Banner/Banner'
import VitrineNavbar from '../../Components/VNavbar/VitrineNavbar'
import "./Actualites.scss"
import Footer from '../../Components/Footer/Footer'
import StarBorderIcon from '@mui/icons-material/StarBorder';
import ShareIcon from '@mui/icons-material/Share';
const Actualites = () => {
  return (
    <div className='actualites'>
      
<VitrineNavbar/>
<Banner titre="Actualités"/>

<div className="subscribe">

<h2>Abonnez-vous à notre newsletter ! </h2>
<h3>Pas de spam, Beaucoup de nouvelle </h3>

<input className='emailInput' type="text" placeholder='   Votre Adresse e-mail ici
' />

<button className='emailButton'>S'abonner</button>


</div>


<div className="kbira">

<div className="act">

<div className="boxbox act">

<div className="titreBox">Actualités</div>
<div className="titreDate">
  <h2>Formation Dev</h2>
  <h6>25-03-2022</h6>
</div>

<p>Lorem ipsum dolor sit amet, consetetur
sadipscing elitr, sed diam nonumy eirmod
tempor invidunt ut labore et dolore magna uyam
erat, sed diam voluptua. At vero eos et accusam
et justo duo dolores et ea rebum. Stet clita kasd
gubergren, no sea takimata sanctus est Lorem
ipsum dolor sit amet. Lorem ipsum dolor sit</p>

<div className="botPart">

<button>Plus</button>

<div className="botRight">
12
  <StarIcon className='botIconOne'/>
<ShareIcon className='botIconTwo'/>
  
</div>

</div>




</div>


</div>
<div className="ofr">

<div className="boxbox ofr">

<div className="titreBox">Offres</div>
<div className="titreDate">
  <h2>Formation Dev</h2>
  <h6>25-03-2022</h6>
</div>

<p>Lorem ipsum dolor sit amet, consetetur
sadipscing elitr, sed diam nonumy eirmod
tempor invidunt ut labore et dolore magna uyam
erat, sed diam voluptua. At vero eos et accusam
et justo duo dolores et ea rebum. Stet clita kasd
gubergren, no sea takimata sanctus est Lorem
ipsum dolor sit amet. Lorem ipsum dolor sit</p>

<div className="botPart">

<button>Plus</button>

<div className="botRight">
12
  <StarBorderIcon className='botIconOne'/>
<ShareIcon className='botIconTwo'/>
  
</div>

</div>




</div>

<div className="boxbox ofr">

<div className="titreBox">Offres</div>
<div className="titreDate">
  <h2>Formation Dev</h2>
  <h6>25-03-2022</h6>
</div>

<p>Lorem ipsum dolor sit amet, consetetur
sadipscing elitr, sed diam nonumy eirmod
tempor invidunt ut labore et dolore magna uyam
erat, sed diam voluptua. At vero eos et accusam
et justo duo dolores et ea rebum. Stet clita kasd
gubergren, no sea takimata sanctus est Lorem
ipsum dolor sit amet. Lorem ipsum dolor sit</p>

<div className="botPart">

<button>Plus</button>

<div className="botRight">
12
  <StarBorderIcon className='botIconOne'/>
<ShareIcon className='botIconTwo'/>
  
</div>

</div>




</div>

<div className="boxbox ofr">

<div className="titreBox">Offres</div>
<div className="titreDate">
  <h2>Formation Dev</h2>
  <h6>25-03-2022</h6>
</div>

<p>Lorem ipsum dolor sit amet, consetetur
sadipscing elitr, sed diam nonumy eirmod
tempor invidunt ut labore et dolore magna uyam
erat, sed diam voluptua. At vero eos et accusam
et justo duo dolores et ea rebum. Stet clita kasd
gubergren, no sea takimata sanctus est Lorem
ipsum dolor sit amet. Lorem ipsum dolor sit</p>

<div className="botPart">

<button>Plus</button>

<div className="botRight">
  12
  <StarBorderIcon className='botIconOne'/>
<ShareIcon className='botIconTwo'/>
  
</div>

</div>




</div>

</div>

<div className="non">

<div className="boxbox non">

<div className="titreBox">Non Classé</div>
<div className="titreDate">
  <h2>Formation Dev</h2>
  <h6>25-03-2022</h6>
</div>

<p>Lorem ipsum dolor sit amet, consetetur
sadipscing elitr, sed diam nonumy eirmod
tempor invidunt ut labore et dolore magna uyam
erat, sed diam voluptua. At vero eos et accusam
et justo duo dolores et ea rebum. Stet clita kasd
gubergren, no sea takimata sanctus est Lorem
ipsum dolor sit amet. Lorem ipsum dolor sit</p>

<div className="botPart">

<button>Plus</button>

<div className="botRight">
  12
<StarBorderIcon className='botIconOne'/>
<ShareIcon className='botIconTwo'/>
  
</div>

</div>




</div>

<div className="boxbox non">

<div className="titreBox">Non Classé</div>
<div className="titreDate">
  <h2>Formation Dev</h2>
  <h6>25-03-2022</h6>
</div>

<p>Lorem ipsum dolor sit amet, consetetur
sadipscing elitr, sed diam nonumy eirmod
tempor invidunt ut labore et dolore magna uyam
erat, sed diam voluptua. At vero eos et accusam
et justo duo dolores et ea rebum. Stet clita kasd
gubergren, no sea takimata sanctus est Lorem
ipsum dolor sit amet. Lorem ipsum dolor sit</p>

<div className="botPart">

<button>Plus</button>

<div className="botRight">
  12
<StarIcon className='botIconOne'/>
<ShareIcon className='botIconTwo'/>
  
</div>

</div>




</div>

</div>



</div>




<Footer/>


    </div>
  )
}

export default Actualites