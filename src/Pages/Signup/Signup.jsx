import React, { useState } from 'react'
import './Signup.scss'
import log from "../../Assets/log.png"
import KeyboardIcon from '@mui/icons-material/Keyboard';
import { Link } from "react-router-dom"
import {createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../../Data/Firebase.config"
import { useNavigate } from 'react-router-dom';



const Signup = () => {

  const [error, setError] = useState(false) ; 
  const [email, setEmail] = useState("") ; 
const [password, setPassword] = useState("") ; 
const [copassword, setCoPassword] = useState("") ; 

const navigate =useNavigate()

  const handleLogin = (e) => {

    e.preventDefault() ; 
    
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        
        // ...
      })
      .catch((error) => {
       setError(true) ;
      });
    
    }


  return (
    <div className='signup'>
        

        <div className="nav">

<div className="left">
  <Link to="/" style={{textDecoration: "none"}}>
<img src={log} alt="" />
</Link>
</div>


<div className="ln">

</div>


<div className="right">

<KeyboardIcon className='icon'/>
<h1>Inscription</h1>


</div>

</div>

<div className="rest">

<form onSubmit={handleLogin}>


<h1 className='bien'> Rejoignez-nous! </h1>

<input type="text" placeholder='  Nom et Prénom' />


<input type="email" placeholder='  Email' onChange={e=>setEmail(e.target.value)} />

<input type="number" placeholder='  Num Télephone'  />

<input type="text" placeholder='  Adresse' />

<input className='hint'type="password" placeholder='  Mot de Passe' onChange={e=>setPassword(e.target.value)}/>

<input type="password" placeholder=' Confirmer votre Mot de Passe'  onChange={e=>setCoPassword(e.target.value)}/>



<button type='submit'>S'inscrire</button>

<div className="botTxt">
<h5>Vous avez déjà un compte ? </h5> 


<Link to="/login" style={{textDecoration: "none"}}>
<h4>S'identifier</h4>
</Link>
</div>

{error && <span>Impossible de créer votre compte. Veuillez vérifier vos informations</span>}
</form>


</div>


    </div>
  )
}

export default Signup