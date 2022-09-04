import React from 'react'
import Banner from '../../Components/Banner/Banner'
import VitrineNavbar from '../../Components/VNavbar/VitrineNavbar'
import "./Apropos.scss"
import logoap from "../../Assets/Logos/apollon.png"
import logofd from "../../Assets/Logos/fond.png"
import PlayCircleFilledWhiteIcon from '@mui/icons-material/PlayCircleFilledWhite';
import gro from "../../Assets/Content/Gro.png"
import Footer from "../../Components/Footer/Footer"
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import FlagIcon from '@mui/icons-material/Flag';
import GroupsIcon from '@mui/icons-material/Groups';
import image from "../../Assets/Content/ideal.png"
import guy from "../../Assets/Content/guy.png"
import anna from "../../Assets/Logos/anna.png"
import jam from "../../Assets/Logos/jam.png"
import apollon from "../../Assets/Logos/apollon.png"
import fond from "../../Assets/Logos/fond.png"
import Faq from '../../Components/Faq/Faq'
import fa from "../../Assets/Content/fa.png"
import { useNavigate } from 'react-router-dom'


const Apropos = () => {

  const navigate = useNavigate();


  const handleCli = () => {
    navigate('/signup');
    window.scrollTo(0, 0);

  };

  return (
    <div className='apropos'>
        <VitrineNavbar/>
<Banner className="custom" titre="A propos"/>

<div className="desc">
<div className="left">
<h1>Un espace culturel,</h1>
<h2>pas comme les autres!</h2>

<p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
diam nonumy eirmod tempor invidunt ut labore et dolore
magna aliquyam erat, sed diam voluptua. At vero eos et
accusam et justo duo dolores et ea rebum. Stet clita kasd
gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
sed diam nonumy eirmod tempor invidunt ut labore et dolore
magna aliquyam erat, sed diam voluptua. </p>

<div className="imgs">
<a href="https://www.apollon.org.tn/" target="_blank">
<img className='apo' src={logoap} alt="Logo Association Apollon" />
</a>
<a href="https://www.fondationdefrance.org/" target="_blank">
<img src={logofd} alt="Logo Fondation de France" />
</a>


</div>

<a href="https://www.youtube.com/watch?v=dQsyfYGxGMk" target="_blank" >
<div className="vid">

<PlayCircleFilledWhiteIcon className='ico'/>
<h3>Regarder La video</h3>

</div>
</a>

</div>

<img className="right" src={gro} alt="Festival de l'arts des rues" />

</div>




<div className="pan">
<h1>Nous visons le développement et le bien-être</h1>


<div className="con">

<img src={image} alt="goals" />

<div className="sideText">

<div className="ligne top">
<div className="wrap">
<EmojiEventsIcon className='icone '/>
<h6>Lorem Ipsum dolor</h6>
</div>
<p>
Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam 
nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam 
erat, sed diam voluptua. At vero eos et accusam et justo duo 
</p>
</div>


<div className="ligne mid">
<div className="wrap">
<GroupsIcon className='icone '/>
<h6>Lorem Ipsum dolor</h6>
</div>
<p>
Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam 
nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam 
erat, sed diam voluptua. At vero eos et accusam et justo duo 
</p>
</div>

<div className="ligne bot">
<div className="wrap">
<FlagIcon className='icone '/>
<h6>Lorem Ipsum dolor</h6>
</div>
<p>
Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam 
nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam 
erat, sed diam voluptua. At vero eos et accusam et justo duo 
</p>
</div>


</div>

</div>

<h2>Nous visons le développement et le bien-être</h2>


</div>

<div className="quest">

<Faq/>

<div className="illus">

<h1>FAQs</h1>
<h2>Quelque chose de pas clair?</h2>
<h2>Peut-être que notre foire aux questions pourrait vous aider.</h2>

<img src={fa} alt="woman asking questions" />


</div>


</div>





<div className="lien">

<h1>Liens Utiles</h1>

<div className="wrapper">
  
<a href="https://www.apollon.org.tn/" target="_blank" >

<div className="logoLien">

<img src={apollon} alt="Association Apollon " />

<h4>Association Apollon </h4>

</div>
</a>





<a href="https://jamaity.org/association/association-apollon-pour-la-culture-et-les-arts/" target="_blank" >
<div className="logoLien">

<img src={jam} alt="Jamaity" />


<h4>Résumé Apollon - Jamaity</h4>

</div>
</a>


<a href="https://yellow.place/en/association-apollon-%D8%AC%D9%85%D9%80%D8%B9%D9%8A%D9%80%D8%A9-%D8%A3%D8%A8%D9%80%D9%88%D9%84%D9%80%D9%88%D9%86-ksar-hellal-tunisia" target="_blank" >

<div className="logoLien">

<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAkFBMVEX/zwAAAAD/2QD/0wD/0QCriwD/0gDcswCjhQD/1wD/1QBnVAD2yACYfAD8zQAUEQCdgAA/MwDvwgB5YwDhtgAYFAA1KwAkHQDRqgBIOwAxKADqvgBsWADHogDXrwBWRgC6lwAODABQQQCQdgCJcAA7MQBfTgAeGQCBagDIogAiHACykQApIgB9ZgC/nABJOwD/MpU7AAADqElEQVR4nO2da1fiMBBAGxoK1KKCFVHwwUPU9fX//92urqt00lZTds+k7r0fy5j0Ms2jE84xigAAAAAAAAAAAAAAAAAAvkonbP6CoAmb3RUx1AZDDDHUB0MMMdQHQwwx1AdDDDHUB0MMMdQHQwwx1AdDDDHUB0MMMdQHQwwx1AdDDDEsY9N1uK6LPzuU4fdHYRuOxqmgc1gXv0pkfLQXtqEZDkQbdr8m+mGaiPD0aRG4ocmsaGSwqg4+cr6P8aVHXzqG61TedH5cGdyTX0d85dOXjuGkJx48u39bFXstUxh1TsI3NOt9kZh4WnXb7ijse3WlZHjgJLFqetyMxXdhZ6dtMDRz2XF8Xh7YlSmMu349qe1pZBKjzllZ2NJJYV4aF6DhPJIjsXSGPJSzbjr07EjN8OYuLrZjZ6OSMDkj2ci3I72d91wu+2UDbCWXirhyVQnP0JzLJOZOEo9z8S0kvUmLDEey79TJz618SCPfUaj7fnglZhGbiYCTqUhzcuHfi6bhpRyJg3kxYE/Ot515eUuhGjpJTKbFz+VITWYNOlE1PJ0Vc2Szwrv7RNyctR4vvmEYmq5IYlx4tb0SKYzPb1pnuJBZypYfH47qM9wOQzMUSUy3tm5dJ4WNulA2lHmK4sX7R3K1H5Tt6oI3NH3xipG+V91u5Ri9a9aDtuEPkSk7+7Mty+QofG6noVnLvfXbvmwurif3DTtQN5TvR8n04fXyRfHx9asghmV4JKbMweua8Cge0tSzdhGS4ZnMVu/XxYOnoreNFu01NCvxnL6sCkt5za+CGJihrIi+7L+fikuFzWsPp4I33BRvwo43Rtafas+mwjc0uUhivy9SOPOsIAZnuBFvurGcXh93aDwIw2MxcwrseJfGgzB0K4sFBuv2G5q6JCaVx1JtMpw4h4Tv1BwttslQLoBbJPluLYdi+Fw5EgfLz/+6DYbuOeEbTYrABYIxdA4Kf2OTBkXgAsEYmn7pSEy8fndRRjiGzlHhCzZrUgQuEJBhv2TFaFhB3CYgw0nuTDY2Pti52YAMzdBpO915FIZl+CBrwDZrWn7aIiRD5xdsvj+dKSVsw+bVmQ8wxBBDLzBsBIYYYugFho3AEEMMvcCwERhiiKEXGDYCQwwx9OL7G87kf8H5djXvfwKGGGKoD4YYYqgPhhhiqA+GGGKoD4YYYqgPhhhiqA+GGGKoD4YYYqgPhhhiqA+GGGKoD4ZfUQyb3QUBAAAAAAAAAAAAAAAA4L/hJzmBe3VVx1CPAAAAAElFTkSuQmCC" alt="Association Apollon " />

<h4>Résumé Apollon - Yellow Place</h4>

</div>
</a>


<a href="https://www.annalindhfoundation.org/members/association-apollon-pour-la-culture-et-les-arts" target="_blank" >
<div className="logoLien">

<img src={anna} alt="Anna Lindh Foundation" />

<h4> Résumé Apollon -  Reseau Anna Lindh </h4>

</div>
</a>







<a href="https://www.cha9a9a.tn/association/Apollon" target="_blank" >

<div className="logoLien">

<img src="http://www.disruptunisia.com/img/incubateurs/5bbb326a13f2blogo_700x720.png" alt="Association Apollon " />

<h4>Compte Cha9a9a </h4>

</div>
</a>



<a href="https://www.fondationdefrance.org/" target="_blank" >
<div className="logoLien">

<img src={fond} alt="Fondation de France" />

<h4>Fondation de France </h4>

</div>
</a>



</div>





</div>



<div className="callToAction">

<img src={guy} alt="guy painting" />

<div className="action">

<h2>Qu'est-ce que vous attendez ?
</h2>

<h6>rejoignez-nous maintenant et commencez à élargir votre reseau
et à améliorer vos compétences.</h6>

<button onClick={handleCli}>Inscrivez-vous</button>

</div>



</div>



<Footer/>

    </div>
  )
}

export default Apropos