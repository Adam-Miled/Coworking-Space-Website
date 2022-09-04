import React from 'react' ; 
import Sidebar from "../../Components/Sidebar/Sidebar" ; 
import Navbar from '../../Components/Navbar/Navbar'; 
import "./New.scss" ;
import DriveFolderUploadIcon from '@mui/icons-material/DriveFolderUpload';
import { useState } from 'react';
import { addDoc , collection, doc, serverTimestamp, setDoc, Timestamp } from "firebase/firestore";
import {db} from '../../Data/Firebase'
const New = ({inputs , titre}) => {

const [file , setFile] = useState("") ; 
 
const handleAdd = async(e) => {

e.preventDefault() 
const res = await addDoc(collection(db, "cities"), {
  name: "Los Angeles",
  state: "CA",
  country: "USA" ,
  timeStamp : serverTimestamp()  
});

console.log(res.id);

}




  return (
    <div className='new'>
      
<Sidebar/>


<div className="newContainer">

<Navbar/>

<div className="top">
  
<h1>{titre}</h1>


</div>
<div className="bottom"> 

<div className="left">

<img src={file ? URL.createObjectURL(file) : "https://cdn.dribbble.com/users/1820876/screenshots/4888603/preview.png?compress=1&resize=400x300"} alt="" />

<div className="texty">Un aperçu sera affiché ici</div>

</div>
<div className="right">
  
<form onSubmit={handleAdd}>

<div className="formInput">

<label htmlFor='file'>
  Selectionner une image
  <DriveFolderUploadIcon className='icon'/></label>
<input type="file" id='file'  onChange={e=>setFile(e.target.files[0])}  style={{display:"none"}} />

</div>


{inputs.map((input) => (

<div className="formInput" key={input.id}>

<label>{input.label}</label>
<input type={input.type} placeholder={input.placeholder}/>

</div>


)
)


}










<button type="submit"  >Confirmer</button>


</form>


</div>

</div>


</div>







    </div>
  )
}

export default New