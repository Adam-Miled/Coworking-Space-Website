import React, { useEffect } from 'react' ; 
import Sidebar from "../../Components/Sidebar/Sidebar" ; 
import Navbar from '../../Components/Navbar/Navbar'; 
import "./New.scss" ;
import DriveFolderUploadIcon from '@mui/icons-material/DriveFolderUpload';
import { useState } from 'react';
import { addDoc , collection, doc, serverTimestamp, setDoc, Timestamp } from "firebase/firestore";
import {auth , storage , db} from '../../Data/Firebase'
import { createUserWithEmailAndPassword } from "firebase/auth";
import {  ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";


const New = ({inputs , titre}) => {

const [file , setFile] = useState("") ; 
const [data, setData] = useState({}) ; 
const [per, setPer] = useState(null);

useEffect(() =>{

  const uploadFile = () => 
  { 
    const name = new Date().getTime() + file.name ; 
    const storageRef = ref(storage, name);

    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on('state_changed', 
      (snapshot) => {
 
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log('Upload is ' + progress + '% done');
        setPer(progress);
        switch (snapshot.state) {
          case 'paused':
            console.log('Upload is paused');
            break;
          case 'running':
            console.log('Upload is running');
            break;
        }
      }, 
      (error) => {
        console.log(error);
      }, 
      () => {
        
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setData((prev)=>({...prev, image:downloadURL}))
        });
      }
    );




  } ; 
   file && uploadFile();
},[file]) ;


console.log(data);

const handleInput = (e) =>  {

  const id = e.target.id ;
  const value = e.target.value ; 

  setData({...data, [id]:value}) ; 

};





 
const handleAdd = async(e) => {

e.preventDefault() 
try {
  const res = await createUserWithEmailAndPassword (auth, data.useremail, data.userphone); 

await setDoc(doc(db, "clients", res.user.uid ), {
  ...data,
  timeStamp : serverTimestamp()  ,
});
}
catch (err) {console.log(err)}


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
<input 
id={input.id}
type={input.type} placeholder={input.placeholder} onChange={handleInput} />

</div>


)
)


}










<button disabled={per !==null && per<100  } type="submit"  >Confirmer</button>


</form>


</div>

</div>


</div>







    </div>
  )
}

export default New