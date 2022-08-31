import React from 'react'
import "./Banner.scss"
 

const Banner = ({titre}) => {
  return (


    <div className={'banner ' + titre }>
        
<div className="container">
    
<div className="ali">
<div className="titleB">
  
</div>
<div className="titleBox">
{titre}
</div>
</div>

<div className="col">

</div>

    </div>




    </div>
    
  )
}

export default Banner