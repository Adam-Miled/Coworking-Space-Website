import React, { useContext, useState } from 'react'
import './Login.scss'
import {signInWithEmailAndPassword } from "firebase/auth";
import {auth} from "../../Data/Firebase"
import { useNavigate } from 'react-router-dom';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import log from "../../Assets/log.png"
import { Link } from "react-router-dom"
import {AuthContext} from '../../Context/AuthContext'




const Login = () => {

const [error, setError] = useState(false) ; 
const [email, setEmail] = useState("") ; 
const [password, setPassword] = useState("") ; 


const navigate =useNavigate()


const {dispatch} = useContext(AuthContext)


const handleLogin = (e) => {

e.preventDefault() ; 

signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    dispatch({type:"LOGIN" , payload:user})
    navigate("/home")
    // ...
  })
  .catch((error) => {
   setError(true) ;
  });

}


  return (
    <div className='login'>

<div className="nav">

<div className="left">
<Link to="/" style={{textDecoration: "none"}}>
<img src={log} alt="logo" />
</Link>
</div>

<div className="ln">

</div>


<div className="right">

<VpnKeyIcon className='icon'/>
<h1>Connexion</h1>


</div>

</div>

<div className="rest">



     <form onSubmit={handleLogin}>


     <h1 className='bien'> Bienvenue </h1>

<input type="email" placeholder='  Entrer votre Email' onChange={e=>setEmail(e.target.value)}/>

<input type="password" placeholder='  Entrer votre Mot de Passe' onChange={e=>setPassword(e.target.value)}/>

<div className="txt">
<h5>Mot de passe oublié?</h5>

</div>


<button type='submit'>Se Connecter</button>

<div className="botTxt">
<h5>Vous n'avez pas de compte ? </h5> 

<Link to="/signup" style={{textDecoration: "none"}}>
<h4>Créer un</h4>
</Link>
</div>



{error && <span>Impossible de se connecter. Veuillez vérifier vos informations</span>}

     </form>

     </div>


    </div>






  )
}

export default Login