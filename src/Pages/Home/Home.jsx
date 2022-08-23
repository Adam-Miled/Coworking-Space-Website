import React from 'react'
import Sidebar from '../../Components/Sidebar/Sidebar'
import '../Home/Home.scss'
import Navbar from '../../Components/Navbar/Navbar'
import Widget from '../../Components/Widget/Widget'
import Featured from '../../Components/Featured/Featured'
import Chart from '../../Components/Chart/Chart'
import Table from '../../Components/Table/Table'

const Home = () => {
  return (
    <div className='home'>
      <Sidebar/>

<div className="homecontainer">
  <Navbar/>

<div className="widgets">


<Widget type="user"/>
<Widget type="sub"/>
<Widget type="earning"/>
<Widget type="balance"/>

</div>

<div className="charts">
<Featured/>
<Chart aspect={7/2} title="Derniers 6 Mois (Gains)"/>

</div>

<div className="listContainer">

<div className="listTitle">Derniers Abonnements</div>

<Table/>

</div>


</div>

    </div>
  )
}

export default Home