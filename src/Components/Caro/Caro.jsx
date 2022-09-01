import React from 'react'
import "./Caro.scss"


const Caro = ({titre}) => {
  return (
 
<div className={"serve " + titre } >


<div className="etudiant">

<h1>Les packs ETUDIANT</h1>
<div className="rowing">


<div className="caro">

<h5>Individuel / 7jours
</h5>
<h6>7.0 Dinar
</h6>

<h4>- Une salle</h4>
<h4>- Acces internet </h4>

</div>
<div className="caro">

<h5>Groupe / 7jours

</h5>
<h6>5.0 Dinar/Per
</h6>

<h4>- Une salle</h4>
<h4>- Acces internet </h4>

</div>


</div>

<div className="rowing">


<div className="caro">

<h5>Individuel / 1mois
</h5>
<h6>21.0 Dinar
</h6>

<h4>- Une salle</h4>
<h4>- Acces internet </h4>

</div>
<div className="caro">

<h5>Groupe / 1mois
</h5>
<h6>18.0 Dinar/Per
</h6>

<h4>- Une salle</h4>
<h4>- Acces internet </h4>

</div>


</div>
<div className="rowing">


<div className="caro">

<h5>Individuel / 3mois
</h5>
<h6>57.0 Dinar
</h6>

<h4>- Une salle</h4>
<h4>- Acces internet </h4>
<h4>- Access imprimerie</h4>

</div>

<div className="caro">

<h5>Groupe / 3mois
</h5>
<h6>52.0 Dinar/Per
</h6>

<h4>- Une salle</h4>
<h4>- Acces internet </h4>
<h4>- Access imprimerie</h4>

</div>

</div>

</div>


<div className="ln">

</div>

<div className="entreprise">
<h1>Les packs ENTREPRISES</h1>

<div className="rowing">


<div className="caro">

<h5>7 jours
</h5>
<h6>20.0 Dinar
</h6>

<h4>- Une salle</h4>
<h4>- Acces internet </h4>
<h4>- Access imprimerie</h4>

</div>


<div className="caro">

<h5>1 Mois
</h5>
<h6>70.0 Dinar
</h6>

<h4>- Une salle</h4>
<h4>- Acces internet </h4>
<h4>- Access imprimerie</h4>
<h4>- Zone libre</h4>

</div>


</div>

<div className="rowing">

<div className="carb">

<h5>3 Mois
</h5>
<h6>190.0 Dinar
</h6>

<h4>- Une salle</h4>
<h4>- Acces internet </h4>
<h4>- Access imprimerie</h4>
<h4>- Buffet de matin </h4>
</div>

<div className="caro">

<h5>3 Mois
</h5>
<h6>190.0 Dinar
</h6>

<h4>- Une salle</h4>
<h4>- Acces internet </h4>
<h4>- Access imprimerie</h4>

<h4>- Zone libre</h4>
<h4>- Buffet de matin </h4>
</div>

</div>



</div>


</div>
  )
}

export default Caro