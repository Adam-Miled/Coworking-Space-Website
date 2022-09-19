import React from 'react'
import Footer from '../../Components/Footer/Footer'
import VitrineNavbar from '../../Components/VNavbar/VitrineNavbar'
import './Vitrine.scss'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import GroupsIcon from '@mui/icons-material/Groups';
import image from "../../Assets/Content/Groupa.png"
import apollon from "../../Assets/Logos/apollon.png"
import fdf from "../../Assets/Logos/fond.png"
import prod from "../../Assets/Logos/prodart.png"
import Caro from '../../Components/Caro/Caro';
import {Routes, Route, useNavigate} from 'react-router-dom';

const Vitrine = () => {

  const navigate = useNavigate();


  const navigateProps = () => {
   
    navigate('/about');
    window.scrollTo(0, 0);
  };

  const ActHandler = () => {
   
    navigate('/actualites');
    window.scrollTo(0, 500);
  };

  const OfrHandler = () => {
   
    navigate('/actualites');
    window.scrollTo(0, 500);
  };

const FlowPackCom = () => {
  navigate('/packs');

  window.scrollTo(0, 400);

};


const FlowPackGrp = () => {
  navigate('/packs');

  window.scrollTo(0, 1350);

};

const FlowPackEnt = () => {
  navigate('/packs');

  window.scrollTo(0, 2430);

};


  return (
    <div className='vitrine'>




<div className="bg">
<VitrineNavbar titre={'home'}/>

<div className="sideMsg">

<h4>Local Tha9afi</h4>

<p>MLomv sit amet, consetetur sadipscing elitr, sed diam nonumy
eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed
diamvoluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet</p>


<div className="icones">
<a href="https://www.facebook.com/ApollonAssociation" target="_blank">
<FacebookIcon className='sns'/>
</a>

<a href="https://www.instagram.com/apollonassociation/" target="_blank">
<LinkedInIcon className='sns'/>
</a>


 <a href="https://www.instagram.com/apollonassociation/" target="_blank">
<InstagramIcon className='sns'/>
</a>




 <a href="https://www.youtube.com/c/ApollonAssociation" target="_blank">
<YouTubeIcon className='snsp'/>
</a>

</div>



</div>

<div className="botMsg">

<div className="bloc">
<div className="titre">

<GroupsIcon className="icone"/>

<h3>Networking</h3>

</div>



<p>Lorem ipsum dolor sit amet, consetetur 
sadipscing elitr, sed diam nonumy eirmod 
tempor invidunt ut labore et dolore magna 
aliquyam erat, sed diam voluptua. At vero eos 
et accusam et justo duo dolores et ea rebum. </p>


</div>

<div className="bloc">
<div className="titre">

<GroupsIcon className="icone"/>

<h3>Networking</h3>

</div>



<p>Lorem ipsum dolor sit amet, consetetur 
sadipscing elitr, sed diam nonumy eirmod 
tempor invidunt ut labore et dolore magna 
aliquyam erat, sed diam voluptua. At vero eos 
et accusam et justo duo dolores et ea rebum. </p>


</div>
<div className="bloc">
<div className="titre">

<GroupsIcon className="icone"/>

<h3>Networking</h3>

</div>



<p>Lorem ipsum dolor sit amet, consetetur 
sadipscing elitr, sed diam nonumy eirmod 
tempor invidunt ut labore et dolore magna 
aliquyam erat, sed diam voluptua. At vero eos 
et accusam et justo duo dolores et ea rebum. </p>


</div>

</div>



</div>


<h1 className='toppest'>Un espace de travail qui vous convient
</h1>

<div className="second">


<div className="pq">

<div className="leftText">

<div className="titr">
  
</div>

<p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita
kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. 
Lorem ipsum dolor sit amet </p>
<p> consetetur sadipscing elitr, sed diam nonumy
eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita
kasd gubergren, no sea takimata sanctus est
</p> <p>Lorem ipsum dolor sit amet.
Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy 
eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita
</p>

<a href="coming">
<button>Réserver votre place !</button>
</a>


</div>

<div className="rightImg">

<img className="sideImg" src={image} alt="work" />



</div>

  
</div>

</div>


<h2>Découvrez ce que nous offrons
</h2>


<div className="offres">

<div className="espace">

<h3>Espace Commun</h3>

<p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, 
sed diam nonumy eirmod tempor invidunt ut labore et 
dolore magna aliquyam erat, sed diam voluptua. At 
vero eos et accusam et justo duo dolores et ea rebum.</p>

<button onClick={FlowPackCom} > Decouvrir</button>



</div>

<div className="espace">

<h3>Espace Groupe</h3>

<p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, 
sed diam nonumy eirmod tempor invidunt ut labore et 
dolore magna aliquyam erat, sed diam voluptua. At 
vero eos et accusam et justo duo dolores et ea rebum.</p>

<button onClick={FlowPackGrp}  >Decouvrir</button>


</div>

<div className="espace">

<h3>Espace Entrepreneur</h3>

<p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, 
sed diam nonumy eirmod tempor invidunt ut labore et 
dolore magna aliquyam erat, sed diam voluptua. At 
vero eos et accusam et justo duo dolores et ea rebum.</p>


<button onClick={FlowPackEnt}>Decouvrir</button>



</div>



</div>


<h2>Des prix ideals seulement pour vous
</h2>


<Caro titre="vitrine" />

<h2>Découvrir qu'est ce qu'il y a de nouveau</h2>


<div className="info">

<div className="actual">
<h6 className='bloctitle'>Actualités </h6>
<div className="dsp">
<h6>Festival Street Arts 2022</h6>
<p>Join Us now !</p>
<button className='rR'>Explorer</button>

</div>
<div className="dsp">
<h6>Festival Street Arts 2022</h6>
<p>Join Us now !</p>
<button className='rR'>Explorer</button>

</div>
 
<button className='low'onClick={ActHandler} >Plus d'actualités</button>

</div>

<div className="off">

<h6 className='bloctitle'>Offres </h6>

<div className="dsp">
<h6>Festival Street Arts 2022</h6>
<p>Join Us now !</p>
<button className='rB'>Explorer</button>

</div>

<div className="dsp">
<h6>Festival Street Arts 2022</h6>
<p>Join Us now !</p>
<button className='rB'>Explorer </button>

</div>

<button className='low' onClick={OfrHandler}>Plus d'offres</button>
</div>

</div>



<h2>Un espace culturel pas comme les autres! </h2>

<div className="prodart">

<h6 className='prodTitle'>Projet "ProdArt"</h6>

<div className="texte">

<p>
Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing
elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos
et accusam et justo duo dolores et ea rebum. et. Lorem ipsum dolor sit amet, consetetur sadipscing
elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos
et accusam et justo duo dolores et ea re oklo bum dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor
plom.

</p>

<button onClick={navigateProps}>Lire plus</button>

</div>


<div className="logoBloc">
  
  <a href="https://www.apollon.org.tn/ " target="_blank" >

<img src={apollon} alt="Logo Apollon" />
</a>

<a href="https://www.facebook.com/ApollonAssociation/photos/5162626710473766" target="_blank" >
<img className="spec" src={prod} alt="Annoncement ProdART" />
</a>
<a href="https://www.fondationdefrance.org/" target="_blank" >
<img className='logo' src={fdf} alt="Logo Fondation de France"  />
</a>
</div>


</div>





<Footer/>

    </div>
  )
}

export default Vitrine