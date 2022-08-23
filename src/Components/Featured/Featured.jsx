import React from 'react'
import "./Featured.scss"
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { CircularProgressbar } from 'react-circular-progressbar';
import "react-circular-progressbar/dist/styles.css"
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';



const Featured = () => {
  return (
    <div className='featured'>
      
<div className="top">
<h1 className='title'>Gain Total</h1>
<MoreVertIcon fontSize='small'/>

</div>
<div className="bottom">

<div className="featuredChart">
<CircularProgressbar value={70} text="70%"  strokeWidth={5} />

</div>

<p className='title'>Total des abonnements d'aujourd'hui</p>
<p className='amount'>15</p>
<p className='desc'>En cours d'éxecution, veuillez patientez.</p>


<div className="summary">
<div className="item"> 
<div className="itemTitel">Target</div>
<div className="itemResult positive">
  <ArrowDropUpIcon fontSize='small' />
<div className="resultAmount">100TND</div>


</div>
</div>

<div className="item"> 
<div className="itemTitel">Target</div>
<div className="itemResult negative ">
  <ArrowDropDownIcon fontSize='small' />
<div className="resultAmount">100TND</div>


</div>
</div>


<div className="item"> 
<div className="itemTitel">Target</div>
<div className="itemResult positive">
  <ArrowDropUpIcon fontSize='small' />
<div className="resultAmount">100TND</div>


</div>
</div>



</div>






</div>

    </div>
  )
}

export default Featured