import React from 'react'
import "./Chart.scss"
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';


const data = [
 {name: "Janvier" , Total: 60} ,
 {name: "Fevrier" , Total: 100} ,
 {name: "Mars" , Total: 200} ,
  {name: "Avril" , Total: 200} ,
  {name: "May" , Total: 300} ,
  {name: "Juin" , Total: 20} ,

];


const Chart = ({aspect, title}) => {
  return (
    <div className='chart'>

<div className="title">{title}</div>

      <ResponsiveContainer width="100%" aspect={aspect} >
      <AreaChart width={730} height={250} data={data}
  margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
  <defs>
    <linearGradient id="total" x1="0" y1="0" x2="0" y2="1">
      <stop offset="5%" stopColor="#1c1c30" stopOpacity={0.8}/>
      <stop offset="95%" stopColor="#1c1c30" stopOpacity={0}/>
    </linearGradient>
  
  </defs>
  <XAxis dataKey="name" stroke='#1c1c30' />
  <YAxis />
  <CartesianGrid strokeDasharray="3 3"  className='chartGrid'/>
  <Tooltip />
  <Area type="monotone" dataKey="Total" stroke="#1c1c30" 
  fillOpacity={1} fill="url(#total)" />
 </AreaChart>
      </ResponsiveContainer>
    </div>
  )
}

export default Chart