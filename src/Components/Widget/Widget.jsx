import React from 'react'
import "./Widget.scss"
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import GroupIcon from '@mui/icons-material/Group';
import BookIcon from '@mui/icons-material/Book';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import BalanceIcon from '@mui/icons-material/Balance';

const Widget = ( {type}) => {

let data;

const amount = 150 ;
const diff = 20 ;


switch(type) {
case "user" : 
data={
    title: "UTILISATEURS" ,
    isMoney: false,
    link:"Voir tous les utilisateurs" ,
    icon: <GroupIcon className='icon' style={{color:"#1c1c30" , 
    backgroundColor : "#f7cb8f"}} />,


} ; 
break ;

case "sub" : 
data={
    title: "ABONNEMENTS" ,
    isMoney: false,
    link:"Voir tous les abonnements" ,
    icon: <BookIcon className='icon' style={{color:"#1c1c30" , 
    backgroundColor : "#f7cb8f"}}  />,

} ; 
break ;

case "earning" : 
data={
    title: "REVENUS" ,
    isMoney: true,
    link:"Voir Plus" ,
    icon: <CurrencyExchangeIcon className='icon' style={{color:"#1c1c30" , 
    backgroundColor : "#f7cb8f"}} />,

} ; 
break ;

case "balance" : 
data={
    title: "SOLDE" ,
    isMoney: true,
    link:"Voir Details" ,
    icon: <BalanceIcon className='icon' style={{color:"#1c1c30" , 
    backgroundColor : "#f7cb8f"}} />,

} ; 
break ;

default :
 break ; 

}



  return (
    <div className='widget'>
        

<div className="left">
<span className="title">{data.title}</span>
<span className="counter">{data.isMoney && "$"} {amount}</span>
<span className="link">{data.link}</span>

</div>

<div className="right">
<div className="pourcentage positive">
<ArrowDropUpIcon />
    {diff}
</div>
{data.icon}


</div>


    </div>
  )
}

export default Widget