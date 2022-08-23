import React from 'react'
import Sidebar from '../../Components/Sidebar/Sidebar'
import "../Single/Single.scss"
import Navbar from '../../Components/Navbar/Navbar'
import Chart from '../../Components/Chart/Chart'
import List from "../../Components/Table/Table"

const Single = () => {
  return (
    <div className='single'>
      <Sidebar/>

      <div className="singleContainer">

<Navbar/>
<div className="top">
<div className="left">

<div className="editButton">Modifier</div>


<h1 className="title">Informations Génerales</h1>
<div className="item">
<div className="pres">

<img src="https://img.freepik.com/free-vector/cute-happy-cat-laying-cartoon-vector-icon-illustration-animal-nature-icon-concept-isolated-premium-vector-flat-cartoon-style_138676-3738.jpg?w=2000" alt="" className="itemImg" />

<h1 className='itemTitle'>Cute Kitty</h1>
</div>

<div className="details">
<div className="detailItem">
<span className="itemKey">Adresse Email:</span>
<span className="itemValue">CuteKitty123@gmail.com</span>
</div>
<div className="detailItem">
<span className="itemKey">Num Telephone:</span>
<span className="itemValue">+216 52 302 625</span>
</div>
<div className="detailItem">
<span className="itemKey">Adresse:</span>
<span className="itemValue">Rue des Chats, Meowville </span>
</div>
<div className="detailItem">
<span className="itemKey">Country:</span>
<span className="itemValue">CatNation</span>

</div>




</div>
</div>


</div>

<div className="right">
<Chart aspect={7/2} title="Historique d'utilisateur" />
</div>

</div>


<div className="bottom">
<h1 className="title">Voir Aussi</h1>
<List/>

</div>

      </div>




    </div>
  )
}

export default Single